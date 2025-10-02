'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsArticles, NewsArticle } from '@/data/newsArticles';
import Link from 'next/link';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Array<'All' | NewsArticle['category']> = ['All', 'Investment', 'Portfolio News', 'Insights', 'Company Update'];

  // Sort articles by date, most recent first
  const sortedArticles = [...newsArticles].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  // Filter articles by category and search query
  const filteredArticles = sortedArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

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

      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            News & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stay updated with our latest investments, portfolio company achievements, and insights on building transformative companies.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`}>
                <Card className="h-full hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider px-2 py-1 bg-primary/10 rounded">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900 leading-tight mb-2">
                      {article.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(article.publishedDate)}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <CardDescription className="text-slate-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </CardDescription>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{article.author.name}</span>
                        <span>•</span>
                        <span>{article.author.role}</span>
                      </div>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Read more
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
