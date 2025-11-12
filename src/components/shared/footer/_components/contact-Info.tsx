import { SocialLinks } from "./social-links";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Come Visit Section */}
      <div>
        <h3 className="text-white text-base md:text-lg font-song-myung font-medium mb-2">
          Come Visit
        </h3>
        <p className="text-white/70 text-sm tracking-[-0.02em] font-sans font-medium leading-relaxed">
          Suite 6B,
          <br />
          Dubai Creek Tower,
          <br />
          Riggat AI Buteen,
          <br />
          Deira, Dubai, UAE
        </p>
      </div>

      {/* Contact Us Section */}
      <div>
        <h3 className="text-white text-base md:text-lg font-song-myung font-medium mb-2">
          Contact Us
        </h3>
        <div className="text-white/70 text-sm tracking-[-0.02em] font-sans font-medium leading-relaxed">
          <p>+971 502 858 67, +971 504 314 303</p>
          <p>
            <a
              href="mailto:info@sealloyd.com"
              className="hover:opacity-70 transition-opacity"
            >
              info@inbdalliance.com
            </a>
          </p>
        </div>
      </div>

      {/* Social Links */}
      <SocialLinks />

      {/* Copyright */}
      <p className="text-white/70 font-sans font-medium tracking-[-0.02em] text-sm">
        © 2025 INBD ALLIANCE
      </p>
    </div>
  );
}
