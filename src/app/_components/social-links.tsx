"use client";

import { ReactNode } from "react";

type SocialLink = {
  name: string;
  href: string;
  icon?: string;
  tooltip?: string;
};

type Props = {
  links: SocialLink[];
  title?: string;
  description?: string;
};

export function SocialLinks({
  links,
  title = "연락하기",
  description = "천천히 읽고 있어요 :)",
}: Props) {
  return (
    <section className="section-spacing bg-accent/50">
      <div className="container-narrow">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-primary">
            {title}
          </h2>
          <p className="text-text-light mb-10 text-lg">{description}</p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                title={link.tooltip}
                className="group relative flex flex-col items-center gap-2 text-primary hover:text-link-hover transition-colors duration-250"
              >
                {link.icon && (
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl">
                    {link.icon}
                  </div>
                )}
                <span className="text-sm md:text-base font-medium">{link.name}</span>

                {/* Tooltip */}
                {link.tooltip && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-background text-xs px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                    {link.tooltip}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
