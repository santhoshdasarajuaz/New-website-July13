export type LegalDocId = "terms" | "privacy" | "cookies" | "disclaimer" | "acceptableUse";

export type LegalDoc = {
  id: LegalDocId;
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string[] }[];
};

const contact = {
  email: "info@niagaprestasi.com",
};

export const legalDocs: Record<LegalDocId, LegalDoc> = {
  terms: {
    id: "terms",
    title: "Terms & Conditions",
    lastUpdated: "2 July 2026",
    sections: [
      {
        heading: "About these Terms",
        body: [
          "These Terms & Conditions govern your access to and use of the Niaga Prestasi Sdn Bhd website (the “Website”). By accessing or using the Website, you agree to these Terms.",
          "This Website provides general business information. It does not constitute legal, financial, or professional advice.",
        ],
      },
      {
        heading: "Use of the Website",
        body: [
          "You may use the Website only for lawful purposes and in accordance with these Terms.",
          "You must not attempt to interfere with the Website’s security, integrity, or availability.",
        ],
      },
      {
        heading: "Intellectual Property",
        body: [
          "Unless otherwise stated, all content on this Website (including text, graphics, and logos) is owned by or licensed to Niaga Prestasi Sdn Bhd.",
          "You may not reproduce, modify, distribute, or exploit any content without our prior written consent, except as permitted by applicable law.",
        ],
      },
      {
        heading: "External Links",
        body: [
          "The Website may contain links to external websites. We do not control and are not responsible for external content, policies, or practices.",
        ],
      },
      {
        heading: "No Contractual Relationship",
        body: [
          "Submitting an enquiry through the Website does not create a contractual relationship with Niaga Prestasi Sdn Bhd. Any services will be provided only under a separate written agreement.",
        ],
      },
      {
        heading: "Limitation of Liability",
        body: [
          "To the extent permitted by Malaysian law, Niaga Prestasi Sdn Bhd will not be liable for any loss or damage arising from your use of (or inability to use) the Website, including indirect or consequential losses.",
        ],
      },
      {
        heading: "Changes to these Terms",
        body: [
          "We may update these Terms from time to time. The “Last updated” date indicates when changes were made. Continued use of the Website means you accept the updated Terms.",
        ],
      },
      {
        heading: "Contact",
        body: [`If you have questions about these Terms, contact us at ${contact.email}.`],
      },
    ],
  },
  privacy: {
    id: "privacy",
    title: "Privacy Policy",
    lastUpdated: "2 July 2026",
    sections: [
      {
        heading: "Overview",
        body: [
          "This Privacy Policy explains how Niaga Prestasi Sdn Bhd collects, uses, and protects personal data when you interact with our Website and enquiries.",
          "We aim to handle personal data in a responsible manner consistent with applicable Malaysian data protection requirements.",
        ],
      },
      {
        heading: "Personal data we collect",
        body: [
          "When you submit an enquiry, we may collect your name, email address, phone number, subject/category, and message details.",
          "We may also collect technical data such as device/browser information and basic logs required to operate and secure the Website.",
        ],
      },
      {
        heading: "How we use personal data",
        body: [
          "To respond to enquiries and provide requested information about our services, training, courses, or talent solutions.",
          "To operate, maintain, and secure the Website, including troubleshooting and preventing abuse.",
        ],
      },
      {
        heading: "Sharing of personal data",
        body: [
          "We do not sell personal data.",
          "We may share personal data with service providers who support our Website operations (e.g., hosting, email) where necessary, under appropriate safeguards.",
        ],
      },
      {
        heading: "Retention",
        body: [
          "We retain personal data only as long as necessary for the purposes described above, or as required by law and legitimate business needs.",
        ],
      },
      {
        heading: "Security",
        body: [
          "We apply reasonable technical and organizational measures to protect personal data. No method of transmission or storage is 100% secure, but we work to reduce risk.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          `You may contact us at ${contact.email} to request access, correction, or deletion of personal data, subject to legal and operational constraints.`,
        ],
      },
    ],
  },
  cookies: {
    id: "cookies",
    title: "Cookie Policy",
    lastUpdated: "2 July 2026",
    sections: [
      {
        heading: "What are cookies?",
        body: [
          "Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit.",
        ],
      },
      {
        heading: "Cookies on this Website",
        body: [
          "This Website may use essential cookies required for basic functionality and security.",
          "If analytics or marketing cookies are introduced in the future, we will update this policy accordingly and, where required, provide appropriate consent mechanisms.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can control cookies through your browser settings. Disabling some cookies may impact Website functionality.",
        ],
      },
    ],
  },
  disclaimer: {
    id: "disclaimer",
    title: "Disclaimer",
    lastUpdated: "2 July 2026",
    sections: [
      {
        heading: "General information",
        body: [
          "Information on this Website is provided for general business information purposes only. It may be updated or changed without notice.",
          "Niaga Prestasi Sdn Bhd makes reasonable efforts to keep the information accurate, but we do not guarantee completeness, reliability, or suitability for any particular purpose.",
        ],
      },
      {
        heading: "No professional advice",
        body: [
          "Nothing on this Website constitutes professional, legal, financial, or technical advice. You should obtain appropriate advice for your specific situation.",
        ],
      },
      {
        heading: "No warranty",
        body: [
          "To the extent permitted by law, the Website is provided “as is” without warranties of any kind, express or implied.",
        ],
      },
    ],
  },
  acceptableUse: {
    id: "acceptableUse",
    title: "Acceptable Use Policy",
    lastUpdated: "2 July 2026",
    sections: [
      {
        heading: "Purpose",
        body: [
          "This policy outlines acceptable and prohibited uses of the Website to protect users and the integrity of our services.",
        ],
      },
      {
        heading: "Prohibited activities",
        body: [
          "Attempting unauthorized access, scanning, or probing the Website or its infrastructure.",
          "Uploading or transmitting malware, harmful code, or content intended to disrupt services.",
          "Using automated tools to scrape, overload, or interfere with the Website.",
          "Submitting unlawful, abusive, or misleading enquiries.",
        ],
      },
      {
        heading: "Enforcement",
        body: [
          "We may restrict access to the Website if we reasonably believe this policy has been violated.",
        ],
      },
      {
        heading: "Contact",
        body: [`If you believe the Website is being misused, please contact ${contact.email}.`],
      },
    ],
  },
};
