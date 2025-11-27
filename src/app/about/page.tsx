import { FAQSection } from "@/app/_components/faq-section";
import { SocialLinks } from "@/app/_components/social-links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | 깔끔한 친구들",
  description: "디자인과 개발에 관심 있는 사람의 이야기. 나의 톤과 결을 담은 소개입니다.",
  keywords: ["소개", "포트폴리오", "경험", "개발자"],
  openGraph: {
    type: "profile",
    title: "소개 | 깔끔한 친구들",
    description: "디자인과 개발에 관심 있는 사람의 이야기",
    url: "https://yourdomain.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* About Header */}
      <section className="section-spacing bg-gradient-to-b from-accent/30 to-background">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-primary">
            소개
          </h1>
          <p className="prose-text max-w-2xl mb-8 text-lg md:text-xl leading-relaxed">
            이곳은 나의 생각과 감정을 담아내는 작은 공간입니다.
            <br />
            길지 않지만 진심으로, 깔끔하지만 따뜻하게 표현하려고 노력합니다.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="prose-text space-y-6 mb-16">
            <p>
              저는 디자인과 개발에 관심이 많은 사람입니다. 깔끔한 것을 좋아하고,
              의도 있는 공백을 사랑합니다. 이 블로그는 그러한 철학이 담긴
              작은 집입니다.
            </p>

            <p>
              기술을 다루지만, 결국 중요한 것은 사람들과의 연결이라고 생각합니다.
              따라서 글도, 코드도, 모든 것을 깔끔하고 읽기 좋게 만들려고
              노력합니다.
            </p>

            <p>
              지금 이 순간에도 무언가를 배우고 있습니다. 천천히 성장하는 것이
              좋습니다.
            </p>
          </div>

          {/* Stats or Highlights */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 py-8 border-y border-accent-2">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                3+
              </div>
              <p className="text-sm text-text-light">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                ∞
              </div>
              <p className="text-sm text-text-light">Things to Learn</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                100%
              </div>
              <p className="text-sm text-text-light">Passion</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="자주 묻는 질문"
        items={[
          {
            question: "요즘 뭘 고민하나요?",
            answer: (
              <p>
                좋은 코드와 좋은 디자인이 어떻게 만나는지를 고민하고 있어요.
                기술과 감성의 균형을 찾는 것이 제 주요 관심사입니다.
              </p>
            ),
          },
          {
            question: "가장 좋아하는 것은?",
            answer: (
              <p>
                여백입니다. 공간을 잘 사용하는 것, 필요 없는 것을 버리는 것.
                그것이 아름답다고 생각해요.
              </p>
            ),
          },
          {
            question: "협업이 가능한가요?",
            answer: (
              <p>
                네, 의미 있는 프로젝트라면 기꺼이 함께하고 싶습니다.
                이메일로 먼저 연락주시면 답변해드릴게요. 다만 답장이 느릴 수
                있다는 점, 미리 양해 부탁드립니다.
              </p>
            ),
          },
          {
            question: "왜 이 스타일을 선택했나요?",
            answer: (
              <p>
                깔끔하지만 따뜻한 것. 그것이 제가 추구하는 가치입니다.
                과하지 않으면서도 성의가 느껴지는 공간을 만들고 싶었어요.
              </p>
            ),
          },
        ]}
      />

      {/* Social Section */}
      <SocialLinks
        title="연락하기"
        description="좋은 이야기가 있다면 나눠요"
        links={[
          {
            name: "Email",
            href: "mailto:hello@example.com",
            icon: "✉️",
          },
          {
            name: "Instagram",
            href: "https://instagram.com",
            icon: "📸",
          },
          {
            name: "GitHub",
            href: "https://github.com",
            icon: "💻",
          },
        ]}
      />
    </main>
  );
}
