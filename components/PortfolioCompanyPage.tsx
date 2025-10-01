import React from 'react';
import { ArrowLeft, ExternalLink, MapPin, Calendar, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';

interface PortfolioCompanyPageProps {
  company: {
    name: string;
    tagline: string;
    description: string;
    founder: {
      name: string;
      bio: string;
      linkedIn?: string;
    };
    investment: {
      rationale: string;
      date: string;
    };
    details: {
      website: string;
      location: string;
      linkedIn?: string;
    };
    logo?: string;
  };
  onBack: () => void;
}

const PortfolioCompanyPage: React.FC<PortfolioCompanyPageProps> = ({ company, onBack }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Button */}
      <div className="border-b bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Company Header */}
            <div className="space-y-4">
              <div className="flex items-start gap-6">
                {/* Logo placeholder */}
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                  {company.logo ? (
                    <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 object-contain" />
                  ) : (
                    <span className="text-xl font-bold text-muted-foreground">
                      {company.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <h1 className="text-3xl font-bold text-foreground">{company.name}</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {company.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">About {company.name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
              </CardContent>
            </Card>

            {/* Founder Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-semibold text-foreground">Founder</h2>
                  {company.founder.linkedIn && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={company.founder.linkedIn} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{company.founder.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {company.founder.bio}
                </p>
              </CardContent>
            </Card>

            {/* Investment Rationale */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Why Appliscale Invested</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {company.investment.rationale}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-5 space-y-5">
                <h3 className="text-lg font-semibold text-foreground">Company Details</h3>
                
                <div className="space-y-4">
                  {/* Website */}
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Website</p>
                      <Button variant="link" className="p-0 h-auto text-primary" asChild>
                        <a href={company.details.website} target="_blank" rel="noopener noreferrer">
                          {company.details.website.replace(/^https?:\/\//, '')}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Investment Date */}
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Investment Date</p>
                      <p className="text-sm text-muted-foreground">{company.investment.date}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">{company.details.location}</p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  {company.details.linkedIn && (
                    <>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Linkedin className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">LinkedIn</p>
                          <Button variant="link" className="p-0 h-auto text-primary" asChild>
                            <a href={company.details.linkedIn} target="_blank" rel="noopener noreferrer">
                              Company Profile
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCompanyPage;