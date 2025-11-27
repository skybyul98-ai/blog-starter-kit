import { ReactNode } from "react";

type FAQItem = {
  question: string;
  answer: string | ReactNode;
};

type Props = {
  items: FAQItem[];
  title?: string;
};

export function FAQSection({ items, title = "자주 묻는 질문" }: Props) {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-primary">
          {title}
        </h2>

        <div className="space-y-8">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group border-b border-accent-2 pb-6 cursor-pointer"
            >
              <summary className="text-lg md:text-xl font-serif font-medium text-text hover:text-primary transition-colors duration-250 list-none flex items-center gap-3">
                <span className="text-primary font-serif text-2xl group-open:rotate-90 transition-transform duration-250">
                  ›
                </span>
                {item.question}
              </summary>
              <div className="mt-4 ml-8 prose-text text-text-light">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
