"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Droplets, Star, Truck } from "lucide-react";

export default function LandingPage() {
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
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/oil-logo-icon_125964-542.jpg"
      logoAlt="Pawan Water Supply logo"
      brandName="Pawan Water Supply"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "radial-gradient"}}
      title="Pawan Water Supply Enterprises"
      description="Your Trusted Source for Pure & Safe Drinking Water. Delivering Health and Hydration to Your Doorstep."
      buttons={[
        {
          text: "Order Now",          href: "#products"},
        {
          text: "Get Free Water Test",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/background-with-water-wave-drops_23-2147608382.jpg"
      imageAlt="Refreshing water droplet and clear water"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Our Promise"
      title="Committed to Your Health and Hydration"
      buttons={[
        {
          text: "Learn More",          href: "#"},
        {
          text: "Schedule Free Test",          href: "#contact"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Pure & Safe Water",          description: "100% reverse osmosis purified water, rigorously tested for your health and peace of mind.",          bentoComponent: "reveal-icon",          icon: Star
        },
        {
          title: "Timely Delivery",          description: "Reliable and prompt delivery service ensures you never run out of fresh drinking water.",          bentoComponent: "reveal-icon",          icon: Truck
        },
        {
          title: "Hygienic Quality",          description: "Strict hygiene protocols followed at every step, from purification to delivery.",          bentoComponent: "reveal-icon",          icon: Award
        },
        {
          title: "Free Home Water Testing",          description: "Ensure your tap water quality with our complimentary home testing service.",          bentoComponent: "reveal-icon",          icon: Droplets
        }
      ]}
      title="Comprehensive Water Solutions"
      description="From daily hydration to large-scale events, Pawan Water Supply has you covered with reliable and high-quality water delivery services tailored to your specific needs."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "product-1",          name: "20L Water Jar (Returnable)",          price: "₹20",          imageSrc: "http://img.b2bpic.net/free-photo/young-delivery-man-wor_23-2147914211.jpg",          imageAlt: "20 Liter Water Jar"},
        {
          id: "product-2",          name: "20L Water Camper (One-Time)",          price: "₹20",          imageSrc: "http://img.b2bpic.net/free-photo/takeaway-food-groceries-delivery-covid-19-contactless-orders-concept-surprised-courier-red-uniform-cap-t-shirt-open-mouth-impressed-holding-bottled-water-shoulder_1258-58703.jpg",          imageAlt: "20 Liter Water Camper"},
        {
          id: "product-3",          name: "10L Water Jar",          price: "₹15",          imageSrc: "http://img.b2bpic.net/free-photo/delivery-man-carrying-heavy-water-bottle_23-2148382487.jpg",          imageAlt: "10 Liter Water Jar"},
        {
          id: "product-4",          name: "5L Water Bottle",          price: "₹40",          imageSrc: "http://img.b2bpic.net/free-photo/manual-water-pump-front-view_23-2148728709.jpg",          imageAlt: "5 Liter Water Bottle"},
        {
          id: "product-5",          name: "1L Water Bottle (Pack of 6)",          price: "₹90",          imageSrc: "http://img.b2bpic.net/free-photo/transparent-water-bottle-outdoors_23-2151049082.jpg",          imageAlt: "Pack of six 1 Liter Water Bottles"},
        {
          id: "product-6",          name: "Water Dispenser",          price: "₹2500",          imageSrc: "http://img.b2bpic.net/free-photo/female-inventor-working-new-creation_23-2149067258.jpg",          imageAlt: "Water Dispenser Unit"},
      ]}
      title="Our Premium Water Products"
      description="Choose from our range of high-quality drinking water solutions, perfect for homes, offices, and events."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Ramesh Kumar",          handle: "@RK_Jhansi",          testimonial: "Pawan Water Supply delivers truly pure water every time. Their service is incredibly reliable!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-handsome-business-man-office_1303-20922.jpg",          imageAlt: "Ramesh Kumar"},
        {
          id: "t2",          name: "Priya Sharma",          handle: "@PriyaS_Events",          testimonial: "Exceptional service for our wedding event! The water was fresh, and delivery was seamless.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/celebration-navratri-deity_23-2151220002.jpg",          imageAlt: "Priya Sharma"},
        {
          id: "t3",          name: "Sanjay Gupta",          handle: "@GuptaGrocery",          testimonial: "My shop relies on Pawan Water Supply for daily stock. Always on time and excellent quality.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/enthusiastic-asian-girl-cafe-uniform-barista-worker-with-laptop-looking-happy-surprised_1258-199450.jpg",          imageAlt: "Sanjay Gupta"},
        {
          id: "t4",          name: "Anjali Singh",          handle: "@AnjaliS_Home",          testimonial: "Free water testing gave me peace of mind. Now I get regular deliveries of their pure water.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-style-fashion-femininity-concept-positive-beautiful-young-european-woman-blue-shirt-looking-camera-with-broad-happy-smile-being-good-mood-kitchen-interior-background_343059-2087.jpg",          imageAlt: "Anjali Singh"},
        {
          id: "t5",          name: "Vikram Reddy",          handle: "@VikramR_Corp",          testimonial: "We use their service for our entire office complex. They handle bulk orders efficiently.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-dress-code-looks-positive_114579-19015.jpg",          imageAlt: "Vikram Reddy"}
      ]}
      showRating={true}
      title="What Our Customers Say"
      description="Hear from satisfied clients who trust Pawan Water Supply for their daily hydration needs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "How do you ensure water purity?",          content: "We use a multi-stage Reverse Osmosis (RO) purification process and conduct daily quality checks to ensure 100% pure and safe drinking water."
        },
        {
          id: "faq-2",          title: "What areas do you deliver to?",          content: "We provide water delivery services across Jhansi (U.P.) including residential, commercial, and event locations. Contact us to confirm your area."
        },
        {
          id: "faq-3",          title: "How can I schedule a free home water test?",          content: "Simply call us at 8953501698 or 7415882771, or fill out our contact form, and we'll arrange a convenient time for your free water quality test."
        },
        {
          id: "faq-4",          title: "What are your delivery hours?",          content: "Our delivery hours are from 9:00 AM to 7:00 PM, Monday to Saturday. Special arrangements can be made for events upon request."
        }
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find quick answers to common questions about our water delivery service, quality, and testing."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Weddings",        "Parties",        "Commercial Shops",        "Residential Complexes",        "Small Businesses",        "Restaurants",        "Schools"
      ]}
      title="Trusted by a Diverse Clientele"
      description="Pawan Water Supply proudly serves a wide range of customers, ensuring everyone has access to premium hydration."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"
      }}
      text="Ready for Pure Water Delivery? Contact Us Today!"
      buttons={[
        {
          text: "Call 8953501698",          href: "tel:8953501698"},
        {
          text: "Call 7415882771",          href: "tel:7415882771"}
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Home Delivery",              href: "#products"},
            {
              label: "Event Catering",              href: "#services"},
            {
              label: "Free Water Testing",              href: "#contact"},
            {
              label: "Commercial Solutions",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Values",              href: "#about"},
            {
              label: "FAQs",              href: "#faq"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Daili Gaon, near Laxmi Service Center, Raksa, Jhansi (U.P.)",              href: "https://www.google.com/maps/search/Daili+Gaon,+near+Laxmi+Service+Center,+Raksa,+Jhansi+(U.P.)"},
            {
              label: "Call: 8953501698",              href: "tel:8953501698"},
            {
              label: "Call: 7415882771",              href: "tel:7415882771"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Pawan Water Supply Enterprises. All rights reserved."
      bottomRightText="Made with purity in mind."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
