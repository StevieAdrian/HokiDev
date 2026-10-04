import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import {
  blogPath,
  formatDate,
  readingMinutes,
  type BlogPost,
} from '@/features/blog/data';

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      <Link href={blogPath(post.slug)} className="blog-card-link">
        <p className="blog-meta">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{readingMinutes(post)} menit baca</span>
        </p>
        <h3>{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <span className="blog-card-more">
          Baca artikel <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}
