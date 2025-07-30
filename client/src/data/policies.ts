export interface PolicySection {
  title: { en: string; es: string };
  content: { en: string; es: string };
}

export interface Policy {
  id: string;
  title: { en: string; es: string };
  version: string;
  approvedBy: string;
  date: string;
  introduction: { en: string; es: string };
  policyStatement: { en: string; es: string };
  sections: PolicySection[];
  additionalInfo?: { en: string; es: string };
}

export const policies: Policy[] = [
  {
    id: "quality-policy",
    title: { en: "Quality Policy", es: "Política de Calidad" },
    version: "Edition 3",
    approvedBy: "Dr. Celso Alvarado, President",
    date: "July 15, 2025",
    introduction: { 
      en: "QSI is committed to delivering world-class auditing, certification, and training services that meet international standards and exceed client expectations.",
      es: "QSI está comprometido con brindar servicios de auditoría, certificación y capacitación de clase mundial que cumplan con los estándares internacionales y superen las expectativas del cliente."
    },
    policyStatement: { 
      en: "Our objective is to continually improve our performance, meet regulatory requirements, and maintain the highest standards of competence, transparency, and customer satisfaction.",
      es: "Nuestro objetivo es mejorar continuamente nuestro desempeño, cumplir con los requisitos regulatorios y mantener los más altos estándares de competencia, transparencia y satisfacción del cliente."
    },
    sections: [
      {
        title: { en: "Key Commitments", es: "Compromisos Clave" },
        content: { 
          en: "• Compliance with ISO/IEC 17021-1 and other applicable standards.\n• Ongoing training and qualification of personnel.\n• Transparent and timely service delivery.\n• Regular performance evaluation and improvement planning.",
          es: "• Cumplimiento con ISO/IEC 17021-1 y otros estándares aplicables.\n• Capacitación continua y calificación del personal.\n• Entrega de servicios transparente y oportuna.\n• Evaluación regular del desempeño y planificación de mejoras."
        }
      }
    ]
  },
  {
    id: "social-responsibility-policy",
    title: { en: "Social Responsibility Policy", es: "Política de Responsabilidad Social" },
    version: "Edition 2",
    approvedBy: "Dr. Celso Alvarado, President",
    date: "July 15, 2025",
    introduction: { 
      en: "QSI believes that ethical business conduct and social contribution are integral to long-term success.",
      es: "QSI cree que la conducta empresarial ética y la contribución social son fundamentales para el éxito a largo plazo."
    },
    policyStatement: { 
      en: "We actively support social causes that align with our values, particularly those related to education, sustainability, and youth development.",
      es: "Apoyamos activamente las causas sociales que se alinean con nuestros valores, particularmente aquellas relacionadas con la educación, la sostenibilidad y el desarrollo juvenil."
    },
    sections: [
      {
        title: { en: "Key Commitments", es: "Compromisos Clave" },
        content: { 
          en: "• Support for youth-centered community projects.\n• Development of services that promote social responsibility.\n• Participation in global sustainability and CSR standard development.\n• Collaboration with stakeholders to extend CSR impact.",
          es: "• Apoyo a proyectos comunitarios centrados en los jóvenes.\n• Desarrollo de servicios que promuevan la responsabilidad social.\n• Participación en el desarrollo de estándares globales de sostenibilidad y RSE.\n• Colaboración con partes interesadas para extender el impacto de RSE."
        }
      }
    ]
  },
  {
    id: "ethics-code",
    title: { en: "Ethics Code", es: "Código de Ética" },
    version: "PS-008 – Version 3",
    approvedBy: "Dr. Celso Alvarado, President",
    date: "July 15, 2025",
    introduction: { 
      en: "QSI's Code of Ethics establishes the principles that govern professional behavior and integrity across the organization.",
      es: "El Código de Ética de QSI establece los principios que rigen el comportamiento profesional y la integridad en toda la organización."
    },
    policyStatement: { 
      en: "We are committed to ethical conduct, fairness, legal compliance, and respect for human rights in all our operations.",
      es: "Estamos comprometidos con la conducta ética, la equidad, el cumplimiento legal y el respeto por los derechos humanos en todas nuestras operaciones."
    },
    sections: [
      {
        title: { en: "Key Commitments", es: "Compromisos Clave" },
        content: { 
          en: "• Promotion of credibility, equity, and accountability.\n• Zero tolerance for discrimination, bribery, or unethical influence.\n• Preservation of confidentiality and data protection.\n• Avoidance of conflicts of interest.",
          es: "• Promoción de la credibilidad, equidad y responsabilidad.\n• Tolerancia cero a la discriminación, soborno o influencia no ética.\n• Preservación de la confidencialidad y protección de datos.\n• Evitar conflictos de interés."
        }
      }
    ]
  },
  {
    id: "impartiality-policy",
    title: { en: "Impartiality Policy", es: "Política de Imparcialidad" },
    version: "PS-005",
    approvedBy: "Dr. Celso Alvarado, President",
    date: "July 15, 2025",
    introduction: { 
      en: "QSI safeguards impartiality in all its certification activities to ensure objectivity and public trust.",
      es: "QSI salvaguarda la imparcialidad en todas sus actividades de certificación para asegurar la objetividad y la confianza pública."
    },
    policyStatement: { 
      en: "No financial, operational, or personal interest shall influence QSI's auditing and certification decisions.",
      es: "Ningún interés financiero, operacional o personal influirá en las decisiones de auditoría y certificación de QSI."
    },
    sections: [
      {
        title: { en: "Key Principles", es: "Principios Clave" },
        content: { 
          en: "• No consulting or internal audit services offered to certified clients.\n• No certification of other certification bodies.\n• Certification personnel are free from conflicts of interest.\n• Threats to impartiality are regularly assessed and mitigated.",
          es: "• No se ofrecen servicios de consultoría o auditoría interna a clientes certificados.\n• No se certifica a otros organismos de certificación.\n• El personal de certificación está libre de conflictos de interés.\n• Las amenazas a la imparcialidad se evalúan y mitigan regularmente."
        }
      }
    ]
  },
  {
    id: "complaints-appeals",
    title: { en: "Handling Complaints and Appeals", es: "Manejo de Quejas y Apelaciones" },
    version: "QM-8.4.0 – Version 10",
    approvedBy: "Dr. Celso Alvarado, President",
    date: "July 15, 2025",
    introduction: { 
      en: "QSI ensures that clients and stakeholders have clear channels to raise concerns and appeal decisions.",
      es: "QSI asegura que los clientes y partes interesadas tengan canales claros para plantear inquietudes y apelar decisiones."
    },
    policyStatement: { 
      en: "All complaints and appeals are handled transparently, fairly, and impartially within defined timelines.",
      es: "Todas las quejas y apelaciones se manejan de manera transparente, justa e imparcial dentro de plazos definidos."
    },
    sections: [
      {
        title: { en: "Key Procedures", es: "Procedimientos Clave" },
        content: { 
          en: "• Complaints and appeals may be submitted online via the QSI website.\n• Cases are reviewed by staff not involved in the original decision.\n• Responses are issued within 30 calendar days.\n• Appeals go to a designated committee for final determination.",
          es: "• Las quejas y apelaciones pueden ser enviadas en línea a través del sitio web de QSI.\n• Los casos son revisados por personal no involucrado en la decisión original.\n• Las respuestas se emiten dentro de 30 días calendario.\n• Las apelaciones van a un comité designado para la determinación final."
        }
      }
    ]
  },
  {
    id: "certification-process",
    title: { en: "Management System Certification Procedures", es: "Procedimientos de Certificación de Sistemas de Gestión" },
    version: "Edition 1",
    approvedBy: "Dr. Celso Alvarado, President",
    date: "July 15, 2025",
    introduction: { 
      en: "QSI follows an internationally recognized process for granting, maintaining, renewing, suspending, and withdrawing certifications.",
      es: "QSI sigue un proceso reconocido internacionalmente para otorgar, mantener, renovar, suspender y retirar certificaciones."
    },
    policyStatement: { en: "", es: "" },
    sections: [
      {
        title: { en: "Key Process Stages", es: "Etapas Clave del Proceso" },
        content: { 
          en: "• Application Review – Evaluation of client's information and desired scope.\n• Contract Formalization – Issuance of a formal proposal and signing of the agreement.\n• Stage 1 Audit – Preliminary evaluation of readiness, documentation, and site-specific context.\n• Stage 2 Audit – Full audit to determine conformity with applicable standards.\n• Certification Decision – Independent, impartial decision-making process.\n• Certificate Issuance – Valid for 3 years with annual surveillance audits.\n• Surveillance Audits – Annual monitoring to confirm continued conformity.\n• Recertification Audit – Conducted prior to the end of the cycle to renew certification.\n• Suspension/Withdrawal – Triggered by nonconformities or breach of terms.",
          es: "• Revisión de Solicitud – Evaluación de la información del cliente y alcance deseado.\n• Formalización del Contrato – Emisión de una propuesta formal y firma del acuerdo.\n• Auditoría Etapa 1 – Evaluación preliminar de preparación, documentación y contexto específico del sitio.\n• Auditoría Etapa 2 – Auditoría completa para determinar conformidad con estándares aplicables.\n• Decisión de Certificación – Proceso de toma de decisiones independiente e imparcial.\n• Emisión del Certificado – Válido por 3 años con auditorías de vigilancia anuales.\n• Auditorías de Vigilancia – Monitoreo anual para confirmar conformidad continua.\n• Auditoría de Recertificación – Realizada antes del final del ciclo para renovar la certificación.\n• Suspensión/Retiro – Activada por no conformidades o incumplimiento de términos."
        }
      }
    ],
    additionalInfo: { 
      en: "For the complete procedure, visit: https://app.nebusis.com/procesos/ver/det_procedimiento.php?hash=ZGJ6dEQ0YlRmSXN3VTJUV29rM29tVWpDOVhkYlZ6OSsxamQ0Y0hhclgyRmsxdVVDZmJ4WHdtZWpqS2FEMXR5cUk0RTVLbmpYU3hCQjhQc1ExTUZ5NFp3OGNkSFhTVUFscGYzejkwNUg4L2M9",
      es: "Para el procedimiento completo, visite: https://app.nebusis.com/procesos/ver/det_procedimiento.php?hash=ZGJ6dEQ0YlRmSXN3VTJUV29rM29tVWpDOVhkYlZ6OSsxamQ0Y0hhclgyRmsxdVVDZmJ4WHdtZWpqS2FEMXR5cUk0RTVLbmpYU3hCQjhQc1ExTUZ5NFp3OGNkSFhTVUFscGYzejkwNUg4L2M9"
    }
  }
];