import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
// import pepsicoLogo from "@assets/image_1753797805537.png";
// import medtronicLogo from "@assets/image_1753797716205.png";
// import deptStateLogo from "@assets/image_1753797765609.png";
// import pfizerLogo from "@assets/image_1753797488008.png";
// import cocaColaLogo from "@assets/image_1753797545083.png";
// import dominicanGovLogo from "@assets/image_1753797602225.png";



const clientLogos = [
  { name: "Client Portfolio Slide 1", logo: "/assets/clients/slide1.png" },
  { name: "Client Portfolio Slide 2", logo: "/assets/clients/slide2.jpg" },
  { name: "Client Portfolio Slide 3", logo: "/assets/clients/slide3.jpg" },
  { name: "Client Portfolio Slide 4", logo: "/assets/clients/slide4.jpg" },
  { name: "QSI Client Logos Collection", logo: "/assets/clients/qsi-logos-collection.png" },
  { name: "Client Logos Collection", logo: "/assets/clients/logos-collection.png" },
];

// Stats will be defined inside the component to use translations

export default function ClientShowcase() {
  const { t } = useLanguage();
  
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "30+", label: "Years of Experience" },
    { number: "15+", label: "ISO Standards" },
    { number: "100%", label: "Success Rate" },
  ];
  
  return (
    <>


      {/* Client Success Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-qsi-navy mb-4">Over 500 clients serviced since 1993</h2>
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
                    className="h-20 w-auto max-w-48 opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain rounded-lg shadow-sm"
                    onError={(e) => {
                      e.currentTarget.src = `/assets/clients/qsi-logos-collection.png`;
                    }}
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
