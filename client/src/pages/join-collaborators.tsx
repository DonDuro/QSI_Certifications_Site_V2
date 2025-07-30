import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, CheckCircle, ArrowRight, TrendingUp, Globe, Award, UserPlus, BarChart, Headphones, FileText, Monitor } from "lucide-react";
// import collaboratorImage from "@assets/image_1753834479959.png";

export default function JoinCollaborators() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Globe,
      title: "Global Team",
      description: "Work with a diverse international team committed to quality and excellence in certification services."
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Develop your skills in specialized areas with opportunities for career advancement and learning."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a supportive team environment focused on mutual success and knowledge sharing."
    },
    {
      icon: TrendingUp,
      title: "Industry Leadership",
      description: "Be part of an organization at the forefront of quality management and certification services."
    },
    {
      icon: Briefcase,
      title: "Flexible Roles",
      description: "Opportunities in various specializations from entry-level to leadership positions."
    },
    {
      icon: CheckCircle,
      title: "Meaningful Impact",
      description: "Contribute to helping organizations worldwide achieve excellence and quality standards."
    }
  ];

  const collaborationAreas = [
    {
      icon: BarChart,
      title: "Business Development",
      description: "Sales, Marketing, Strategic Relations",
      roles: ["Sales Specialist", "Marketing Coordinator", "Strategic Relations Manager", "Business Development Assistant"]
    },
    {
      icon: Headphones,
      title: "Service Coordination",
      description: "Audit scheduling, Client relations, Project management",
      roles: ["Service Coordinator", "Client Relations Specialist", "Project Manager", "Operations Assistant"]
    },
    {
      icon: FileText,
      title: "Administration",
      description: "Legal, Accounting, HR, IT support",
      roles: ["Legal Assistant", "Accounting Specialist", "HR Coordinator", "IT Support Specialist"]
    }
  ];

  const roleTypes = [
    "Leadership roles - Strategic decision making and team management",
    "Coordinator roles - Project coordination and process management",
    "Specialist roles - Subject matter expertise in specific areas",
    "Assistant roles - Supporting core business functions",
    "Internships - Learning opportunities for students and new graduates"
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
                  src="/assets/hero/office-pic.jpg"
                  alt="Professional collaborator"
                  className="w-64 h-56 lg:w-80 lg:h-72 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              <div className="text-center lg:text-left order-1 lg:order-2">
                <UserPlus className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">{t('joinCollaboratorsTitle')}</h1>
                <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0">
                  {t('collaboratorsSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">{t('whyJoinCollaborators')}</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                {t('collaboratorsOpportunities')}
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

        {/* Collaboration Areas Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-qsi-navy mb-6">Areas of Collaboration</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Explore diverse opportunities across different departments and specializations
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {collaborationAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-8">
                      <div className="bg-qsi-navy text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-qsi-navy mb-4 text-center">{area.title}</h3>
                      <p className="text-gray-800 text-center mb-6">{area.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-qsi-navy">Example Roles:</h4>
                        {area.roles.map((role, roleIndex) => (
                          <div key={roleIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-qsi-orange mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-800">{role}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Role Types */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-qsi-navy mb-6 text-center">Types of Roles Available</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {roleTypes.map((role, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-qsi-orange mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{role}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-qsi-navy mb-4">What We Offer:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Professional development opportunities</li>
                      <li>• Mentorship and training programs</li>
                      <li>• Flexible work arrangements</li>
                      <li>• International exposure and experience</li>
                      <li>• Competitive compensation packages</li>
                      <li>• Collaborative team environment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Apply Section */}
        <section className="py-16 bg-gradient-to-br from-qsi-navy to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <UserPlus className="h-16 w-16 text-qsi-orange mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
              Join QSI's dynamic team and contribute to our mission of helping organizations worldwide 
              achieve excellence through quality management systems and certification services.
            </p>
            <Button 
              onClick={() => window.open('https://app.nebusis.com/contexto/solicitud_colaborador.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09', '_blank')}
              size="lg"
              className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-12 py-4 text-xl font-semibold"
            >
              Apply as Collaborator <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}