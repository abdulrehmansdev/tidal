import "./globals.css";
import Footer from "@/app/components/Footer";
import HeaderWrapper from "@/app/components/Header/HeaderWrapper";
import { CustomProviders } from "./providers";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    template: "%s", //| ' + process.env.NEXT_PUBLIC_SITE_NAME,
    default:
      "Tidal Film | " +
      process.env.NEXT_PUBLIC_SITE_NAME,
  },
  description: {
    template: "%s",
    default: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  },
  // Add canonical URL
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.co.uk"
  ),
  // Add alternate languages if you support them
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      // Add additional languages if your site supports them
    },
  },
  // Add these favicon-related properties
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
  // Add important keywords
  keywords: [
    "tidal film",
    "dentist UK",
    "tooth pain",
    "dental clinic",
    "dental services",
    "urgent dental care",
    "NHS dentist",
  ],
  // Add structured metadata for local business
  openGraph: {
    title: {
      template: "%s",
      default:
        "Emergency Dental Treatment UK Wide | " +
        process.env.NEXT_PUBLIC_SITE_NAME,
    },
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    type: "website",
    locale: "en_GB",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: "/emergency-dentists-banne.webp", // Path to your OG image
        width: 1920,
        height: 1080,
        alt: "Emergency Dental Services",
      },
    ],
  },
  // Add Twitter card
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s",
      default:
        "Tidal Film | " +
        process.env.NEXT_PUBLIC_SITE_NAME,
    },
    description: {
      template: "%s",
      default: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    },
    images: ["/images/twitter-image.jpg"], // Path to your Twitter card image
    creator: "@yourdentalpractice", // Your Twitter handle
  },
  // Add robots directives
  robots: {
    index: process.env.NODE_ENV === "production",
    follow: true,
    googleBot: {
      index: process.env.NODE_ENV === "production",
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "healthcare",

  // // Add JSON-LD structured data for LocalBusiness
  // other: {
  //   'script:ld+json': {
  //     '@context': 'https://schema.org',
  //     '@type': 'Dentist',
  //     'name': process.env.NEXT_PUBLIC_SITE_NAME,
  //     'description': process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  //     'url': process.env.NEXT_PUBLIC_SITE_URL,
  //     'logo': `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
  //     'address': {
  //       '@type': 'PostalAddress',
  //       'streetAddress': '123 Dental Street',
  //       'addressLocality': 'London',
  //       'addressRegion': 'London',
  //       'postalCode': 'W1 1AA',
  //       'addressCountry': 'GB'
  //     },
  //     'geo': {
  //       '@type': 'GeoCoordinates',
  //       'latitude': 51.5074,
  //       'longitude': -0.1278
  //     },
  //     'telephone': '+44-123-456-7890',
  //     'openingHoursSpecification': [
  //       {
  //         '@type': 'OpeningHoursSpecification',
  //         'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  //         'opens': '09:00',
  //         'closes': '17:00'
  //       },
  //       {
  //         '@type': 'OpeningHoursSpecification',
  //         'dayOfWeek': 'Saturday',
  //         'opens': '10:00',
  //         'closes': '15:00'
  //       }
  //     ],
  //     'priceRange': '££',
  //     'hasOfferCatalog': {
  //       '@type': 'OfferCatalog',
  //       'name': 'Dental Services',
  //       'itemListElement': [
  //         {
  //           '@type': 'OfferCatalog',
  //           'name': 'Emergency Services',
  //           'itemListElement': [
  //             {
  //               '@type': 'Offer',
  //               'itemOffered': {
  //                 '@type': 'Service',
  //                 'name': 'Emergency Dental Treatment'
  //               }
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   }
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-montserrat bg-offWhite`}>
        <CustomProviders>
          <HeaderWrapper />

          {children}

          {/* <Footer /> */}
        </CustomProviders>
      </body>
    </html>
  );
}
