import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Clock, FileText, GraduationCap, AlertTriangle, Scale, ClipboardCheck, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
// import communicationImage from "@assets/image_1753823199413.png";

export default function Contact() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  // Extract context parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const context = urlParams.get('context') || '';
  const source = urlParams.get('source') || '';

  // Set default form values based on context
  useEffect(() => {
    if (context === 'certification' || source) {
      setFormData(prev => ({
        ...prev,
        inquiryType: 'audit',
        subject: source ? `ISO ${source} Certification Inquiry` : 'Certification Inquiry'
      }));
    }
  }, [context, source]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const offices = [
    {
      country: "United States",
      city: "Orlando, Florida",
      address: "618 E. South Street. Suite 500, 32801",
      fullAddress: "Orlando, Florida – USA",

      timezone: "EST (UTC-5)",
      icon: "🇺🇸"
    },
    {
      country: "Spain", 
      city: "Madrid",
      address: "Avenida de Labradores 1, Planta 4, Oficina 3",
      fullAddress: "28760 Tres Cantos. Madrid - España",
 
      timezone: "CET (UTC+1)",
      icon: "🇪🇸"
    },
    {
      country: "Costa Rica",
      city: "San José",
      address: "Regional Office - Central America",
      fullAddress: "San José, Costa Rica",

      timezone: "CST (UTC-6)", 
      icon: "🇨🇷"
    },
    {
      country: "Dominican Republic",
      city: "Santo Domingo",
      address: "Edificio FB Building, Bella Vista",
      fullAddress: "Santo Domingo, Dominican Republic",

      timezone: "AST (UTC-4)",
      icon: "🇩🇴"
    }
  ];

  const inquiryTypes = [
    { value: "information", label: t('generalInformation'), icon: FileText, color: "bg-qsi-navy" },
    { value: "audit", label: t('scheduleAudit'), icon: ClipboardCheck, color: "bg-qsi-orange" },
    { value: "courses", label: t('trainingCourses'), icon: GraduationCap, color: "bg-qsi-navy" },
    { value: "complaints", label: t('complaints'), icon: AlertTriangle, color: "bg-qsi-gray" },
    { value: "appeals", label: t('appeals'), icon: Scale, color: "bg-qsi-navy" },
    { value: "careers", label: t('joinOurTeam'), icon: Users, color: "bg-qsi-orange" }
  ];

  const getContextualContent = () => {
    if (source) {
      return {
        title: `ISO ${source} Certification Inquiry`,
        subtitle: `Get expert guidance on ISO ${source} certification for your organization`
      };
    }
    if (context === 'certification') {
      return {
        title: "ISO Certification Inquiry",
        subtitle: "Get expert guidance on ISO management system certification for your organization"
      };
    }
    return {
      title: t('contactUsTitle'),
      subtitle: t('contactUsSubtitle')
    };
  };

  const contextualContent = getContextualContent();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-start gap-8 lg:gap-16">
              {/* Communication Image - Left Side on Desktop, Top on Mobile */}
              <div className="flex-shrink-0 order-2 lg:order-1">
                <img 
                  src="/assets/hero/office-pic.jpg"
                  alt="Digital communication"
                  className="w-64 h-40 lg:w-80 lg:h-52 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              {/* Text Content - Right Side on Desktop, Bottom on Mobile */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <Mail className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">{contextualContent.title}</h1>
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  {contextualContent.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Contact Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Quick Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {inquiryTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <Card key={type.value} className="hover-lift cursor-pointer transition-all duration-200 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className={`${type.color} text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-qsi-navy mb-2">{type.label}</h3>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-qsi-orange text-qsi-orange hover:bg-qsi-orange hover:text-white"
                        onClick={() => {
                          if (type.value === 'careers') {
                            window.open('https://app.nebusis.com/contexto/solicitud_colaborador.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09', '_blank');
                          } else {
                            setFormData(prev => ({ ...prev, inquiryType: type.value }));
                          }
                        }}
                      >
                        {type.value === 'careers' ? 'Apply Now' : 'Select'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-qsi-navy flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-qsi-orange" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">{t('yourName')}</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t('yourEmail')}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">{t('inquiryType')}</Label>
                      <Select 
                        value={formData.inquiryType} 
                        onValueChange={(value) => {
                          if (value === 'careers') {
                            window.open('https://app.nebusis.com/contexto/solicitud_colaborador.php?hash=TGJjRUQ5VFZNdnI1OVZ5RjJoM1NoZz09', '_blank');
                          } else {
                            setFormData(prev => ({ ...prev, inquiryType: value }));
                          }
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t('selectInquiryType')} />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">{t('subject')}</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">{t('yourMessage')}</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-qsi-orange hover:bg-qsi-orange-hover text-white font-semibold"
                    >
                      {t('sendMessage')}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-qsi-navy mb-6">{t('ourGlobalOffices')}</h2>
                
                {offices.map((office, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{office.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-qsi-navy mb-2">
                            {office.city}, {office.country}
                          </h3>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-qsi-orange" />
                              <div>
                                <p>{office.address}</p>
                                <p className="text-sm">{office.fullAddress}</p>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-qsi-orange" />
                              <span>{office.timezone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>





          </div>
        </section>

        {/* Bottom Notice */}
        <section className="py-8 bg-qsi-orange/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white border border-qsi-orange/20 rounded-lg p-6">
              <p className="text-lg text-gray-700">
                Looking for a specific person? Visit our{' '}
                <a href="/key-contacts" className="text-qsi-orange hover:text-qsi-orange-hover font-semibold underline">
                  Key Contacts
                </a>{' '}
                section to reach the appropriate coordinator directly.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}