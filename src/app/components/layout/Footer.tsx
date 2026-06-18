import { Link } from "react-router";
import { Globe, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/contact" },
    { label: "Press", href: "/blog" },
  ],
  services: [
    { label: "Website Development", href: "/services" },
    { label: "Facebook Ads", href: "/services/facebook-ads" },
    { label: "Google Ads", href: "/services/google-ads" },
    { label: "SEO", href: "/services/seo" },
    { label: "Branding", href: "/services/branding" },
    { label: "Graphic Design", href: "/services/graphic-design" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white [font-family:'Plus_Jakarta_Sans',sans-serif]">
                Web<span className="text-[#2563EB]">Markio</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium digital agency building websites and marketing campaigns that drive real business growth. 200+ projects delivered.
            </p>
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href="mailto:hello@webmarkio.com" className="hover:text-white transition-colors">hello@webmarkio.com</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href="tel:+11234567890" className="hover:text-white transition-colors">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>123 Digital Ave, San Francisco, CA 94105</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Get weekly growth insights. No spam, unsubscribe anytime.</p>
            {subscribed ? (
              <p className="text-sm text-[#22C55E] font-medium">✓ You're subscribed!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#2563EB] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} WebMarkio Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} to={link.href} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
