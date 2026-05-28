import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Pawan Water Supply - Pure & Safe Drinking Water Delivery in Jhansi',
  description: 'Pawan Water Supply provides 100% pure & safe drinking water with timely, hygienic delivery. Offering free home water testing and catering for events, businesses, and residences in Jhansi (U.P.).',
  keywords: ["Pawan Water Supply, drinking water, water delivery, pure water, safe water, Jhansi, water testing, event catering, commercial water, residential water"],
  openGraph: {
    "title": "Pawan Water Supply - Pure & Safe Drinking Water Delivery",
    "description": "Pawan Water Supply provides 100% pure & safe drinking water with timely, hygienic delivery. Offering free home water testing and catering for events, businesses, and residences in Jhansi (U.P.).",
    "url": "https://www.pawanwatersupply.com",
    "siteName": "Pawan Water Supply Enterprises",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/background-with-water-wave-drops_23-2147608382.jpg",
        "alt": "Refreshing water droplet and clear water"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Pawan Water Supply - Pure & Safe Drinking Water Delivery",
    "description": "Pawan Water Supply provides 100% pure & safe drinking water with timely, hygienic delivery. Offering free home water testing and catering for events, businesses, and residences in Jhansi (U.P.).",
    "images": [
      "http://img.b2bpic.net/free-photo/background-with-water-wave-drops_23-2147608382.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
