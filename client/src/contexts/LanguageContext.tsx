import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', es: 'Inicio' },
  about: { en: 'About', es: 'Acerca de' },
  certificationPrograms: { en: 'Certification Programs', es: 'Programas de Certificación' },
  certificateValidation: { en: 'Certificate Validation', es: 'Validación de Certificados' },
  contactUs: { en: 'Contact Us', es: 'Contáctanos' },
  english: { en: 'English', es: 'Inglés' },
  spanish: { en: 'Spanish', es: 'Español' },
  
  // About submenu
  ourHistory: { en: 'Our History', es: 'Nuestra Historia' },
  accreditations: { en: 'Our Accreditations', es: 'Nuestras Acreditaciones' },
  corporatePolicies: { en: 'Corporate Policies', es: 'Políticas Corporativas' },
  
  // Certification Programs
  certificationOfManagementSystems: { en: 'Certification of Management Systems', es: 'Certificación de Sistemas de Gestión' },

  
  // ISO Standards
  qualityManagement: { en: 'ISO 9001:2015 - Quality Management Systems', es: 'ISO 9001:2015 - Sistemas de Gestión de Calidad' },
  environmentalManagement: { en: 'ISO 14001:2015 - Environmental Management Systems', es: 'ISO 14001:2015 - Sistemas de Gestión Ambiental' },
  occupationalHealth: { en: 'ISO 45001:2018 - Occupational Health and Safety Management Systems', es: 'ISO 45001:2018 - Sistemas de Gestión de Seguridad y Salud Ocupacional' },
  securityManagement: { en: 'ISO 18788:2015 - Security Management Systems', es: 'ISO 18788:2015 - Sistemas de Gestión de Seguridad' },
  energyManagement: { en: 'ISO 50001:2018 - Energy Management Systems', es: 'ISO 50001:2018 - Sistemas de Gestión de Energía' },
  itServiceManagement: { en: 'ISO/IEC 20000-1:2018 - IT Service Management Systems', es: 'ISO/IEC 20000-1:2018 - Sistemas de Gestión de Servicios de TI' },
  educationalManagement: { en: 'ISO 21001:2018 - Educational Management Systems', es: 'ISO 21001:2018 - Sistemas de Gestión Educativa' },
  informationSecurity: { en: 'ISO/IEC 27001:2022 - Information Security Management Systems', es: 'ISO/IEC 27001:2022 - Sistemas de Gestión de Seguridad de la Información' },
  antibriberyManagement: { en: 'ISO 37001:2025 - Anti-bribery Management Systems', es: 'ISO 37001:2025 - Sistemas de Gestión Antisoborno' },
  aiManagement: { en: 'ISO/IEC 42001:2023 - Artificial Intelligence Management Systems', es: 'ISO/IEC 42001:2023 - Sistemas de Gestión de Inteligencia Artificial' },
  complianceManagement: { en: 'ISO 37301:2021 - Compliance Management Systems', es: 'ISO 37301:2021 - Sistemas de Gestión de Cumplimiento' },
  foodSafety: { en: 'ISO 22000:2018 - Food Safety Management Systems', es: 'ISO 22000:2018 - Sistemas de Gestión de Seguridad Alimentaria' },
  businessContinuity: { en: 'ISO 22301:2019 - Business Continuity Management Systems', es: 'ISO 22301:2019 - Sistemas de Gestión de Continuidad del Negocio' },
  territorialGovernance: { en: 'ISO/TS 54001:2019 - Territorial Governance Management Systems', es: 'ISO/TS 54001:2019 - Sistemas de Gestión de Gobernanza Territorial' },
  
  // Hero Section
  heroTitle1: { en: 'Professional Auditing & Certification Services', es: 'Servicios Profesionales de Auditoría y Certificación' },
  heroSubtitle1: { en: 'Excellence in Management System Certifications Since 1993', es: 'Excelencia en Certificaciones de Sistemas de Gestión Desde 1993' },
  heroTitle2: { en: 'Comprehensive ISO Management System Standards', es: 'Estándares Integrales de Sistemas de Gestión ISO' },
  heroSubtitle2: { en: 'From quality and environmental management to information security and occupational health, we provide certification services across all major ISO standards.', es: 'Desde gestión de calidad y ambiental hasta seguridad de la información y salud ocupacional, brindamos servicios de certificación en todos los principales estándares ISO.' },
  heroTitle3: { en: 'Global Certification Excellence', es: 'Excelencia en Certificación Global' },
  heroSubtitle3: { en: 'Trusted by Leading Organizations Worldwide', es: 'Confiado por Organizaciones Líderes en Todo el Mundo' },
  
  // Services Section
  servicesTitle: { en: 'Our Certification Programs', es: 'Nuestros Programas de Certificación' },
  servicesSubtitle: { en: 'Comprehensive management system certifications to help your organization achieve excellence', es: 'Certificaciones integrales de sistemas de gestión para ayudar a su organización a alcanzar la excelencia' },
  
  // Service cards
  qualityManagementTitle: { en: 'Quality Management Systems', es: 'Sistemas de Gestión de Calidad' },
  iso9001BenefitsSubtitle: { en: 'ISO 9001:2015 certification provides comprehensive quality management advantages', es: 'La certificación ISO 9001:2015 proporciona ventajas completas de gestión de calidad' },
  qualityManagementDesc: { en: 'ISO 9001:2015 certification to enhance customer satisfaction and operational efficiency', es: 'Certificación ISO 9001:2015 para mejorar la satisfacción del cliente y la eficiencia operacional' },
  
  environmentalManagementTitle: { en: 'Environmental Management', es: 'Gestión Ambiental' },
  environmentalManagementDesc: { en: 'ISO 14001:2015 certification for sustainable environmental practices', es: 'Certificación ISO 14001:2015 para prácticas ambientales sostenibles' },
  
  occupationalHealthTitle: { en: 'Occupational Health & Safety', es: 'Salud y Seguridad Ocupacional' },
  occupationalHealthDesc: { en: 'ISO 45001:2018 certification to protect your workforce', es: 'Certificación ISO 45001:2018 para proteger a su fuerza laboral' },
  
  energyManagementTitle: { en: 'Energy Management', es: 'Gestión de Energía' },
  energyManagementDesc: { en: 'ISO 50001:2018 certification for improved energy performance', es: 'Certificación ISO 50001:2018 para mejorar el rendimiento energético' },
  
  foodSafetyTitle: { en: 'Food Safety Management', es: 'Gestión de Seguridad Alimentaria' },
  foodSafetyDesc: { en: 'ISO 22000:2018 certification for food industry excellence', es: 'Certificación ISO 22000:2018 para la excelencia en la industria alimentaria' },
  
  informationSecurityTitle: { en: 'Information Security', es: 'Seguridad de la Información' },
  informationSecurityDesc: { en: 'ISO 27001:2013 certification to protect your information assets', es: 'Certificación ISO 27001:2013 para proteger sus activos de información' },
  
  antibriberyManagementTitle: { en: 'Anti-bribery Management', es: 'Gestión Antisoborno' },
  antibriberyManagementDesc: { en: 'ISO 37001:2025 certification to prevent, detect and address bribery', es: 'Certificación ISO 37001:2025 para prevenir, detectar y abordar el soborno' },
  
  aiManagementTitle: { en: 'AI Management Systems', es: 'Sistemas de Gestión de IA' },
  aiManagementDesc: { en: 'ISO/IEC 42001:2023 certification for responsible AI governance', es: 'Certificación ISO/IEC 42001:2023 para el gobierno responsable de IA' },
  
  learnMore: { en: 'Learn More', es: 'Saber Más' },
  
  // Client Showcase
  clientShowcaseTitle: { en: 'Trusted by Industry Leaders', es: 'Confiado por Líderes de la Industria' },
  clientShowcaseSubtitle: { en: 'Join thousands of organizations worldwide who trust QSI for their certification needs', es: 'Únase a miles de organizaciones en todo el mundo que confían en QSI para sus necesidades de certificación' },
  
  // ProCert Section
  procertTitle: { en: 'QSI ProCert Credentialing Services', es: 'Servicios de Acreditación QSI ProCert' },
  procertSubtitle: { en: 'Professional Development Through Expert-Led Training', es: 'Desarrollo Profesional a Través de Capacitación Dirigida por Expertos' },
  procertDescription: { en: 'QSI ProCert, offered in collaboration with QSI Academy, provides comprehensive credentialing services for professionals seeking to advance their careers in quality management, auditing, and certification.', es: 'QSI ProCert, ofrecido en colaboración con QSI Academy, proporciona servicios integrales de acreditación para profesionales que buscan avanzar en sus carreras en gestión de calidad, auditoría y certificación.' },
  
  procertFeature1: { en: 'Expert-led training programs', es: 'Programas de capacitación dirigidos por expertos' },
  procertFeature2: { en: 'Industry-recognized credentials', es: 'Credenciales reconocidas por la industria' },
  procertFeature3: { en: 'Flexible learning options', es: 'Opciones de aprendizaje flexibles' },
  procertFeature4: { en: 'Global certification standards', es: 'Estándares de certificación globales' },
  
  // Call to Action
  ctaTitle: { en: 'Ready to Get Certified?', es: '¿Listo para Obtener la Certificación?' },
  ctaSubtitle: { en: 'Start your certification journey with QSI today', es: 'Comience su viaje de certificación con QSI hoy' },
  ctaDescription: { en: 'Complete our Preliminary Evaluation Form to receive a detailed quotation for your certification needs and begin your journey toward ISO compliance.', es: 'Complete nuestro Formulario de Evaluación Preliminar para recibir una cotización detallada para sus necesidades de certificación y comenzar su camino hacia el cumplimiento ISO.' },
  getStarted: { en: 'Request Quotation', es: 'Solicitar Cotización' },
  becomeRepresentative: { en: 'Become a Representative', es: 'Conviértase en Representante' },
  
  // Footer
  services: { en: 'Services', es: 'Servicios' },
  managementSystems: { en: 'Management Systems', es: 'Sistemas de Gestión' },
  training: { en: 'Training', es: 'Capacitación' },
  consulting: { en: 'Consulting', es: 'Consultoría' },
  
  company: { en: 'Company', es: 'Empresa' },
  careers: { en: 'Careers', es: 'Carreras' },
  news: { en: 'News', es: 'Noticias' },
  
  support: { en: 'Support', es: 'Soporte' },
  helpCenter: { en: 'Help Center', es: 'Centro de Ayuda' },
  documentation: { en: 'Documentation', es: 'Documentación' },
  
  legal: { en: 'Legal', es: 'Legal' },
  privacy: { en: 'Privacy Policy', es: 'Política de Privacidad' },
  terms: { en: 'Terms of Service', es: 'Términos de Servicio' },
  
  followUs: { en: 'Follow Us', es: 'Síguenos' },
  copyrightText: { en: '© 2025 QSI Auditing and Certification Services, LLC. All rights reserved.', es: '© 2025 QSI Auditing and Certification Services, LLC. Todos los derechos reservados.' },
  professionalAuditing: { en: 'Professional auditing and certification services for management systems since 1993.', es: 'Servicios profesionales de auditoría y certificación para sistemas de gestión desde 1993.' },



  // Business Opportunity - New Translations
  businessOpportunity: { en: 'Business Opportunity', es: 'Oportunidad de Negocio' },

  // ISO Page Common Content
  historyOfStandard: { en: 'History of the Standard', es: 'Historia del Estándar' },
  keyBenefits: { en: 'Key Benefits for the Organization', es: 'Beneficios Clave para la Organización' },
  latestVersion: { en: 'Latest Available Version', es: 'Última Versión Disponible' },
  whyCertify: { en: 'Why an Organization Should Be Certified', es: 'Por Qué una Organización Debe Certificarse' },
  stepsForCertification: { en: 'Steps for Certification', es: 'Pasos para la Certificación' },
  getCertified: { en: 'Get Certified', es: 'Obtener Certificación' },
  downloadGuide: { en: 'Download Guide', es: 'Descargar Guía' },
  getQuote: { en: 'Get a Quote', es: 'Obtener Cotización' },
  contactExperts: { en: 'Contact Our Experts', es: 'Contactar Nuestros Expertos' },
  certificationProcess: { en: 'Our systematic and internationally recognized certification process ensures credibility and value', es: 'Nuestro proceso de certificación sistemático y reconocido internacionalmente garantiza credibilidad y valor' },
  
  // ISO 9001 Content
  iso9001Hero: { en: 'Build customer trust and demonstrate commitment to quality through internationally recognized quality management system certification.', es: 'Genere confianza del cliente y demuestre compromiso con la calidad a través de la certificación de sistema de gestión de calidad reconocida internacionalmente.' },
  iso9001History: { en: 'First published in 1987, ISO 9001 has evolved through multiple revisions to become the world\'s most widely adopted quality management standard.', es: 'Publicado por primera vez en 1987, ISO 9001 ha evolucionado a través de múltiples revisiones para convertirse en el estándar de gestión de calidad más adoptado en el mundo.' },
  iso9001History2: { en: 'The 2015 version introduced risk-based thinking and enhanced leadership requirements, making it more strategic and relevant to modern organizations.', es: 'La versión 2015 introdujo el pensamiento basado en riesgos y requisitos de liderazgo mejorados, haciéndolo más estratégico y relevante para las organizaciones modernas.' },
  iso9001Benefit1: { en: 'Enhances customer satisfaction and loyalty', es: 'Mejora la satisfacción y lealtad del cliente' },
  iso9001Benefit2: { en: 'Improves process efficiency and product/service quality', es: 'Mejora la eficiencia de procesos y la calidad del producto/servicio' },
  iso9001Benefit3: { en: 'Encourages a culture of continual improvement', es: 'Fomenta una cultura de mejora continua' },
  iso9001Benefit4: { en: 'Facilitates entry into global markets and supply chains', es: 'Facilita el ingreso a mercados globales y cadenas de suministro' },
  iso9001Benefit5: { en: 'Reduces costs through better resource management', es: 'Reduce costos a través de una mejor gestión de recursos' },
  iso9001Benefit6: { en: 'Demonstrates organizational commitment to quality excellence', es: 'Demuestra el compromiso organizacional con la excelencia en calidad' },
  iso9001Why: { en: 'Certification provides independent validation of quality commitment, often required for tenders and contracts in many industries.', es: 'La certificación proporciona validación independiente del compromiso con la calidad, a menudo requerida para licitaciones y contratos en muchas industrias.' },
  iso9001Why2: { en: 'ISO 9001 certification demonstrates that quality management is embedded throughout the organization and continuously monitored for effectiveness.', es: 'La certificación ISO 9001 demuestra que la gestión de calidad está integrada en toda la organización y se monitorea continuamente para su efectividad.' },
  iso9001Ready: { en: 'Ready for Quality Excellence?', es: '¿Listo para la Excelencia en Calidad?' },
  iso9001Start: { en: 'Start your quality management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de calidad con QSI hoy' },

  // ISO 14001 Content  
  iso14001Hero: { en: 'Demonstrate environmental responsibility and reduce environmental impact through internationally recognized environmental management system certification.', es: 'Demuestre responsabilidad ambiental y reduzca el impacto ambiental a través de la certificación de sistema de gestión ambiental reconocida internacionalmente.' },
  
  // ISO 45001 Content
  iso45001Hero: { en: 'Protect your workforce and demonstrate commitment to workplace safety through internationally recognized occupational health and safety management system certification.', es: 'Proteja a su fuerza laboral y demuestre compromiso con la seguridad laboral a través de la certificación de sistema de gestión de seguridad y salud ocupacional reconocida internacionalmente.' },
  iso45001Ready: { en: 'Ready for Workplace Safety Excellence?', es: '¿Listo para la Excelencia en Seguridad Laboral?' },
  iso45001Start: { en: 'Start your occupational health and safety management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de seguridad y salud ocupacional con QSI hoy' },
  
  // ISO 22000 Content
  iso22000Hero: { en: 'Ensure food safety and demonstrate commitment to consumer protection through internationally recognized food safety management system certification.', es: 'Asegure la seguridad alimentaria y demuestre compromiso con la protección del consumidor a través de la certificación de sistema de gestión de seguridad alimentaria reconocida internacionalmente.' },
  iso22000Ready: { en: 'Ready for Food Safety Excellence?', es: '¿Listo para la Excelencia en Seguridad Alimentaria?' },
  iso22000Start: { en: 'Start your food safety management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de seguridad alimentaria con QSI hoy' },
  
  // ISO 27001 Content
  iso27001Hero: { en: 'Protect your information assets and demonstrate commitment to information security through internationally recognized information security management system certification.', es: 'Proteja sus activos de información y demuestre compromiso con la seguridad de la información a través de la certificación de sistema de gestión de seguridad de la información reconocida internacionalmente.' },
  iso27001Ready: { en: 'Ready for Information Security Excellence?', es: '¿Listo para la Excelencia en Seguridad de la Información?' },
  iso27001Start: { en: 'Start your information security management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de seguridad de la información con QSI hoy' },

  // ISO 42001 Content
  iso42001Hero: { en: 'Manage artificial intelligence risks and opportunities through internationally recognized AI management system certification.', es: 'Gestione los riesgos y oportunidades de la inteligencia artificial a través de la certificación de sistema de gestión de IA reconocida internacionalmente.' },
  iso42001Ready: { en: 'Ready for AI Management Excellence?', es: '¿Listo para la Excelencia en Gestión de IA?' },
  iso42001Start: { en: 'Start your AI management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de IA con QSI hoy' },
  
  // Certification Process Steps
  initialReview: { en: 'Initial Review (Optional)', es: 'Revisión Inicial (Opcional)' },
  stage1Audit: { en: 'Stage 1 Certification Audit', es: 'Auditoría de Certificación Etapa 1' },
  stage2Audit: { en: 'Stage 2 Certification Audit', es: 'Auditoría de Certificación Etapa 2' },
  certificationDecision: { en: 'Certification Decision', es: 'Decisión de Certificación' },
  certificateIssuance: { en: 'Certificate Issuance', es: 'Emisión de Certificado' },
  surveillanceRecert: { en: 'Surveillance & Recertification', es: 'Vigilancia y Recertificación' },
  
  initialReviewDesc: { en: 'Optional Gap Analysis to assess current state and identify improvement areas.', es: 'Análisis de Brechas opcional para evaluar el estado actual e identificar áreas de mejora.' },
  stage1Desc: { en: 'Document review to evaluate alignment with requirements and readiness assessment.', es: 'Revisión de documentos para evaluar la alineación con los requisitos y evaluación de preparación.' },
  stage2Desc: { en: 'Implementation evaluation through staff interviews, facility inspection, and practice verification.', es: 'Evaluación de implementación a través de entrevistas al personal, inspección de instalaciones y verificación de prácticas.' },
  certDecisionDesc: { en: 'Independent Certification Committee reviews findings and makes formal certification decision.', es: 'El Comité de Certificación Independiente revisa los hallazgos y toma la decisión formal de certificación.' },
  certIssuanceDesc: { en: 'ISO Certificate issued upon approval, valid for three-year cycle.', es: 'Certificado ISO emitido una vez aprobado, válido por ciclo de tres años.' },
  surveillanceDesc: { en: 'Regular surveillance audits with recertification before three-year cycle expiration.', es: 'Auditorías de vigilancia regulares con recertificación antes del vencimiento del ciclo de tres años.' },
  collaborationPartnership: { en: 'Collaboration and Partnership', es: 'Colaboración y Asociación' },
  partnershipOpportunities: { en: 'Partnership Opportunities', es: 'Oportunidades de Asociación' },
  partnershipBenefits: { en: 'Partnership Benefits', es: 'Beneficios de la Asociación' },
  partnershipRequirements: { en: 'Partnership Requirements', es: 'Requisitos de Asociación' },
  applicationProcess: { en: 'Application Process', es: 'Proceso de Solicitud' },
  applyNow: { en: 'Apply Now!', es: '¡Aplicar Ahora!' },
  explorePartnership: { en: 'Explore Partnership Opportunities', es: 'Explorar Oportunidades de Asociación' },
  downloadPartnershipGuide: { en: 'Download Partnership Guide', es: 'Descargar Guía de Asociación' },
  startPartnershipApp: { en: 'Start Partnership Application', es: 'Iniciar Solicitud de Asociación' },
  contactPartnershipTeam: { en: 'Contact Partnership Team', es: 'Contactar Equipo de Asociación' },

  // Contact Page Translations
  contactUsTitle: { en: 'Contact Us', es: 'Contáctanos' },
  contactUsSubtitle: { en: 'Get in touch with our certification experts worldwide', es: 'Póngase en contacto con nuestros expertos en certificación en todo el mundo' },
  yourName: { en: 'Your Name (required)', es: 'Su Nombre (requerido)' },
  yourEmail: { en: 'Your Email (required)', es: 'Su Correo Electrónico (requerido)' },
  inquiryType: { en: 'Inquiry Type', es: 'Tipo de Consulta' },
  subject: { en: 'Subject (required)', es: 'Asunto (requerido)' },
  yourMessage: { en: 'Your Message (required)', es: 'Su Mensaje (requerido)' },
  sendMessage: { en: 'Send Message', es: 'Enviar Mensaje' },
  ourGlobalOffices: { en: 'Our Global Offices', es: 'Nuestras Oficinas Globales' },
  findUs: { en: 'Find Us', es: 'Encuéntranos' },
  interactiveMap: { en: 'Interactive Map', es: 'Mapa Interactivo' },
  orlandoHeadquarters: { en: 'Orlando Headquarters', es: 'Sede de Orlando' },
  selectInquiryType: { en: 'Select inquiry type', es: 'Seleccionar tipo de consulta' },
  generalInformation: { en: 'General Information', es: 'Información General' },
  scheduleAudit: { en: 'Schedule Audit', es: 'Programar Auditoría' },
  trainingCourses: { en: 'Training Courses', es: 'Cursos de Capacitación' },
  complaints: { en: 'Complaints', es: 'Quejas' },
  appeals: { en: 'Appeals', es: 'Apelaciones' },
  joinOurTeam: { en: 'Join Our Team (Auditors, Instructors, Collaborators)', es: 'Únete a Nuestro Equipo (Auditores, Instructores, Colaboradores)' },

  // History Page Translations
  ourHistoryTitle: { en: 'Our History', es: 'Nuestra Historia' },
  historySubtitle: { en: 'Over 30 Years of Multinational Experience', es: 'Más de 30 Años de Experiencia Multinacional' },
  yearsInBusiness: { en: 'Years in Business', es: 'Años en el Negocio' },
  professionalsTrainedStat: { en: 'Professionals Trained', es: 'Profesionales Capacitados' },
  countriesServed: { en: 'Countries Served', es: 'Países Atendidos' },
  certificationIssued: { en: 'Certificates Issued', es: 'Certificados Emitidos' },

  // FAQ Page Translations
  faq: { en: 'FAQ', es: 'FAQ' },
  faqTitle: { en: 'Frequently Asked Questions', es: 'Preguntas Frecuentes' },
  faqSubtitle: { en: 'Find answers to common questions about our certification services', es: 'Encuentra respuestas a preguntas comunes sobre nuestros servicios de certificación' },
  certificationServicesScope: { en: 'Certification Services & Scope', es: 'Servicios de Certificación y Alcance' },
  remoteAudits: { en: 'Remote Audits & Technology', es: 'Auditorías Remotas y Tecnología' },
  auditorCompetency: { en: 'Auditor Competency & Standards', es: 'Competencia del Auditor y Estándares' },
  accreditationRecognition: { en: 'Accreditation & Recognition', es: 'Acreditación y Reconocimiento' },
  globalOperations: { en: 'Global Operations', es: 'Operaciones Globales' },
  certificateManagement: { en: 'Certificate Management', es: 'Gestión de Certificados' },

  // Corporate Policies Page Translations
  corporatePoliciesTitle: { en: 'Corporate Policies', es: 'Políticas Corporativas' },
  corporatePoliciesSubtitle: { en: 'Our policies ensure the highest quality of services for our clients', es: 'Nuestras políticas aseguran la más alta calidad de servicios para nuestros clientes' },
  qualityPolicy: { en: 'Quality Policy', es: 'Política de Calidad' },
  socialResponsibilityPolicy: { en: 'Social Responsibility Policy', es: 'Política de Responsabilidad Social' },
  ethicsCode: { en: 'Ethics Code', es: 'Código de Ética' },
  impartialityPolicy: { en: 'Impartiality Policy', es: 'Política de Imparcialidad' },
  handlingComplaints: { en: 'Handling Complaints and Appeals', es: 'Manejo de Quejas y Apelaciones' },
  certificationProcedures: { en: 'Management System Certification Procedures', es: 'Procedimientos de Certificación de Sistemas de Gestión' },
  viewPolicy: { en: 'View Policy', es: 'Ver Política' },

  // Accreditations Page Translations
  accreditationsTitle: { en: 'Our Accreditations', es: 'Nuestras Acreditaciones' },
  accreditationsSubtitle: { en: 'International recognition and credibility through accredited certification services', es: 'Reconocimiento internacional y credibilidad a través de servicios de certificación acreditados' },
  accreditationBodies: { en: 'Accreditation Bodies', es: 'Organismos de Acreditación' },
  accreditationScope: { en: 'Accreditation Scope', es: 'Alcance de Acreditación' },
  
  // Certificate Validation Translations
  certificateValidationTitle: { en: 'Certificate Validation', es: 'Validación de Certificados' },
  certificateValidationSubtitle: { en: 'Verify the authenticity of QSI-issued certificates', es: 'Verificar la autenticidad de los certificados emitidos por QSI' },
  scanQRCode: { en: 'Scan QR Code', es: 'Escanear Código QR' },
  manualInput: { en: 'Manual Input', es: 'Entrada Manual' },
  enterCertificateNumber: { en: 'Enter Certificate Number', es: 'Ingresar Número de Certificado' },
  validateCertificate: { en: 'Validate Certificate', es: 'Validar Certificado' },
  validCertificate: { en: 'Valid Certificate', es: 'Certificado Válido' },
  invalidCertificate: { en: 'Invalid Certificate', es: 'Certificado Inválido' },
  pendingCertificate: { en: 'Pending Certificate', es: 'Certificado Pendiente' },

  // Additional History Content
  orlandoHeadquartersDesc: { en: 'Now headquartered in Orlando, Florida, we have regional offices in Madrid, Spain as well as San Jose, Costa Rica. We deliver expert services to clients world-wide and have provided services to organizations in over 15 countries.', es: 'Ahora con sede en Orlando, Florida, tenemos oficinas regionales en Madrid, España, así como en San José, Costa Rica. Brindamos servicios especializados a clientes en todo el mundo y hemos proporcionado servicios a organizaciones en más de 15 países.' },
  companyFoundationDesc: { en: 'Established in New Jersey, USA in 1993, for over 30 years QSI has been delivering auditing and certification services primarily based on ISO standards for management systems. QSI began serving primarily US companies and government institutions and their international suppliers, primarily in the Americas.', es: 'Establecido en Nueva Jersey, EE.UU. en 1993, durante más de 30 años QSI ha estado brindando servicios de auditoría y certificación basados principalmente en estándares ISO para sistemas de gestión. QSI comenzó sirviendo principalmente a empresas estadounidenses e instituciones gubernamentales y sus proveedores internacionales, principalmente en las Américas.' },
  qsiAcademyDesc: { en: 'Specializing in training of ISO Auditors and Lead Auditors, the QSI Academy has delivered training to over 10,000 professionals from over 40 countries.', es: 'Especializándose en la capacitación de Auditores ISO y Auditores Líderes, la Academia QSI ha brindado capacitación a más de 10,000 profesionales de más de 40 países.' },
  
  // FAQ Section Headers (missing translations for the FAQ content)
  whatIsIncludedInQSI: { en: 'What is included in QSI Certification Services?', es: '¿Qué está incluido en los Servicios de Certificación QSI?' },
  differenceAuditCertification: { en: "What's the difference between an audit and certification?", es: '¿Cuál es la diferencia entre una auditoría y certificación?' },
  ongoingSupportIncluded: { en: 'What ongoing support is included with certification?', es: '¿Qué soporte continuo está incluido con la certificación?' },
  howLongValidCertification: { en: 'How long is the certification valid?', es: '¿Por cuánto tiempo es válida la certificación?' },
  howQSIConductRemoteAudits: { en: 'How does QSI conduct remote audits?', es: '¿Cómo conduce QSI las auditorías remotas?' },
  whatTechnologyPlatforms: { en: 'What technology platforms does QSI use for remote audits?', es: '¿Qué plataformas tecnológicas utiliza QSI para auditorías remotas?' },
  
  // More validation text
  validateButtonText: { en: 'Validate', es: 'Validar' },
  startQRScan: { en: 'Start QR Scan', es: 'Iniciar Escaneo QR' },
  
  // Additional Certificate Validation Translations
  howToValidateTitle: { en: 'How to Validate a Certificate', es: 'Cómo Validar un Certificado' },
  methodQR: { en: 'QR Code', es: 'Código QR' },
  methodManual: { en: 'Manual Entry', es: 'Entrada Manual' },
  scanQRInstructions: { en: 'Use your mobile device to scan the QR code on your certificate', es: 'Usa tu dispositivo móvil para escanear el código QR en tu certificado' },
  manualEntryInstructions: { en: 'Enter the certificate number found on your QSI certificate', es: 'Ingresa el número de certificado que se encuentra en tu certificado QSI' },
  resultInstructions: { en: 'Get instant verification of your certificate status', es: 'Obtén verificación instantánea del estado de tu certificado' },
  certificateNumberPlaceholder: { en: 'Enter certificate number (e.g., QSI-2024-001)', es: 'Ingresa el número de certificado (ej. QSI-2024-001)' },
  validating: { en: 'Validating...', es: 'Validando...' },
  certificateFound: { en: 'Certificate Found!', es: '¡Certificado Encontrado!' },
  certificateValid: { en: 'This certificate is valid and verified.', es: 'Este certificado es válido y verificado.' },
  certificateNotFound: { en: 'Certificate Not Found', es: 'Certificado No Encontrado' },
  certificateInvalid: { en: 'This certificate number is not valid or has expired.', es: 'Este número de certificado no es válido o ha expirado.' },
  validationPending: { en: 'Validation in Progress', es: 'Validación en Progreso' },
  validationPendingDesc: { en: 'Certificate validation is being processed.', es: 'Se está procesando la validación del certificado.' },
  tryAgain: { en: 'Try Again', es: 'Intentar de Nuevo' },
  qrScannerDemo: { en: 'QR Scanner would open here. For demo purposes, please use manual input.', es: 'El escáner QR se abriría aquí. Para fines de demostración, por favor usa la entrada manual.' },
  
  // Step-by-step instructions
  step1Title: { en: 'Locate Validation Information', es: 'Localizar Información de Validación' },
  step1Desc: { en: 'Find either the QR code or registration number on the QSI certificate. The registration number is located on the right side above the authorized signature.', es: 'Encuentra el código QR o el número de registro en el certificado QSI. El número de registro se encuentra en el lado derecho arriba de la firma autorizada.' },
  step2Title: { en: 'Choose Validation Method', es: 'Elegir Método de Validación' },
  step2Desc: { en: 'Either scan the QR code found on the certificate with a mobile device, or manually enter the certificate number in the validation form below.', es: 'Escanea el código QR encontrado en el certificado con un dispositivo móvil, o ingresa manualmente el número de certificado en el formulario de validación a continuación.' },
  step3Title: { en: 'Get Results', es: 'Obtener Resultados' },
  step3Desc: { en: 'Receive instant verification of the certificate\'s authenticity and current validity status.', es: 'Recibe verificación instantánea de la autenticidad del certificado y el estado de validez actual.' },
  
  // QR and Manual sections content
  qrScanDescription: { en: 'To perform an automatic validation of a certificate simply scan the QR Code found in the certificate with any mobile application that has this feature, which must return a link that will take you to our website indicating the validity or not of it.', es: 'Para realizar una validación automática de un certificado, simplemente escanea el Código QR encontrado en el certificado con cualquier aplicación móvil que tenga esta función, que debe devolver un enlace que te llevará a nuestro sitio web indicando la validez o no del mismo.' },
  manualInputDescription: { en: 'To manually validate the authenticity of a certificate, please enter the Registration Number in the form below. The Registration Number can be found on the right side of the certificate, just above the authorized signature.', es: 'Para validar manualmente la autenticidad de un certificado, por favor ingresa el Número de Registro en el formulario a continuación. El Número de Registro se puede encontrar en el lado derecho del certificado, justo arriba de la firma autorizada.' },
  startQRScanButton: { en: 'Start QR Scan', es: 'Iniciar Escaneo QR' },
  verifyButton: { en: 'Verify', es: 'Verificar' },
  
  // Validation results
  certificateValidTitle: { en: 'Certificate Valid', es: 'Certificado Válido' },
  certificateValidDesc: { en: 'This certificate is authentic and currently valid. Certificate number:', es: 'Este certificado es auténtico y actualmente válido. Número de certificado:' },
  certificateInvalidTitle: { en: 'Certificate Invalid', es: 'Certificado Inválido' },
  certificateInvalidDesc: { en: 'This certificate number was not found in our database or has expired. Please verify the number and try again.', es: 'Este número de certificado no se encontró en nuestra base de datos o ha expirado. Por favor verifica el número e inténtalo de nuevo.' },
  certificatePendingTitle: { en: 'Validation Pending', es: 'Validación Pendiente' },
  certificatePendingDesc: { en: 'Certificate validation is in progress. Please wait...', es: 'La validación del certificado está en progreso. Por favor espera...' },
  
  // Navigation missing translations
  generalInquiries: { en: 'General Inquiries', es: 'Consultas Generales' },
  keyContacts: { en: 'Key Contacts', es: 'Contactos Clave' },
  
  // Updated statistics
  auditsConducted: { en: 'Audits Conducted', es: 'Auditorías Realizadas' },

  // Client Showcase Section
  clientsServedSince: { en: 'Over 500 Clients Served Since 1993', es: 'Más de 500 Clientes Atendidos Desde 1993' },
  trustedByCompanies: { en: 'Trusted by Fortune 500 companies, government agencies, and organizations worldwide for comprehensive management system certifications.', es: 'Confianza de empresas Fortune 500, agencias gubernamentales y organizaciones en todo el mundo para certificaciones integrales de sistemas de gestión.' },
  clientsServed: { en: 'Clients Served', es: 'Clientes Atendidos' },
  yearsExperience: { en: 'Years Experience', es: 'Años de Experiencia' },
  isoStandards: { en: 'ISO Standards', es: 'Estándares ISO' },
  successRate: { en: 'Success Rate', es: 'Tasa de Éxito' },
  achieveBusinessGoals: { en: 'Achieve Your Business Goals by Helping Us Deliver Our Services in Your Region!', es: '¡Logra Tus Objetivos Comerciales Ayudándonos a Entregar Nuestros Servicios en Tu Región!' },

  // Corporate Policies Descriptions
  qualityPolicyDesc: { en: 'Our commitment to supporting customer competitiveness through services that meet or exceed their needs with personalized attention and qualified personnel.', es: 'Nuestro compromiso de apoyar la competitividad del cliente a través de servicios que cumplan o superen sus necesidades con atención personalizada y personal calificado.' },
  socialResponsibilityPolicyDesc: { en: 'Our dedication to environmental sustainability, social responsibility, and alignment with the United Nations Global Compact principles.', es: 'Nuestra dedicación a la sostenibilidad ambiental, responsabilidad social y alineación con los principios del Pacto Global de las Naciones Unidas.' },
  ethicsCodeDesc: { en: 'Comprehensive ethical guidelines that govern our business practices, ensuring integrity, transparency, and fairness in all our operations.', es: 'Pautas éticas integrales que rigen nuestras prácticas comerciales, asegurando integridad, transparencia y equidad en todas nuestras operaciones.' },
  impartialityPolicyDesc: { en: 'Our commitment to maintaining independence and objectivity in all certification activities, free from conflicts of interest.', es: 'Nuestro compromiso de mantener la independencia y objetividad en todas las actividades de certificación, libre de conflictos de interés.' },
  handlingComplaintsDesc: { en: 'Clear procedures for addressing client concerns, complaints, and appeals in a fair, timely, and transparent manner.', es: 'Procedimientos claros para abordar las preocupaciones, quejas y apelaciones de los clientes de manera justa, oportuna y transparente.' },
  certificationProceduresDesc: { en: 'Detailed policies and procedures governing our management system certification processes based on international standards.', es: 'Políticas y procedimientos detallados que rigen nuestros procesos de certificación de sistemas de gestión basados en estándares internacionales.' },

  // Additional Corporate Policies content
  governsItself: { en: 'QSI governs itself based on a variety of international standards and corporate policies in order to deliver quality services in a manner that seeks to optimize the interest of our stakeholders, while also ensuring balance, fairness, impartiality and harmony with our environment and society in general; in alignment with the United Nations Global Compact.', es: 'QSI se gobierna a sí misma basándose en una variedad de estándares internacionales y políticas corporativas para brindar servicios de calidad de una manera que busque optimizar el interés de nuestras partes interesadas, al mismo tiempo que asegure el equilibrio, la equidad, la imparcialidad y la armonía con nuestro medio ambiente y la sociedad en general; en alineación con el Pacto Global de las Naciones Unidas.' },
  policiesPublished: { en: 'Some of these policies are published below for the benefit of our customers, suppliers and business partners and other relevant stakeholders.', es: 'Algunas de estas políticas se publican a continuación para el beneficio de nuestros clientes, proveedores y socios comerciales y otras partes interesadas relevantes.' },
  questionsAboutPolicies: { en: 'If you have any questions regarding our policies, please feel free to contact us. We value your feedback.', es: 'Si tiene alguna pregunta sobre nuestras políticas, no dude en contactarnos. Valoramos sus comentarios.' },
  contactUsAboutPolicies: { en: 'Contact Us About Our Policies', es: 'Contáctanos Sobre Nuestras Políticas' },

  // PolicyViewer additional translations
  introduction: { en: 'Introduction', es: 'Introducción' },
  policyStatement: { en: 'Policy Statement', es: 'Declaración de Política' },
  moreInformation: { en: 'More Information', es: 'Más Información' },
  forCompleteContent: { en: 'For the complete procedure, visit:', es: 'Para el procedimiento completo, visite:' },
  viewCompleteProcedure: { en: 'View Complete Procedure', es: 'Ver Procedimiento Completo' },
  closeDocument: { en: 'Close Document', es: 'Cerrar Documento' },
  version: { en: 'Version', es: 'Versión' },
  date: { en: 'Date', es: 'Fecha' },
  approvedBy: { en: 'Approved by', es: 'Aprobado por' },

  // Join Us Menu Translations
  joinUs: { en: 'Join Us', es: 'Únete a Nosotros' },
  partners: { en: 'Partners', es: 'Socios' },
  auditors: { en: 'Auditors', es: 'Auditores' },
  instructors: { en: 'Instructors', es: 'Instructores' },
  collaborators: { en: 'Collaborators', es: 'Colaboradores' },

  // Join Auditors Page Translations
  joinAuditorsTitle: { en: 'Join Our Auditor Team', es: 'Únete a Nuestro Equipo de Auditores' },
  auditorsSubtitle: { en: 'Become part of QSI\'s global network of professional auditors and help organizations achieve excellence through ISO management system certifications.', es: 'Forma parte de la red global de auditores profesionales de QSI y ayuda a las organizaciones a alcanzar la excelencia a través de certificaciones de sistemas de gestión ISO.' },
  whyJoinAuditors: { en: 'Why Join QSI as an Auditor?', es: '¿Por qué unirse a QSI como Auditor?' },
  auditorsOpportunities: { en: 'Discover the advantages of working with QSI\'s experienced auditing team and global certification network', es: 'Descubre las ventajas de trabajar con el equipo de auditoría experimentado de QSI y la red de certificación global' },
  
  // Join Instructors Page Translations
  joinInstructorsTitle: { en: 'Join Our Instructor Team', es: 'Únete a Nuestro Equipo de Instructores' },
  instructorsSubtitle: { en: 'Share your expertise with professionals worldwide through QSI Academy\'s comprehensive training programs on ISO management systems.', es: 'Comparte tu experiencia con profesionales de todo el mundo a través de los programas de capacitación integrales de QSI Academy sobre sistemas de gestión ISO.' },
  whyJoinInstructors: { en: 'Why Teach with QSI Academy?', es: '¿Por qué enseñar con QSI Academy?' },
  instructorsOpportunities: { en: 'Join our team of expert instructors and help shape the next generation of quality management professionals', es: 'Únete a nuestro equipo de instructores expertos y ayuda a formar la próxima generación de profesionales en gestión de calidad' },

  // Join Collaborators Page Translations
  joinCollaboratorsTitle: { en: 'Join Our Team as Collaborator', es: 'Únete a Nuestro Equipo como Colaborador' },
  collaboratorsSubtitle: { en: 'Contribute to QSI\'s mission of excellence in certification services through diverse roles in business development, service coordination, and administration.', es: 'Contribuye a la misión de excelencia de QSI en servicios de certificación a través de diversos roles en desarrollo de negocios, coordinación de servicios y administración.' },
  whyJoinCollaborators: { en: 'Why Collaborate with QSI?', es: '¿Por qué colaborar con QSI?' },
  collaboratorsOpportunities: { en: 'Join our team and contribute to QSI\'s continued success in providing world-class certification services', es: 'Únete a nuestro equipo y contribuye al éxito continuado de QSI en la prestación de servicios de certificación de clase mundial' },

  // Key Contacts Page Translations
  keyContactsTitle: { en: 'Our Key Contacts', es: 'Nuestros Contactos Clave' },
  keyContactsSubtitle: { en: 'Connect with QSI\'s leadership and specialized coordinators for certification, training, or international collaboration.', es: 'Conéctate con el liderazgo de QSI y coordinadores especializados para certificación, capacitación o colaboración internacional.' },
  contactButton: { en: 'Contact', es: 'Contactar' },
  keyContactsNotice: { en: 'Not sure who to contact? Submit a general inquiry on our', es: '¿No estás seguro a quién contactar? Envía una consulta general en nuestra' },
  keyContactsNoticePage: { en: 'Contact Us', es: 'Página de Contacto' },
  keyContactsNoticeEnd: { en: 'page and we will direct it appropriately.', es: 'y la dirigiremos apropiadamente.' },
  
  // Contact Form Translations
  contactFormTitle: { en: 'Contact', es: 'Contactar a' },
  contactYourName: { en: 'Your Name', es: 'Tu Nombre' },
  contactYourEmail: { en: 'Your Email', es: 'Tu Correo Electrónico' },
  contactOrganization: { en: 'Organization', es: 'Organización' },
  contactMessage: { en: 'Message', es: 'Mensaje' },
  contactSendMessage: { en: 'Send Message', es: 'Enviar Mensaje' },
  contactSending: { en: 'Sending...', es: 'Enviando...' },
  contactMessageSent: { en: 'Message sent successfully!', es: '¡Mensaje enviado exitosamente!' },
  cancel: { en: 'Cancel', es: 'Cancelar' },
  
  // Team Member Positions (Spanish translations)
  presidentCEO: { en: 'President and Chief Executive Officer', es: 'Presidente y Director Ejecutivo' },
  hrContractingLeader: { en: 'HR and Contracting Leader', es: 'Líder de Recursos Humanos y Contratación' },
  businessDevCoordNorthAmerica: { en: 'Business Development Coordinator – North America', es: 'Coordinadora de Desarrollo de Negocios – América del Norte' },
  businessDevCoordEuropeAfricaAsia: { en: 'Business Development Coordinator – Europe, Africa, and Asia', es: 'Coordinadora de Desarrollo de Negocios – Europa, África y Asia' },
  businessDevCoordLatinAmericaCaribbean: { en: 'Business Development Coordinator – Latin America and the Caribbean', es: 'Coordinadora de Desarrollo de Negocios – América Latina y el Caribe' },
  certificationServicesCoordinator: { en: 'Certification Services Coordinator', es: 'Coordinadora de Servicios de Certificación' },
  leaderQSIAcademy: { en: 'Leader of QSI Academy', es: 'Líder de QSI Academy' },
  
  // Team Member Descriptions (Spanish translations)
  celsoAlvaradoDesc: { en: 'As the founder and global leader of QSI, Dr. Alvarado sets the strategic direction for all certification, training, and innovation efforts. He is available for high-level institutional engagement, government collaboration, and strategic initiatives aligned with QSI\'s global mission for quality and impact.', es: 'Como fundador y líder global de QSI, el Dr. Alvarado establece la dirección estratégica para todos los esfuerzos de certificación, capacitación e innovación. Está disponible para el compromiso institucional de alto nivel, la colaboración gubernamental y las iniciativas estratégicas alineadas con la misión global de QSI para la calidad y el impacto.' },
  veronicaPolettoDesc: { en: 'Veronica is responsible for onboarding auditors, instructors, and collaborators. If you are interested in joining QSI\'s expert network, she will guide you through the recruitment and qualification process.', es: 'Veronica es responsable de la incorporación de auditores, instructores y colaboradores. Si estás interesado en unirte a la red de expertos de QSI, ella te guiará a través del proceso de reclutamiento y calificación.' },
  jenniferWilkinsDesc: { en: 'Jennifer supports engagement with organizations throughout North America. She helps you explore QSI\'s auditing, certification, and training solutions aligned with your growth and compliance goals.', es: 'Jennifer apoya el compromiso con organizaciones en toda América del Norte. Te ayuda a explorar las soluciones de auditoría, certificación y capacitación de QSI alineadas con tus objetivos de crecimiento y cumplimiento.' },
  athenaRicterDesc: { en: 'Athena leads regional outreach across Europe, Africa, and Asia. She supports your organization\'s path to international certification and helps tailor QSI services to meet regional and global standards.', es: 'Athena lidera el alcance regional en Europa, África y Asia. Apoya el camino de tu organización hacia la certificación internacional y ayuda a adaptar los servicios de QSI para cumplir con los estándares regionales y globales.' },
  danielaMaestreDesc: { en: 'Daniela facilitates collaboration and service development across Latin America and the Caribbean. She is your point of contact for regional certification and training opportunities.', es: 'Daniela facilita la colaboración y el desarrollo de servicios en América Latina y el Caribe. Es tu punto de contacto para oportunidades regionales de certificación y capacitación.' },
  alondraDallalDesc: { en: 'Alondra oversees the coordination of all QSI audit and certification services. She ensures smooth scheduling, communication, and execution throughout your certification journey.', es: 'Alondra supervisa la coordinación de todos los servicios de auditoría y certificación de QSI. Asegura una programación, comunicación y ejecución fluidas a lo largo de tu proceso de certificación.' },
  yerardyMontoyaDesc: { en: 'Yerardy manages QSI\'s training division, QSI Academy. She helps organizations and professionals access expert-led courses and customized learning paths aligned with ISO and industry-specific standards.', es: 'Yerardy gestiona la división de capacitación de QSI, QSI Academy. Ayuda a organizaciones y profesionales a acceder a cursos dirigidos por expertos y rutas de aprendizaje personalizadas alineadas con ISO y estándares específicos de la industria.' },
  
  // Academy and Digital System CTA Translations
  getExpertTraining: { en: 'Get Expert Training', es: 'Obtener Capacitación Experta' },
  digitalManagementSystem: { en: 'Digital Management System', es: 'Sistema de Gestión Digital' },
  exploreTraining: { en: 'Explore Training', es: 'Explorar Capacitación' },
  learnMoreCta: { en: 'Learn More', es: 'Aprender Más' },
  
  // Training CTA descriptions for different ISO standards
  masterIso9001Training: { en: 'Master ISO 9001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 9001 con los programas de capacitación integrales de QSI Academy' },
  masterIso14001Training: { en: 'Master ISO 14001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 14001 con los programas de capacitación integrales de QSI Academy' },
  masterIso45001Training: { en: 'Master ISO 45001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 45001 con los programas de capacitación integrales de QSI Academy' },
  masterIso18788Training: { en: 'Master ISO 18788 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 18788 con los programas de capacitación integrales de QSI Academy' },
  masterIso50001Training: { en: 'Master ISO 50001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 50001 con los programas de capacitación integrales de QSI Academy' },
  masterIso20000Training: { en: 'Master ISO/IEC 20000-1 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO/IEC 20000-1 con los programas de capacitación integrales de QSI Academy' },
  masterIso21001Training: { en: 'Master ISO 21001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 21001 con los programas de capacitación integrales de QSI Academy' },
  masterIso27001Training: { en: 'Master ISO/IEC 27001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO/IEC 27001 con los programas de capacitación integrales de QSI Academy' },
  masterIso37001Training: { en: 'Master ISO 37001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 37001 con los programas de capacitación integrales de QSI Academy' },
  masterIso37301Training: { en: 'Master ISO 37301 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 37301 con los programas de capacitación integrales de QSI Academy' },
  masterIso22000Training: { en: 'Master ISO 22000 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 22000 con los programas de capacitación integrales de QSI Academy' },
  masterIso22301Training: { en: 'Master ISO 22301 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO 22301 con los programas de capacitación integrales de QSI Academy' },
  masterIso54001Training: { en: 'Master ISO/TS 54001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO/TS 54001 con los programas de capacitación integrales de QSI Academy' },
  masterIso42001Training: { en: 'Master ISO/IEC 42001 implementation with QSI Academy\'s comprehensive training programs', es: 'Domine la implementación de ISO/IEC 42001 con los programas de capacitación integrales de QSI Academy' },
  
  // Digital Management System descriptions
  transformQualityManagement: { en: 'Transform your quality management with Nebusis digital platform solutions', es: 'Transforme su gestión de calidad con las soluciones de plataforma digital de Nebusis' },
  transformEnvironmentalManagement: { en: 'Transform your environmental management with Nebusis digital platform solutions', es: 'Transforme su gestión ambiental con las soluciones de plataforma digital de Nebusis' },
  transformSafetyManagement: { en: 'Transform your safety management with Nebusis digital platform solutions', es: 'Transforme su gestión de seguridad con las soluciones de plataforma digital de Nebusis' },
  transformSecurityManagement: { en: 'Transform your security management with Nebusis digital platform solutions', es: 'Transforme su gestión de seguridad con las soluciones de plataforma digital de Nebusis' },
  transformEnergyManagement: { en: 'Transform your energy management with Nebusis digital platform solutions', es: 'Transforme su gestión de energía con las soluciones de plataforma digital de Nebusis' },
  transformITServiceManagement: { en: 'Transform your IT service management with Nebusis digital platform solutions', es: 'Transforme su gestión de servicios de TI con las soluciones de plataforma digital de Nebusis' },
  transformEducationalManagement: { en: 'Transform your educational management with Nebusis digital platform solutions', es: 'Transforme su gestión educativa con las soluciones de plataforma digital de Nebusis' },
  transformInformationSecurity: { en: 'Transform your information security management with Nebusis digital platform solutions', es: 'Transforme su gestión de seguridad de la información con las soluciones de plataforma digital de Nebusis' },
  transformAntiBriberyManagement: { en: 'Transform your anti-bribery management with Nebusis digital platform solutions', es: 'Transforme su gestión antisoborno con las soluciones de plataforma digital de Nebusis' },
  transformComplianceManagement: { en: 'Transform your compliance management with Nebusis digital platform solutions', es: 'Transforme su gestión de cumplimiento con las soluciones de plataforma digital de Nebusis' },
  transformFoodSafetyManagement: { en: 'Transform your food safety management with Nebusis digital platform solutions', es: 'Transforme su gestión de seguridad alimentaria con las soluciones de plataforma digital de Nebusis' },
  transformContinuityManagement: { en: 'Transform your business continuity management with Nebusis digital platform solutions', es: 'Transforme su gestión de continuidad del negocio con las soluciones de plataforma digital de Nebusis' },
  transformTerritorialGovernance: { en: 'Transform your territorial governance with Nebusis digital platform solutions', es: 'Transforme su gobernanza territorial con las soluciones de plataforma digital de Nebusis' },
  transformAIManagement: { en: 'Transform your AI management with Nebusis digital platform solutions', es: 'Transforme su gestión de IA con las soluciones de plataforma digital de Nebusis' },

  // Additional ISO content translations
  privateSecurityOperationsManagement: { en: 'Private Security Operations Management Systems', es: 'Sistemas de Gestión de Operaciones de Seguridad Privada' },
  ensureResponsibleSecurity: { en: 'Ensure responsible and effective private security operations through internationally recognized management system certification.', es: 'Asegure operaciones de seguridad privada responsables y efectivas a través de la certificación de sistemas de gestión reconocida internacionalmente.' },
  
  iso18788History: { en: 'Published in 2015, ISO 18788 was developed to address the growing need for responsible private security operations worldwide. The standard establishes requirements for private security operations, emphasizing respect for human rights, national sovereignty, and rule of law.', es: 'Publicado en 2015, ISO 18788 fue desarrollado para abordar la creciente necesidad de operaciones de seguridad privada responsables en todo el mundo. El estándar establece requisitos para operaciones de seguridad privada, enfatizando el respeto por los derechos humanos, la soberanía nacional y el estado de derecho.' },
  
  iso18788LatestVersion: { en: 'ISO 18788:2015', es: 'ISO 18788:2015' },
  iso18788BenefitsDesc: { en: 'ISO 18788:2015 certification provides comprehensive private security management advantages:', es: 'La certificación ISO 18788:2015 proporciona ventajas integrales de gestión de seguridad privada:' },
  
  iso18788WhyCertify1: { en: 'Certification demonstrates accountability and professionalism in security service delivery, essential for government contracts and international operations.', es: 'La certificación demuestra responsabilidad y profesionalismo en la prestación de servicios de seguridad, esencial para contratos gubernamentales y operaciones internacionales.' },
  iso18788WhyCertify2: { en: 'ISO 18788 certification assures clients that private security operations are conducted responsibly with respect for human rights and local laws.', es: 'La certificación ISO 18788 asegura a los clientes que las operaciones de seguridad privada se realizan de manera responsable respetando los derechos humanos y las leyes locales.' },
  
  systematicCertificationProcess: { en: 'Our systematic and internationally recognized certification process ensures credibility and value', es: 'Nuestro proceso de certificación sistemático y reconocido internacionalmente asegura credibilidad y valor' },
  
  // ISO 18788 Benefits
  ensuresResponsibleSecurityService: { en: 'Ensures responsible security service delivery', es: 'Asegura la prestación responsable de servicios de seguridad' },
  enhancesComplianceInternational: { en: 'Enhances compliance with international laws', es: 'Mejora el cumplimiento de las leyes internacionales' },
  buildsTrustClientsStakeholders: { en: 'Builds trust with clients and stakeholders', es: 'Construye confianza con clientes y partes interesadas' },
  reducesOperationalReputationalRisks: { en: 'Reduces operational and reputational risks', es: 'Reduce los riesgos operacionales y de reputación' },
  promotesHumanRightsEthical: { en: 'Promotes human rights and ethical practices', es: 'Promueve los derechos humanos y prácticas éticas' },
  improvesCompetitiveAdvantageSecurity: { en: 'Improves competitive advantage in security contracts', es: 'Mejora la ventaja competitiva en contratos de seguridad' },
  
  // Certification process steps
  initialReviewOptional: { en: 'Initial Review (Optional)', es: 'Revisión Inicial (Opcional)' },
  optionalGapAnalysis: { en: 'Optional Gap Analysis to assess current private security operations state and identify improvement areas.', es: 'Análisis de Brechas opcional para evaluar el estado actual de las operaciones de seguridad privada e identificar áreas de mejora.' },
  
  stage1CertificationAudit: { en: 'Stage 1 Certification Audit', es: 'Auditoría de Certificación Etapa 1' },
  documentReviewEvaluate: { en: 'Document review to evaluate alignment with ISO 18788:2015 requirements and readiness assessment.', es: 'Revisión de documentos para evaluar la alineación con los requisitos ISO 18788:2015 y evaluación de preparación.' },
  
  stage2CertificationAudit: { en: 'Stage 2 Certification Audit', es: 'Auditoría de Certificación Etapa 2' },
  implementationEvaluationStaff: { en: 'Implementation evaluation through staff interviews, operational observation, and security practice verification.', es: 'Evaluación de implementación a través de entrevistas con personal, observación operacional y verificación de prácticas de seguridad.' },
  
  independentCertificationCommittee: { en: 'Independent Certification Committee reviews findings and makes formal certification decision.', es: 'El Comité de Certificación Independiente revisa los hallazgos y toma la decisión formal de certificación.' },
  
  isoCertificateIssued: { en: 'ISO Certificate issued upon approval, valid for three-year cycle.', es: 'Certificado ISO emitido tras la aprobación, válido por un ciclo de tres años.' },
  
  surveillanceRecertification: { en: 'Surveillance & Recertification', es: 'Vigilancia y Recertificación' },
  regularSurveillanceAudits: { en: 'Regular surveillance audits with recertification before three-year cycle expiration.', es: 'Auditorías de vigilancia regulares con recertificación antes del vencimiento del ciclo de tres años.' },
  
  // CTA sections
  readyForSecurityExcellence: { en: 'Ready for Security Excellence?', es: '¿Listo para la Excelencia en Seguridad?' },
  startSecurityManagementJourney: { en: 'Start your private security management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de seguridad privada con QSI hoy' },
  
  // General ISO page content translations
  readyForQualityExcellence: { en: 'Ready for Quality Excellence?', es: '¿Listo para la Excelencia en Calidad?' },
  readyForEnvironmentalExcellence: { en: 'Ready for Environmental Excellence?', es: '¿Listo para la Excelencia Ambiental?' },
  readyForSafetyExcellence: { en: 'Ready for Safety Excellence?', es: '¿Listo para la Excelencia en Seguridad?' },
  readyForEnergyExcellence: { en: 'Ready for Energy Excellence?', es: '¿Listo para la Excelencia Energética?' },
  readyForITExcellence: { en: 'Ready for IT Service Excellence?', es: '¿Listo para la Excelencia en Servicios de TI?' },
  readyForEducationalExcellence: { en: 'Ready for Educational Excellence?', es: '¿Listo para la Excelencia Educativa?' },
  readyForInformationSecurityExcellence: { en: 'Ready for Information Security Excellence?', es: '¿Listo para la Excelencia en Seguridad de la Información?' },
  readyForAntiBriberyExcellence: { en: 'Ready for Anti-Bribery Excellence?', es: '¿Listo para la Excelencia Antisoborno?' },
  readyForComplianceExcellence: { en: 'Ready for Compliance Excellence?', es: '¿Listo para la Excelencia en Cumplimiento?' },
  readyForFoodSafetyExcellence: { en: 'Ready for Food Safety Excellence?', es: '¿Listo para la Excelencia en Seguridad Alimentaria?' },
  readyForContinuityExcellence: { en: 'Ready for Business Continuity Excellence?', es: '¿Listo para la Excelencia en Continuidad del Negocio?' },
  readyForTerritorialExcellence: { en: 'Ready for Territorial Governance Excellence?', es: '¿Listo para la Excelencia en Gobernanza Territorial?' },
  readyForAIExcellence: { en: 'Ready for AI Management Excellence?', es: '¿Listo para la Excelencia en Gestión de IA?' },
  
  // Generic journey starters
  startQualityJourney: { en: 'Start your quality management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de calidad con QSI hoy' },
  startEnvironmentalJourney: { en: 'Start your environmental management system certification with QSI today', es: 'Comience su certificación de sistema de gestión ambiental con QSI hoy' },
  startSafetyJourney: { en: 'Start your occupational health & safety management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de seguridad y salud ocupacional con QSI hoy' },
  startEnergyJourney: { en: 'Start your energy management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de energía con QSI hoy' },
  startITJourney: { en: 'Start your IT service management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de servicios de TI con QSI hoy' },
  startEducationalJourney: { en: 'Start your educational management system certification with QSI today', es: 'Comience su certificación de sistema de gestión educativa con QSI hoy' },
  startInformationSecurityJourney: { en: 'Start your information security management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de seguridad de la información con QSI hoy' },
  startAntiBriberyJourney: { en: 'Start your anti-bribery management system certification with QSI today', es: 'Comience su certificación de sistema de gestión antisoborno con QSI hoy' },
  startComplianceJourney: { en: 'Start your compliance management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de cumplimiento con QSI hoy' },
  startFoodSafetyJourney: { en: 'Start your food safety management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de seguridad alimentaria con QSI hoy' },
  startContinuityJourney: { en: 'Start your business continuity management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de continuidad del negocio con QSI hoy' },
  startTerritorialJourney: { en: 'Start your territorial governance management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de gobernanza territorial con QSI hoy' },
  startAIJourney: { en: 'Start your AI management system certification with QSI today', es: 'Comience su certificación de sistema de gestión de IA con QSI hoy' },
  
  // ISO 9001 additional translations
  buildQualityExcellence: { en: 'Build organizational excellence through customer-focused quality management systems and continuous improvement processes.', es: 'Construya la excelencia organizacional a través de sistemas de gestión de calidad centrados en el cliente y procesos de mejora continua.' },
  iso9001BenefitsDesc: { en: 'ISO 9001:2015 certification delivers comprehensive quality management advantages:', es: 'La certificación ISO 9001:2015 ofrece ventajas integrales de gestión de calidad:' },
  iso9001WhyCertify1: { en: 'Certification demonstrates commitment to customer satisfaction and continuous improvement, essential for competitive advantage and market credibility.', es: 'La certificación demuestra compromiso con la satisfacción del cliente y la mejora continua, esencial para la ventaja competitiva y la credibilidad en el mercado.' },
  iso9001WhyCertify2: { en: 'ISO 9001 certification ensures consistent product and service quality while reducing waste, improving efficiency, and enhancing stakeholder confidence.', es: 'La certificación ISO 9001 asegura calidad consistente de productos y servicios mientras reduce desperdicios, mejora la eficiencia y aumenta la confianza de las partes interesadas.' },
  
  // ISO 9001 Benefits
  improvesCustomerSatisfaction: { en: 'Improves customer satisfaction and loyalty', es: 'Mejora la satisfacción y lealtad del cliente' },
  enhancesProcessEfficiency: { en: 'Enhances process efficiency and effectiveness', es: 'Mejora la eficiencia y efectividad de los procesos' },
  reducesWasteOperationalCosts: { en: 'Reduces waste and operational costs', es: 'Reduce desperdicios y costos operacionales' },
  strengthensSupplierRelationships: { en: 'Strengthens supplier relationships and partnerships', es: 'Fortalece las relaciones con proveedores y socios' },
  facilitatesRiskManagement: { en: 'Facilitates effective risk management', es: 'Facilita la gestión efectiva de riesgos' },
  supportsContinuousImprovement: { en: 'Supports continuous improvement culture', es: 'Apoya la cultura de mejora continua' },
  
  // ISO 14001 specific translations
  environmentalManagementSystems: { en: 'Environmental Management Systems', es: 'Sistemas de Gestión Ambiental' },
  achieveSustainableExcellence: { en: 'Achieve sustainable excellence through comprehensive environmental management systems and proactive environmental protection strategies.', es: 'Logre la excelencia sostenible a través de sistemas integrales de gestión ambiental y estrategias proactivas de protección ambiental.' },
  iso14001History: { en: 'First published in 1996, ISO 14001:2015 represents the second generation of this globally recognized environmental management standard. The latest version emphasizes life cycle thinking, leadership commitment, and environmental protection for sustainable business practices.', es: 'Publicado por primera vez en 1996, ISO 14001:2015 representa la segunda generación de este estándar de gestión ambiental reconocido mundialmente. La versión más reciente enfatiza el pensamiento de ciclo de vida, el compromiso del liderazgo y la protección ambiental para prácticas comerciales sostenibles.' },
  iso14001BenefitsDesc: { en: 'ISO 14001:2015 certification delivers comprehensive environmental management advantages:', es: 'La certificación ISO 14001:2015 ofrece ventajas integrales de gestión ambiental:' },
  iso14001WhyCertify1: { en: 'Certification demonstrates environmental responsibility and regulatory compliance, essential for sustainable operations and stakeholder trust.', es: 'La certificación demuestra responsabilidad ambiental y cumplimiento regulatorio, esencial para operaciones sostenibles y confianza de las partes interesadas.' },
  iso14001WhyCertify2: { en: 'ISO 14001 certification ensures systematic environmental management while reducing environmental impact, improving resource efficiency, and enhancing corporate reputation.', es: 'La certificación ISO 14001 asegura la gestión ambiental sistemática mientras reduce el impacto ambiental, mejora la eficiencia de recursos y aumenta la reputación corporativa.' },
  
  // ISO 14001 Benefits
  reducesEnvironmentalImpact: { en: 'Reduces environmental impact and pollution', es: 'Reduce el impacto ambiental y la contaminación' },
  improvesResourceEfficiency: { en: 'Improves resource efficiency and conservation', es: 'Mejora la eficiencia y conservación de recursos' },
  ensuresRegulatoryCompliance: { en: 'Ensures regulatory compliance and legal conformity', es: 'Asegura el cumplimiento regulatorio y la conformidad legal' },
  enhancesCorporateReputation: { en: 'Enhances corporate reputation and brand value', es: 'Mejora la reputación corporativa y el valor de marca' },
  reducesOperatingCosts: { en: 'Reduces operating costs through efficiency', es: 'Reduce los costos operativos a través de la eficiencia' },
  improvestakeholderRelations: { en: 'Improves stakeholder relations and trust', es: 'Mejora las relaciones con las partes interesadas y la confianza' },
  
  // ISO 45001 specific translations
  occupationalHealthSafetyManagement: { en: 'Occupational Health & Safety Management Systems', es: 'Sistemas de Gestión de Seguridad y Salud Ocupacional' },
  protectWorkersSafety: { en: 'Protect workers and build a safer workplace through comprehensive occupational health and safety management systems.', es: 'Proteja a los trabajadores y construya un lugar de trabajo más seguro a través de sistemas integrales de gestión de seguridad y salud ocupacional.' },
  iso45001History: { en: 'Published in 2018, ISO 45001 replaced OHSAS 18001 and represents the first global standard for occupational health and safety management systems. It emphasizes worker participation, leadership commitment, and continuous improvement in workplace safety.', es: 'Publicado en 2018, ISO 45001 reemplazó a OHSAS 18001 y representa el primer estándar global para sistemas de gestión de seguridad y salud ocupacional. Enfatiza la participación de los trabajadores, el compromiso del liderazgo y la mejora continua en la seguridad del lugar de trabajo.' },
  iso45001BenefitsDesc: { en: 'ISO 45001:2018 certification delivers comprehensive workplace safety advantages:', es: 'La certificación ISO 45001:2018 ofrece ventajas integrales de seguridad del lugar de trabajo:' },
  iso45001WhyCertify1: { en: 'Certification demonstrates commitment to worker safety and regulatory compliance, essential for reducing workplace incidents and legal liability.', es: 'La certificación demuestra compromiso con la seguridad de los trabajadores y el cumplimiento regulatorio, esencial para reducir incidentes en el lugar de trabajo y responsabilidades legales.' },
  iso45001WhyCertify2: { en: 'ISO 45001 certification ensures systematic safety management while improving worker engagement, reducing insurance costs, and enhancing organizational reputation.', es: 'La certificación ISO 45001 asegura la gestión sistemática de la seguridad mientras mejora la participación de los trabajadores, reduce los costos de seguros y aumenta la reputación organizacional.' },
  
  // ISO 45001 Benefits
  reducesWorkplaceIncidents: { en: 'Reduces workplace incidents and injuries', es: 'Reduce incidentes y lesiones en el lugar de trabajo' },
  improvesWorkerEngagement: { en: 'Improves worker engagement and participation', es: 'Mejora la participación y el compromiso de los trabajadores' },
  ensuresLegalCompliance: { en: 'Ensures legal compliance and reduces liability', es: 'Asegura el cumplimiento legal y reduce la responsabilidad' },
  reducesInsuranceCosts: { en: 'Reduces insurance and compensation costs', es: 'Reduce los costos de seguros y compensación' },
  enhancesProductivity: { en: 'Enhances productivity through safer operations', es: 'Mejora la productividad a través de operaciones más seguras' },
  buildsStakeholderConfidence: { en: 'Builds stakeholder confidence and trust', es: 'Construye confianza y credibilidad de las partes interesadas' },
  
  // Additional ISO common CTAs - workplace safety specific
  readyForWorkplaceSafety: { en: 'Ready for Workplace Safety Excellence?', es: '¿Listo para la Excelencia en Seguridad Laboral?' },

  // ISO 50001 Energy Management Systems - Complete translations
  energyManagementSystems: { en: 'Energy Management Systems', es: 'Sistemas de Gestión de Energía' },
  optimizeEnergyPerformance: { en: 'Optimize energy performance and demonstrate commitment to energy efficiency through internationally recognized energy management system certification.', es: 'Optimice el rendimiento energético y demuestre compromiso con la eficiencia energética a través de la certificación de sistemas de gestión de energía reconocida internacionalmente.' },
  
  iso50001History: { en: 'Published in 2011 and revised in 2018, ISO 50001 provides organizations with a framework to establish, implement, maintain, and improve energy management systems. The standard helps organizations use energy more efficiently and reduce costs and environmental impact.', es: 'Publicado en 2011 y revisado en 2018, ISO 50001 proporciona a las organizaciones un marco para establecer, implementar, mantener y mejorar los sistemas de gestión de energía. El estándar ayuda a las organizaciones a usar la energía de manera más eficiente y reducir costos e impacto ambiental.' },
  
  iso50001LatestVersion: { en: 'ISO 50001:2018', es: 'ISO 50001:2018' },
  iso50001BenefitsDesc: { en: 'ISO 50001:2018 certification provides comprehensive energy management advantages:', es: 'La certificación ISO 50001:2018 proporciona ventajas integrales de gestión de energía:' },
  
  improvesEnergyEfficiency: { en: 'Improves energy efficiency and lowers utility costs', es: 'Mejora la eficiencia energética y reduce los costos de servicios públicos' },
  reducesGreenhouseGas: { en: 'Reduces greenhouse gas emissions', es: 'Reduce las emisiones de gases de efecto invernadero' },
  enhancesComplianceEnvironmental: { en: 'Enhances compliance with environmental legislation', es: 'Mejora el cumplimiento de la legislación ambiental' },
  supportsSustainableDevelopment: { en: 'Supports sustainable development goals', es: 'Apoya los objetivos de desarrollo sostenible' },
  encouragesSystematicApproach: { en: 'Encourages a systematic approach to energy management', es: 'Fomenta un enfoque sistemático para la gestión de energía' },
  enhancesSustainabilityReputation: { en: 'Enhances corporate sustainability reputation', es: 'Mejora la reputación de sostenibilidad corporativa' },
  
  iso50001WhyCertify1: { en: 'Energy management certification demonstrates organizational commitment to reducing environmental impact and operational costs through improved energy efficiency.', es: 'La certificación de gestión de energía demuestra el compromiso organizacional de reducir el impacto ambiental y los costos operacionales a través de una mayor eficiencia energética.' },
  iso50001WhyCertify2: { en: 'ISO 50001 certification provides a competitive advantage by reducing energy consumption, meeting sustainability goals, and demonstrating environmental responsibility to stakeholders.', es: 'La certificación ISO 50001 proporciona una ventaja competitiva al reducir el consumo de energía, cumplir objetivos de sostenibilidad y demostrar responsabilidad ambiental a las partes interesadas.' },
  
  // ISO 20000-1 IT Service Management Systems - Complete translations  
  itServiceManagementSystems: { en: 'IT Service Management Systems', es: 'Sistemas de Gestión de Servicios de TI' },
  deliverConsistentHighQuality: { en: 'Deliver consistent, high-quality IT services and demonstrate excellence in service management through internationally recognized certification.', es: 'Entregue servicios de TI consistentes y de alta calidad y demuestre excelencia en la gestión de servicios a través de certificación reconocida internacionalmente.' },
  
  iso20000History: { en: 'Published in 2005 and updated in 2018, ISO/IEC 20000-1 is the first international service management standard. It provides requirements for establishing, implementing, maintaining, and improving a service management system to deliver managed services that meet customer and applicable requirements.', es: 'Publicado en 2005 y actualizado en 2018, ISO/IEC 20000-1 es el primer estándar internacional de gestión de servicios. Proporciona requisitos para establecer, implementar, mantener y mejorar un sistema de gestión de servicios para entregar servicios gestionados que cumplan con los requisitos del cliente y aplicables.' },
  
  iso20000LatestVersion: { en: 'ISO/IEC 20000-1:2018', es: 'ISO/IEC 20000-1:2018' },
  iso20000BenefitsDesc: { en: 'ISO/IEC 20000-1:2018 certification provides comprehensive IT service management advantages:', es: 'La certificación ISO/IEC 20000-1:2018 proporciona ventajas integrales de gestión de servicios de TI:' },

  improvesITServiceDelivery: { en: 'Improves IT service delivery and customer satisfaction', es: 'Mejora la entrega de servicios de TI y la satisfacción del cliente' },
  enhancesServiceReliability: { en: 'Enhances service reliability and availability', es: 'Mejora la confiabilidad y disponibilidad del servicio' },
  reducesITServiceCosts: { en: 'Reduces IT service costs and risks', es: 'Reduce los costos y riesgos de servicios de TI' },
  alignsITServicesWithBusiness: { en: 'Aligns IT services with business needs', es: 'Alinea los servicios de TI con las necesidades del negocio' },
  supportsContinualImprovement: { en: 'Supports continual service improvement', es: 'Apoya la mejora continua del servicio' },
  demonstratesServiceCompetence: { en: 'Demonstrates service management competence to stakeholders', es: 'Demuestra competencia en gestión de servicios a las partes interesadas' },
  
  iso20000WhyCertify1: { en: 'IT service management certification demonstrates organizational capability to deliver reliable, efficient IT services that support business objectives and customer requirements.', es: 'La certificación de gestión de servicios de TI demuestra la capacidad organizacional para entregar servicios de TI confiables y eficientes que apoyen los objetivos del negocio y los requisitos del cliente.' },
  iso20000WhyCertify2: { en: 'ISO/IEC 20000-1 certification provides competitive advantage through improved service quality, reduced downtime, and enhanced customer confidence in IT service delivery capabilities.', es: 'La certificación ISO/IEC 20000-1 proporciona ventaja competitiva a través de mayor calidad de servicio, menor tiempo de inactividad y mayor confianza del cliente en las capacidades de entrega de servicios de TI.' },

  // ISO 21001 Educational Organizations Management Systems - Complete translations
  educationalOrganizationsManagement: { en: 'Educational Organizations Management Systems', es: 'Sistemas de Gestión de Organizaciones Educativas' },
  enhanceEducationalQuality: { en: 'Enhance educational quality and learner satisfaction through internationally recognized educational organization management system certification.', es: 'Mejore la calidad educativa y la satisfacción del estudiante a través de la certificación de sistemas de gestión de organizaciones educativas reconocida internacionalmente.' },
  
  iso21001History: { en: 'Published in 2018, ISO 21001 provides requirements for management systems in educational organizations. It helps educational institutions demonstrate their ability to support acquisition and development of competence through teaching, learning, or research.', es: 'Publicado en 2018, ISO 21001 proporciona requisitos para sistemas de gestión en organizaciones educativas. Ayuda a las instituciones educativas a demostrar su capacidad para apoyar la adquisición y desarrollo de competencias a través de la enseñanza, el aprendizaje o la investigación.' },
  
  iso21001LatestVersion: { en: 'ISO 21001:2018', es: 'ISO 21001:2018' },
  iso21001BenefitsDesc: { en: 'ISO 21001:2018 certification provides comprehensive educational management advantages:', es: 'La certificación ISO 21001:2018 proporciona ventajas integrales de gestión educativa:' },

  improvesLearningProcesses: { en: 'Improves learning processes and student satisfaction', es: 'Mejora los procesos de aprendizaje y la satisfacción estudiantil' },
  enhancesTransparencyAccountability: { en: 'Enhances transparency and accountability', es: 'Mejora la transparencia y responsabilidad' },
  promotesInclusionAccessibility: { en: 'Promotes inclusion and accessibility', es: 'Promueve la inclusión y accesibilidad' },
  alignsLearningOutcomes: { en: 'Aligns learning outcomes with stakeholder needs', es: 'Alinea los resultados de aprendizaje con las necesidades de las partes interesadas' },
  encouragesInnovation: { en: 'Encourages innovation and continual improvement', es: 'Fomenta la innovación y mejora continua' },
  strengthensInstitutionalCredibility: { en: 'Strengthens institutional credibility and recognition', es: 'Fortalece la credibilidad y reconocimiento institucional' },
  
  iso21001WhyCertify1: { en: 'Educational management certification demonstrates institutional commitment to providing quality education and meeting learner needs through systematic and sustainable approaches.', es: 'La certificación de gestión educativa demuestra el compromiso institucional de proporcionar educación de calidad y satisfacer las necesidades del estudiante a través de enfoques sistemáticos y sostenibles.' },
  iso21001WhyCertify2: { en: 'ISO 21001 certification enhances institutional reputation, improves learner outcomes, and provides a competitive advantage in the educational sector through demonstrated quality management.', es: 'La certificación ISO 21001 mejora la reputación institucional, mejora los resultados del estudiante y proporciona una ventaja competitiva en el sector educativo a través de la gestión de calidad demostrada.' },

  // Additional translations for ISO certification process steps
  optionalGapAnalysisEnergy: { en: 'Optional Gap Analysis to assess current energy management state and identify improvement areas.', es: 'Análisis de Brechas opcional para evaluar el estado actual de gestión de energía e identificar áreas de mejora.' },
  documentReviewIso50001: { en: 'Document review to evaluate alignment with ISO 50001:2018 requirements and readiness assessment.', es: 'Revisión de documentos para evaluar la alineación con los requisitos ISO 50001:2018 y evaluación de preparación.' },
  implementationEvaluationEnergy: { en: 'Implementation evaluation through staff interviews, facility inspection, and energy management practice verification.', es: 'Evaluación de implementación a través de entrevistas al personal, inspección de instalaciones y verificación de prácticas de gestión de energía.' },
  
  optionalGapAnalysisIT: { en: 'Optional Gap Analysis to assess current IT service management state and identify improvement areas.', es: 'Análisis de Brechas opcional para evaluar el estado actual de gestión de servicios de TI e identificar áreas de mejora.' },
  documentReviewIso20000: { en: 'Document review to evaluate alignment with ISO/IEC 20000-1:2018 requirements and readiness assessment.', es: 'Revisión de documentos para evaluar la alineación con los requisitos ISO/IEC 20000-1:2018 y evaluación de preparación.' },
  implementationEvaluationIT: { en: 'Implementation evaluation through staff interviews, process observation, and IT service practice verification.', es: 'Evaluación de implementación a través de entrevistas al personal, observación de procesos y verificación de prácticas de servicios de TI.' },
  
  optionalGapAnalysisEducation: { en: 'Optional Gap Analysis to assess current educational management state and identify improvement areas.', es: 'Análisis de Brechas opcional para evaluar el estado actual de gestión educativa e identificar áreas de mejora.' },
  documentReviewIso21001: { en: 'Document review to evaluate alignment with ISO 21001:2018 requirements and readiness assessment.', es: 'Revisión de documentos para evaluar la alineación con los requisitos ISO 21001:2018 y evaluación de preparación.' },
  implementationEvaluationEducation: { en: 'Implementation evaluation through staff interviews, facility inspection, and educational practice verification.', es: 'Evaluación de implementación a través de entrevistas al personal, inspección de instalaciones y verificación de prácticas educativas.' },



  // ISO 27001 Information Security Management Systems - Complete translations
  informationSecurityManagement: { en: 'Information Security Management Systems', es: 'Sistemas de Gestión de Seguridad de la Información' },
  protectInformationAssets: { en: 'Protect information assets and demonstrate security excellence through internationally recognized information security management system certification.', es: 'Proteja los activos de información y demuestre excelencia en seguridad a través de la certificación de sistemas de gestión de seguridad de la información reconocida internacionalmente.' },
  
  iso27001History: { en: 'Originally published in 2005 and updated in 2013, then revised again in 2022, ISO/IEC 27001 provides requirements for establishing, implementing, maintaining, and continually improving information security management systems. The standard helps organizations protect the confidentiality, integrity, and availability of information.', es: 'Originalmente publicado en 2005 y actualizado en 2013, luego revisado nuevamente en 2022, ISO/IEC 27001 proporciona requisitos para establecer, implementar, mantener y mejorar continuamente los sistemas de gestión de seguridad de la información. El estándar ayuda a las organizaciones a proteger la confidencialidad, integridad y disponibilidad de la información.' },
  
  iso27001LatestVersion: { en: 'ISO/IEC 27001:2022', es: 'ISO/IEC 27001:2022' },
  iso27001BenefitsDesc: { en: 'ISO/IEC 27001:2022 certification provides comprehensive information security management advantages:', es: 'La certificación ISO/IEC 27001:2022 proporciona ventajas integrales de gestión de seguridad de la información:' },

  protectsInformationAssets: { en: 'Protects information assets and reduces security risks', es: 'Protege los activos de información y reduce los riesgos de seguridad' },
  enhancesCustomerTrust: { en: 'Enhances customer trust and confidence', es: 'Mejora la confianza y credibilidad del cliente' },
  ensuresRegulatoryComplianceSecurity: { en: 'Ensures regulatory compliance and legal protection', es: 'Asegura el cumplimiento regulatorio y protección legal' },
  improvesIncidentResponse: { en: 'Improves incident response and business continuity', es: 'Mejora la respuesta a incidentes y continuidad del negocio' },
  demonstratesCommitmentSecurity: { en: 'Demonstrates commitment to information security to stakeholders', es: 'Demuestra compromiso con la seguridad de la información a las partes interesadas' },
  providesCompetitiveAdvantage: { en: 'Provides competitive advantage in security-conscious markets', es: 'Proporciona ventaja competitiva en mercados conscientes de la seguridad' },
  
  iso27001WhyCertify1: { en: 'Information security certification demonstrates organizational commitment to protecting sensitive data and maintaining customer trust through systematic security practices.', es: 'La certificación de seguridad de la información demuestra el compromiso organizacional de proteger datos sensibles y mantener la confianza del cliente a través de prácticas de seguridad sistemáticas.' },
  iso27001WhyCertify2: { en: 'ISO/IEC 27001 certification provides assurance to stakeholders that information security risks are systematically managed and continuously monitored.', es: 'La certificación ISO/IEC 27001 proporciona seguridad a las partes interesadas de que los riesgos de seguridad de la información se gestionan sistemáticamente y se monitorean continuamente.' },

  // ISO 37001 Anti-bribery Management Systems - Complete translations  
  antiBriberyManagement: { en: 'Anti-Bribery Management Systems', es: 'Sistemas de Gestión Anti-Soborno' },
  preventBriberyCorruption: { en: 'Prevent bribery and corruption through internationally recognized anti-bribery management system certification.', es: 'Prevenga el soborno y la corrupción a través de la certificación de sistemas de gestión anti-soborno reconocida internacionalmente.' },
  
  iso37001History: { en: 'Published in 2016, ISO 37001 provides requirements for anti-bribery management systems. The standard helps organizations implement, maintain, and improve systems designed to prevent, detect, and respond to bribery.', es: 'Publicado en 2016, ISO 37001 proporciona requisitos para sistemas de gestión anti-soborno. El estándar ayuda a las organizaciones a implementar, mantener y mejorar sistemas diseñados para prevenir, detectar y responder al soborno.' },
  
  iso37001LatestVersion: { en: 'ISO 37001:2016', es: 'ISO 37001:2016' },
  iso37001BenefitsDesc: { en: 'ISO 37001:2016 certification provides comprehensive anti-bribery management advantages:', es: 'La certificación ISO 37001:2016 proporciona ventajas integrales de gestión anti-soborno:' },

  preventsBriberyCorruption: { en: 'Prevents bribery and corruption in business operations', es: 'Previene el soborno y la corrupción en las operaciones comerciales' },
  enhancesReputationTrust: { en: 'Enhances organizational reputation and stakeholder trust', es: 'Mejora la reputación organizacional y la confianza de las partes interesadas' },
  ensuresLegalComplianceAntiBribery: { en: 'Ensures compliance with anti-bribery legislation', es: 'Asegura el cumplimiento de la legislación anti-soborno' },
  reducesLegalRisks: { en: 'Reduces legal and financial risks', es: 'Reduce los riesgos legales y financieros' },
  improvesGovernancePractices: { en: 'Improves corporate governance practices', es: 'Mejora las prácticas de gobierno corporativo' },
  facilitatesBusinessRelationships: { en: 'Facilitates ethical business relationships globally', es: 'Facilita relaciones comerciales éticas a nivel global' },
  
  iso37001WhyCertify1: { en: 'Anti-bribery certification demonstrates organizational commitment to ethical business practices and regulatory compliance, essential for operating in international markets.', es: 'La certificación anti-soborno demuestra el compromiso organizacional con las prácticas comerciales éticas y el cumplimiento regulatorio, esencial para operar en mercados internacionales.' },
  iso37001WhyCertify2: { en: 'ISO 37001 certification provides assurance to stakeholders that the organization has implemented effective controls to prevent bribery and corruption.', es: 'La certificación ISO 37001 proporciona seguridad a las partes interesadas de que la organización ha implementado controles efectivos para prevenir el soborno y la corrupción.' },

  // ISO 37301 Compliance Management Systems - Complete translations
  complianceManagementSystems: { en: 'Compliance Management Systems', es: 'Sistemas de Gestión de Cumplimiento' },
  establishCultureCompliance: { en: 'Establish a culture of compliance and demonstrate commitment to ethical governance through internationally recognized compliance management system certification.', es: 'Establezca una cultura de cumplimiento y demuestre compromiso con la gobernanza ética a través de la certificación de sistemas de gestión de cumplimiento reconocida internacionalmente.' },
  
  iso37301History: { en: 'Published in 2021, ISO 37301 replaced ISO 19600 as the new global standard for compliance management systems. The standard provides guidance on establishing, developing, implementing, evaluating, maintaining, and improving an effective compliance management system.', es: 'Publicado en 2021, ISO 37301 reemplazó a ISO 19600 como el nuevo estándar global para sistemas de gestión de cumplimiento. El estándar proporciona orientación sobre el establecimiento, desarrollo, implementación, evaluación, mantenimiento y mejora de un sistema de gestión de cumplimiento efectivo.' },
  
  iso37301LatestVersion: { en: 'ISO 37301:2021', es: 'ISO 37301:2021' },
  iso37301BenefitsDesc: { en: 'ISO 37301:2021 certification provides comprehensive compliance management advantages:', es: 'La certificación ISO 37301:2021 proporciona ventajas integrales de gestión de cumplimiento:' },

  establishesComplianceCulture: { en: 'Establishes a strong compliance culture throughout the organization', es: 'Establece una cultura de cumplimiento sólida en toda la organización' },
  ensuresRegulatoryComplianceCompliance: { en: 'Ensures regulatory compliance and legal protection', es: 'Asegura el cumplimiento regulatorio y protección legal' },
  reducesComplianceRisks: { en: 'Reduces compliance risks and potential penalties', es: 'Reduce los riesgos de cumplimiento y posibles penalizaciones' },
  improvesStakeholderTrust: { en: 'Improves stakeholder trust and organizational reputation', es: 'Mejora la confianza de las partes interesadas y la reputación organizacional' },
  enhancesGovernancePractices: { en: 'Enhances corporate governance practices', es: 'Mejora las prácticas de gobierno corporativo' },
  facilitatesBusinessOperations: { en: 'Facilitates ethical business operations globally', es: 'Facilita operaciones comerciales éticas a nivel global' },
  
  iso37301WhyCertify1: { en: 'Compliance management certification demonstrates organizational commitment to ethical governance and regulatory adherence, essential for maintaining stakeholder trust and operational integrity.', es: 'La certificación de gestión de cumplimiento demuestra el compromiso organizacional con la gobernanza ética y el cumplimiento regulatorio, esencial para mantener la confianza de las partes interesadas y la integridad operacional.' },
  iso37301WhyCertify2: { en: 'ISO 37301 certification provides assurance that the organization has implemented systematic processes to identify, assess, and manage compliance obligations effectively.', es: 'La certificación ISO 37301 proporciona seguridad de que la organización ha implementado procesos sistemáticos para identificar, evaluar y gestionar las obligaciones de cumplimiento de manera efectiva.' },

  // ISO 22000 Food Safety Management Systems - Complete translations  
  foodSafetyManagementSystems: { en: 'Food Safety Management Systems', es: 'Sistemas de Gestión de Seguridad Alimentaria' },
  ensureFoodSafetySupplyChain: { en: 'Ensure food safety throughout the supply chain and demonstrate commitment to consumer protection through internationally recognized food safety management system certification.', es: 'Asegure la seguridad alimentaria en toda la cadena de suministro y demuestre compromiso con la protección del consumidor a través de la certificación de sistemas de gestión de seguridad alimentaria reconocida internacionalmente.' },
  
  iso22000History: { en: 'ISO 22000 was first published in 2005 to provide a framework for food safety management systems throughout the food chain. The 2018 revision aligned the standard with Annex SL structure and enhanced integration with HACCP principles and other management systems.', es: 'ISO 22000 fue publicado por primera vez en 2005 para proporcionar un marco para sistemas de gestión de seguridad alimentaria en toda la cadena alimentaria. La revisión de 2018 alineó el estándar con la estructura Anexo SL y mejoró la integración con los principios HACCP y otros sistemas de gestión.' },
  
  iso22000LatestVersion: { en: 'ISO 22000:2018', es: 'ISO 22000:2018' },
  iso22000BenefitsDesc: { en: 'ISO 22000:2018 certification provides comprehensive food safety management advantages:', es: 'La certificación ISO 22000:2018 proporciona ventajas integrales de gestión de seguridad alimentaria:' },

  ensuresFoodSafety: { en: 'Ensures food safety throughout the supply chain', es: 'Asegura la seguridad alimentaria en toda la cadena de suministro' },
  enhancesConsumerConfidence: { en: 'Enhances consumer confidence and brand reputation', es: 'Mejora la confianza del consumidor y la reputación de la marca' },
  facilitatesGlobalTrade: { en: 'Facilitates global food trade and market access', es: 'Facilita el comercio global de alimentos y el acceso al mercado' },
  reducesRecallRisks: { en: 'Reduces risk of product recalls and contamination', es: 'Reduce el riesgo de retiros de productos y contaminación' },
  improvesSupplierManagement: { en: 'Improves supplier management and traceability', es: 'Mejora la gestión de proveedores y la trazabilidad' },
  demonstratesCommitmentSafety: { en: 'Demonstrates commitment to food safety to stakeholders', es: 'Demuestra compromiso con la seguridad alimentaria a las partes interesadas' },
  
  iso22000WhyCertify1: { en: 'Food safety certification demonstrates organizational commitment to consumer protection and supply chain integrity, essential for building trust in food markets.', es: 'La certificación de seguridad alimentaria demuestra el compromiso organizacional con la protección del consumidor y la integridad de la cadena de suministro, esencial para generar confianza en los mercados alimentarios.' },
  iso22000WhyCertify2: { en: 'ISO 22000 certification provides assurance that food safety hazards are systematically identified, controlled, and monitored throughout the food chain.', es: 'La certificación ISO 22000 proporciona seguridad de que los peligros de seguridad alimentaria se identifican, controlan y monitorean sistemáticamente en toda la cadena alimentaria.' },

  // ISO 22301 Business Continuity Management Systems - Complete translations
  businessContinuityManagement: { en: 'Business Continuity Management Systems', es: 'Sistemas de Gestión de Continuidad del Negocio' },
  ensureOrganizationalResilience: { en: 'Ensure organizational resilience and continuity during disruptions through internationally recognized business continuity management system certification.', es: 'Asegure la resistencia organizacional y continuidad durante las interrupciones a través de la certificación de sistemas de gestión de continuidad del negocio reconocida internacionalmente.' },
  
  iso22301History: { en: 'Originally published in 2012 in response to disasters and business disruptions. Revised in 2019 to simplify language and improve applicability to all sectors, incorporating lessons learned from global implementation and real-world incidents.', es: 'Originalmente publicado en 2012 en respuesta a desastres e interrupciones comerciales. Revisado en 2019 para simplificar el lenguaje y mejorar la applicabilidad a todos los sectores, incorporando lecciones aprendidas de la implementación global e incidentes del mundo real.' },
  
  iso22301LatestVersion: { en: 'ISO 22301:2019', es: 'ISO 22301:2019' },
  iso22301BenefitsDesc: { en: 'ISO 22301:2019 certification provides comprehensive business continuity management advantages:', es: 'La certificación ISO 22301:2019 proporciona ventajas integrales de gestión de continuidad del negocio:' },

  enhancesOrganizationalResilience: { en: 'Enhances organizational resilience and preparedness', es: 'Mejora la resistencia organizacional y la preparación' },
  reducesBusinessDisruption: { en: 'Reduces business disruption and recovery time', es: 'Reduce la interrupción del negocio y el tiempo de recuperación' },
  protectsReputationAssets: { en: 'Protects reputation and critical business assets', es: 'Protege la reputación y los activos comerciales críticos' },
  improvesStakeholderConfidence: { en: 'Improves stakeholder confidence during crises', es: 'Mejora la confianza de las partes interesadas durante las crisis' },
  ensuresComplianceRegulations: { en: 'Ensures compliance with regulatory requirements', es: 'Asegura el cumplimiento de los requisitos regulatorios' },
  providesCompetitiveAdvantageResilience: { en: 'Provides competitive advantage through proven resilience', es: 'Proporciona ventaja competitiva a través de resistencia probada' },
  
  iso22301WhyCertify1: { en: 'Business continuity certification demonstrates organizational commitment to resilience and stakeholder protection, essential for maintaining operations during disruptions.', es: 'La certificación de continuidad del negocio demuestra el compromiso organizacional con la resistencia y protección de las partes interesadas, esencial para mantener las operaciones durante las interrupciones.' },
  iso22301WhyCertify2: { en: 'ISO 22301 certification provides assurance that the organization can continue operating and recover quickly from disruptive incidents.', es: 'La certificación ISO 22301 proporciona seguridad de que la organización puede continuar operando y recuperarse rápidamente de incidentes disruptivos.' },

  // ISO/TS 54001 Territorial Governance - Complete translations
  territorialGovernanceManagement: { en: 'Territorial Governance Management Systems', es: 'Sistemas de Gestión de Gobernanza Territorial' },
  improvePublicGovernance: { en: 'Improve public governance and territorial development through internationally recognized territorial governance management system certification.', es: 'Mejore la gobernanza pública y el desarrollo territorial a través de la certificación de sistemas de gestión de gobernanza territorial reconocida internacionalmente.' },
  
  iso54001History: { en: 'Published in 2019, ISO/TS 54001 provides technical specifications for territorial governance management systems. The standard helps public and private organizations improve governance practices and territorial development initiatives.', es: 'Publicado en 2019, ISO/TS 54001 proporciona especificaciones técnicas para sistemas de gestión de gobernanza territorial. El estándar ayuda a organizaciones públicas y privadas a mejorar las prácticas de gobernanza e iniciativas de desarrollo territorial.' },
  
  iso54001LatestVersion: { en: 'ISO/TS 54001:2019', es: 'ISO/TS 54001:2019' },
  iso54001BenefitsDesc: { en: 'ISO/TS 54001:2019 certification provides comprehensive territorial governance advantages:', es: 'La certificación ISO/TS 54001:2019 proporciona ventajas integrales de gobernanza territorial:' },

  improvesPublicGovernance: { en: 'Improves public governance and transparency', es: 'Mejora la gobernanza pública y la transparencia' },
  enhancesCitizenParticipation: { en: 'Enhances citizen participation and engagement', es: 'Mejora la participación y el compromiso ciudadano' },
  promotesSustainableDevelopment: { en: 'Promotes sustainable territorial development', es: 'Promueve el desarrollo territorial sostenible' },
  strengthensInstitutionalCapacity: { en: 'Strengthens institutional capacity and effectiveness', es: 'Fortalece la capacidad e efectividad institucional' },
  facilitatesStakeholderCollaboration: { en: 'Facilitates multi-stakeholder collaboration', es: 'Facilita la colaboración multi-partes interesadas' },
  demonstratesCommitmentGoodGovernance: { en: 'Demonstrates commitment to good governance principles', es: 'Demuestra compromiso con los principios de buena gobernanza' },
  
  iso54001WhyCertify1: { en: 'Territorial governance certification demonstrates commitment to transparent, effective, and participatory governance, essential for sustainable territorial development.', es: 'La certificación de gobernanza territorial demuestra compromiso con la gobernanza transparente, efectiva y participativa, esencial para el desarrollo territorial sostenible.' },
  iso54001WhyCertify2: { en: 'ISO/TS 54001 certification provides assurance that governance practices promote citizen engagement and sustainable territorial development.', es: 'La certificación ISO/TS 54001 proporciona seguridad de que las prácticas de gobernanza promueven el compromiso ciudadano y el desarrollo territorial sostenible.' },

  // ISO/IEC 42001 AI Management Systems - Complete translations
  aiManagementSystems: { en: 'Artificial Intelligence Management Systems', es: 'Sistemas de Gestión de Inteligencia Artificial' },
  manageAISystemsResponsibly: { en: 'Manage AI systems responsibly and demonstrate commitment to ethical artificial intelligence through internationally recognized AI management system certification.', es: 'Gestione los sistemas de IA de manera responsable y demuestre compromiso con la inteligencia artificial ética a través de la certificación de sistemas de gestión de IA reconocida internacionalmente.' },
  
  iso42001History: { en: 'Published in 2023, ISO/IEC 42001 is the first international standard for artificial intelligence management systems. The standard helps organizations implement, maintain, and continually improve AI management systems to ensure responsible AI development and deployment.', es: 'Publicado en 2023, ISO/IEC 42001 es el primer estándar internacional para sistemas de gestión de inteligencia artificial. El estándar ayuda a las organizaciones a implementar, mantener y mejorar continuamente los sistemas de gestión de IA para asegurar el desarrollo e implementación responsable de IA.' },
  
  iso42001LatestVersion: { en: 'ISO/IEC 42001:2023', es: 'ISO/IEC 42001:2023' },
  iso42001BenefitsDesc: { en: 'ISO/IEC 42001:2023 certification provides comprehensive AI management advantages:', es: 'La certificación ISO/IEC 42001:2023 proporciona ventajas integrales de gestión de IA:' },

  ensuresResponsibleAI: { en: 'Ensures responsible AI development and deployment', es: 'Asegura el desarrollo e implementación responsable de IA' },
  mitigatesAIRisks: { en: 'Mitigates AI-related risks and ethical concerns', es: 'Mitiga los riesgos relacionados con IA y preocupaciones éticas' },
  enhancesAIGovernance: { en: 'Enhances AI governance and oversight', es: 'Mejora la gobernanza y supervisión de IA' },
  improvesStakeholderTrustAI: { en: 'Improves stakeholder trust in AI systems', es: 'Mejora la confianza de las partes interesadas en los sistemas de IA' },
  facilitatesAICompliance: { en: 'Facilitates compliance with AI regulations', es: 'Facilita el cumplimiento de las regulaciones de IA' },
  demonstratesAIExcellence: { en: 'Demonstrates commitment to AI excellence and ethics', es: 'Demuestra compromiso con la excelencia y ética de IA' },
  
  iso42001WhyCertify1: { en: 'AI management certification demonstrates organizational commitment to responsible artificial intelligence practices and ethical AI governance, essential for maintaining trust in AI systems.', es: 'La certificación de gestión de IA demuestra el compromiso organizacional con las prácticas responsables de inteligencia artificial y la gobernanza ética de IA, esencial para mantener la confianza en los sistemas de IA.' },
  iso42001WhyCertify2: { en: 'ISO/IEC 42001 certification provides assurance that AI systems are developed, deployed, and managed according to international best practices and ethical principles.', es: 'La certificación ISO/IEC 42001 proporciona seguridad de que los sistemas de IA se desarrollan, implementan y gestionan según las mejores prácticas internacionales y principios éticos.' },

  // Missing translations for information security and other standards
  informationSecurityManagement: { en: 'Information Security Management Systems', es: 'Sistemas de Gestión de Seguridad de la Información' },
  protectInformationAssetsHero: { en: 'Protect your organization\'s information assets and demonstrate commitment to cybersecurity through internationally recognized information security management system certification.', es: 'Proteja los activos de información de su organización y demuestre compromiso con la ciberseguridad a través de la certificación de sistemas de gestión de seguridad de información reconocida internacionalmente.' },
  
  protectsInformationAssetsBenefit: { en: 'Protects sensitive data and information assets', es: 'Protege los datos sensibles y activos de información' },
  ensuresRegulatoryComplianceSecurity: { en: 'Ensures regulatory compliance (e.g., GDPR, HIPAA)', es: 'Asegura el cumplimiento regulatorio (ej. GDPR, HIPAA)' },
  improvesIncidentResponse: { en: 'Reduces risk of data breaches and cyberattacks', es: 'Reduce el riesgo de violaciones de datos y ciberataques' },
  demonstratesCommitmentSecurity: { en: 'Demonstrates commitment to information security to stakeholders', es: 'Demuestra compromiso con la seguridad de información a las partes interesadas' },
  
  antiBriberyManagementSystems: { en: 'Anti-Bribery Management Systems', es: 'Sistemas de Gestión Anti-Soborno' },
  demonstrateCommitmentEthicalPractices: { en: 'Demonstrate commitment to ethical business practices and zero tolerance for corruption through internationally recognized anti-bribery management system certification.', es: 'Demuestre compromiso con las prácticas comerciales éticas y tolerancia cero a la corrupción a través de la certificación de sistemas de gestión anti-soborno reconocida internacionalmente.' },

  // History section translations for all standards
  historyOfStandard: { en: 'History of the Standard', es: 'Historia del Estándar' },
  latestAvailableVersion: { en: 'Latest Available Version', es: 'Última Versión Disponible' },
  
  keyBenefits: { en: 'Key Benefits', es: 'Beneficios Clave' },
  whyCertify: { en: 'Why Certify?', es: '¿Por Qué Certificarse?' },
  stepsForCertification: { en: 'Steps for Certification', es: 'Pasos para la Certificación' },
  
  // Certification process translations
  initialReviewOptionalNew: { en: 'Initial Review (Optional)', es: 'Revisión Inicial (Opcional)' },
  stage1CertificationAuditNew: { en: 'Stage 1 Certification Audit', es: 'Auditoría de Certificación Etapa 1' },
  stage2CertificationAuditNew: { en: 'Stage 2 Certification Audit', es: 'Auditoría de Certificación Etapa 2' },
  certificationDecisionNew: { en: 'Certification Decision', es: 'Decisión de Certificación' },
  certificateIssuanceNew: { en: 'Certificate Issuance', es: 'Emisión del Certificado' },
  surveillanceRecertificationNew: { en: 'Surveillance & Recertification', es: 'Vigilancia y Recertificación' },
  
  // CTA sections for training and digital transformation
  advanceYourCareerNew: { en: 'Advance Your Career', es: 'Avance Su Carrera' },
  digitalTransformationNew: { en: 'Digital Transformation', es: 'Transformación Digital' },
  
  enhanceSkillsTrainingNew: { en: 'Enhance your skills and advance your career with specialized', es: 'Mejore sus habilidades y avance su carrera con' },
  trainingNew: { en: 'training', es: 'capacitación especializada' },
  
  streamlineProcessesNew: { en: 'Streamline your certification processes and enhance efficiency with', es: 'Optimice sus procesos de certificación y mejore la eficiencia con' },
  digitalPlatformNew: { en: 'digital platform', es: 'plataforma digital' },
  
  visitQSIAcademyNew: { en: 'Visit QSI Academy', es: 'Visite QSI Academy' },
  exploreNebusisNew: { en: 'Explore Nebusis', es: 'Explore Nebusis' },
  
  // Final CTA section
  readyToGetCertifiedNew: { en: 'Ready to Get Certified?', es: '¿Listo para Certificarse?' },
  startCertificationJourneyNew: { en: 'Start your certification journey today and demonstrate your commitment to excellence.', es: 'Comience su proceso de certificación hoy y demuestre su compromiso con la excelencia.' },
  getCertifiedNew: { en: 'Get Certified', es: 'Certificarse' }
  

};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    // Temporarily force English only
    return translations[key]?.['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};