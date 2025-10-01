import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Presentation, MessageCircle, Bot, Tv, Server, Code, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const portfolioData = [
    {
      category: "PORTFOLIO COMPANIES",
      companies: [
        { id: "demoboost", name: "demoboost", description: "Sales enablement and demo automation platform", icon: Presentation },
        { id: "quick9", name: "quick9", description: "Next-generation customer service solutions", icon: MessageCircle },
        { id: "harmonyze", name: "harmonyze", description: "AI-powered business automation and workflow optimization", icon: Bot },
        { id: "tvad-ia", name: "TVAD.ia", description: "Advanced television advertising technology platform", icon: Tv },
        { id: "bedrock", name: "Bedrock", description: "Infrastructure solutions for modern enterprises", icon: Server },
        { id: "erebor", name: "Erebor", description: "Innovative technology solutions and platform development", icon: Code },
        { id: "first-party-capital", name: "First Party Capital", description: "Strategic investment and capital management firm", icon: TrendingUp }
      ]
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Our Portfolio</h2>
        
        <div className="space-y-16">
          {portfolioData.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center tracking-wide">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.companies.map((company) => (
                <Link key={company.id} href={`/company/${company.id}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <company.icon className="h-6 w-6 text-slate-600" />
                        <CardTitle className="text-xl text-slate-900">
                          {company.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {company.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
