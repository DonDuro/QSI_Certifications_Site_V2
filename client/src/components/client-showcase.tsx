import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import pepsicoLogo from "@assets/image_1753797805537.png";
import medtronicLogo from "@assets/image_1753797716205.png";
import deptStateLogo from "@assets/image_1753797765609.png";
import pfizerLogo from "@assets/image_1753797488008.png";
import cocaColaLogo from "@assets/image_1753797545083.png";
import dominicanGovLogo from "@assets/image_1753797602225.png";



const clientLogos = [
  { name: "PepsiCo", logo: pepsicoLogo },
  { name: "Pfizer", logo: pfizerLogo },
  { name: "Coca-Cola", logo: cocaColaLogo },
  { name: "Medtronic", logo: medtronicLogo },
  { name: "US Department of State", logo: deptStateLogo },
  { name: "Government of Dominican Republic", logo: dominicanGovLogo },
];

// Stats will be defined inside the component to use translations

export default function ClientShowcase() {
  const { t } = useLanguage();
  
  const stats = [
    { number: "500+", label: t('clientsServed') },
    { number: "30+", label: t('yearsExperience') },
    { number: "10+", label: t('isoStandards') },
    { number: "100%", label: t('successRate') },
  ];
  
  return (
    <>


      {/* Client Success Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-qsi-navy mb-4">{t('clientsServedSince')}</h2>
            <p className="text-xl text-qsi-gray max-w-3xl mx-auto">
              {t('trustedByCompanies')}
            </p>
          </div>
          
          {/* Client Logos Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16 items-center justify-center py-8">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-12 w-auto max-w-32 opacity-60 hover:opacity-100 transition-opacity duration-300 object-contain"
                  />
                </div>
              ))}
              

            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-qsi-orange mb-2">{stat.number}</div>
                <div className="text-qsi-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
