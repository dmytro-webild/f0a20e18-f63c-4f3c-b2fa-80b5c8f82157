"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Car, Facebook, Globe, Instagram, Smartphone, Sparkles, Star, Twitter, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Delivery",
          id: "#delivery",
        },
        {
          name: "Loyalty",
          id: "#loyalty",
        },
        {
          name: "Locations",
          id: "#locations",
        },
        {
          name: "FAQs",
          id: "#faqs",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/retro-restaurant-logo-set_23-2148378305.jpg"
      brandName="McDonald's"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Your Favorite Meals, Delivered Fast"
      description="Order now from McDonald's and enjoy hot, fresh food delivered to your door. Browse our full menu, track your order, and earn rewards with every purchase."
      buttons={[
        {
          text: "Order Now",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/i-m-hungry-hands-man-looking-food-delivery-app-his-smartphone-ordering-dinner-online_662251-2108.jpg"
      imageAlt="McDonald's food delivery"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/appetizing-chicken-burger-female-hands-fast-food-restaurant_169016-49195.jpg",
          alt: "Happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/appetizing-chicken-burger-female-hands-fast-food-restaurant_169016-49019.jpg",
          alt: "Satisfied diner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-stylish-attractive-woman-yellow-blouse-blue_285396-1850.jpg",
          alt: "Young adult",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-women-holding-box-with-pizza_23-2148628980.jpg",
          alt: "Family enjoying food",
        },
        {
          src: "http://img.b2bpic.net/free-photo/friends-having-lunch-together_23-2148735442.jpg",
          alt: "Student with meal",
        },
      ]}
      avatarText="Loved by millions of customers daily."
      marqueeItems={[
        {
          type: "text-icon",
          text: "Fast Delivery",
          icon: Car,
        },
        {
          type: "text-icon",
          text: "Freshly Prepared",
          icon: Utensils,
        },
        {
          type: "text-icon",
          text: "Easy Ordering",
          icon: Smartphone,
        },
        {
          type: "text-icon",
          text: "Exclusive Rewards",
          icon: Award,
        },
        {
          type: "text-icon",
          text: "Global Favorites",
          icon: Globe,
        },
      ]}
    />
  </div>

  <div id="delivery" data-section="delivery">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "Step 1",
          title: "Browse Our Menu",
          subtitle: "Discover a wide range of options",
          description: "Explore all your McDonald's favorites, new arrivals, and special promotions right from your device.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-is-using-tablet-holding-cup-coffee-dessert-wooden-table_1268-17051.jpg",
          imageAlt: "Person browsing digital menu on tablet",
        },
        {
          tag: "Step 2",
          title: "Customize Your Order",
          subtitle: "Make it just the way you like it",
          description: "Personalize your burgers, add extra toppings, or adjust your sides. Your meal, your rules.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-with-phone-eating-fries_23-2148289394.jpg",
          imageAlt: "Hands customizing burger ingredients on a mobile app",
        },
        {
          tag: "Step 3",
          title: "Fast & Fresh Delivery",
          subtitle: "Enjoy convenience at your doorstep",
          description: "Sit back and relax as we prepare your meal with care and deliver it hot and fresh directly to you.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-delivering-paper-bags_23-2148593105.jpg",
          imageAlt: "Delivery driver handing over a McDonald's bag at a doorstep",
        },
      ]}
      title="Effortless Ordering & Delivery"
      description="Getting your favorite McDonald's meals is easier than ever. Follow these simple steps for a seamless experience from browsing to your doorstep."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "big-mac",
          name: "Big Mac",
          price: "$5.99",
          imageSrc: "http://img.b2bpic.net/free-photo/mini-cheeseburger-with-ham-vegetables_140725-5323.jpg",
          imageAlt: "Big Mac burger",
        },
        {
          id: "fries",
          name: "World Famous Fries®",
          price: "$2.79",
          imageSrc: "http://img.b2bpic.net/free-photo/box-fries-with-copy-space_23-2148272980.jpg",
          imageAlt: "McDonald's french fries",
        },
        {
          id: "mcnuggets",
          name: "Chicken McNuggets®",
          price: "$6.49",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-nuggets-with-french-fries-salad-ketchup_140725-3126.jpg",
          imageAlt: "Chicken McNuggets with sauce",
        },
        {
          id: "mcflurry",
          name: "McFlurry® with OREO® Cookies",
          price: "$3.29",
          imageSrc: "http://img.b2bpic.net/free-photo/milkshake-composition-with-donut-high-angle_23-2148601271.jpg",
          imageAlt: "McFlurry ice cream",
        },
        {
          id: "filet-o-fish",
          name: "Filet-O-Fish®",
          price: "$4.59",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-fish-chips-with-sauce-light-box_23-2148784883.jpg",
          imageAlt: "Filet-O-Fish sandwich",
        },
        {
          id: "quarter-pounder",
          name: "Quarter Pounder® with Cheese",
          price: "$6.19",
          imageSrc: "http://img.b2bpic.net/free-photo/burger-with-black-bun-blue-background_23-2148258368.jpg",
          imageAlt: "Quarter Pounder with cheese",
        },
      ]}
      title="Explore Our Delicious Menu"
      description="From classic favorites to exciting new additions, find your perfect meal at McDonald's today."
    />
  </div>

  <div id="locations" data-section="locations">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "delivery-time",
          value: "20 Mins",
          title: "Average Delivery Time",
          items: [
            "Speedy service",
            "Hot & Fresh",
            "Efficient logistics",
          ],
        },
        {
          id: "store-count",
          value: "40K+",
          title: "Global Locations",
          items: [
            "Always nearby",
            "Worldwide presence",
            "Consistent quality",
          ],
        },
        {
          id: "satisfaction",
          value: "95%",
          title: "Customer Satisfaction",
          items: [
            "Happy diners",
            "Quality meals",
            "Excellent service",
          ],
        },
      ]}
      title="Our Commitment to You"
      description="Experience the McDonald's difference with quick service, convenient locations, and satisfied customers globally."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Marketing Specialist",
          company: "FastTech Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-eating-vegetarian-lunch_1398-4123.jpg",
          imageAlt: "Sarah J.",
        },
        {
          id: "2",
          name: "Michael C.",
          role: "Busy Dad",
          company: "Happy Family",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/customer-experience-creative-collage_23-2149371196.jpg",
          imageAlt: "Michael C.",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "University Student",
          company: "Campus Life",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/father-daughter-together-breakfast-table_23-2148101848.jpg",
          imageAlt: "Emily R.",
        },
        {
          id: "4",
          name: "David K.",
          role: "Travel Blogger",
          company: "Global Bites",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/black-mixed-race-male-student-being-busy-with-studying-resting-minute-eating-sandwich_273609-7509.jpg",
          imageAlt: "David K.",
        },
        {
          id: "5",
          name: "Jessica L.",
          role: "Healthcare Worker",
          company: "Essential Care",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-man-pointing-alarm-clock-orange-t-shirt-cap-looking-confident-front-view_176474-91784.jpg",
          imageAlt: "Jessica L.",
        },
      ]}
      kpiItems={[
        {
          value: "5 Stars",
          label: "Taste",
        },
        {
          value: "Quick",
          label: "Delivery",
        },
        {
          value: "Easy",
          label: "Ordering",
        },
      ]}
      title="What Our Customers Say"
      description="Hear from happy customers who love their McDonald's experience and our convenient services."
    />
  </div>

  <div id="loyalty" data-section="loyalty">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "bronze",
          badge: "New Member",
          badgeIcon: Sparkles,
          price: "Free",
          name: "Bronze Tier",
          buttons: [
            {
              text: "Sign Up Now",
              href: "#contact",
            },
          ],
          features: [
            "Earn 10 points per $1 spent",
            "Exclusive welcome offers",
            "Birthday treat",
          ],
        },
        {
          id: "silver",
          badge: "Popular",
          badgeIcon: Star,
          price: "500 Points",
          name: "Silver Tier",
          buttons: [
            {
              text: "Upgrade Now",
              href: "#contact",
            },
          ],
          features: [
            "Earn 15 points per $1 spent",
            "Early access to new menu items",
            "Priority customer support",
          ],
        },
        {
          id: "gold",
          badge: "VIP",
          badgeIcon: Award,
          price: "1500 Points",
          name: "Gold Tier",
          buttons: [
            {
              text: "Achieve Gold",
              href: "#contact",
            },
          ],
          features: [
            "Earn 20 points per $1 spent",
            "Free monthly McCafé® beverage",
            "Exclusive VIP events & merchandise",
          ],
        },
      ]}
      title="Join MyMcDonald's Rewards"
      description="Earn points on every order, unlock exclusive deals, and get free food with our loyalty program."
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",
          title: "What are your delivery hours?",
          content: "Delivery hours vary by location, but most McDonald's restaurants offer delivery from morning to late evening. Please check your local store's hours in the app or on our website.",
        },
        {
          id: "faq2",
          title: "How do I track my order?",
          content: "Once your order is placed, you'll receive a confirmation with a tracking link. You can also monitor your order status directly within the McDonald's app.",
        },
        {
          id: "faq3",
          title: "Can I customize my order for delivery?",
          content: "Yes, many menu items can be customized! You can add or remove ingredients, choose different sauces, and more, directly through our online ordering platform.",
        },
        {
          id: "faq4",
          title: "What is MyMcDonald's Rewards?",
          content: "MyMcDonald's Rewards is our loyalty program where you earn points on every eligible purchase. These points can be redeemed for free food and exclusive offers.",
        },
        {
          id: "faq5",
          title: "Where can I find nutritional information?",
          content: "Detailed nutritional information for all our menu items is available on our website and through the McDonald's app. You can also find allergen information there.",
        },
        {
          id: "faq6",
          title: "How do I report an issue with my order?",
          content: "If you experience any issues with your order, please contact our customer service team immediately via the app, our website's contact form, or by phone.",
        },
      ]}
      title="Questions You Might Have"
      description="Find answers to common questions about our menu, ingredients, loyalty program, and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get In Touch"
      title="We're Here to Help"
      description="Have a question, feedback, or need assistance? Reach out to our customer service team and we'll get back to you promptly."
      imageSrc="http://img.b2bpic.net/free-photo/handsome-businessman-coffee-shop-sitting-cafe-with-laptop-calling-someone-man-talking_1258-314890.jpg"
      imageAlt="Customer service representative"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Submit"
      termsText="By submitting, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="http://img.b2bpic.net/free-vector/retro-restaurant-logo-set_23-2148378305.jpg"
      logoText="McDonald's"
      copyrightText="© 2024 McDonald's. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://www.facebook.com/McDonalds/",
          ariaLabel: "Facebook",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/McDonalds",
          ariaLabel: "Twitter",
        },
        {
          icon: Instagram,
          href: "https://www.instagram.com/mcdonalds/",
          ariaLabel: "Instagram",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
