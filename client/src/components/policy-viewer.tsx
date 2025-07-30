import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { policies, Policy } from "@/data/policies";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import qsiLogo from "@assets/logo-certifications-small-3-1_1753797040426.png";

interface PolicyViewerProps {
  policyId: string;
  buttonText?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export default function PolicyViewer({ 
  policyId, 
  buttonText, 
  variant = "outline",
  size = "sm",
  className = ""
}: PolicyViewerProps) {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const defaultButtonText = buttonText || t('viewPolicy');
  
  const policy = policies.find(p => p.id === policyId);
  
  if (!policy) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={variant}
          size={size}
          className={`border-qsi-orange text-qsi-orange hover:bg-qsi-orange hover:text-white ${className}`}
        >
          {defaultButtonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[95vh] p-0 bg-white">
        <ScrollArea className="h-[95vh]">
          <div className="p-8">
            {/* Document Header with Logo */}
            <div className="mb-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <img 
                    src={qsiLogo} 
                    alt="QSI Certifications" 
                    className="h-16 w-auto object-contain bg-qsi-navy p-3 rounded"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-qsi-navy mb-4">
                    {policy.title[language]}
                  </h1>
                  
                  {/* Policy Metadata */}
                  <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-qsi-orange">{t('version')}:</span>
                        <p className="text-gray-700 mt-1 font-medium">{policy.version}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-qsi-orange">{t('date')}:</span>
                        <p className="text-gray-700 mt-1 font-medium">{policy.date}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-qsi-orange">{t('approvedBy')}:</span>
                        <p className="text-gray-700 mt-1 font-medium">{policy.approvedBy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Content */}
            <div className="space-y-8 max-w-4xl">
              {/* Introduction */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-qsi-orange">
                <h2 className="text-xl font-bold text-qsi-navy mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-qsi-orange rounded-full"></div>
                  {t('introduction')}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  {policy.introduction[language]}
                </p>
              </div>

              {/* Policy Statement */}
              {policy.policyStatement[language] && (
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-qsi-navy">
                  <h2 className="text-xl font-bold text-qsi-navy mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-qsi-navy rounded-full"></div>
                    {t('policyStatement')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {policy.policyStatement[language]}
                  </p>
                </div>
              )}

              {/* Sections */}
              {policy.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h2 className="text-xl font-bold text-qsi-navy mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-qsi-orange rounded-full"></div>
                    {section.title[language]}
                  </h2>
                  <div className="text-gray-700 leading-relaxed text-base space-y-2">
                    {section.content[language].split('\n').map((line, lineIndex) => (
                      <div key={lineIndex} className="flex items-start gap-2">
                        {line.trim().startsWith('•') ? (
                          <>
                            <div className="w-1.5 h-1.5 bg-qsi-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span>{line.replace('•', '').trim()}</span>
                          </>
                        ) : (
                          <span className="ml-3.5">{line}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Additional Information */}
              {policy.additionalInfo && policy.additionalInfo[language] && (
                <div className="bg-gradient-to-r from-qsi-navy to-gray-700 text-white p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-qsi-orange rounded-full"></div>
                    {t('moreInformation')}
                  </h2>
                  <p className="text-gray-200 mb-4">
                    {t('forCompleteContent')}
                  </p>
                  <a 
                    href={policy.additionalInfo[language].split(': ')[1]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-qsi-orange hover:bg-qsi-orange/90 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                  >
                    <span>{t('viewCompleteProcedure')}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                QSI Auditing and Certification Services, LLC
              </div>
              <Button 
                onClick={() => setIsOpen(false)}
                className="bg-qsi-navy hover:bg-qsi-navy/90 text-white px-6 py-2"
              >
                {t('closeDocument')}
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}