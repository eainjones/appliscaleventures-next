import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, TrendingUp, Lightbulb, Globe, Handshake } from 'lucide-react';

export const metadata = {
  title: 'Why Appliscale Ventures',
  description: 'Learn why founders choose Appliscale Ventures as their partner in building transformative companies.',
};

export default function Why() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Why Partner with Appliscale Ventures
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're more than capital. We're your partners in building transformative companies
              that define the future of technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Our Investment Approach</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Founder-First Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We invest in exceptional founders who have deep domain expertise and the vision
                  to build category-defining companies. Your success is our success.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Handshake className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Long-Term Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed for the long haul. We build lasting relationships and support
                  our portfolio companies through every stage of growth.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Strategic Value-Add</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Beyond capital, we provide strategic guidance, operational expertise, and
                  access to our extensive network of industry leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">What We Bring to the Table</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our team has deep expertise across technology, operations, and scaling businesses.
                We've been in your shoes and understand what it takes to build enduring companies.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Network Access</h3>
                    <p className="text-muted-foreground">
                      Connect with industry experts, potential customers, and strategic partners
                      across Europe and the US.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Growth Expertise</h3>
                    <p className="text-muted-foreground">
                      Proven strategies for scaling teams, processes, and go-to-market efforts
                      from pre-seed to Series B and beyond.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Global Perspective</h3>
                    <p className="text-muted-foreground">
                      Insights and connections across multiple markets, helping you expand
                      internationally when the time is right.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-card shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Investment Focus</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Pre-seed to Series A investments in transformative companies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Technology-driven businesses with strong unit economics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Exceptional founders with deep domain expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Companies solving significant market problems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Opportunities across Europe and the United States</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Values</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Transparency and open communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Long-term thinking over short-term gains</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Partnership and collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Commitment to founder success</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for exceptional founders with bold visions.
            If you're building something transformative, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
