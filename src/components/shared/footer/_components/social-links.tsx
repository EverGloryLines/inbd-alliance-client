export interface SocialLink {
  name: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "FaceBook", href: "https://facebook.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "YouTube", href: "https://youtube.com" },
];

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white hover:opacity-70 transition-opacity"
          aria-label={link.name}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
