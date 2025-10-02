import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';

export default function CompanyLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button Skeleton */}
      <div className="border-b bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="h-9 w-40 bg-muted animate-pulse rounded"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-3 space-y-8">
            {/* Company Header */}
            <div className="space-y-4">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-muted rounded-xl animate-pulse"></div>
                <div className="space-y-2 flex-grow">
                  <div className="h-10 bg-muted animate-pulse rounded w-64"></div>
                  <div className="h-6 bg-muted animate-pulse rounded w-full max-w-lg"></div>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <Card>
              <CardContent className="p-6">
                <div className="h-8 bg-muted animate-pulse rounded w-48 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-5/6"></div>
                </div>
              </CardContent>
            </Card>

            {/* Founder Card */}
            <Card>
              <CardContent className="p-6">
                <div className="h-8 bg-muted animate-pulse rounded w-32 mb-4"></div>
                <div className="h-7 bg-muted animate-pulse rounded w-40 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Rationale Card */}
            <Card>
              <CardContent className="p-6">
                <div className="h-8 bg-muted animate-pulse rounded w-56 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-4/5"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-5 space-y-5">
                <div className="h-7 bg-muted animate-pulse rounded w-40"></div>

                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-5 bg-muted animate-pulse rounded w-20"></div>
                      <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
