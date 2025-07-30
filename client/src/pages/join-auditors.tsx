import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Shield, CheckCircle, ArrowRight, Globe, Award, Users } from "lucide-react";
// import auditorImage from "@assets/image_1753834782447.png";

export default function JoinAuditors() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Work with organizations worldwide across diverse industries and management systems."
    },
    {
      icon: Award,
      title: "Professional Development",
      description: "Enhance your auditing skills and gain recognized certifications in ISO management systems."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with experienced professionals and expand your industry knowledge base."
    },
    {
      icon: Shield,
      title: "Quality Standards",
      description: "Work with established quality management processes and best practices."
    },
    {
      icon: CheckCircle,
      title: "Flexible Assignments",
      description: "Choose from various audit assignments that match your expertise and schedule."
    },
    {
      icon: UserCheck,
      title: "Continuous Learning",
      description: "Stay updated with latest standards and regulations through ongoing training programs."
    }
  ];

  const requirements = [
    "Relevant auditing experience or professional background",
    "Understanding of ISO management system standards",
    "Strong analytical and communication skills",
    "Professional certification or willingness to obtain certifications",
    "Ability to travel for on-site audits when required",
    "Commitment to QSI's quality standards and ethics"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-start gap-8 lg:gap-16">
              <div className="flex-shrink-0 order-2 lg:order-1">
                <img 
                  src="/assets/hero/coaching.png"
                  alt="Professional auditor"
                  className="w-64 h-56 lg:w-80 lg:h-72 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              <div className="text-center lg:text-left order-1 lg:order-2">
                <UserCheck className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">{t('joinAuditorsTitle')}</h1>
                <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0">
                  {t('auditorsSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">{t('whyJoinAuditors')}</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                {t('auditorsOpportunities')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="hover-lift text-center">
                    <CardContent className="p-8">
                      <div className="bg-qsi-orange text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-qsi-navy mb-4">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Auditor Requirements</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Key qualifications and characteristics we look for in our auditing professionals
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-qsi-orange mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>
              
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-qsi-navy mb-6">Professional Growth</h3>
                  <p className="text-gray-700 mb-6">
                    As a QSI auditor, you'll have access to continuous professional development opportunities, 
                    including training on the latest ISO standards, auditing techniques, and industry best practices. 
                    Our comprehensive support system ensures you stay at the forefront of certification services.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Regular training updates on ISO standards</li>
                    <li>• Mentorship from experienced lead auditors</li>
                    <li>• Access to QSI's global knowledge base</li>
                    <li>• Professional certification support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section className="py-16 bg-gradient-to-br from-qsi-navy to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <UserCheck className="h-16 w-16 text-qsi-orange mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Auditing Team?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
              Take the next step in your auditing career and become part of QSI's professional team. 
              Help organizations worldwide achieve excellence through quality management system certifications.
            </p>
            <Button 
              onClick={() => window.open('https://app.nebusis.com/contexto/solicitud_colaborador.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09', '_blank')}
              size="lg"
              className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-12 py-4 text-xl font-semibold"
            >
              Apply as Auditor <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}