import { Linkedin, Twitter, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
// import qsiLogo from "@assets/logo-certifications-small-3-1_1753798084488.png";


const footerSections = [
  {
    title: "Services",
    links: [
      { text: "Certification Programs", href: "/certification-programs", isDropdown: true },
      { text: "Training Programs", href: "https://www.qsiacademy.com", external: true },
      { text: "Software", href: "https://www.nebusis.com", external: true }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/about", isDropdown: true }
    ]
  },
  {
    title: "Support",
    links: [
      { text: "Contact", href: "/contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/assets/qsi-logo.png" 
                alt="QSI Certifications" 
                className="h-16 w-auto"
              />
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-qsi-orange transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-qsi-orange transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-qsi-orange transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {(link as any).external ? (
                      <a 
                        href={(link as any).href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-qsi-orange transition-colors duration-200"
                      >
                        {(link as any).text}
                      </a>
                    ) : (
                      <Link href={(link as any).href || "/contact"}>
                        <span className="text-gray-400 hover:text-qsi-orange transition-colors duration-200 cursor-pointer">
                          {(link as any).text}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 QSI Auditing and Certification Services, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
