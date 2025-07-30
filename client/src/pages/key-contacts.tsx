import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, User, Building, MessageSquare } from 'lucide-react';
import { Link } from 'wouter';
import celsoAlvaradoImage from "@assets/Celso Professional_1753838419933.jpg";
import veronicaPolettoImage from "@assets/image_1753839044175.png";
import jenniferWilkinsImage from "@assets/image_1753839215662.png";
import alondraDallalImage from "@assets/image_1753839571359.png";
import athenaRichterImage from "@assets/image_1753839789883.png";
import danielaMaestreImage from "@assets/image_1753840263890.png";
import yerardyMontoyaImage from "@assets/image_1753840570774.png";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  email: string; // This will be used server-side only
  region?: string;
}

export default function KeyContacts() {
  const { t } = useLanguage();
  const [selectedContact, setSelectedContact] = useState<TeamMember | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    contactId: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: 'calvarado',
      name: 'Dr. Celso Alvarado',
      title: 'President and Chief Executive Officer',
      description: 'As the founder and global leader of QSI, Dr. Alvarado sets the strategic direction for all certification, training, and innovation efforts. He is available for high-level institutional engagement, government collaboration, and strategic initiatives aligned with QSI\'s global mission for quality and impact.',
      email: 'calvarado@qsiglobalventures.com'
    },
    {
      id: 'vpoleto',
      name: 'Veronica Poletto',
      title: 'HR and Contracting Leader',
      description: 'Veronica is responsible for onboarding auditors, instructors, and collaborators. If you are interested in joining QSI\'s expert network, she will guide you through the recruitment and qualification process.',
      email: 'vpoleto@qsiglobalventures.com'
    },
    {
      id: 'jwilkins',
      name: 'Jennifer Wilkins',
      title: 'Business Development Coordinator – North America',
      description: 'Jennifer supports engagement with organizations throughout North America. She helps you explore QSI\'s auditing, certification, and training solutions aligned with your growth and compliance goals.',
      email: 'jwilkins@qsiglobalventures.com',
      region: 'North America'
    },
    {
      id: 'arichter',
      name: 'Athena Ricter',
      title: 'Business Development Coordinator – Europe, Africa, and Asia',
      description: 'Athena leads regional outreach across Europe, Africa, and Asia. She supports your organization\'s path to international certification and helps tailor QSI services to meet regional and global standards.',
      email: 'arichter@qsiglobalventures.com',
      region: 'Europe, Africa, Asia'
    },
    {
      id: 'dmaestre',
      name: 'Daniela Maestre',
      title: 'Business Development Coordinator – Latin America and the Caribbean',
      description: 'Daniela facilitates collaboration and service development across Latin America and the Caribbean. She is your point of contact for regional certification and training opportunities.',
      email: 'dmaestre@qsiglobalventures.com',
      region: 'Latin America & Caribbean'
    },
    {
      id: 'adallal',
      name: 'Alondra Dallal',
      title: 'Certification Services Coordinator',
      description: 'Alondra oversees the coordination of all QSI audit and certification services. She ensures smooth scheduling, communication, and execution throughout your certification journey.',
      email: 'adallal@qsiglobalventures.com'
    },
    {
      id: 'ymontoya',
      name: 'Yerardy Montoya',
      title: 'Leader of QSI Academy',
      description: 'Yerardy manages QSI\'s training division, QSI Academy. She helps organizations and professionals access expert-led courses and customized learning paths aligned with ISO and industry-specific standards.',
      email: 'ymontoya@qsiglobalventures.com'
    }
  ];

  const handleContactClick = (member: TeamMember) => {
    setSelectedContact(member);
    setFormData(prev => ({
      ...prev,
      contactId: member.id
    }));
    setIsFormOpen(true);
    setSubmitSuccess(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: '',
          contactId: ''
        });
        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitSuccess(false);
        }, 2000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <User className="h-16 w-16 text-qsi-orange mx-auto mb-8" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('keyContactsTitle')}</h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto mb-8">
              {t('keyContactsSubtitle')}
            </p>

          </div>
        </section>

        {/* Team Members List */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {teamMembers.map((member) => (
                <Card key={member.id} className="hover-lift">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Profile Image */}
                      <div className="flex-shrink-0 mx-auto md:mx-0">
                        {member.id === 'calvarado' ? (
                          <img 
                            src={celsoAlvaradoImage}
                            alt="Dr. Celso Alvarado"
                            className="w-32 h-32 object-cover rounded-lg shadow-lg"
                          />
                        ) : member.id === 'vpoleto' ? (
                          <img 
                            src={veronicaPolettoImage}
                            alt="Veronica Poletto"
                            className="w-32 h-32 object-cover rounded-lg shadow-lg"
                          />
                        ) : member.id === 'jwilkins' ? (
                          <img 
                            src={jenniferWilkinsImage}
                            alt="Jennifer Wilkins"
                            className="w-32 h-32 object-cover rounded-lg shadow-lg"
                          />
                        ) : member.id === 'adallal' ? (
                          <img 
                            src={alondraDallalImage}
                            alt="Alondra Dallal"
                            className="w-32 h-32 object-cover rounded-lg shadow-lg"
                          />
                        ) : member.id === 'arichter' ? (
                          <img 
                            src={athenaRichterImage}
                            alt="Athena Ricter"
                            className="w-32 h-32 object-cover rounded-lg shadow-lg"
                          />
                        ) : member.id === 'dmaestre' ? (
                          <img 
                            src={danielaMaestreImage}
                            alt="Daniela Maestre"
                            className="w-32 h-32 object-cover rounded-lg shadow-lg"
                          />
                        ) : member.id === 'ymontoya' ? (
                          <img 
                            src={yerardyMontoyaImage}
                            alt="Yerardy Montoya"
                            className="w-32 h-32 object-cover rounded-lg shadow-lg"
                          />
                        ) : (
                          <div className="w-32 h-32 bg-gradient-to-br from-qsi-navy to-qsi-orange rounded-lg flex items-center justify-center shadow-lg">
                            <User className="h-16 w-16 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow text-center md:text-left">
                        {/* Name and Title */}
                        <h3 className="text-2xl font-bold text-qsi-navy mb-2">
                          {member.name}
                        </h3>
                        <p className="text-qsi-orange font-semibold mb-4 text-lg">
                          {member.id === 'calvarado' ? t('presidentCEO') :
                           member.id === 'vpoleto' ? t('hrContractingLeader') :
                           member.id === 'jwilkins' ? t('businessDevCoordNorthAmerica') :
                           member.id === 'arichter' ? t('businessDevCoordEuropeAfricaAsia') :
                           member.id === 'dmaestre' ? t('businessDevCoordLatinAmericaCaribbean') :
                           member.id === 'adallal' ? t('certificationServicesCoordinator') :
                           member.id === 'ymontoya' ? t('leaderQSIAcademy') :
                           member.title}
                        </p>
                        

                        
                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {member.id === 'calvarado' ? t('celsoAlvaradoDesc') :
                           member.id === 'vpoleto' ? t('veronicaPolettoDesc') :
                           member.id === 'jwilkins' ? t('jenniferWilkinsDesc') :
                           member.id === 'arichter' ? t('athenaRicterDesc') :
                           member.id === 'dmaestre' ? t('danielaMaestreDesc') :
                           member.id === 'adallal' ? t('alondraDallalDesc') :
                           member.id === 'ymontoya' ? t('yerardyMontoyaDesc') :
                           member.description}
                        </p>
                        
                        {/* Contact Button */}
                        <Button 
                          onClick={() => handleContactClick(member)}
                          className="bg-qsi-navy hover:bg-qsi-navy-hover text-white px-6 py-3"
                          size="lg"
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          {t('contactButton')} {member.name.split(' ')[0]}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-qsi-navy">
                {t('contactFormTitle')} {selectedContact?.name}
              </DialogTitle>
            </DialogHeader>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">{t('contactMessageSent')}</h3>
                <p className="text-gray-600">
                  Your message has been sent to {selectedContact?.name}. 
                  They will respond within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{t('contactYourName')} *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">{t('contactYourEmail')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="organization">{t('contactOrganization')} (Optional)</Label>
                  <Input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">{t('contactMessage')} *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={4}
                    className="mt-1"
                    placeholder="Please describe your inquiry or how we can assist you..."
                  />
                </div>
                
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="website"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormOpen(false)}
                    className="flex-1"
                  >
                    {t('cancel')}
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-qsi-orange hover:bg-qsi-orange-hover text-white"
                  >
                    {isSubmitting ? t('contactSending') : t('contactSendMessage')}
                  </Button>
                </div>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* Bottom Notice */}
        <section className="py-8 bg-qsi-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-qsi-orange/10 border border-qsi-orange/20 rounded-lg p-6">
              <p className="text-lg text-gray-100">
                {t('keyContactsNotice')}{' '}
                <Link href="/contact" className="text-qsi-orange hover:text-qsi-orange-hover underline">
                  {t('keyContactsNoticePage')}
                </Link>{' '}
                {t('keyContactsNoticeEnd')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}