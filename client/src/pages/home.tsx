import Navigation from "@/components/navigation";
import HeroCarousel from "@/components/hero-carousel";
import ServicesSection from "@/components/services-section";
import ClientShowcase from "@/components/client-showcase";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import { Handshake, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <ServicesSection />
      <ClientShowcase />
      <CallToAction />
      
      {/* Partnership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Handshake className="h-16 w-16 text-qsi-orange mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-qsi-navy mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join QSI's global network and build a successful certification services business in your region
            </p>
            <Link 
              href="/business-opportunity"
              className="inline-flex items-center bg-qsi-orange hover:bg-qsi-orange-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Partnership Options
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
