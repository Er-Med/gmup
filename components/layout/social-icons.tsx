import { SITE } from "@/lib/content";
import { cn } from "@/utils/cn";

type IconProps = {
  className?: string;
};

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.34 18.67H5.67V9.78h2.67v8.89ZM7 8.57a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.67 10.1h-2.67v-4.52c0-1.25-.45-2.1-1.57-2.1-.86 0-1.37.58-1.6 1.14-.08.2-.1.48-.1.76v4.72H10.06s.04-8.1 0-8.89h2.67v1.4c.35-.55 1-1.33 2.43-1.33 1.78 0 3.11 1.16 3.11 3.66v5.16Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm5.1-8.15a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 2c-2.72 0-3.06.01-4.13.06-2.7.12-4.69 2.1-4.81 4.81C2.99 8.94 2.98 9.28 2.98 12s.01 3.06.06 4.13c.12 2.7 2.11 4.69 4.81 4.81 1.07.05 1.41.06 4.13.06s3.06-.01 4.13-.06c2.7-.12 4.69-2.11 4.81-4.81.05-1.07.06-1.41.06-4.13s-.01-3.06-.06-4.13c-.12-2.71-2.11-4.69-4.81-4.81C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06 1.97.09 3.11 1.23 3.2 3.2.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.09 1.96-1.23 3.11-3.2 3.2-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.97-.09-3.11-1.24-3.2-3.2-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.09-1.97 1.23-3.11 3.2-3.2 1.05-.05 1.37-.06 4.04-.06Z" />
    </svg>
  );
}

export const socialLinkClass =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-solid border-white/55 text-white transition-colors hover:border-white hover:bg-white/10";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex shrink-0 items-center gap-2", className)}>
      <a
        href={SITE.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={socialLinkClass}
      >
        <FacebookIcon className="size-4" />
      </a>
      <a
        href={SITE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={socialLinkClass}
      >
        <LinkedInIcon className="size-4" />
      </a>
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={socialLinkClass}
      >
        <InstagramIcon className="size-4" />
      </a>
    </div>
  );
}
