import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Leaf, Shield, Lock, Users, ArrowRight, UserCheck, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import corporateOfficeImage from "@assets/image_1753822162465.png";
import iso9001Image from "@assets/image_1753828047073.png";



export default function ServicesSection() {
  const { t } = useLanguage();
  const [, navigate] = useLocation();

  const services = [
    {
      icon: Award,
      title: "ISO 9001",
      subtitle: t('qualityManagementTitle'),
      description: t('qualityManagementDesc'),
      bgColor: "bg-qsi-orange",
      route: "/iso-9001",
      thumbnail: iso9001Image
    },
    {
      icon: Leaf,
      title: "ISO 14001",
      subtitle: t('environmentalManagementTitle'),
      description: t('environmentalManagementDesc'),
      bgColor: "bg-green-500",
      route: "/iso-14001",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      icon: Shield,
      title: "ISO 45001",
      subtitle: t('occupationalHealthTitle'),
      description: t('occupationalHealthDesc'),
      bgColor: "bg-red-500",
      route: "/iso-45001",
      thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      icon: Lock,
      title: "ISO 27001",
      subtitle: t('informationSecurityTitle'),
      description: t('informationSecurityDesc'),
      bgColor: "bg-blue-500",
      route: "/iso-27001",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      icon: UserCheck,
      title: "ISO 37001",
      subtitle: t('antibriberyManagementTitle'),
      description: t('antibriberyManagementDesc'),
      bgColor: "bg-teal-500",
      route: "/iso-37001",
      thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      icon: Brain,
      title: "ISO 42001",
      subtitle: t('aiManagementTitle'),
      description: t('aiManagementDesc'),
      bgColor: "bg-indigo-500",
      route: "/iso-42001",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
  ];

  // All services now consolidated into main grid

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Corporate Office Hero Section */}
        <div className="relative mb-20 rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={corporateOfficeImage}
              alt="Corporate office environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-qsi-navy bg-opacity-80"></div>
          </div>
          <div className="relative z-10 py-20 text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Professional Excellence</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Delivering world-class certification services, 
              supporting organizations in their journey toward operational excellence.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-qsi-navy mb-4">{t('servicesTitle')}</h2>
          <p className="text-xl text-qsi-gray max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-lift overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.thumbnail} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`${service.bgColor} text-white p-2 rounded-lg mb-2`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-sm font-medium text-qsi-gray mb-2">{service.subtitle}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-qsi-orange font-semibold hover:text-qsi-navy p-0 text-sm"
                    onClick={() => navigate(service.route)}
                  >
                    {t('learnMore')} <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        

        
        {/* CTA Section */}
        <div className="text-center mt-16 bg-qsi-navy rounded-lg p-12">
          <h3 className="text-3xl font-bold text-white mb-4">{t('ctaTitle')}</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <a href="/contact">
            <Button 
              size="lg" 
              className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-8 py-4 text-lg font-semibold"
            >
              {t('getStarted')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
