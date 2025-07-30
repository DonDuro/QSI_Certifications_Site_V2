import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock } from "lucide-react";
// import orlandoOffice from "@assets/image_1753814444316.png";
// import newarkImage from "@assets/image_1753826331550.png";

export default function History() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-start lg:gap-16">
              {/* Mobile Layout */}
              <div className="lg:hidden text-center mb-8">
                <Clock className="h-12 w-12 text-qsi-orange mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-4">{t('ourHistoryTitle')}</h1>
                <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
                  {t('historySubtitle')}
                </p>
                <img 
                  src="/assets/hero/office-pic.jpg"
                  alt="Newark, New Jersey cityscape"
                  className="w-64 h-40 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden lg:flex lg:items-start lg:gap-16">
                {/* Newark Image - Left Side */}
                <div className="flex-shrink-0">
                  <img 
                    src="/assets/hero/office-pic.jpg"
                    alt="Newark, New Jersey cityscape"
                    className="w-80 h-52 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Text Content - Right Side aligned to image top */}
                <div className="text-left pt-0">
                  <Clock className="h-16 w-16 text-qsi-orange mb-6" />
                  <h1 className="text-4xl font-bold mb-6">{t('ourHistoryTitle')}</h1>
                  <p className="text-xl text-gray-100">
                    {t('historySubtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Company Foundation - 1993 New Jersey (First) */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-qsi-navy mb-8 text-center">1993 - Company Foundation</h2>
              <div className="text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('companyFoundationDesc')}
                </p>
              </div>
            </div>

            {/* Orlando Headquarters - Current */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-qsi-navy mb-8 text-center">Current Headquarters - Orlando, Florida</h2>
              <div className="text-center mb-8">
                <img 
                  src="/assets/hero/executive-meeting.jpg"
                  alt="QSI Orlando Headquarters"
                  className="rounded-lg shadow-lg w-full max-w-4xl mx-auto h-80 object-cover"
                />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('orlandoHeadquartersDesc')}
                </p>
              </div>
            </div>

            {/* QSI Academy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-qsi-navy mb-8 text-center">QSI Academy - Professional Training</h2>
              <div className="text-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600"
                  alt="QSI Academy Training"
                  className="rounded-lg shadow-lg w-full max-w-4xl mx-auto h-80 object-cover"
                />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('qsiAcademyDesc')}
                </p>
                <a 
                  href="https://www.qsiacademy.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-qsi-orange hover:text-qsi-orange-hover font-semibold"
                >
                  www.qsiacademy.com →
                </a>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-qsi-navy rounded-lg p-12 text-white">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="text-4xl font-bold text-qsi-orange mb-2">30+</h3>
                  <p className="text-gray-300">{t('yearsInBusiness')}</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-qsi-orange mb-2">10,000+</h3>
                  <p className="text-gray-300">{t('professionalsTrainedStat')}</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-qsi-orange mb-2">15+</h3>
                  <p className="text-gray-300">{t('countriesServed')}</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-qsi-orange mb-2">500+</h3>
                  <p className="text-gray-300">{t('auditsConducted')}</p>
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