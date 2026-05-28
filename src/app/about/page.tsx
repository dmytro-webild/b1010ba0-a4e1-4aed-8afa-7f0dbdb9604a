"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import TextAbout from '@/components/sections/about/TextAbout';
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              {
                name: "Home",                id: "/"
              },
              {
                name: "About Us",                id: "/about"
              },
              {
                name: "Products",                id: "/" + "#products"
              },
              {
                name: "Services",                id: "/" + "#services"
              },
              {
                name: "Testimonials",                id: "/" + "#testimonials"
              },
              {
                name: "Contact",                id: "/" + "#contact"
              }
            ]}
            logoSrc="http://img.b2bpic.net/free-vector/oil-logo-icon_125964-542.jpg"
            logoAlt="Pawan Water Supply logo"
            brandName="Pawan Water Supply"
          />
        </div>

        <div id="about-content" data-section="about-content">
          <TextAbout
            useInvertedBackground={false}
            tag="Our Story"
            title="Dedicated to Delivering Pure Water to Every Home"
            buttons={[
              {
                text: "Our Mission",                href: "#"
              },
              {
                text: "Contact Us",                href: "/" + "#contact"
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              {
                title: "Services",                items: [
                  {
                    label: "Home Delivery",                    href: "/" + "#products"
                  },
                  {
                    label: "Event Catering",                    href: "/" + "#services"
                  },
                  {
                    label: "Free Water Testing",                    href: "/" + "#contact"
                  },
                  {
                    label: "Commercial Solutions",                    href: "/" + "#services"
                  }
                ]
              },
              {
                title: "Company",                items: [
                  {
                    label: "About Us",                    href: "/about"
                  },
                  {
                    label: "Our Values",                    href: "/about"
                  },
                  {
                    label: "FAQs",                    href: "/" + "#faq"
                  }
                ]
              },
              {
                title: "Contact",                items: [
                  {
                    label: "Daili Gaon, near Laxmi Service Center, Raksa, Jhansi (U.P.)",                    href: "https://www.google.com/maps/search/Daili+Gaon,+near+Laxmi+Service+Center,+Raksa,+Jhansi+(U.P.)"
                  },
                  {
                    label: "Call: 8953501698",                    href: "tel:8953501698"
                  },
                  {
                    label: "Call: 7415882771",                    href: "tel:7415882771"
                  }
                ]
              }
            ]}
            bottomLeftText="© 2024 Pawan Water Supply Enterprises. All rights reserved."
            bottomRightText="Made with purity in mind."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
