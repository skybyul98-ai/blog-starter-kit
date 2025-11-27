"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/lib/toast";

export default function PostFooter() {
  const { toasts, addToast, removeToast } = useToast();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Show thank you toast when the post is scrolled to the bottom
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // 90% scrolled
      if (scrollTop + winHeight >= docHeight * 0.9 && !shown) {
        setShown(true);
        addToast("고마워요 :)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shown, addToast]);

  return (
    <div className="mt-16 pt-8 border-t border-accent-2 text-center">
      <div className="space-y-4">
        <p className="text-text-light text-sm md:text-base">
          글을 읽어주셔서 감사합니다.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => addToast("이 글을 좋아했어요! ♥️")}
            className="text-sm px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-250"
          >
            ♥️ 공감해요
          </button>
          <button
            onClick={() => addToast("친구들에게 공유했어요! 📤")}
            className="text-sm px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-250"
          >
            📤 공유하기
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 space-y-3 pointer-events-none z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-primary text-background px-6 py-3 rounded-lg shadow-md animate-fade-in pointer-events-auto cursor-pointer hover:bg-link-hover transition-colors duration-250"
            onClick={() => removeToast(toast.id)}
          >
            <p className="text-sm md:text-base font-medium">{toast.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
