import { HeroSection } from "@/app/_components/hero-section";
import { PostCard } from "@/app/_components/post-card";
import { SocialLinks } from "@/app/_components/social-links";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "깔끔한 친구들 | 따뜻하고 감성 있는 블로그",
  description: "디자인과 개발에 관심 있는 사람의 이야기. 깔끔하지만 따뜻한 감정을 담은 글들을 천천히 읽어보세요.",
  keywords: ["블로그", "디자인", "개발", "감성", "웹"],
  authors: [{ name: "당신의 이름" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://yourdomain.com",
    title: "깔끔한 친구들",
    description: "디자인과 개발에 관심 있는 사람의 이야기",
    siteName: "깔끔한 친구들",
  },
  twitter: {
    card: "summary_large_image",
    title: "깔끔한 친구들",
    description: "디자인과 개발에 관심 있는 사람의 이야기",
  },
};

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        greeting="안녕하세요."
        description="깔끔한 친구들이 모이는 공간입니다. 나의 톤과 결을 담은 이야기들을 천천히 나눕니다."
        profileName="당신의 이름"
        ctaButtons={[
          { text: "글 보기", href: "#posts", variant: "primary" },
          { text: "소개 읽기", href: "/about", variant: "secondary" },
        ]}
      />

      {/* Posts Section */}
      <section id="posts" className="section-spacing">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-primary">
            최근 글들
          </h2>

          <div className="space-y-0">
            {allPosts.length > 0 ? (
              allPosts.map((post) => <PostCard key={post.slug} post={post} />)
            ) : (
              <p className="text-text-light text-center py-12">
                아직 글이 없네요. 곧 추가될 예정입니다.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <SocialLinks
        title="함께하기"
        description="답장은 느릴 수 있어요. 천천히 읽고 있어요 :)"
        links={[
          {
            name: "Email",
            href: "mailto:hello@example.com",
            icon: "✉️",
            tooltip: "이메일로 연락해주세요",
          },
          {
            name: "Instagram",
            href: "https://instagram.com",
            icon: "📸",
            tooltip: "일상을 공유합니다",
          },
          {
            name: "GitHub",
            href: "https://github.com",
            icon: "💻",
            tooltip: "코드를 만듭니다",
          },
        ]}
      />
    </main>
  );
}
