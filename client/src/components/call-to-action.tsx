import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, UserCheck } from "lucide-react";

export default function CallToAction() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-qsi-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {t('achieveBusinessGoals')}
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join our network of certified representatives and expand QSI's professional certification services 
          to organizations in your area. We provide comprehensive training and ongoing support.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-0">
            <CardContent className="p-8 text-center">
              <Handshake className="h-12 w-12 text-qsi-orange mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-4">ISO Certification Services</h3>
              <p className="text-gray-300 mb-6">
                Get your organization certified to international ISO standards. We provide comprehensive 
                management system certifications including ISO 9001, 14001, 45001, and 27001.
              </p>
              <a 
                href="https://app.nebusis.com/certificaciones/evaluacion_preliminar.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-qsi-orange hover:bg-qsi-orange-hover text-white font-semibold"
                >
                  Get Certified
                </Button>
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-0">
            <CardContent className="p-8 text-center">
              <UserCheck className="h-12 w-12 text-qsi-orange mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-4">Management System Auditing</h3>
              <p className="text-gray-300 mb-6">
                Professional auditing services to ensure your management systems meet international standards. 
                Our expert auditors help maintain compliance and drive continuous improvement.
              </p>
              <a 
                href="/contact"
              >
                <Button 
                  variant="outline" 
                  className="border-2 border-qsi-orange text-qsi-orange hover:bg-qsi-orange hover:text-white font-semibold"
                >
                  Schedule Audit
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
        

      </div>
    </section>
  );
}
