export interface PortfolioCompany {
  id: string;
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
}

export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: "demoboost",
    name: "demoboost",
    tagline: "Transforming sales demonstrations through intelligent automation",
    description: "Demoboost revolutionizes the sales process by providing cutting-edge demo automation technology that enables sales teams to deliver personalized, impactful demonstrations at scale. Our platform combines AI-driven personalization with seamless integration capabilities, helping businesses close deals faster and more effectively.",
    founder: {
      name: "Alex Chen",
      bio: "Former VP of Sales at Salesforce with over 15 years of experience in enterprise sales technology. Alex identified the gap in demo automation while scaling sales teams at Fortune 500 companies.",
      linkedIn: "https://linkedin.com/in/alexchen-demoboost"
    },
    investment: {
      rationale: "We invested in Demoboost because of their innovative approach to solving a critical pain point in the sales process. Their technology significantly reduces the time and resources required for sales demonstrations while improving conversion rates. The founding team's deep domain expertise and the substantial market opportunity in sales enablement made this an excellent strategic investment.",
      date: "March 2023"
    },
    details: {
      website: "https://demoboost.com",
      location: "San Francisco, CA",
      linkedIn: "https://linkedin.com/company/demoboost"
    }
  },
  {
    id: "quick9",
    name: "quick9",
    tagline: "Next-generation customer service solutions powered by AI",
    description: "Quick9 is revolutionizing customer service with AI-powered solutions that provide instant, accurate, and personalized support across multiple channels. Our platform integrates seamlessly with existing customer service infrastructure while dramatically improving response times and customer satisfaction.",
    founder: {
      name: "Sarah Martinez",
      bio: "Former Head of Customer Experience at Zendesk, Sarah brings over 12 years of experience in customer service technology and has led teams serving millions of customers globally.",
      linkedIn: "https://linkedin.com/in/sarahmartinez-quick9"
    },
    investment: {
      rationale: "Quick9's innovative AI-first approach to customer service addresses the growing demand for instant, high-quality customer support. Their technology significantly reduces response times while maintaining high satisfaction rates. The experienced team and proven market traction made this investment a strategic priority for our portfolio.",
      date: "August 2023"
    },
    details: {
      website: "https://quick9.ai",
      location: "Austin, TX",
      linkedIn: "https://linkedin.com/company/quick9"
    }
  },
  {
    id: "harmonyze",
    name: "harmonyze",
    tagline: "AI-powered business automation and workflow optimization",
    description: "Harmonyze leverages advanced artificial intelligence to streamline business processes and optimize workflows across organizations. Our platform learns from existing processes and automatically suggests improvements, reducing operational costs and increasing efficiency.",
    founder: {
      name: "Dr. Michael Rodriguez",
      bio: "PhD in Computer Science from MIT with expertise in machine learning and process optimization. Previously led AI initiatives at Google and founded two successful automation startups.",
      linkedIn: "https://linkedin.com/in/michaelrodriguez-harmonyze"
    },
    investment: {
      rationale: "Harmonyze's AI-driven approach to business process optimization represents the future of enterprise efficiency. Their technology has demonstrated measurable ROI for early customers, and the founding team's technical expertise positions them well to capture the rapidly growing automation market.",
      date: "January 2024"
    },
    details: {
      website: "https://harmonyze.ai",
      location: "Boston, MA",
      linkedIn: "https://linkedin.com/company/harmonyze"
    }
  },
  {
    id: "tvad-ia",
    name: "TVAD.ia",
    tagline: "Advanced television advertising technology platform",
    description: "TVAD.ia is transforming television advertising through intelligent targeting and real-time optimization. Our platform uses advanced analytics and machine learning to help advertisers reach the right audiences at the right time, maximizing ROI in the evolving TV advertising landscape.",
    founder: {
      name: "Jennifer Kim",
      bio: "Former Director of Advertising Technology at Netflix with 10+ years in programmatic advertising and media technology. Expert in connected TV and addressable advertising solutions.",
      linkedIn: "https://linkedin.com/in/jenniferkim-tvadia"
    },
    investment: {
      rationale: "TVAD.ia is positioned at the intersection of traditional television and digital advertising, a market undergoing massive transformation. Their technology platform addresses critical needs for precision targeting in TV advertising, and the team's deep industry expertise gives them a significant competitive advantage.",
      date: "November 2023"
    },
    details: {
      website: "https://tvad.ia",
      location: "Los Angeles, CA",
      linkedIn: "https://linkedin.com/company/tvadia"
    }
  },
  {
    id: "bedrock",
    name: "Bedrock",
    tagline: "Infrastructure solutions for modern enterprises",
    description: "Bedrock provides robust, scalable infrastructure solutions that enable modern enterprises to build and deploy applications with confidence. Our platform offers comprehensive cloud-native tools for development, deployment, and monitoring at enterprise scale.",
    founder: {
      name: "David Thompson",
      bio: "Former Principal Engineer at Amazon Web Services with 15 years of experience in cloud infrastructure and distributed systems. Led infrastructure teams supporting millions of users worldwide.",
      linkedIn: "https://linkedin.com/in/davidthompson-bedrock"
    },
    investment: {
      rationale: "Bedrock's infrastructure platform addresses critical needs for enterprise scalability and reliability. Their technology simplifies complex infrastructure management while providing enterprise-grade security and performance. The team's proven track record in building large-scale systems makes this a compelling investment opportunity.",
      date: "June 2023"
    },
    details: {
      website: "https://bedrock.dev",
      location: "Seattle, WA",
      linkedIn: "https://linkedin.com/company/bedrock-infrastructure"
    }
  },
  {
    id: "erebor",
    name: "Erebor",
    tagline: "Innovative technology solutions and platform development",
    description: "Erebor specializes in developing cutting-edge technology platforms that solve complex business challenges. Our team creates custom solutions that integrate emerging technologies like blockchain, IoT, and advanced analytics to drive digital transformation for enterprises.",
    founder: {
      name: "Elena Volkov",
      bio: "Former CTO at a Fortune 500 technology company with expertise in emerging technologies and platform architecture. Has led digital transformation initiatives for major global enterprises.",
      linkedIn: "https://linkedin.com/in/elenavolkov-erebor"
    },
    investment: {
      rationale: "Erebor's expertise in emerging technologies and platform development positions them to capitalize on the growing demand for digital transformation solutions. Their ability to integrate multiple cutting-edge technologies into cohesive platforms creates significant value for enterprise clients.",
      date: "September 2023"
    },
    details: {
      website: "https://erebor.tech",
      location: "New York, NY",
      linkedIn: "https://linkedin.com/company/erebor-tech"
    }
  },
  {
    id: "first-party-capital",
    name: "First Party Capital",
    tagline: "Strategic investment and capital management firm",
    description: "First Party Capital is a strategic investment firm focused on identifying and nurturing high-growth companies in the technology sector. We provide not just capital, but strategic guidance and operational expertise to help companies scale effectively.",
    founder: {
      name: "Robert Chang",
      bio: "Former Managing Director at Goldman Sachs with 20+ years in investment banking and private equity. Extensive experience in technology investments and has led over $2B in transactions.",
      linkedIn: "https://linkedin.com/in/robertchang-fpc"
    },
    investment: {
      rationale: "First Party Capital's strategic approach to investment aligns perfectly with our investment philosophy. Their focus on providing operational value beyond capital, combined with the founder's exceptional track record, makes them an ideal addition to our portfolio and potential co-investment partner.",
      date: "February 2024"
    },
    details: {
      website: "https://firstpartycapital.com",
      location: "Palo Alto, CA",
      linkedIn: "https://linkedin.com/company/first-party-capital"
    }
  }
];

export const getCompanyById = (id: string): PortfolioCompany | undefined => {
  return portfolioCompanies.find(company => company.id === id);
};