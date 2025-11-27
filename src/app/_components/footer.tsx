export default function Footer() {
  return (
    <footer className="mt-auto bg-background border-t border-accent-2 py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-text-light text-sm md:text-base">
              © 2025 깔끔한 친구들. All rights reserved.
            </p>
            <p className="text-xs text-text-light/70 mt-2">
              천천히 읽어주세요.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="/"
              className="text-primary text-sm font-medium hover:text-link-hover transition-colors duration-250"
            >
              홈
            </a>
            <a
              href="/about"
              className="text-primary text-sm font-medium hover:text-link-hover transition-colors duration-250"
            >
              소개
            </a>
            <a
              href="#"
              className="text-primary text-sm font-medium hover:text-link-hover transition-colors duration-250"
            >
              연락
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
