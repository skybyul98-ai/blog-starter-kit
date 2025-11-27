type Props = {
  greeting: string;
  description: string;
  profileImage?: string;
  profileName: string;
  ctaButtons?: Array<{
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }>;
};

export function HeroSection({
  greeting,
  description,
  profileImage,
  profileName,
  ctaButtons = [],
}: Props) {
  return (
    <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-6 md:px-12 bg-background">
      <div className="container-narrow">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Greeting */}
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 text-primary">
              {greeting}
            </h1>
            <p className="text-lg md:text-xl text-text-light max-w-xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-6 md:gap-8">
            {profileImage && (
              <img
                src={profileImage}
                alt={profileName}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover shadow-soft"
              />
            )}
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-medium text-text mb-1">
                {profileName}
              </h2>
              <p className="text-sm text-text-light">
                천천히 읽어주세요.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-4">
              {ctaButtons.map((btn) => (
                <a
                  key={btn.href}
                  href={btn.href}
                  className={
                    btn.variant === "primary"
                      ? "button-primary"
                      : "button-secondary"
                  }
                >
                  {btn.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
