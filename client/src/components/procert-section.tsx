import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, ExternalLink } from "lucide-react";

const procertFeatures = [
  {
    icon: GraduationCap,
    title: "Professional Training",
    description: "Comprehensive training programs for auditors, lead auditors, consultants and coaches.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry-leading professionals with decades of real-world experience.",
  },
  {
    icon: Award,
    title: "Internationally Recognized",
    description: "Credentials that are respected and valued by organizations worldwide.",
  },
];

export default function ProCertSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-qsi-navy to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">QSI ProCert</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional Credentialing Services offered in conjunction and collaboration with QSI Academy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {procertFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="bg-qsi-orange text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Credentialing of Auditors, Lead Auditors, Consultants and Coaches
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
            Enhance your professional credentials with our comprehensive training and certification programs. 
            Our partnership with QSI Academy ensures you receive the highest quality education and internationally 
            recognized certifications that advance your career in quality management and auditing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-8 py-4 text-lg font-semibold"
            >
              Learn About QSI ProCert
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-qsi-navy px-8 py-4 text-lg font-semibold flex items-center"
            >
              Visit QSI Academy <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}