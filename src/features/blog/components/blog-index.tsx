import { Reveal } from '@/features/marketing/components/reveal';
import { SectionLabel } from '@/features/marketing/components/section-label';
import { PostCard } from '@/features/blog/components/post-card';
import { blogPosts } from '@/features/blog/data';
import { blogCrumbs } from '@/features/blog/seo';
import { Breadcrumbs } from '@/features/services/components/breadcrumbs';

export function BlogIndex() {
  return (
    <>
      <section className="svc-hero">
        <div className="container-wide">
          <Breadcrumbs items={blogCrumbs} />
          <Reveal>
            <h1>
              Blog HokiDev. <em>Panduan software untuk pemilik bisnis.</em>
            </h1>
            <p className="hero-intro">
              Artikel praktis tentang pembuatan software, aplikasi, dan website:
              biaya, cara memilih vendor, dan keputusan teknologi, ditulis
              dengan bahasa bisnis, bukan istilah teknis.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide">
          <Reveal>
            <div className="section-heading">
              <div>
                <SectionLabel>Artikel terbaru</SectionLabel>
                <h2>Semua artikel</h2>
              </div>
            </div>
          </Reveal>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
