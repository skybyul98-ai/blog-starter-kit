import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-accent-2 z-40">
      <nav className="max-w-2xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium text-primary hover:text-link-hover transition-colors duration-250">
          깔끔한 친구들
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/" className="text-sm font-medium text-text-light hover:text-primary transition-colors duration-250">
            홈
          </Link>
          <Link href="/about" className="text-sm font-medium text-text-light hover:text-primary transition-colors duration-250">
            소개
          </Link>
          <Link href="/#posts" className="text-sm font-medium text-text-light hover:text-primary transition-colors duration-250">
            글
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
