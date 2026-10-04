import { SectionLabel } from '@/features/marketing/components/section-label';
import { PostCard } from '@/features/blog/components/post-card';
import { RichText } from '@/features/blog/components/rich-text';
import {
  formatDate,
  getRelatedPosts,
  headingId,
  plainText,
  postLastModified,
  readingMinutes,
  type BlogPost,
} from '@/features/blog/data';
import { postCrumbs } from '@/features/blog/seo';
import { Breadcrumbs } from '@/features/services/components/breadcrumbs';
import {
  rowNumber,
  ServiceRowLink,
} from '@/features/services/components/service-row-link';
import { WhatsAppCta } from '@/features/services/components/whatsapp-cta';
import { getServicePage, servicePath } from '@/features/services/data';

export function PostDetail({ post }: { post: BlogPost }) {
  const toc = post.content.flatMap((block) =>
    block.type === 'h2' ? [plainText(block.text)] : [],
  );
  const services = post.relatedServices.flatMap(
    (slug) => getServicePage(slug) ?? [],
  );
  const relatedPosts = getRelatedPosts(post);
  const updated = postLastModified(post);

  return (
    <>
      <section className="svc-hero blog-hero">
        <div className="container-wide">
          <Breadcrumbs items={postCrumbs(post)} />
          <h1>{post.title}</h1>
          <p className="hero-intro">{post.excerpt}</p>
          <p className="blog-meta">
            <span>Oleh Tim HokiDev</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            {updated !== post.publishedAt ? (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  Diperbarui <time dateTime={updated}>{formatDate(updated)}</time>
                </span>
              </>
            ) : null}
            <span aria-hidden="true">·</span>
            <span>{readingMinutes(post)} menit baca</span>
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide blog-layout">
          {toc.length > 1 ? (
            <nav className="blog-toc" aria-label="Daftar isi">
              <p className="eyebrow">Daftar isi</p>
              <ol>
                {toc.map((heading) => (
                  <li key={heading}>
                    <a href={`#${headingId(heading)}`}>{heading}</a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <article className="blog-prose">
            <RichText blocks={post.content} />

            {post.faqs?.length ? (
              <>
                <h2 id="faq">Pertanyaan yang sering diajukan</h2>
                <div className="svc-faq">
                  {post.faqs.map(([question, answer]) => (
                    <details key={question}>
                      <summary>{question}</summary>
                      <p>{answer}</p>
                    </details>
                  ))}
                </div>
              </>
            ) : null}
          </article>
        </div>
      </section>

      {services.length ? (
        <section className="solutions section-space">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <SectionLabel>Layanan terkait</SectionLabel>
                <h2>Butuh bantuan mengerjakannya?</h2>
              </div>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <ServiceRowLink
                  key={service.slug}
                  href={servicePath(service.slug)}
                  number={rowNumber(index)}
                  title={service.name}
                  description={service.summary}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedPosts.length ? (
        <section className="section-space">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <SectionLabel>Baca juga</SectionLabel>
                <h2>Artikel lainnya</h2>
              </div>
            </div>
            <div className="blog-grid">
              {relatedPosts.map((related) => (
                <PostCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="dark-section section-space">
        <div className="container-wide cta-layout">
          <div>
            <SectionLabel>Mulai dari diskusi</SectionLabel>
            <h2>
              Punya pertanyaan <em>tentang proyek Anda?</em>
            </h2>
          </div>
          <div className="cta-copy muted-copy">
            Ceritakan kebutuhan Anda. Kami bantu petakan solusinya, lengkap
            dengan estimasi biaya dan waktu pengerjaan.
            <div className="cta-actions">
              <WhatsAppCta
                message={`Halo HokiDev, saya baru membaca artikel "${post.title}" dan ingin berdiskusi.`}
                source={`blog-${post.slug}`}
                label="Ngobrol dengan HokiDev"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
