import Link from 'next/link';
import { ArrowRight, Palette, Sparkles, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Design Variants | Appliscale Ventures',
  description: 'Explore different design directions for the Appliscale Ventures website.',
};

export default function DesignVariantsPage() {
  const variants = [
    {
      id: 'variant-a',
      name: 'Bold & Modern',
      icon: Sparkles,
      description: 'High-contrast design with dramatic typography, bold gradients (purple/pink), and strong visual hierarchy. Perfect for making a statement.',
      features: [
        'Large, impactful typography',
        'Vibrant purple & pink gradients',
        'Dark theme with high contrast',
        'Modern, energetic feel',
        'Bold CTAs and interactions'
      ],
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
      textGradient: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-500/30 hover:border-purple-500/60'
    },
    {
      id: 'variant-b',
      name: 'Premium & Sophisticated',
      icon: Award,
      description: 'Elegant and refined design with navy/gold accents, sophisticated spacing, and luxury brand aesthetics. Conveys trust and prestige.',
      features: [
        'Refined typography with light weights',
        'Navy blue & gold/amber palette',
        'Generous white space',
        'Sophisticated, trustworthy feel',
        'Subtle, elegant animations'
      ],
      gradient: 'from-amber-600 via-yellow-500 to-amber-400',
      textGradient: 'from-amber-400 to-yellow-400',
      borderColor: 'border-amber-500/30 hover:border-amber-500/60'
    },
    {
      id: 'variant-c',
      name: 'Tech-Forward',
      icon: Palette,
      description: 'Modern tech aesthetic with glassmorphism, vibrant cyan/blue gradients, and futuristic elements. Perfect for a cutting-edge tech brand.',
      features: [
        'Glassmorphism & backdrop blur',
        'Cyan, blue & purple gradients',
        'Animated background elements',
        'Modern, futuristic feel',
        'Bento grid layouts'
      ],
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
      textGradient: 'from-cyan-400 to-blue-400',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500/60'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Design Variants
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore three distinct design directions for the Appliscale Ventures website.
              Each variant represents a different aesthetic approach while maintaining the core content and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Variants Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid gap-8">
            {variants.map((variant, index) => (
              <div
                key={variant.id}
                className={`group relative overflow-hidden rounded-2xl border-2 ${variant.borderColor} transition-all duration-300 hover:shadow-xl`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${variant.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

                <div className="relative p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Info */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${variant.gradient}`}>
                          <variant.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className={`text-3xl font-semibold bg-gradient-to-r ${variant.textGradient} bg-clip-text text-transparent`}>
                            {variant.name}
                          </h2>
                          <p className="text-sm text-muted-foreground">Variant {String.fromCharCode(65 + index)}</p>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {variant.description}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Key Features</h3>
                        <ul className="space-y-3">
                          {variant.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${variant.textGradient}`}></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={`/design-variants/${variant.id}`}>
                        <button className={`group/btn relative px-8 py-4 bg-gradient-to-r ${variant.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}>
                          View Full Design
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>

                    {/* Right: Preview mockup */}
                    <div className="relative">
                      <div className="aspect-video bg-slate-950 rounded-lg border border-slate-800 overflow-hidden shadow-2xl">
                        {/* Browser chrome */}
                        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex-grow bg-slate-800 rounded px-3 py-1 text-xs text-slate-400">
                            appliscaleventures.com
                          </div>
                        </div>

                        {/* Simplified preview */}
                        <div className={`p-8 bg-gradient-to-br ${variant.gradient} opacity-20 h-full`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`text-white/90 text-center`}>
                            <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${variant.textGradient} bg-clip-text text-transparent`}>
                              {variant.name}
                            </div>
                            <div className="text-sm text-white/60">Click to explore →</div>
                          </div>
                        </div>
                      </div>

                      {/* Floating badge */}
                      <div className="absolute -top-2 -right-2 px-3 py-1 bg-background border-2 border-border rounded-full text-xs font-medium shadow-lg">
                        Full Page
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            How to Choose
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Each variant maintains the same content structure but presents it with a distinct visual identity.
            Click through each option to see the full homepage design, then let us know which direction resonates with your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/">
              <button className="px-6 py-3 bg-background border border-border rounded-lg font-medium hover:bg-background/80 transition-colors">
                View Current Site
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
