import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioItems } from "../../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";

export function FeaturedProjects() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Work"
          title="Projects We're Proud Of"
          subtitle="A selection of our finest work—each one a story of challenge, strategy, and exceptional results."
        />

        <div className="space-y-8 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/portfolio/${project.slug}`}
                className={`group flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 p-6 bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/5 rounded-2xl hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300`}
              >
                {/* Image */}
                <div className="lg:w-1/2 rounded-xl overflow-hidden aspect-video bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-[#2563EB] text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white [font-family:'Plus_Jakarta_Sans',sans-serif] mb-1">{project.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{project.client}</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{project.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.stats.slice(0, 4).map((stat) => (
                      <div key={stat.label} className="p-3 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/8 rounded-xl">
                        <div className="text-lg font-bold text-[#2563EB] [font-family:'Plus_Jakarta_Sans',sans-serif]">{stat.value}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs rounded-md border border-slate-200 dark:border-white/8 [font-family:'JetBrains_Mono',monospace]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#2563EB] font-semibold text-sm group-hover:gap-2.5 transition-all">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] font-semibold rounded-full hover:bg-[#2563EB] hover:text-white transition-all"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
