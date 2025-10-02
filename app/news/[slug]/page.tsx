'use client';

import { useParams, useRouter, notFound } from 'next/navigation';
import { getArticleBySlug, getRecentArticles } from '@/data/newsArticles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

export default function NewsArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  if (!slug) {
    notFound();
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const recentArticles = getRecentArticles(3).filter(a => a.id !== article.id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="border-b bg-white/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push('/news')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Article Header */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="text-sm font-medium text-primary uppercase tracking-wider px-3 py-1 bg-primary/10 rounded">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-medium">{article.author.name}</span>
              <span className="text-sm">• {article.author.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.publishedDate)}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-foreground leading-relaxed whitespace-pre-line"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75'
            }}
          >
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-foreground">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold text-foreground mt-4 mb-2">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              } else {
                return (
                  <p key={index} className="mb-4 text-foreground">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Recent Articles */}
        {recentArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t">
            <h3 className="text-2xl font-semibold text-foreground mb-8">More from Appliscale Ventures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentArticles.map((recentArticle) => (
                <Link key={recentArticle.id} href={`/news/${recentArticle.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
                    <CardHeader>
                      <div className="mb-2">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider px-2 py-1 bg-primary/10 rounded">
                          {recentArticle.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900 leading-tight">
                        {recentArticle.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(recentArticle.publishedDate)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
