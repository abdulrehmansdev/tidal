"use client";

const FooterWithContact = () => {
  return (
    <footer className="bg-[#1e3750] text-white px-6 md:px-20 py-16 font-[500]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Explore</h3>
            <ul className="space-y-3 text-white/90 text-[18px] leading-none tracking-tight">
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Get In Touch</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Services</h3>
            <ul className="space-y-3 text-white/90 text-[18px] leading-none tracking-tight">
              <li>
                <a href="#">Promotional Films</a>
              </li>
              <li>
                <a href="#">Marketing Videos</a>
              </li>
              <li>
                <a href="#">TV Advertisements</a>
              </li>
              <li>
                <a href="#">Documentaries</a>
              </li>
              <li>
                <a href="#">Charity Films</a>
              </li>
              <li>
                <a href="#">Corporate Videos</a>
              </li>
              <li>
                <a href="#">Animation & Graphics</a>
              </li>
              <li>
                <a href="#">Drone Videography</a>
              </li>
              <li>
                <a href="#">Product Videos</a>
              </li>
              <li>
                <a href="#">Social Media Content</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Contact</h3>
            <ul className="space-y-3 text-white/90 text-[18px] leading-none tracking-tight">
              <li>
                <a href="tel:01702597070" className="underline">
                  01702 597 070
                </a>
              </li>
              <li>
                <a href="mailto:info@tidal-film.co.uk" className="underline">
                  info@tidal-film.co.uk
                </a>
              </li>
              <li>
                129 Parkanaur Avenue,
                <br />
                Southend-On-Sea, SS1 3JD
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#f6f6fd] rounded-md px-6 py-8 md:p-10 w-full">
          <h3 className="text-[#225f71] font-semibold text-lg mb-4 text-center">
            Get In Touch
          </h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#1e3750]">Name</label>
              <input
                type="text"
                placeholder="That’s you!"
                className="w-full mt-1 px-4 py-2 text-sm rounded-md border border-gray-300 bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1e3750]">
                Email
              </label>
              <input
                type="email"
                placeholder="So we can reply"
                className="w-full mt-1 px-4 py-2 text-sm rounded-md border border-gray-300 bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1e3750]">
                Message
              </label>
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="w-full mt-1 px-4 py-2 text-sm rounded-md border border-gray-300 bg-white resize-none"
              />
            </div>

            <div className="flex items-center space-x-2 text-xs text-[#1e3750]">
              <input type="checkbox" className="accent-[#00bcd4]" />
              <label>
                I accept the{" "}
                <a href="#" className="underline">
                  privacy policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 bg-[#ff645a] hover:bg-[#ff4b3f] text-white text-sm py-2 px-5 rounded-full uppercase tracking-wider cursor-pointer"
              aria-label="Send Message"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithContact;
