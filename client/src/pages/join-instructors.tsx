import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, CheckCircle, ArrowRight, Users, Award, Globe } from "lucide-react";
import instructorImage from "@assets/image_1753834701664.png";

export default function JoinInstructors() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: BookOpen,
      title: "Expert Curriculum",
      description: "Deliver comprehensive training programs based on the latest ISO standards and best practices."
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Train professionals from diverse industries and countries through our international network."
    },
    {
      icon: Award,
      title: "Professional Recognition",
      description: "Build your reputation as a certified instructor in quality management systems."
    },
    {
      icon: Globe,
      title: "Flexible Delivery",
      description: "Conduct training through various formats including online, in-person, and hybrid sessions."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Stay updated with latest developments in ISO standards and training methodologies."
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Support",
      description: "Access to training materials, resources, and ongoing instructor development programs."
    }
  ];

  const requirements = [
    "Extensive knowledge of ISO management systems",
    "Professional training or teaching experience",
    "Strong presentation and communication skills",
    "Relevant industry certifications or qualifications",
    "Ability to engage diverse professional audiences",
    "Commitment to QSI's educational standards and quality"
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
                  src={instructorImage}
                  alt="Professional instructor"
                  className="w-64 h-56 lg:w-80 lg:h-72 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              <div className="text-center lg:text-left order-1 lg:order-2">
                <GraduationCap className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">{t('joinInstructorsTitle')}</h1>
                <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0">
                  {t('instructorsSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">{t('whyJoinInstructors')}</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                {t('instructorsOpportunities')}
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
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Instructor Requirements</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Essential qualifications and skills for joining our team of professional instructors
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
                  <h3 className="text-2xl font-bold text-qsi-navy mb-6">Training Excellence</h3>
                  <p className="text-gray-700 mb-6">
                    QSI Academy instructors deliver world-class training programs to over 10,000 professionals 
                    from more than 40 countries. Our comprehensive approach ensures participants gain practical 
                    knowledge and skills in ISO management systems implementation and auditing.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Access to latest training materials and resources</li>
                    <li>• Support for course development and updates</li>
                    <li>• Instructor certification and ongoing development</li>
                    <li>• Flexible scheduling and delivery options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section className="py-16 bg-gradient-to-br from-qsi-navy to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <GraduationCap className="h-16 w-16 text-qsi-orange mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">Ready to Inspire Learning?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
              Join QSI Academy's team of expert instructors and share your knowledge with professionals 
              worldwide. Help organizations build capabilities in quality management systems.
            </p>
            <Button 
              onClick={() => window.open('https://app.nebusis.com/contexto/solicitud_colaborador.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09', '_blank')}
              size="lg"
              className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-12 py-4 text-xl font-semibold"
            >
              Apply as Instructor <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}