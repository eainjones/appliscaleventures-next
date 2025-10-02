import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function ArticleLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button Skeleton */}
      <div className="border-b bg-white/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <div className="h-9 w-32 bg-muted animate-pulse rounded"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Article Header Skeleton */}
        <div className="mb-12">
          <div className="mb-4 h-7 w-32 bg-muted animate-pulse rounded"></div>
          <div className="h-12 bg-muted animate-pulse rounded mb-6"></div>
          <div className="h-10 bg-muted animate-pulse rounded mb-4 w-3/4"></div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="h-5 w-48 bg-muted animate-pulse rounded"></div>
            <div className="h-5 w-32 bg-muted animate-pulse rounded"></div>
          </div>
        </div>

        {/* Article Content Skeleton */}
        <div className="space-y-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-muted animate-pulse rounded"></div>
              <div className="h-4 bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-5/6 bg-muted animate-pulse rounded"></div>
            </div>
          ))}
        </div>

        {/* Tags Skeleton */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="h-4 w-4 bg-muted animate-pulse rounded"></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-7 w-20 bg-muted animate-pulse rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Related Articles Skeleton */}
        <div className="mt-16 pt-12 border-t">
          <div className="h-8 w-64 bg-muted animate-pulse rounded mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="h-6 w-24 bg-muted animate-pulse rounded mb-2"></div>
                  <div className="h-6 bg-muted animate-pulse rounded"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 w-32 bg-muted animate-pulse rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
