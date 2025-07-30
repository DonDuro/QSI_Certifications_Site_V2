import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Leaf, HardHat, Shield as SecurityIcon, Zap, Monitor, GraduationCap, Lock, UserCheck, FileCheck, ShoppingCart, Activity, MapPin, Brain } from "lucide-react";

const isoStandards = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management Systems",
    description: "Enhance customer satisfaction through effective quality management processes",
    icon: Shield,
    color: "bg-qsi-orange"
  },
  {
    id: "iso-14001", 
    title: "ISO 14001:2015",
    subtitle: "Environmental Management Systems",
    description: "Demonstrate environmental responsibility and regulatory compliance",
    icon: Leaf,
    color: "bg-qsi-navy"
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018", 
    subtitle: "Occupational Health and Safety Management Systems",
    description: "Protect workers and create safer workplace environments",
    icon: HardHat,
    color: "bg-qsi-orange"
  },
  {
    id: "iso-18788",
    title: "ISO 18788:2015",
    subtitle: "Security Operations Management Systems", 
    description: "Professional security operations and risk management standards",
    icon: SecurityIcon,
    color: "bg-qsi-navy"
  },
  {
    id: "iso-50001",
    title: "ISO 50001:2018",
    subtitle: "Energy Management Systems",
    description: "Improve energy performance and reduce environmental impact", 
    icon: Zap,
    color: "bg-qsi-orange"
  },
  {
    id: "iso-20000-1",
    title: "ISO/IEC 20000-1:2018", 
    subtitle: "IT Service Management Systems",
    description: "Deliver consistent, high-quality IT services to customers",
    icon: Monitor,
    color: "bg-qsi-navy"
  },
  {
    id: "iso-21001",
    title: "ISO 21001:2018",
    subtitle: "Educational Organizations Management Systems",
    description: "Enhance learning effectiveness in educational institutions",
    icon: GraduationCap,
    color: "bg-qsi-orange"
  },
  {
    id: "iso-27001",
    title: "ISO/IEC 27001:2022",
    subtitle: "Information Security Management Systems", 
    description: "Protect sensitive information and manage security risks",
    icon: Lock,
    color: "bg-qsi-navy"
  },
  {
    id: "iso-37001",
    title: "ISO 37001:2025",
    subtitle: "Anti-Bribery Management Systems",
    description: "Prevent, detect and address bribery in organizations",
    icon: UserCheck,
    color: "bg-qsi-orange"
  },
  {
    id: "iso-37301", 
    title: "ISO 37301:2021",
    subtitle: "Compliance Management Systems",
    description: "Ensure regulatory compliance and ethical business practices",
    icon: FileCheck,
    color: "bg-qsi-navy"
  },
  {
    id: "iso-22000",
    title: "ISO 22000:2018",
    subtitle: "Food Safety Management Systems",
    description: "Ensure food safety throughout the entire food chain",
    icon: ShoppingCart,
    color: "bg-qsi-orange"
  },
  {
    id: "iso-22301",
    title: "ISO 22301:2019", 
    subtitle: "Security and Resilience - Business Continuity Management Systems",
    description: "Maintain business operations during disruptive incidents",
    icon: Activity,
    color: "bg-qsi-navy"
  },
  {
    id: "iso-54001",
    title: "ISO/TS 54001:2019",
    subtitle: "Quality Management Systems for Territorial Governance",
    description: "Improve governance and service delivery for territorial organizations",
    icon: MapPin,
    color: "bg-qsi-orange"
  },
  {
    id: "iso-42001",
    title: "ISO/IEC 42001:2023",
    subtitle: "Artificial Intelligence Management Systems",
    description: "Manage AI systems responsibly and ethically in your organization",
    icon: Brain,
    color: "bg-qsi-navy"
  }
];

export default function CertificationPrograms() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-qsi-orange mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6">Certification Programs</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive ISO management system certifications to enhance your organization's performance, 
                compliance, and competitive advantage
              </p>
            </div>
          </div>
        </section>

        {/* ISO Standards Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isoStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <Card key={index} className="hover-lift h-full group">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className={`${standard.color} text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-qsi-navy mb-2 text-center">
                        {standard.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-600 mb-4 text-center">
                        {standard.subtitle}
                      </h4>
                      <p className="text-gray-600 text-center flex-grow mb-6">
                        {standard.description}
                      </p>
                      <div className="text-center">
                        <Link href={`/${standard.id}`}>
                          <Button 
                            className="bg-qsi-orange hover:bg-qsi-orange-hover text-white font-semibold w-full"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-qsi-navy mb-6">
              Ready to Get Certified?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Start your certification journey today with QSI's expert guidance and comprehensive support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.nebusis.com/certificaciones/evaluacion_preliminar.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-8 py-4 text-lg font-semibold"
                >
                  Get Certified
                </Button>
              </a>
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-qsi-navy text-qsi-navy hover:bg-qsi-navy hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}