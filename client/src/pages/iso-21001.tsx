import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, GraduationCap, Calendar, Target, ExternalLink, Monitor } from "lucide-react";

export default function ISO21001() {
  const { t } = useLanguage();

  const benefits = [
    t('improvesLearningProcesses'),
    t('enhancesTransparencyAccountability'),
    t('promotesInclusionAccessibility'),
    t('alignsLearningOutcomes'),
    t('encouragesInnovation'),
    t('strengthensInstitutionalCredibility')
  ];

  const process = [
    {
      step: "1",
      title: t('initialReviewOptional'),
      description: t('optionalGapAnalysisEducation')
    },
    {
      step: "2", 
      title: t('stage1CertificationAudit'),
      description: t('documentReviewIso21001')
    },
    {
      step: "3",
      title: t('stage2CertificationAudit'),
      description: t('implementationEvaluationEducation')
    },
    {
      step: "4",
      title: t('certificationDecision'),
      description: t('independentCertificationCommittee')
    },
    {
      step: "5",
      title: t('certificateIssuance'),
      description: t('isoCertificateIssued')
    },
    {
      step: "6",
      title: t('surveillanceRecertification'),
      description: t('regularSurveillanceAudits')
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-800 to-indigo-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <GraduationCap className="h-20 w-20 text-indigo-300 mx-auto mb-8" />
              <h1 className="text-5xl font-bold mb-6">ISO 21001:2018</h1>
              <h2 className="text-2xl font-light mb-8 text-indigo-100">{t('educationalOrganizationsManagement')}</h2>
              <p className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
                {t('enhanceEducationalQuality')}
              </p>
            </div>
          </div>
        </section>

        {/* History of the Standard */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-qsi-navy mb-6">History of the Standard</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Published in 2018, ISO 21001 was developed to provide a common management system 
                    for educational organizations, including training institutions, schools, and universities.
                  </p>
                  <p>
                    The standard addresses the specific needs of learners and other beneficiaries 
                    in educational environments, promoting educational excellence.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="hover-lift border-indigo-200">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Calendar className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-qsi-navy mb-4">Latest Available Version</h3>
                      <p className="text-3xl font-bold text-indigo-600 mb-2">ISO 21001:2018</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Key Benefits for the Organization</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                ISO 21001:2018 certification provides comprehensive educational management advantages
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-lift border-indigo-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
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
                  Certification establishes trust with learners, parents, regulators, and partners. 
                  It affirms the institution's quality and commitment to educational excellence.
                </p>
                <p>
                  ISO 21001 certification demonstrates that educational processes are systematically 
                  managed to achieve learning objectives and continuous improvement.
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
                      <div className="bg-indigo-600 text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
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
{t('masterIso21001Training')}
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
                    {t('transformEducationalManagement')}
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
        <section className="py-16 bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready for Educational Excellence?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Start your educational organization management system certification with QSI today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://app.nebusis.com/certificaciones/evaluacion_preliminar.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09', '_blank')}
                >
                  Get a Quote <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold bg-white/20 backdrop-blur-sm"
                >
                  Contact Our Experts
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