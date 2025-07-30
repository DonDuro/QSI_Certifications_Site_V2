import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Search, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import validationImage from "@assets/image_1753826103723.png";

export default function CertificateValidation() {
  const { t } = useLanguage();
  const [validationMethod, setValidationMethod] = useState<'qr' | 'manual'>('manual');
  const [certificateNumber, setCertificateNumber] = useState("");
  const [validationResult, setValidationResult] = useState<'valid' | 'invalid' | 'pending' | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateNumber.trim()) return;
    
    setIsLoading(true);
    setValidationResult('pending');
    
    // Simulate validation process
    setTimeout(() => {
      setValidationResult(Math.random() > 0.3 ? 'valid' : 'invalid');
      setIsLoading(false);
    }, 2000);
  };

  const startQRScan = () => {
    setValidationMethod('qr');
    // In a real implementation, this would start the camera
    alert(t('qrScannerDemo'));
    setValidationMethod('manual');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-qsi-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-start gap-8 lg:gap-16">
              {/* Validation Image - Left Side on Desktop, Top on Mobile */}
              <div className="flex-shrink-0 order-2 lg:order-1">
                <img 
                  src={validationImage}
                  alt="Digital certificate validation"
                  className="w-64 h-40 lg:w-80 lg:h-52 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
              
              {/* Text Content - Right Side on Desktop, Bottom on Mobile */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <CheckCircle className="h-12 w-12 lg:h-16 lg:w-16 text-qsi-orange mx-auto lg:mx-0 mb-4 lg:mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">{t('certificateValidationTitle')}</h1>
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  {t('certificateValidationSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-qsi-navy text-center mb-12">{t('howToValidateTitle')}</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-qsi-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-qsi-navy mb-2">{t('step1Title')}</h3>
                <p className="text-gray-600">{t('step1Desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-qsi-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-qsi-navy mb-2">{t('step2Title')}</h3>
                <p className="text-gray-600">{t('step2Desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-qsi-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-qsi-navy mb-2">{t('step3Title')}</h3>
                <p className="text-gray-600">{t('step3Desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Options */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* QR Scan Option */}
              <Card className="border-2 hover:border-qsi-orange transition-colors">
                <CardHeader className="text-center">
                  <QrCode className="h-12 w-12 text-qsi-orange mx-auto mb-4" />
                  <CardTitle className="text-xl text-qsi-navy">{t('scanQRCode')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    {t('qrScanDescription')}
                  </p>
                  <Button 
                    onClick={startQRScan}
                    className="bg-qsi-orange hover:bg-qsi-orange-hover text-white w-full"
                  >
                    <QrCode className="mr-2 h-4 w-4" />
                    {t('startQRScanButton')}
                  </Button>
                </CardContent>
              </Card>

              {/* Manual Input Option */}
              <Card className="border-2 hover:border-qsi-orange transition-colors">
                <CardHeader className="text-center">
                  <Search className="h-12 w-12 text-qsi-navy mx-auto mb-4" />
                  <CardTitle className="text-xl text-qsi-navy">{t('manualInput')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-center">
                    {t('manualInputDescription')}
                  </p>
                  
                  <form onSubmit={handleValidation} className="space-y-4">
                    <div>
                      <Label htmlFor="certificate-number" className="text-qsi-navy font-semibold">
                        {t('enterCertificateNumber')}
                      </Label>
                      <Input
                        id="certificate-number"
                        type="text"
                        placeholder={t('certificateNumberPlaceholder')}
                        value={certificateNumber}
                        onChange={(e) => setCertificateNumber(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isLoading || !certificateNumber.trim()}
                      className="bg-qsi-navy hover:bg-qsi-navy/90 text-white w-full"
                    >
                      {isLoading ? t('validating') : t('verifyButton')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Validation Result */}
            {validationResult && (
              <div className="mt-12">
                <Card className={`border-2 ${
                  validationResult === 'valid' ? 'border-qsi-navy bg-qsi-navy/5' :
                  validationResult === 'invalid' ? 'border-qsi-orange bg-qsi-orange/5' :
                  'border-qsi-orange bg-qsi-orange/5'
                }`}>
                  <CardContent className="p-8 text-center">
                    {validationResult === 'valid' && (
                      <>
                        <CheckCircle className="h-16 w-16 text-qsi-navy mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-qsi-navy mb-2">{t('certificateValidTitle')}</h3>
                        <p className="text-gray-700">
                          {t('certificateValidDesc')} {certificateNumber}
                        </p>
                      </>
                    )}
                    
                    {validationResult === 'invalid' && (
                      <>
                        <XCircle className="h-16 w-16 text-qsi-orange mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-qsi-orange mb-2">{t('certificateInvalidTitle')}</h3>
                        <p className="text-gray-700">
                          {t('certificateInvalidDesc')}
                        </p>
                      </>
                    )}
                    
                    {validationResult === 'pending' && (
                      <>
                        <AlertCircle className="h-16 w-16 text-qsi-orange mx-auto mb-4 animate-pulse" />
                        <h3 className="text-2xl font-bold text-qsi-orange mb-2">{t('certificatePendingTitle')}</h3>
                        <p className="text-gray-700">
                          {t('certificatePendingDesc')}
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}