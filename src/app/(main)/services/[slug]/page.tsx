import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { contentService, Content } from '@/app/services/contentService';
import React from "react";

interface Props {
    params: Promise<{
        slug: string
    }>
}

async function getContent(slug: string): Promise<Content | null> {
    try {
        const contentData = await contentService.getContentBySlug(slug);
        return contentData;
    } catch (error) {
        console.error('Error fetching location:', error);
        return null;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // First, await the params object
    const resolvedParams = await params;

    console.log(resolvedParams['slug']);

    
    const content = await getContent(resolvedParams['slug']);

    if (!content) {
        return {
            title: 'Location Not Found',
            description: 'The requested location could not be found.'
        };
    }

    return {
        title: `Find Emergency Dental Care for ${content.name} | 24/7 Dental Care`,
        description: `Providing emergency dentist care for ${content.name}. Available 24/7, immediate appointments, all dental emergencies handled. Book now.`,
        openGraph: {
            title: `Emergency Dentist Treatment for ${content.name}`,
            description: `Find emergency dentistal treatment for ${content.name}. Book immediate appointments 24/7.`,
            type: 'website'
        }
    };
}


export default async function LocationPage({ params }: Props) {
    
    // First, await the params object
    const resolvedParams = await params;
    const content = await getContent(resolvedParams['slug']);

    if (!content) {
        notFound();
    }

    return (
        <>
            <div className="container pb-10">
                <h1 className="header-text">
                    Emergency dental care for {content.name}
                </h1>


                <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4">
                    <div className="w-full lg:w-1/2 bordered-box !p-0 mb-4 lg:mb-0">
                        <div
                            className="h-64 lg:h-full w-full rounded-3xl p-4 lg:p-10 bg-cover bg-center flex flex-col justify-between bg-[url('/dental-services.webp')]">
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-gray bordered-box" id="faqs">
                        {content.description && (
                            <div className="mt-4 text-gray-600 " dangerouslySetInnerHTML={{__html: content.description}}>
                            </div>
                        )}
                    </div>
                </div>
                
                
                <div className="my-20">
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                        <p className="text-gray-600">How it works banner component removed</p>
                    </div>
                </div>
                
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Content Links</h3>
                    <p className="text-gray-600">Content links component removed</p>
                </div>

            </div>


        </>
    );
}

export async function generateStaticParams() {
    try {
        const contents = await contentService.getAllContent();
        return contents.map((content: Content) => ({
            'slug': content.slug
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}