import Link from "next/link";
import { Post } from "@/interfaces/post";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <article className="group py-8 border-b border-accent-2 last:border-b-0 hover:bg-accent/30 transition-colors duration-250 px-4 md:px-0">
      <Link href={`/posts/${post.slug}`} className="block">
        <h3 className="text-xl md:text-2xl font-serif font-medium text-primary mb-2 group-hover:text-link-hover transition-colors duration-250">
          {post.title}
        </h3>
        <p className="text-text-light prose-text mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-text-light">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.preview && (
            <span className="text-primary font-medium text-xs px-2 py-1 bg-accent rounded">
              미리보기
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
