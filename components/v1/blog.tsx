import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BLOG_POSTS } from "@/lib/content";
import { typography } from "@/lib/typography";
import { v1 } from "@/lib/v1-ui";
import { cn } from "@/utils/cn";

export function V1Blog() {
  return (
    <>
      <div className="py-14 pb-6 md:py-16">
        <Container>
          <span className={cn("mb-4 inline-block", typography.eyebrow)}>
            Publications
          </span>
          <h1 className={typography.h1}>Blog</h1>
          <p className={cn("mt-4 max-w-xl", typography.bodyLg, "text-secondary")}>
            Actualités, recommandations et publications du groupe.
          </p>
        </Container>
      </div>

      <section
        className={cn(v1.section, "border-t", v1.border)}
        aria-labelledby="blog-list-title"
      >
        <Container>
          <h2 className="sr-only" id="blog-list-title">
            Articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {BLOG_POSTS.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06} as="article">
                <article
                  className={cn(
                    v1.card,
                    "flex h-full flex-col overflow-hidden transition-[opacity,transform] duration-200 hover:-translate-y-0.5",
                  )}
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-[#E6EEF5] bg-gmup-navy-soft">
                    <Image
                      src="/blog-placeholder.jpg"
                      alt=""
                      width={640}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5 pb-6 md:p-6">
                    <time
                      className={cn(typography.eyebrow, "text-secondary")}
                      dateTime={post.dateTime}
                    >
                      {post.date}
                    </time>
                    <h3 className={typography.h4}>
                      <Link
                        href="#"
                        className="transition-colors duration-200 hover:text-gmup-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal/40"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className={cn("flex-1", typography.small)}>{post.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
