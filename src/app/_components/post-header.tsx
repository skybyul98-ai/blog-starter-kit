import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <div className="mb-8 md:mb-12">
        <PostTitle>{title}</PostTitle>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center gap-4 md:gap-6 mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="text-sm md:text-base text-text-light font-sans">
          <DateFormatter dateString={date} />
        </div>
      </div>

      <div className="mb-10 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
