import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'McDonald\'s - Order Food Online for Delivery & Pickup',
  description: 'Order your favorite McDonald\'s meals for fast delivery or convenient pickup. Browse our menu, find locations, and join MyMcDonald\'s Rewards.',
  openGraph: {
    "title": "McDonald's - Order Food Online for Delivery & Pickup",
    "description": "Order your favorite McDonald's meals for fast delivery or convenient pickup. Browse our menu, find locations, and join MyMcDonald's Rewards.",
    "url": "https://www.mcdonalds.com",
    "siteName": "McDonald's",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/i-m-hungry-hands-man-looking-food-delivery-app-his-smartphone-ordering-dinner-online_662251-2108.jpg",
        "alt": "McDonald's food delivery"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "McDonald's - Order Food Online for Delivery & Pickup",
    "description": "Order your favorite McDonald's meals for fast delivery or convenient pickup. Browse our menu, find locations, and join MyMcDonald's Rewards.",
    "images": [
      "http://img.b2bpic.net/free-photo/i-m-hungry-hands-man-looking-food-delivery-app-his-smartphone-ordering-dinner-online_662251-2108.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
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
