// export default Footer;
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkest-blue  text-offWhite font-montserrat">
      <div className="w-full py-12">
        <div className="w-full  mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 container">
          {/* Logo & Description */}
          <div className="flex flex-col justify-between h-56 col-span-1 lg:col-span-2">
            <div className="flex ">
              <Image
                src="/public2/tidal-light.svg"
                alt="Tidal Film Logo"
                width={174}
                height={70}
              />
              {/* <div>
              <span className="font-bold text-xl">TIDAL</span>
              <div className="text-lg font-light leading-none">FILM</div>
            </div> */}
            </div>
            <p className=" text-base w-[360px] pr-4">
              Tidal Film is a video production company creating high-quality
              films for businesses, charities, and brands.
            </p>
            <div className="flex gap-4 ">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/public2/social/x.svg"
                  alt="X"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/public2/social/insta.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/public2/social/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/public2/social/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          {/* Explore */}
          <div className="col-span-1">
            <h3 className=" text-22 pb-5  ">Explore</h3>
            <ul className="space-y-3 text-20">
              <li>
                <Link href="#">
                  <span>Work</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>News</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Get In Touch</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div className="col-span-1 ">
            <h3 className="text-22 pb-5">Services</h3>
            <ul className="space-y-3 text-20">
              <li>
                <Link href="#">
                  <span>Promotional Films</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Marketing Videos</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>TV Advertisements</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-lg">Documentaries</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-lg">View All Services</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="col-span-1 ">
            <h3 className="text-22 pb-5">Contact</h3>
            <ul className="space-y-3 text-20">
              <li>
                <a href="tel:01702597070" className="underline font-semibold">
                  01702 597 070
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tidal-film.co.uk"
                  className="underline font-semibold"
                >
                  info@tidal-film.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full mx-auto pt-5 flex flex-col md:flex-row items-center justify-between text-base text-[#BDD5EA] gap-2 container">
        <div>
          2025 © Tidal Film. Company Number: 06701707 &nbsp;|&nbsp;
          <Link href="#" className="underline hover:text-white">
            Cookies Policy
          </Link>{" "}
          &nbsp;|&nbsp;
          <Link href="#" className="underline hover:text-white">
            Privacy Policy
          </Link>{" "}
          &nbsp;|&nbsp;
          <Link href="#" className="underline hover:text-white">
            GDPR Consent Form
          </Link>
        </div>
        <div className="flex gap-2 text-base">
          Built by{" "}
          <a href="#" className="underline hover:text-white">
            Adam Toms
          </a>
          . Designed by{" "}
          <a href="#" className="underline hover:text-white">
            SourceCodeCreative
          </a>
        </div>
      </div>
    </footer>
  );
}
