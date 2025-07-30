import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Shield, CheckCircle } from "lucide-react";
import abaLogo from "@assets/image_1753800921866.png";
import emaLogo from "@assets/image_1753801189335.png";
import businessMeetingImage from "@assets/image_1753822247368.png";
import accreditationMeetingImage from "@assets/image_1753823833228.png";

export default function Accreditations() {
  const { t } = useLanguage();
  


  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-start gap-8 lg:gap-16">
              {/* Accreditation Meeting Image - Left Side on Desktop, Top on Mobile */}
              <div className="flex-shrink-0 order-2 lg:order-1">
                <img 
                  src={accreditationMeetingImage}
                  alt="Professional accreditation meeting"
                  className="w-64 h-56 lg:w-80 lg:h-72 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              {/* Text Content - Right Side on Desktop, Bottom on Mobile */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <Award className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">Our Accreditations</h1>
                <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0">
                  International recognition of our programs strengthens your certificate!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="text-left mb-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Currently our programs for ISO management systems certification are accredited by the following entities:
              </p>
              
              {/* Accreditation Entities */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* ABA Section */}
                <div className="text-left">
                  <div className="bg-gray-50 rounded-lg p-8 mb-6 flex justify-start">
                    <img 
                      src={abaLogo} 
                      alt="Accreditation Board of America" 
                      className="h-24 w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-qsi-navy mb-4">
                    Accreditation Board of America
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ABA accreditation for ISO management systems certification programs based on ISO 17021-1
                  </p>
                  <div className="flex items-center text-green-600 mb-2">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Accreditation Scope:</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 50001, ISO 22000
                  </p>
                </div>
                
                {/* EMA Section */}
                <div className="text-left">
                  <div className="bg-gray-50 rounded-lg p-8 mb-6 flex justify-start">
                    <img 
                      src={emaLogo} 
                      alt="Entidad Mexicana de Acreditación" 
                      className="h-24 w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-qsi-navy mb-4">
                    Entidad Mexicana de Acreditación
                  </h3>
                  <p className="text-gray-600 mb-4">
                    EMA accreditation for ISO management systems certification in Mexico
                  </p>
                  <div className="flex items-center text-green-600 mb-2">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Accreditation Scope:</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    ISO 9001, ISO 14001, ISO 45001
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Shield className="h-12 w-12 text-qsi-orange mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-qsi-navy mb-4">
                      International Recognition
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    Our accreditations ensure that QSI certificates are recognized globally and meet the highest international standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Award className="h-12 w-12 text-qsi-orange mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-qsi-navy mb-4">
                      Quality Assurance
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    Regular oversight and monitoring by accreditation bodies ensures consistent, high-quality certification processes.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-qsi-navy to-gray-800 rounded-lg p-12 text-white">
              <div className="text-center mb-12">
                <Shield className="h-16 w-16 text-qsi-orange mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Why Accreditation Matters</h2>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  Our international accreditations ensure your certificates are recognized and trusted worldwide
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-qsi-orange text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Global Recognition</h3>
                  <p className="text-white">
                    Certificates accepted worldwide through international accreditation agreements
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-qsi-orange text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Quality Assurance</h3>
                  <p className="text-white">
                    Regular oversight ensures consistent, high-quality certification processes
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-qsi-orange text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Market Credibility</h3>
                  <p className="text-white">
                    Enhanced credibility with customers, suppliers, and regulatory bodies
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}