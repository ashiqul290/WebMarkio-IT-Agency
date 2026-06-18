import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { BackToTop } from "./components/shared/BackToTop";
import { WhatsAppButton } from "./components/shared/WhatsAppButton";
import { CustomCursor } from "./components/shared/CustomCursor";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioDetailPage } from "./pages/PortfolioDetailPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { PricingPage } from "./pages/PricingPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { FAQPage } from "./pages/FAQPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { RefundPolicyPage } from "./pages/RefundPolicyPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
