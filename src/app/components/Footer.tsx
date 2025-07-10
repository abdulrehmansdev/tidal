import Image from "next/image";
import {BASE_NAVIGATION} from "@/app/services/navigationService";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="px-4 lg:px-10 pt-10 container">
            {/* First row with custom column widths: 3/5, 1/5, 1/5 */}
            <div className="flex flex-wrap mb-7">

                {/* Logo column - 3/5 width */}
                <div className="w-full lg:w-1/4 pr-4 mb-8 lg:mb-0">
                    <Image
                        src="/logo.svg"
                        alt="company logo"
                        height={47}
                        width={180}
                        className="mb-2"
                        loading="lazy"
                    />
                    <p className="text-xs w-full lg:w-64 text-dark">Find and book a trusted emergency dentist near you
                        for urgent
                        care. Quick,
                        hassle-free appointments with transparent pricing.</p>
                </div>
                
                <div className="hidden lg:flex lg:w-1/4"></div>


                {/* Navigation column - 1/5 width */}
                <div className="w-full sm:w-1/3 lg:w-1/4 pr-4">
                    <ul className="uppercase space-y-6 text-xl">
                        {BASE_NAVIGATION.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className={`no-underline text-dark font-bold hover:text-black`}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden sm:flex sm:w-1/3 lg:hidden"></div>

                {/* Socials column - 1/5 width */}
                <div className="w-full sm:w-1/3 mt-10 sm:mt-0 lg:w-1/4">
                    <p className="uppercase no-underline text-dark font-bold">Follow Us</p>
                </div>
            </div>


            {/* Second row with 2 columns, text aligned right in 2nd column */}
            <div className="text-xs flex flex-col lg:flex-row justify-between mb-2">
                <span className="w-full lg:w-auto mb-2 lg:mb-0">&copy; Emergency Dentists Ltd is registered in England: XXXXXXX.</span>
                <span className="w-full lg:w-auto"><Link href="/terms-and-conditions" className="text-xs text-dark no-underline">Terms of Services</Link> | <Link href="/privacy-and-cookie-policy" className="text-xs text-dark no-underline">Privacy & Cookie</Link></span>

            </div>
        </footer>
    );
};

export default Footer;