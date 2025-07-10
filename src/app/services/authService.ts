

//todo : modify auth service so server side requests dont use localStorage?


import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from "jwt-decode";
import { Agent } from 'https';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const LAST_VISITED_PAGE_KEY = 'lastVisitedPage';

// Create a separate axios instance for auth operations
const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  ...(process.env.NODE_ENV === 'development' ? {
    httpsAgent: new Agent({
      rejectUnauthorized: false
    })
  } : {})
});


export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiration: string;
}

export interface UserDetails {
  email: string;
  name: string;
}

interface DecodedToken {
  exp: number;
}

export const authService = {
  
  async login(email: string, password: string): Promise<AuthTokens> {
    const { data } = await authAxios.post<AuthTokens>(
        `${API_URL}/auth/login`,
        { email: email, password: password },
        { headers: { 'Content-Type': 'application/json' } }
    );
    this.setTokens(data);
    return data;
  },

  setTokens(tokens: AuthTokens) {
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
    localStorage.setItem('expiration', tokens.expiration);
    Cookies.set('token', tokens.accessToken, { expires: new Date(tokens.expiration) });
  },

  async logout() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        await authAxios.post(`${API_URL}/auth/logout`,
            { refreshToken },
            { headers: this.getAuthHeader() }
        );
      } catch (error) {
        console.error('Error during logout:', error);
      }
    }
    this.clearTokens();
  },

  clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiration');
    Cookies.remove('token');
  },

  getAccessToken(): string | null {
    if (typeof window === 'undefined') {
      return null; // We're on the server side
    }
    return localStorage.getItem('accessToken');
  },
  
  getRefreshToken(): string | null {
    if (typeof window === 'undefined') {
      return null; // We're on the server side
    }
    return localStorage.getItem('refreshToken');
  },
  
  isLoggedIn(): boolean {
    const token = this.getAccessToken();
    return token ? this.getTokenExpiration(token) > Date.now() : false;
  },

  getAuthHeader() {
    const token = this.getAccessToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  },


  async getUserDetails(): Promise<UserDetails> {
    const token = this.getAccessToken();
    if (!token) {
      throw new Error('No token found');
    }

    try {
      const { data } = await authAxios.get<UserDetails>(
          `${API_URL}/admin/users/profile`,
          { headers: this.getAuthHeader() }
      );
      return data;
    } catch (error: unknown) {
      console.error('Error fetching user details:', error);
      throw new Error('Failed to fetch user details');
    }
  },

  shouldRefreshToken(): boolean {
    const token = this.getAccessToken();
    if (!token) return false;
    const tokenExpiration = this.getTokenExpiration(token);
    console.debug("token expiration: " + tokenExpiration + " time until expires: " + (tokenExpiration - Date.now()) + " threshold of: " + 5 * 60 * 1000);
    return tokenExpiration - Date.now() < 5 * 60 * 1000;
  },

  async refreshToken(): Promise<void> {
    const currentRefreshToken = this.getRefreshToken();
    const currentAccessToken = this.getAccessToken();

    if (!currentRefreshToken || !currentAccessToken) {
      this.clearTokens(); // Clean up any partial token state
      throw new Error('No refresh token available');
    }

    try {
      const { data } = await authAxios.post<AuthTokens>(
          `${API_URL}/auth/refresh-token`,
          { refreshToken: currentRefreshToken },
          {
            headers: {
              'Authorization': `Bearer ${currentAccessToken}`,
              'Content-Type': 'application/json'
            }
          }
      );
      this.setTokens(data);
    } catch (error) {
      this.clearTokens();
      throw error;
    }
  },

  getTokenExpiration(token: string): number {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      return decoded.exp * 1000;
    } catch (error) {
      return 0;
    }
  },

  getLastVisitedPage(): string {
    return Cookies.get(LAST_VISITED_PAGE_KEY) || '/';
  },

  clearLastVisitedPage(): void {
    Cookies.remove(LAST_VISITED_PAGE_KEY);
  },
};