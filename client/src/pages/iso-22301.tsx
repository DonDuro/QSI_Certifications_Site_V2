import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShieldCheck, Calendar, Target, ExternalLink, GraduationCap, Monitor } from "lucide-react";
import { useLocation } from "wouter";

export default function ISO22301() {
  const { t } = useLanguage();
  const [, navigate] = useLocation();

  const benefits = [
    t('enhancesOrganizationalResilience'),
    t('reducesBusinessDisruption'),
    t('protectsReputationAssets'),
    t('improvesStakeholderConfidence'),
    t('ensuresComplianceRegulations'),
    t('providesCompetitiveAdvantageResilience')
  ];

  const process = [
    {
      step: "1",
      title: "Initial Review (Optional)",
      description: "Optional Gap Analysis to assess current business continuity state and identify improvement areas."
    },
    {
      step: "2", 
      title: "Stage 1 Certification Audit",
      description: "Document review to evaluate alignment with ISO 22301:2019 requirements and readiness assessment."
    },
    {
      step: "3",
      title: "Stage 2 Certification Audit",
      description: "Implementation evaluation through staff interviews, facility inspection, and business continuity practice verification."
    },
    {
      step: "4",
      title: "Certification Decision",
      description: "Independent Certification Committee reviews findings and makes formal certification decision."
    },
    {
      step: "5",
      title: "Certificate Issuance",
      description: "ISO Certificate issued upon approval, valid for three-year cycle."
    },
    {
      step: "6",
      title: "Surveillance & Recertification",
      description: "Regular surveillance audits with recertification before three-year cycle expiration."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-800 to-orange-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <ShieldCheck className="h-20 w-20 text-orange-300 mx-auto mb-8" />
              <h1 className="text-5xl font-bold mb-6">ISO 22301:2019</h1>
              <h2 className="text-2xl font-light mb-8 text-orange-100">{t('businessContinuityManagement')}</h2>
              <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
                {t('ensureOrganizationalResilience')}
              </p>
            </div>
          </div>
        </section>

        {/* History of the Standard */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-qsi-navy mb-6">{t('historyOfStandard')}</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t('iso22301History')}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="hover-lift border-orange-200">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Calendar className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-qsi-navy mb-4">Latest Available Version</h3>
                      <p className="text-3xl font-bold text-orange-600 mb-2">ISO 22301:2019</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Key Benefits for the Organization</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                ISO 22301:2019 certification provides comprehensive business continuity advantages
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-lift border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Get Certified */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Why an Organization Should Be Certified</h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Certification demonstrates preparedness for disruptions—essential for high-dependency 
                  sectors like utilities, finance, healthcare, and government.
                </p>
                <p>
                  ISO 22301 certification assures stakeholders that business continuity is systematically 
                  managed to minimize impact during crisis situations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Steps for Certification</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our systematic and internationally recognized certification process ensures credibility and value
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-orange-600 text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-qsi-navy mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training and Digital Transformation CTAs */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Training CTA */}
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 text-qsi-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-qsi-navy mb-3">Get Expert Training</h3>
                  <p className="text-gray-600 mb-4">
{t('masterIso22301Training')}
                  </p>
                  <Button 
                    className="bg-qsi-orange hover:bg-qsi-orange-hover text-white"
                    onClick={() => window.open('https://www.qsiacademy.com', '_blank')}
                  >
                    Explore Training <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Digital Transformation CTA */}
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Monitor className="h-12 w-12 text-qsi-navy mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-qsi-navy mb-3">{t('digitalManagementSystem')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('transformContinuityManagement')}
                  </p>
                  <Button 
                    variant="outline"
                    className="border-qsi-navy text-qsi-navy hover:bg-qsi-navy hover:text-white"
                    onClick={() => window.open('https://www.nebusis.com', '_blank')}
                  >
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready for Business Continuity Excellence?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Start your business continuity management system certification with QSI today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://app.nebusis.com/certificaciones/evaluacion_preliminar.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09', '_blank')}
                >
                  Get a Quote <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold bg-white/20 backdrop-blur-sm"
                  onClick={() => navigate('/contact')}
                >
                  {t('contactExperts')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}