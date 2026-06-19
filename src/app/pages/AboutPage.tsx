import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Award, Users, Globe, TrendingUp, CheckCircle } from "lucide-react";
import { teamMembers } from "../../data/team";
import { SectionHeading } from "../components/shared/SectionHeading";
import { PageTransition } from "../components/shared/PageTransition";
import { CTASection } from "../components/home/CTASection";

const timeline = [
  { year: "2024", title: "Agency Founded", description: "Started the agency with a vision to help businesses build modern websites and grow their online presence." },
  { year: "2024", title: "First Clients", description: "Successfully completed our first client projects and built long-term relationships through quality work." },
  { year: "2025", title: "Team Growth", description: "Expanded our team with skilled designers, developers, and digital marketing professionals." },
  { year: "2025", title: "Service Expansion", description: "Successfully delivered over 50 projects across multiple industries with a strong focus on client satisfaction." },
  { year: "2026", title: "Marketing Services Launch", description: "Expanded our services to include web development, UI/UX design, SEO, social media marketing, and branding." },
  { year: "2026", title: "Growing Together", description: "Continuing to help businesses grow through innovative digital solutions while building lasting partnerships." },
  // { year: "2024", title: "200+ Projects Delivered", description: "Reached 200+ successful project deliveries with a team of 18 specialists across design, development, and marketing." },
];

const values = [
  { icon: Award, title: "Craft Excellence", description: "Every pixel, every line of code, every word of copy—we care deeply about the quality of our work." },
  { icon: Users, title: "Client Obsession", description: "Your success is our success. We go beyond the brief to deliver outcomes that genuinely move your business forward." },
  { icon: Globe, title: "Integrity Always", description: "Honest timelines, transparent pricing, and candid strategic advice—even when it's not what you want to hear." },
  { icon: TrendingUp, title: "Results-Driven", description: "Beauty without performance is decoration. We build things that are both beautiful and measurably effective." },
];

const achievements = [
  { icon: Award, value: "#1", label: "Digital Agency Rating" },
  { icon: Users, value: "200+", label: "Projects Delivered" },
  { icon: Globe, value: "30+", label: "Industries Served" },
  { icon: TrendingUp, value: "$50M+", label: "Client Revenue Generated" },
];

export function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(37,99,235,0.12)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-300 text-sm font-semibold rounded-full border border-blue-500/20 mb-5">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white [font-family:'Plus_Jakarta_Sans',sans-serif] leading-tight mb-6">
              We're Builders,
              <br />
              <span className="text-[#2563EB]">Strategists & Partners</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Since 2018, WebMarkio has been crafting digital experiences that drive real business growth. We're not just an agency—we're the partner ambitious businesses call when they need results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 bg-[#2563EB] rounded-2xl">
              <h2 className="text-2xl font-bold text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-4">Our Mission</h2>
              <p className="text-blue-100 leading-relaxed">
                To make world-class digital experiences accessible to every ambitious business—not just Fortune 500 companies. We believe a beautifully designed, high-performing website is a competitive right, not a luxury.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/5 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-4">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most trusted digital partner for growth-stage businesses—the agency that CEOs call when they need to make a step-change in their digital presence and can't afford to get it wrong.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-slate-50 dark:bg-[#0A0F1E] border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div key={a.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2563EB] [font-family:'Plus_Jakarta_Sans',sans-serif] mb-1">{a.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{a.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Journey" title="Built Over 3 Years of Commitment" subtitle="From a two-person team in 2024 to an 20-person agency trusted by companies worldwide." />
          <div className="relative space-y-8">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-slate-100 dark:bg-white/5 hidden md:block" />
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-6 md:gap-8">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#2563EB] text-white rounded-xl flex items-center justify-center font-bold text-sm [font-family:'JetBrains_Mono',monospace] z-10">
                    {item.year}
                  </div>
                </div>
                <div className="pb-8 flex-1">
                  <h3 className="font-bold text-[#1E293B] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50 dark:bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="The Team" title="Meet the People Behind Your Success" subtitle="Our team of strategists, designers, developers, and marketers who work tirelessly to deliver exceptional results." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div key={member.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white dark:bg-[#0F172A] border border-slate-100 dark:border-white/5 rounded-2xl p-6 hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-lg transition-all">
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-2xl object-cover mb-4" />
                <h3 className="font-bold text-[#1E293B] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif]">{member.name}</h3>
                <p className="text-sm text-[#2563EB] mb-3">{member.role}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Values" title="What We Stand For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-6 bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/5 rounded-2xl text-center">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="font-bold text-[#1E293B] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="py-24 bg-slate-50 dark:bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Space" title="Where the Magic Happens" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format",
            ].map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img src={src} alt={`Office ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
