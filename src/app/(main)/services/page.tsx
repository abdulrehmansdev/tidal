import {Content, contentService} from "@/app/services/contentService";
import React from "react";


async function getContent(): Promise<Content[] | null> {
    try {
        return await contentService.getAllContent();
    } catch (error) {
        console.error('Error fetching content:', error);
        return null;
    }
}

export default async function ContentPage({}) {
    const contentItems = await getContent();

    return (
        <div className="container pb-10">
            <h1 className="header-text">How we can help</h1>
            <p className="mb-10">Our goal is to find you a dentist appointment at a time and place convenient to you. Our
                dental practices have a proven history of dealing with emergency dental appointments.</p>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Expert Treatment</h2>
                <p className="text-gray-600">Emergency dental treatment options component removed</p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <p className="text-gray-600">How it works banner component removed</p>
            </div>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Trust Builder</h2>
                <p className="text-gray-600">Trust builder component removed</p>
            </div>
            
            
        </div>
    );
}