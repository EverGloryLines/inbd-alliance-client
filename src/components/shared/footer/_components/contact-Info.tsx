import { SocialLinks } from "./social-links";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Come Visit Section */}
      <div>
        <h3 className="text-white font-semibold mb-2">Come Visit</h3>
        <p className="text-white text-sm leading-relaxed">
          10 Anson Road #22-08,
          <br />
          International Plaza,
          <br />
          Singapore - 079903
        </p>
      </div>

      {/* Contact Us Section */}
      <div>
        <h3 className="text-white font-semibold mb-2">Contact Us</h3>
        <div className="text-white text-sm space-y-1">
          <p>+65 6291 4540, +65 6291 4541</p>
          <p>
            <a
              href="mailto:info@sealloyd.com"
              className="hover:opacity-70 transition-opacity"
            >
              info@sealloyd.com
            </a>
          </p>
        </div>
      </div>

      {/* Social Links */}
      <SocialLinks />

      {/* Copyright */}
      <p className="text-white text-sm">
        © 2025 Sea Lloyd Shipping Lines Pte. Ltd.
      </p>
    </div>
  );
}
