import Image from "next/image";

export default function ServiceDetailBrief() {
    return (
        <div className="bg-[#f7f8fa] min-h-screen py-8 px-4 md:px-12 lg:px-32">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="md:w-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#22305a] leading-tight border-b-4 border-red-500">
                            <span>The Brief</span>                        
                        </h1>
                    </div>
                    <div className="md:w-2/3 md:pl-8 mt-2 md:mt-0">
                        <p className="text-[#22305a] text-base md:text-lg leading-relaxed">
                            We worked with our client Capstone to create a captivating narrative for a 30 second TV spot to be shown on ITV, targeting our client’s key audience.
                        </p>
                        <br />
                        <p className="text-[#22305a] text-base md:text-lg leading-relaxed">
                            The challenge? Creating something that felt like a story in a short timeframe and that had the emotional connection and journey a potential foster carer might expect.            </p>
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-6">
                    {/* First row: 1st and 2nd images, 1st is larger */}
                    <div className="flex gap-6">
                        <div className="flex-1 rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
                            <Image
                                src="/about/creative/post1.svg"
                                alt="Woman in field"
                                width={600}
                                height={400}
                                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
                                priority
                            />
                        </div>
                        <div className="  flex  md:items-end">
                            <div className=" rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
                                <Image
                                    src="/about/creative/post2.svg"
                                    alt="Coffee cup"
                                    width={600}
                                    height={400}
                                    className="w-full h-48 md:h-56 lg:h-64 object-cover object-center"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    {/* Second row: 3rd and 4th images, 4th is larger */}
                    <div className="flex gap-6">
                        <div className="  flex  md:items-start">
                            <div className="rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
                                <Image
                                    src="/about/creative/post3.svg"
                                    alt="Surfer"
                                    width={600}
                                    height={400}
                                    className="w-full h-48 md:h-56 lg:h-64 object-cover object-center"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex-1 rounded-2xl border-2 border-[#e3e6ee] overflow-hidden">
                            <Image
                                src="/about/creative/post4.svg"
                                alt="City street"
                                width={600}
                                height={400}
                                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
