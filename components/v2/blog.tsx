import Image from "next/image";

import Link from "next/link";



import { Container } from "@/components/layout/container";

import { Reveal } from "@/components/motion/reveal";

import { BLOG_POSTS } from "@/lib/content";

import { typography } from "@/lib/typography";

import { cn } from "@/utils/cn";



export function V2Blog() {

  return (

    <>

      <div className="border-b border-gmup-teal/20 py-14 pb-4">

        <Container>

          <span className={cn("mb-3.5 inline-block", typography.eyebrow)}>

            Publications

          </span>

          <h1 className={typography.h1}>Blog</h1>

          <p className={cn("mt-5", typography.bodyLg, typography.prose)}>

            Actualités, recommandations et publications du groupe.

          </p>

        </Container>

      </div>



      <section className="py-12 pb-20" aria-labelledby="blog-list-title">

        <Container>

          <h2 className="sr-only" id="blog-list-title">

            Articles

          </h2>

          <div className="flex flex-col">

            {BLOG_POSTS.map((post, index) => (

              <Reveal key={post.slug} delay={index * 0.05}>

                <article

                  className={cn(

                    "grid gap-0 border-b border-gmup-teal/20 py-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:py-12",

                    index % 2 === 1 && "md:[&_.blog-media]:order-2 md:[&_.blog-content]:order-1",

                  )}

                >

                  <div className="blog-media aspect-[16/10] overflow-hidden border border-gmup-teal/20 bg-gmup-navy-soft">

                    <Image

                      src="/blog-placeholder.jpg"

                      alt=""

                      width={640}

                      height={400}

                      className="h-full w-full object-cover"

                    />

                  </div>

                  <div className="blog-content flex flex-col gap-3 pt-5 md:pt-0">

                    <time

                      className={typography.eyebrow}

                      dateTime={post.dateTime}

                    >

                      {post.date}

                    </time>

                    <h3 className={typography.h3}>

                      <Link href="#" className="hover:text-gmup-teal">

                        {post.title}

                      </Link>

                    </h3>

                    <p className={cn("max-w-md", typography.body)}>{post.excerpt}</p>

                    <Link

                      href="#"

                      className={cn(

                        "mt-2 uppercase tracking-wide text-heading hover:text-gmup-teal",

                        typography.button,

                      )}

                    >

                      Lire l&apos;article

                    </Link>

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

