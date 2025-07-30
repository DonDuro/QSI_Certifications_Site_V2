import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PolicyViewer from "@/components/policy-viewer";
import { Link } from "wouter";
import { FileText, Shield, Users, Scale, Heart, BookOpen } from "lucide-react";
import governanceImage from "@assets/image_1753822247368.png";
import policiesImage from "@assets/image_1753824024580.png";

export default function CorporatePolicies() {
  const { t } = useLanguage();
  
  const policyCards = [
    {
      icon: Shield,
      title: t('qualityPolicy'),
      description: t('qualityPolicyDesc'),
      color: "bg-qsi-navy",
      policyId: "quality-policy"
    },
    {
      icon: Heart,
      title: t('socialResponsibilityPolicy'), 
      description: t('socialResponsibilityPolicyDesc'),
      color: "bg-qsi-orange",
      policyId: "social-responsibility-policy"
    },
    {
      icon: Scale,
      title: t('ethicsCode'),
      description: t('ethicsCodeDesc'),
      color: "bg-qsi-navy",
      policyId: "ethics-code"
    },
    {
      icon: Users,
      title: t('impartialityPolicy'),
      description: t('impartialityPolicyDesc'),
      color: "bg-qsi-orange",
      policyId: "impartiality-policy"
    },
    {
      icon: FileText,
      title: t('handlingComplaints'),
      description: t('handlingComplaintsDesc'),
      color: "bg-qsi-navy",
      policyId: "complaints-appeals"
    },
    {
      icon: BookOpen,
      title: t('certificationProcedures'),
      description: t('certificationProceduresDesc'),
      color: "bg-qsi-orange",
      policyId: "certification-process"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-start gap-8 lg:gap-16">
              {/* Policies Image - Left Side on Desktop, Top on Mobile */}
              <div className="flex-shrink-0 order-2 lg:order-1">
                <img 
                  src={policiesImage}
                  alt="Digital policies and documentation"
                  className="w-64 h-40 lg:w-80 lg:h-52 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              {/* Text Content - Right Side on Desktop, Bottom on Mobile */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <FileText className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">{t('corporatePoliciesTitle')}</h1>
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  {t('corporatePoliciesSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('governsItself')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('policiesPublished')}
              </p>
            </div>

            {/* Policy Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {policyCards.map((policy, index) => {
                const IconComponent = policy.icon;
                return (
                  <Card key={index} className="hover-lift h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className={`${policy.color} text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-qsi-navy mb-4 text-center">
                        {policy.title}
                      </h3>
                      <p className="text-gray-600 text-center flex-grow">
                        {policy.description}
                      </p>
                      <div className="text-center mt-6">
                        <PolicyViewer policyId={policy.policyId} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>



            {/* Contact Section */}
            <div className="text-left mt-16">
              <p className="text-lg text-gray-700 mb-8">
                {t('questionsAboutPolicies')}
              </p>
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-8 py-4 text-lg font-semibold"
                >
                  {t('contactUsAboutPolicies')}
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