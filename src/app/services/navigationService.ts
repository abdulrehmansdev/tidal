import { contentService } from '@/app/services/contentService';

export interface NavItem {
    href: string;
    text: string;
    active?: boolean;
    submenu?: NavItem[];
    showHeader?: boolean;
}

// Base navigation without dynamic submenu items
export const BASE_NAVIGATION: NavItem[] = [
    {
        href: '/',
        text: 'Home',
        showHeader: false
    },
    {
        href: '/about-how-it-works',
        text: 'How it works',
        showHeader: true
    },
    {
        href: '/pricing',
        text: 'Pricing',
        showHeader: true
    },
    {
        href: '/locations',
        text: 'Locations',
        showHeader: false
    },
    {
        href: '/services',
        text: 'Services',
        showHeader: false,
        submenu: []
    },
];

export async function getNavigationWithServiceSubmenu(): Promise<NavItem[]> {
    try {
        // Create a deep copy of the base navigation
        const navigation = JSON.parse(JSON.stringify(BASE_NAVIGATION)) as NavItem[];

        // Find the services item
        const servicesItem = navigation.find(item => item.href === '/services');

        if (servicesItem) {
            // Fetch all content
            const allContent = await contentService.getAllContent();

            // Filter for service content
            // Adjust the filtering logic based on your content structure
            const serviceContent = allContent.slice(0, 10);
            
            //     .filter(content =>
            //     // You might need to adjust these conditions based on your data
            //     content.slug.startsWith('services/') 
            //     // content === 'service'
            // );

            // Map to NavItem format
            servicesItem.submenu = serviceContent.map(service => ({
                href: `/services/${service.slug.replace('services/', '')}`,
                text: service.name,
            }));
        }

        return navigation;
    } catch (error) {
        console.error('Error fetching dynamic navigation:', error);
        // Return base navigation as fallback
        return BASE_NAVIGATION;
    }
}