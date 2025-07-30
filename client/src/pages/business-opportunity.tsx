import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, Users, TrendingUp, CheckCircle, MapPin, DollarSign, Award, ArrowRight, Globe } from "lucide-react";
import { useLocation } from "wouter";
import businessmanImage from "@assets/image_1753829903665.png";

export default function BusinessOpportunity() {
  const { t } = useLanguage();
  const [, navigate] = useLocation();

  const benefits = [
    {
      icon: TrendingUp,
      title: "Growing Market Demand",
      description: "Join the expanding global certification market with increasing demand for ISO management systems and quality assurance services."
    },
    {
      icon: Award,
      title: "Established Brand Recognition",
      description: "Leverage QSI's 30+ years of experience and reputation in professional auditing and certification services worldwide."
    },
    {
      icon: Users,
      title: "Comprehensive Support",
      description: "Receive ongoing training, technical support, and business development assistance from our experienced team."
    },
    {
      icon: MapPin,
      title: "Territorial Opportunities",
      description: "Secure exclusive or semi-exclusive territorial rights in your region with potential for market expansion."
    },
    {
      icon: DollarSign,
      title: "Revenue Sharing Model",
      description: "Benefit from competitive compensation structures based on business volume and performance metrics."
    },
    {
      icon: Globe,
      title: "Global Network Access",
      description: "Gain access to QSI's international network of professionals, resources, and best practices across multiple markets."
    }
  ];

  const requirements = [
    "Demonstrated business experience in related professional services",
    "Understanding of quality management systems and certification processes",
    "Established network of potential clients in the target market",
    "Financial capacity to support business development activities",
    "Commitment to QSI's quality standards and professional ethics",
    "Ability to invest in necessary training and certification programs"
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Initial Application",
      description: "Submit your business opportunity application with detailed information about your background and market focus."
    },
    {
      step: "2",
      title: "Qualification Review",
      description: "QSI team reviews your application and assesses alignment with our partnership criteria and market needs."
    },
    {
      step: "3",
      title: "Business Discussion",
      description: "Participate in detailed discussions about business model, territorial rights, and partnership structure."
    },
    {
      step: "4",
      title: "Due Diligence",
      description: "Complete mutual due diligence process including references, financial capacity, and market analysis."
    },
    {
      step: "5",
      title: "Partnership Agreement",
      description: "Finalize partnership terms, territorial agreements, and compensation structure details."
    },
    {
      step: "6",
      title: "Training & Launch",
      description: "Complete required training programs and officially launch your QSI partnership in your region."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section - Call to become a partner */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-start gap-8 lg:gap-16">
              {/* Businessman Image - Left Side on Desktop, Top on Mobile */}
              <div className="flex-shrink-0 order-2 lg:order-1">
                <img 
                  src={businessmanImage}
                  alt="Professional businessman"
                  className="w-64 h-56 lg:w-80 lg:h-72 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              {/* Text Content - Right Side on Desktop, Bottom on Mobile */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <Handshake className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">{t('businessOpportunity')}</h1>
                <h2 className="text-xl lg:text-2xl font-light mb-4 lg:mb-6 text-white">{t('collaborationPartnership')}</h2>
                <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Join QSI as a business partner and expand your professional services portfolio while helping 
                  organizations achieve excellence through ISO certification and quality management systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Discover the advantages of partnering with QSI and building a successful certification services business
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

        {/* General Requirements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Partnership Requirements</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                We seek qualified partners who share our commitment to excellence and have the capability 
                to successfully represent QSI in their respective markets.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-qsi-orange mt-1 mr-4 flex-shrink-0" />
                    <p className="text-gray-800 text-lg">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types - RBP and RBU Explanation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Partnership Opportunities</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and market presence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* RBP Card */}
              <Card className="overflow-hidden hover-lift">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Regional Business Partner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-qsi-orange text-white p-4 rounded-full">
                      <Handshake className="h-12 w-12" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-qsi-navy mb-4">Regional Business Partner (RBP)</h3>
                  <p className="text-gray-800 mb-6 leading-relaxed">
                    An RBP would typically be an entrepreneur or an organization that has a complementary business 
                    activity to QSI. Compensation would be based on a percentage of business volume.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Entrepreneurial business opportunity</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Complementary business activities</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Percentage-based compensation model</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Direct partnership with QSI</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Flexible business arrangements</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RBU Card */}
              <Card className="overflow-hidden hover-lift">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Regional Business Unit"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-qsi-navy text-white p-4 rounded-full">
                      <Building2 className="h-12 w-12" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-qsi-navy mb-4">Regional Business Unit (RBU)</h3>
                  <p className="text-gray-800 mb-6 leading-relaxed">
                    Depending on the market conditions, an RBU can be established in any given country or region. 
                    The conditions for this type of business relationship can be supplied to pre-qualified parties upon request.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Market-specific establishment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Regional coverage opportunities</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Customized business conditions</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Pre-qualification requirements</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-qsi-orange mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Territorial exclusivity potential</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Application Process</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our structured approach ensures mutual success and long-term partnership viability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applicationProcess.map((step, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="bg-qsi-orange text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-qsi-navy mb-4">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Single Apply Button */}
        <section className="py-16 bg-gradient-to-br from-qsi-navy to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Building2 className="h-16 w-16 text-qsi-orange mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Partnership Journey?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
              Join QSI's global network of successful partners and help organizations worldwide achieve 
              excellence through professional certification services and quality management systems.
            </p>
            <Button 
              onClick={() => window.open('https://app.nebusis.com/contexto/solicitud_colaborador.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09', '_blank')}
              size="lg"
              className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-12 py-4 text-xl font-semibold"
            >
              Apply for Partnership <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}