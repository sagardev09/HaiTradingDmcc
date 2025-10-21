"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Tag,
  User,
  ChevronRight
} from "lucide-react";

export default function NewsArticle({ article }) {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';

  // Format date
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  // Share functionality
  const handleShare = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = article.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <article className="relative min-h-screen">
      {/* Background gradient with reduced opacity */}
      <div className="absolute inset-0 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-teal-950 bg-top bg-no-repeat opacity-20" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        .article-content {
          font-family: 'Poppins', sans-serif;
        }

        .article-content h2 {
          font-size: 1.875rem;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: inherit;
        }

        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: inherit;
        }

        .article-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: inherit;
        }

        .article-content ul, .article-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .article-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }

        .article-content strong {
          font-weight: 600;
          color: inherit;
        }

        .article-content blockquote {
          border-left: 4px solid;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          background: rgba(0, 0, 0, 0.02);
          padding: 1.5rem;
          border-radius: 0.5rem;
        }

        .dark .article-content blockquote {
          background: rgba(255, 255, 255, 0.05);
        }

        .article-content blockquote p {
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
        }

        .article-content blockquote footer {
          font-size: 0.875rem;
          font-style: normal;
          opacity: 0.8;
        }

        @media (max-width: 640px) {
          .article-content h2 {
            font-size: 1.5rem;
          }

          .article-content h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>

      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-slate-900/80 pointer-events-none" />

      <div className="relative z-0 px-4 sm:px-6 md:px-8 text-black dark:text-white pb-28 pt-8">
        <div className="w-full max-w-4xl mx-auto mt-16">
          {/* Back Button */}
          <Link
            href={`/${currentLang}/news`}
            className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to News</span>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 dark:bg-teal-700 text-white rounded-full mb-6">
              <Tag className="size-4" />
              <span className="text-sm font-semibold">{article.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white leading-tight px-2 break-words">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-slate-400 mb-8 leading-relaxed px-2">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-zinc-500 dark:text-slate-500 mb-8 px-2">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-teal-600 dark:text-teal-400" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-5 text-teal-600 dark:text-teal-400" />
                <span>{article.readTime}</span>
              </div>
              {article.author && (
                <div className="flex items-center gap-2">
                  <User className="size-5 text-teal-600 dark:text-teal-400" />
                  <span>{article.author.name}</span>
                </div>
              )}
            </div>

            {/* Author Card */}
            {article.author && (
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/40 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                    {article.author.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {article.author.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-slate-400">
                      {article.author.role}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="flex flex-wrap items-center gap-3 px-2">
              <span className="text-sm font-medium text-zinc-600 dark:text-slate-400 mr-2">
                Share:
              </span>
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
                aria-label="Share on Facebook"
              >
                <Facebook className="size-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm hidden sm:inline">Facebook</span>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:border-sky-500 dark:hover:border-sky-400 transition-all"
                aria-label="Share on Twitter"
              >
                <Twitter className="size-4 text-sky-500 dark:text-sky-400" />
                <span className="text-sm hidden sm:inline">Twitter</span>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-700 dark:hover:border-blue-400 transition-all"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="size-4 text-blue-700 dark:text-blue-400" />
                <span className="text-sm hidden sm:inline">LinkedIn</span>
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 px-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl p-6 sm:p-8 md:p-12 mb-12">
            <div
              className="article-content text-zinc-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Related Articles / CTA */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

            <div className="relative z-10 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                Interested in Learning More?
              </h2>
              <p className="text-teal-50 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Explore more articles and insights about commodity trading, market trends, and HAI Trading DMCC's operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${currentLang}/news`}
                  className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-200 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                >
                  <span>More Articles</span>
                  <ChevronRight className="size-5" />
                </Link>
                <Link
                  href={`/${currentLang}/contact`}
                  className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
