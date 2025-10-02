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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-semibold text-slate-900 mb-16 text-center">Our Portfolio</h2>

        <div className="space-y-16">
          {portfolioData.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-medium text-slate-500 mb-8 text-center tracking-wider uppercase">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.companies.map((company) => (
                <Link key={company.id} href={`/company/${company.id}`}>
                  <Card className="hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-slate-50 transition-colors group-hover:bg-slate-100">
                          <company.icon className="h-5 w-5 text-slate-700" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-slate-900">
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
