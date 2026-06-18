import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle, Globe, Briefcase, Target, Palette, Zap, UtensilsCrossed, GraduationCap, Heart, ShoppingCart, TrendingUp, Search, BarChart2, Sparkles, Layers, Building2 } from "lucide-react";
import { getServiceBySlug } from "../../data/services";
import { PageTransition } from "../components/shared/PageTransition";
import { CTASection } from "../components/home/CTASection";
import { NotFoundPage } from "./NotFoundPage";

const iconMap: Record<string, React.ElementType> = {
  Building2, Briefcase, Target, Palette, Zap, UtensilsCrossed,
  GraduationCap, Heart, ShoppingCart, TrendingUp, Search, BarChart2, Sparkles, Layers
};

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <NotFoundPage />;

  const Icon = iconMap[service.icon] || Globe;

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(37,99,235,0.12)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[#2563EB]/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <span className="text-blue-300 text-sm font-medium">{service.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white [font-family:'Plus_Jakarta_Sans',sans-serif] leading-tight mb-4">{service.title}</h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[#22C55E] [font-family:'Plus_Jakarta_Sans',sans-serif]">{service.price}</span>
                <Link to="/contact" className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30">
                  Get Started
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <img src={service.image} alt={service.title} className="w-full rounded-2xl border border-white/10 object-cover" style={{ height: "clamp(200px, 30vw, 360px)" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-6">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 p-3 bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/5 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-200">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={b} className="p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 rounded-2xl">
                      <div className="text-2xl font-bold text-[#2563EB] [font-family:'Plus_Jakarta_Sans',sans-serif] mb-1">0{i + 1}</div>
                      <p className="text-slate-700 dark:text-slate-200 font-medium">{b}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4 p-5 bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/5 rounded-2xl">
                      <div className="w-10 h-10 bg-[#2563EB] text-white rounded-xl flex items-center justify-center font-bold shrink-0 [font-family:'JetBrains_Mono',monospace] text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E293B] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-1">{step.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24">
                <div className="p-6 bg-[#0F172A] dark:bg-[#2563EB]/10 border border-white/10 rounded-2xl text-white">
                  <h3 className="text-lg font-bold [font-family:'Plus_Jakarta_Sans',sans-serif] mb-2">Ready to get started?</h3>
                  <p className="text-slate-300 text-sm mb-5">Book a free 45-minute strategy call with our team.</p>
                  <Link to="/contact" className="block w-full text-center px-5 py-3 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors mb-3">
                    Book Free Consultation
                  </Link>
                  <Link to="/pricing" className="block w-full text-center px-5 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors">
                    View Pricing
                  </Link>
                </div>
                <div className="mt-6 p-6 bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/5 rounded-2xl">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Starting at</p>
                  <p className="text-3xl font-bold text-[#2563EB] [font-family:'Plus_Jakarta_Sans',sans-serif]">{service.price}</p>
                  <p className="text-xs text-slate-400 mt-1">Custom quotes based on scope</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
