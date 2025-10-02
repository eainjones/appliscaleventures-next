import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function NewsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section Skeleton */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-12 bg-muted animate-pulse rounded-lg w-64 mb-6"></div>
          <div className="h-6 bg-muted animate-pulse rounded-lg w-full max-w-3xl"></div>
        </div>
      </section>

      {/* Filters Skeleton */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 w-24 bg-muted animate-pulse rounded-md"></div>
              ))}
            </div>
            <div className="h-10 w-full md:w-[300px] bg-muted animate-pulse rounded-md"></div>
          </div>
          <div className="mt-4 h-5 w-32 bg-muted animate-pulse rounded"></div>
        </div>
      </section>

      {/* Articles Grid Skeleton */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <div className="h-6 w-32 bg-muted animate-pulse rounded mb-3"></div>
                  <div className="h-7 bg-muted animate-pulse rounded mb-2"></div>
                  <div className="h-5 w-40 bg-muted animate-pulse rounded"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-muted animate-pulse rounded"></div>
                    <div className="h-4 bg-muted animate-pulse rounded"></div>
                    <div className="h-4 w-3/4 bg-muted animate-pulse rounded"></div>
                  </div>
                  <div className="h-5 w-48 bg-muted animate-pulse rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
