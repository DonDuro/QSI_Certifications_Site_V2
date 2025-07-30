import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, CheckCircle, Shield, Monitor, Users, FileCheck, Award, Globe } from "lucide-react";
// import faqImage from "@assets/image_1753824196829.png";

export default function FAQ() {
  const { t } = useLanguage();

  const faqSections = [
    {
      title: "Certification Services & Scope",
      icon: CheckCircle,
      color: "bg-qsi-navy",
      faqs: [
        {
          question: "What is included in QSI Certification Services?",
          answer: "QSI provides comprehensive certification services that include: initial document review, stage 1 audit (readiness assessment), stage 2 audit (certification audit), certificate issuance, annual surveillance audits, and triennial recertification audits. Our services cover the complete certification lifecycle, not just the audit itself. You are paying for full certification services including ongoing surveillance, certificate maintenance, and access to our global certification recognition."
        },
        {
          question: "What's the difference between an audit and certification?",
          answer: "An audit is the assessment process where our certified auditors evaluate your management system against the relevant ISO standard. Certification is the formal recognition (certificate) issued after successful completion of the audit process. QSI certification services encompass both the audit process and the ongoing certification maintenance, including surveillance audits and certificate management."
        },
        {
          question: "What ongoing support is included with certification?",
          answer: "Your QSI certification includes: annual surveillance audits to maintain certification validity, access to technical support for standard interpretation, certificate updates and reissuance when needed, transition support for standard updates, and access to our global certification database for verification purposes."
        },
        {
          question: "How long is the certification valid?",
          answer: "ISO management system certificates are valid for three years from the date of issuance, subject to successful annual surveillance audits. QSI conducts surveillance audits in years 1 and 2, followed by a recertification audit in year 3 to renew the certificate for another three-year cycle."
        }
      ]
    },
    {
      title: "Remote Audits & Technology",
      icon: Monitor,
      color: "bg-qsi-orange", 
      faqs: [
        {
          question: "How does QSI conduct remote audits?",
          answer: "QSI utilizes secure, enterprise-grade video conferencing platforms and document sharing systems to conduct remote audits. Our remote audit process includes: pre-audit technology testing, secure document review portals, real-time virtual site tours using mobile devices or fixed cameras, interactive interviews with key personnel, and secure evidence collection and documentation."
        },
        {
          question: "What technology platforms does QSI use for remote audits?",
          answer: "QSI employs ISO 27001-compliant platforms including Microsoft Teams, Zoom Enterprise, and proprietary secure document portals. All platforms feature end-to-end encryption, access controls, session recording capabilities for audit trail purposes, and multi-factor authentication for enhanced security."
        },
        {
          question: "How does QSI ensure security and confidentiality during remote audits?",
          answer: "QSI maintains strict confidentiality through: encrypted communication channels, secure cloud storage with access logging, signed confidentiality agreements with all audit team members, restricted access to client information on a need-to-know basis, automatic session termination, and complete data deletion after the audit cycle completion."
        },
        {
          question: "What criteria does QSI use to determine remote audit effectiveness?",
          answer: "QSI evaluates remote audit effectiveness based on: ability to verify implementation of management system requirements, access to sufficient objective evidence, effective communication with auditees, successful completion of all audit objectives, and client satisfaction with the audit process. We maintain the same rigor and standards as on-site audits."
        },
        {
          question: "How should clients prepare for remote audits?",
          answer: "Client preparation includes: ensuring stable internet connectivity and backup options, testing audio/video equipment in advance, organizing digital documents in accessible formats, designating a technical support person, preparing virtual site tour routes, and ensuring key personnel availability during scheduled audit times."
        }
      ]
    },
    {
      title: "Auditor Competency & Standards",
      icon: Users,
      color: "bg-qsi-navy",
      faqs: [
        {
          question: "How does QSI ensure auditor competency?",
          answer: "QSI maintains auditor competency through rigorous processes aligned with ISO/IEC 17021-1 requirements: initial competency evaluation based on education, work experience, and training; formal qualification process including written examinations and practical assessments; witnessed audit evaluations by senior lead auditors; continuous professional development requirements; and annual competency reviews and requalification processes."
        },
        {
          question: "What standards govern QSI's competency validation process?",
          answer: "QSI's competency validation follows ISO/IEC 17021-1 (Management system audit and certification), ISO/IEC 17024 (Personnel certification), ISO 19011 (Guidelines for auditing management systems), and relevant sector-specific requirements. Our processes are regularly evaluated by accreditation bodies to ensure compliance with international standards."
        },
        {
          question: "What qualifications do QSI auditors possess?",
          answer: "QSI auditors hold relevant university degrees, professional certifications in their technical areas, formal auditor training certificates, minimum years of practical experience in their sectors, and participate in ongoing professional development. All lead auditors are certified by recognized certification bodies and maintain current registrations."
        },
        {
          question: "How often are auditors evaluated?",
          answer: "QSI auditors undergo: initial competency assessment before qualification, witnessed audits during probationary periods, annual performance reviews including client feedback analysis, periodic witnessed audits for ongoing validation, mandatory continuing professional development (minimum 40 hours annually), and triennial comprehensive competency reassessment."
        }
      ]
    },
    {
      title: "Accreditation & Recognition",
      icon: Award,
      color: "bg-qsi-orange",
      faqs: [
        {
          question: "Is QSI accredited?",
          answer: "Yes, QSI is accredited by multiple recognized accreditation bodies including ABA (Accreditation Board of America) and EMA (Entidad Mexicana de Acreditación). Our accreditations ensure that QSI certificates are internationally recognized and accepted worldwide."
        },
        {
          question: "What does accreditation mean for clients?",
          answer: "Accreditation provides independent verification that QSI operates according to international standards for certification bodies. This means: global recognition of QSI certificates, enhanced credibility with customers and regulators, acceptance in international markets, and confidence in the certification process integrity."
        },
        {
          question: "How can I verify QSI's accreditation status?",
          answer: "You can verify QSI's accreditation status directly with our accreditation bodies: ABA and EMA. Their websites maintain current lists of accredited certification bodies and their authorized scopes. QSI certificates also display accreditation logos for easy verification."
        }
      ]
    },
    {
      title: "Global Operations",
      icon: Globe,
      color: "bg-qsi-navy",
      faqs: [
        {
          question: "In which countries does QSI operate?",
          answer: "QSI operates globally with offices in the United States (Orlando, Florida), Spain (Madrid), Costa Rica (San José), and Dominican Republic (Santo Domingo). We provide certification services worldwide through our network of qualified auditors and strategic partnerships."
        },
        {
          question: "Are QSI certificates recognized internationally?",
          answer: "Yes, QSI certificates are internationally recognized through our accreditations with IAF (International Accreditation Forum) member bodies. This ensures acceptance in all major markets worldwide and compliance with international trade requirements."
        },
        {
          question: "Can QSI audit multi-site organizations?",
          answer: "Absolutely. QSI specializes in multi-site certification including corporate headquarters and multiple locations, international operations across different countries, remote locations and virtual sites, and integrated supply chain auditing. We develop customized audit programs for complex organizational structures."
        }
      ]
    },
    {
      title: "Certificate Management",
      icon: FileCheck,
      color: "bg-qsi-orange",
      faqs: [
        {
          question: "How can I validate a QSI certificate?",
          answer: "QSI certificates can be validated through our Certificate Validation Portal available on our website. Simply enter the certificate number or scan the QR code on the certificate. This provides real-time verification of certificate authenticity and current status."
        },
        {
          question: "What if I lose my certificate?",
          answer: "QSI can reissue certificates at any time during the validity period. Contact our offices with your certificate details, and we'll provide a replacement certificate with the same validity dates and scope. A small administrative fee may apply."
        },
        {
          question: "How are certificate changes handled?",
          answer: "Certificate modifications (name changes, address updates, scope changes) require formal application and may involve additional assessment. Minor administrative changes can be processed quickly, while scope extensions require supplementary audits to verify compliance in new areas."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-start gap-8 lg:gap-16">
              {/* FAQ Image - Left Side on Desktop, Top on Mobile */}
              <div className="flex-shrink-0 order-2 lg:order-1">
                <img 
                  src="/assets/hero/coaching.png"
                  alt="Frequently asked questions"
                  className="w-64 h-56 lg:w-80 lg:h-72 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              {/* Text Content - Right Side on Desktop, Bottom on Mobile */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <HelpCircle className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">{t('faqTitle')}</h1>
                <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0">
                  {t('faqSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {faqSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="hover-lift">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl text-qsi-navy">
                        <div className={`${section.color} text-white p-3 rounded-full mr-4`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {section.faqs.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                            <AccordionTrigger className="text-left font-semibold text-qsi-navy hover:text-qsi-orange">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-qsi-navy mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our certification experts are ready to help you understand our processes and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-qsi-orange hover:bg-qsi-orange-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Our Experts
              </a>
              <a 
                href="/business-opportunity"
                className="bg-qsi-navy hover:bg-qsi-navy/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Partnership Opportunities
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}