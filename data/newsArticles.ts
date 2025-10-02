export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  category: 'Investment' | 'Portfolio News' | 'Insights' | 'Company Update';
  image?: string;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "appliscale-ventures-announces-investment-harmonyze",
    title: "Appliscale Ventures Announces Strategic Investment in Harmonyze",
    excerpt: "We're excited to announce our latest investment in Harmonyze, an AI-powered business automation platform that's revolutionizing how enterprises optimize their workflows.",
    content: `We're thrilled to announce that Appliscale Ventures has led a strategic investment in Harmonyze, a Boston-based company developing advanced AI-driven business process automation solutions.

## Why Harmonyze?

Harmonyze represents the future of enterprise efficiency. Their platform leverages cutting-edge artificial intelligence to analyze existing business processes and automatically suggest optimizations that deliver measurable ROI. In our evaluation, we were impressed by:

- **Proven Technology**: Harmonyze's AI engine has demonstrated consistent performance improvements across diverse industries
- **Exceptional Team**: Led by Dr. Michael Rodriguez, a PhD from MIT with previous AI leadership roles at Google
- **Market Opportunity**: The business process automation market is experiencing explosive growth, projected to reach $19.6B by 2026
- **Early Traction**: Strong customer adoption with documented efficiency gains averaging 35%

## Our Investment Thesis

At Appliscale Ventures, we focus on backing exceptional founders building transformative companies. Harmonyze embodies this philosophy. Their technology addresses a critical pain point for enterprises: the complexity and cost of manual process optimization.

The combination of Dr. Rodriguez's technical expertise, the team's execution capability, and the massive market opportunity makes this investment a strategic priority for our portfolio.

## Looking Forward

We're excited to partner with the Harmonyze team as they scale their platform and expand into new markets. This investment aligns with our commitment to supporting innovative companies that leverage AI to solve real business problems.

Welcome to the Appliscale Ventures family, Harmonyze!`,
    author: {
      name: "Eain Jones",
      role: "Managing Partner"
    },
    publishedDate: "2024-01-15",
    category: "Investment",
    tags: ["Investment", "AI", "Enterprise Software", "Automation"]
  },
  {
    id: "2",
    slug: "portfolio-update-q4-2023",
    title: "Portfolio Update: Q4 2023 Highlights",
    excerpt: "A look back at the achievements and milestones reached by our portfolio companies in the fourth quarter of 2023.",
    content: `As we close out 2023, we're proud to share the remarkable progress made by our portfolio companies this quarter. Here are the highlights:

## Demoboost Raises Series A

Demoboost announced their $15M Series A funding round, led by prominent Silicon Valley investors. The company has seen 300% year-over-year growth and now serves over 500 enterprise customers.

## Quick9 Launches Enterprise Platform

Quick9 released their enterprise-grade customer service platform, featuring advanced AI capabilities and seamless integration with major CRM systems. Early customers report 40% reduction in response times.

## TVAD.ia Partners with Major Networks

TVAD.ia signed strategic partnerships with three major television networks, expanding their addressable advertising platform to reach over 50 million households.

## Bedrock Achieves SOC 2 Compliance

Bedrock successfully completed their SOC 2 Type II audit, a critical milestone for enterprise adoption. The company also expanded their infrastructure platform to support multi-cloud deployments.

## Looking Ahead to 2024

We're excited about the momentum across our portfolio and look forward to supporting our companies as they continue to scale and innovate in 2024.`,
    author: {
      name: "Kamil Kuback",
      role: "Partner"
    },
    publishedDate: "2023-12-20",
    category: "Portfolio News",
    tags: ["Portfolio Update", "Milestones", "Growth"]
  },
  {
    id: "3",
    slug: "future-of-ai-enterprise-automation",
    title: "The Future of AI in Enterprise Automation",
    excerpt: "Our perspective on how artificial intelligence is transforming enterprise workflows and what it means for the future of work.",
    content: `Artificial intelligence is fundamentally changing how enterprises operate. At Appliscale Ventures, we're seeing this transformation firsthand through our portfolio companies and market research.

## The Current State

Enterprise automation has evolved significantly over the past decade. What started as simple rule-based automation has evolved into sophisticated AI-driven systems that can:

- Learn from existing processes
- Identify optimization opportunities
- Adapt to changing business requirements
- Predict and prevent issues before they occur

## Key Trends We're Watching

### 1. Intelligent Process Discovery

Modern AI systems can automatically map existing business processes by analyzing system logs, user interactions, and data flows. This eliminates the need for costly manual process documentation.

### 2. Predictive Optimization

AI platforms are moving beyond reactive automation to predictive optimization. They can forecast bottlenecks, resource constraints, and efficiency opportunities before they impact operations.

### 3. Natural Language Interfaces

The barrier to automation is dropping as natural language processing enables non-technical users to configure and deploy automated workflows using conversational interfaces.

### 4. Integration of Multiple AI Technologies

The most powerful solutions combine multiple AI approaches: machine learning for pattern recognition, natural language processing for communication, and computer vision for document processing.

## Investment Implications

For investors, the enterprise automation space presents significant opportunities. We look for companies that:

- Have defensible AI technology with clear performance advantages
- Address specific, high-value enterprise pain points
- Can demonstrate measurable ROI for customers
- Have teams with deep domain expertise

## Conclusion

The future of enterprise automation is AI-driven, adaptive, and accessible. Companies that can harness these technologies effectively will have significant competitive advantages in the years ahead.`,
    author: {
      name: "Konrad Kaplita",
      role: "Partner"
    },
    publishedDate: "2023-11-28",
    category: "Insights",
    tags: ["AI", "Automation", "Enterprise", "Innovation"]
  },
  {
    id: "4",
    slug: "erebor-announces-major-platform-update",
    title: "Erebor Announces Major Platform Update with Blockchain Integration",
    excerpt: "Portfolio company Erebor unveils comprehensive platform update featuring advanced blockchain capabilities and enhanced IoT integration.",
    content: `We're excited to share that Erebor, one of our portfolio companies, has announced a major update to their technology platform that significantly expands their capabilities in emerging technologies.

## Platform 2.0 Features

The new release includes:

**Blockchain Integration**
- Native support for major blockchain protocols
- Smart contract deployment and management tools
- Decentralized identity solutions

**Enhanced IoT Capabilities**
- Real-time device management at scale
- Edge computing integration
- Predictive maintenance algorithms

**Advanced Analytics**
- AI-powered insights engine
- Custom visualization tools
- Automated reporting and alerting

## Market Impact

This update positions Erebor to address the growing demand for integrated emerging technology solutions. Enterprises increasingly need platforms that can combine multiple cutting-edge technologies into cohesive systems.

## Why This Matters

Elena Volkov and her team at Erebor have demonstrated exceptional ability to identify and integrate emerging technologies before they reach mainstream adoption. This latest release showcases their technical depth and market understanding.

We're proud to support Erebor as they continue to push the boundaries of what's possible in platform development.`,
    author: {
      name: "Michal Niec",
      role: "Partner"
    },
    publishedDate: "2023-10-10",
    category: "Portfolio News",
    tags: ["Portfolio Update", "Blockchain", "IoT", "Platform"]
  },
  {
    id: "5",
    slug: "building-venture-backed-company-founders-guide",
    title: "Building a Venture-Backed Company: A Founder's Guide",
    excerpt: "Lessons and insights from our experience working with exceptional founders across our portfolio.",
    content: `After working with dozens of exceptional founders, we've identified key patterns that distinguish successful venture-backed companies. Here's what we've learned:

## 1. Focus on Product-Market Fit First

The most successful companies in our portfolio obsessed over product-market fit before scaling. They:

- Talked to customers constantly
- Iterated quickly based on feedback
- Measured the right metrics
- Knew when they had achieved true PMF

## 2. Build the Right Team Early

Exceptional founders prioritize team building from day one. They:

- Hire for culture fit and potential, not just experience
- Create clear values and operating principles
- Invest in team development and retention
- Build diverse teams with complementary skills

## 3. Be Capital Efficient

Even with venture funding, the best founders remain capital efficient. They:

- Focus spending on high-ROI activities
- Build sustainable unit economics
- Plan for multiple scenarios
- Maintain runway awareness

## 4. Communicate Transparently

Strong founder-investor relationships are built on transparency. Successful founders:

- Share both good and bad news promptly
- Ask for help when they need it
- Provide regular, detailed updates
- Involve investors in strategic decisions

## 5. Think Long-Term

Building enduring companies requires long-term thinking. Great founders:

- Make decisions that compound over time
- Build sustainable competitive advantages
- Invest in their teams and culture
- Balance short-term execution with long-term vision

## Conclusion

Building a venture-backed company is challenging, but these principles provide a foundation for success. We're privileged to work with founders who embody these characteristics and look forward to supporting many more exceptional entrepreneurs.

If you're a founder working on something transformative, we'd love to hear from you.`,
    author: {
      name: "Eain Jones",
      role: "Managing Partner"
    },
    publishedDate: "2023-09-15",
    category: "Insights",
    tags: ["Founders", "Venture Capital", "Startups", "Advice"]
  }
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: NewsArticle['category']): NewsArticle[] => {
  return newsArticles.filter(article => article.category === category);
};

export const getRecentArticles = (limit: number = 3): NewsArticle[] => {
  return newsArticles
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
};
