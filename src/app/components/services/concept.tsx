import Image from "next/image";
import React from "react";

export default function Concept_Production_Delivery() {
    return (
        <div className="bg-[#f7f8fa] min-h-screen py-8 px-2 md:px-8 lg:px-16 flex flex-col items-center">
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row w-full gap-2 items-start">
                    <div className="flex-1 min-w-[260px] lg:max-w-[520px]">
                        <div className="space-y-2">
                            <div>
                                <span className="block text-4xl md:text-6xl font-extrabold text-[#22305a] leading-tight">Concept,</span>
                                <div className="w-40 h-1 bg-[#ff4b5c] mt-1 mb-2" />
                            </div>
                            <div>
                                <span className="block text-4xl md:text-6xl font-extrabold text-[#22305a] leading-tight">Production</span>
                                <div className="w-56 h-1 bg-[#ff4b5c] mt-1 mb-2" />
                            </div>
                            <div>
                                <span className="block text-4xl md:text-6xl font-extrabold text-[#22305a] leading-tight">& Delivery</span>
                                <div className="w-64 h-1 bg-[#ff4b5c] mt-1 mb-2" />
                            </div>
                        </div>
                    </div>
                    {/* Right: Paragraphs */}
                    <div className="flex-1 flex flex-col gap-6 text-[#22305a] text-base md:text-lg leading-relaxed max-w-6xl">
                        <p>We worked closely with the team at Capstone who had the expertise and knowledge of what would resonate well with their target audience. Building on their initial title for the campaign 'You could make a difference', we wrote a script, made a storyboard and pinpointed exactly what they wanted for the 30-second ad.</p>
                        <p>Filming took place over two days. On the first day, .....</p>
                        <p>Throughout production, we worked with Clearcast to ensure the project was approved for correct broadcast standards and that the final edit was cleared quickly upon delivery.</p>
                        <p>As well as the 30 second 16×9 TV commercial, we delivered 1 minute versions in a variety of</p>
                    </div>
                </div>
                <div className="mt-10 flex justify-center w-full">
                    <div
                        className="w-full rounded-2xl overflow-hidden shadow-md"
                        style={{ maxHeight: "70vh" }}
                    >
                        <Image
                            src="/about/creative/production.svg"
                            alt="Production filming crew"
                            width={1920}
                            height={1080}
                            className="w-full h-[50vw] max-h-[70vh] object-cover object-center"
                            priority
                        />
                    </div>
                </div>
            </div>
            {/* Outcome Section */}
            <div className="w-full max-w-7xl mx-auto mt-20">
                <div className="flex flex-col lg:flex-row w-full gap-2 items-start">
                    {/* Left: Heading with red underline for each line */}
                    <div className="flex-1 min-w-[200px] lg:max-w-[400px]">
                        <div className="space-y-2">
                            <div>
                                <span className="block text-4xl md:text-6xl font-extrabold text-[#22305a] leading-tight">The</span>
                                <div className="w-32 h-1 bg-[#ff4b5c] mt-1 mb-2" />
                            </div>
                            <div>
                                <span className="block text-4xl md:text-6xl font-extrabold text-[#22305a] leading-tight">Outcome</span>
                                <div className="w-72 h-1 bg-[#ff4b5c] mt-1 mb-2" />
                            </div>
                        </div>
                    </div>
                    {/* Right: Paragraphs */}
                    <div className="flex-1 flex flex-col gap-8 text-[#22305a] text-xl md:text-2xl leading-relaxed max-w-6xl mt-2 lg:mt-0">
                        <p>An authentic film that highlights key moments in the foster carer's journey.<br />With a<br />ROI of ....</p>
                        <p>Check out our behind the scenes film to see how we pulled it all together!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
