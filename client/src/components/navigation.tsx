import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import qsiLogo from "@assets/logo-certifications-small-3-1_1753797040426.png";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  
  const menuItems = {
    about: {
      title: t('about'),
      items: [
        { label: t('ourHistory'), href: "/about/history" },
        { label: t('accreditations'), href: "/accreditations" },
        { label: t('corporatePolicies'), href: "/corporate-policies" },
        { label: t('faq'), href: "/faq" }
      ]
    },
    certificationPrograms: {
      title: t('certificationPrograms'),
      items: [
        { label: t('qualityManagement'), href: "/iso-9001" },
        { label: t('environmentalManagement'), href: "/iso-14001" },
        { label: t('occupationalHealth'), href: "/iso-45001" },
        { label: t('securityManagement'), href: "/iso-18788" },
        { label: t('energyManagement'), href: "/iso-50001" },
        { label: t('itServiceManagement'), href: "/iso-20000-1" },
        { label: t('educationalManagement'), href: "/iso-21001" },
        { label: t('informationSecurity'), href: "/iso-27001" },
        { label: t('antibriberyManagement'), href: "/iso-37001" },
        { label: t('complianceManagement'), href: "/iso-37301" },
        { label: t('foodSafety'), href: "/iso-22000" },
        { label: t('businessContinuity'), href: "/iso-22301" },
        { label: t('territorialGovernance'), href: "/iso-54001" }
      ]
    },
    joinUs: {
      title: t('joinUs'),
      items: [
        { label: t('partners'), href: "/business-opportunity" },
        { label: t('auditors'), href: "/join-auditors" },
        { label: t('instructors'), href: "/join-instructors" },
        { label: t('collaborators'), href: "/join-collaborators" }
      ]
    },
    contactUs: {
      title: t('contactUs'),
      items: [
        { label: t('generalInquiries'), href: "/contact" },
        { label: t('keyContacts'), href: "/key-contacts" }
      ]
    },
    language: {
      title: language === 'en' ? t('english') : t('spanish'),
      items: [
        { label: t('english'), href: "#en", code: 'en' as const },
        { label: t('spanish'), href: "#es", code: 'es' as const }
      ]
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-600/80 backdrop-blur-sm shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src={qsiLogo} 
              alt="QSI Certifications" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white font-medium hover:bg-qsi-orange hover:text-white transition-colors duration-200 px-3 py-2 rounded">
                {t('home')}
              </Link>
              
              {/* About Dropdown */}
              <div className="relative group">
                <button 
                  className="text-white hover:bg-qsi-orange hover:text-white px-3 py-2 rounded flex items-center font-medium transition-colors duration-200"
                  onMouseEnter={() => setActiveDropdown('about')}
                >
                  {menuItems.about.title} <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === 'about' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-gray-700 shadow-lg rounded-md overflow-hidden z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {menuItems.about.items.map((item, index) => (
                      <div key={index} className="relative group/item">
                        <Link 
                          href={item.href}
                          className="block px-4 py-3 text-white hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Certification Programs Dropdown */}
              <div className="relative group">
                <button 
                  className="text-white hover:bg-qsi-orange hover:text-white px-3 py-2 rounded flex items-center font-medium transition-colors duration-200"
                  onMouseEnter={() => setActiveDropdown('certificationPrograms')}
                >
                  {menuItems.certificationPrograms.title} <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === 'certificationPrograms' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-80 bg-gray-700 shadow-lg rounded-md overflow-hidden z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {menuItems.certificationPrograms.items.map((item, index) => (
                      <div key={index} className="relative group/item">
                        <Link 
                          href={item.href}
                          className="block px-4 py-3 text-white hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>


              <Link 
                href="/certificate-validation" 
                className="text-white hover:bg-qsi-orange hover:text-white px-3 py-2 rounded font-medium transition-colors duration-200"
              >
                {t('certificateValidationTitle')}
              </Link>

              {/* Join Us Dropdown */}
              <div className="relative group">
                <button 
                  className="text-white hover:bg-qsi-orange hover:text-white px-3 py-2 rounded flex items-center font-medium transition-colors duration-200"
                  onMouseEnter={() => setActiveDropdown('joinUs')}
                >
                  {menuItems.joinUs.title} <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === 'joinUs' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-gray-700 shadow-lg rounded-md overflow-hidden z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {menuItems.joinUs.items.map((item, index) => (
                      <div key={index} className="relative group/item">
                        <Link 
                          href={item.href}
                          className="block px-4 py-3 text-white hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us Dropdown */}
              <div className="relative group">
                <button 
                  className="text-white hover:bg-qsi-orange hover:text-white px-3 py-2 rounded flex items-center font-medium transition-colors duration-200"
                  onMouseEnter={() => setActiveDropdown('contactUs')}
                >
                  {menuItems.contactUs.title} <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === 'contactUs' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-gray-700 shadow-lg rounded-md overflow-hidden z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {menuItems.contactUs.items.map((item, index) => (
                      <div key={index} className="relative group/item">
                        <Link 
                          href={item.href}
                          className="block px-4 py-3 text-white hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Language Dropdown - Temporarily Hidden */}
              {false && (
              <div className="relative group">
                <button 
                  className="text-white hover:bg-qsi-orange hover:text-white px-3 py-2 rounded flex items-center font-medium transition-colors duration-200"
                  onMouseEnter={() => setActiveDropdown('language')}
                >
                  {menuItems.language.title} <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === 'language' && (
                  <div 
                    className="absolute top-full right-0 mt-1 w-32 bg-gray-700 shadow-lg rounded-md overflow-hidden z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {menuItems.language.items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setLanguage(item.code);
                          setActiveDropdown(null);
                        }}
                        className={`block w-full text-left px-4 py-3 transition-colors duration-200 ${
                          language === item.code
                            ? 'bg-qsi-orange text-white' 
                            : 'text-white hover:bg-gray-600'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleMobileMenu}
              className="text-white hover:text-qsi-orange"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-600/90 backdrop-blur-sm border-t border-gray-500">
            <Link href="/" className="block px-3 py-2 text-qsi-orange font-medium">
              {t('home')}
            </Link>
            
            {/* Mobile About */}
            <div>
              <button 
                onClick={() => handleDropdownToggle('about')}
                className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-qsi-orange"
              >
                {t('about')} <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="pl-6 space-y-1">
                  {menuItems.about.items.map((item, index) => (
                    <a key={index} href={item.href} className="block px-3 py-2 text-sm text-gray-300 hover:text-qsi-orange">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Certification Programs */}
            <div>
              <button 
                onClick={() => handleDropdownToggle('certificationPrograms')}
                className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-qsi-orange"
              >
                {t('certificationPrograms')} <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'certificationPrograms' && (
                <div className="pl-6 space-y-1">
                  {menuItems.certificationPrograms.items.map((item, index) => (
                    <div key={index}>
                      <Link href={item.href} className="block px-3 py-2 text-sm text-gray-300 hover:text-qsi-orange"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>


            <Link 
              href="/certificate-validation" 
              className="block px-3 py-2 bg-qsi-orange text-white hover:bg-qsi-orange-hover rounded font-medium my-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('certificateValidationTitle')}
            </Link>

            {/* Mobile Join Us */}
            <div>
              <button 
                onClick={() => handleDropdownToggle('joinUs')}
                className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-qsi-orange"
              >
                {menuItems.joinUs.title} <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'joinUs' && (
                <div className="pl-6 space-y-1">
                  {menuItems.joinUs.items.map((item, index) => (
                    <Link key={index} href={item.href} className="block px-3 py-2 text-sm text-gray-300 hover:text-qsi-orange"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Us */}
            <div>
              <button 
                onClick={() => handleDropdownToggle('contactUs')}
                className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-qsi-orange"
              >
                {menuItems.contactUs.title} <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'contactUs' && (
                <div className="pl-6 space-y-1">
                  {menuItems.contactUs.items.map((item, index) => (
                    <Link key={index} href={item.href} className="block px-3 py-2 text-sm text-gray-300 hover:text-qsi-orange"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
