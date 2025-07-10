// app/components/HeaderWrapper.tsx
import { getNavigationWithServiceSubmenu } from '@/app/services/navigationService';
import ClientHeader from '@/app/components/Header/ClientHeader';

export default async function HeaderWrapper() {
    // Fetch the navigation data on the server
    const navigationData = await getNavigationWithServiceSubmenu();

    // Pass the pre-fetched navigation to the client component
    return <ClientHeader initialNavigation={navigationData} />;
}
