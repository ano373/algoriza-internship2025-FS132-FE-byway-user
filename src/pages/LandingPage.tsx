import CallToActionSection from "@/components/landing/CallToActionSection";
import { CategorySection } from "@/components/landing/CategorySection";
import CourseSection from "@/components/landing/CourseSection";
import CustomerReviewSection from "@/components/landing/CustomerReviewSection";
import { HeroSection } from "@/components/landing/HeroSection";
import InstrcutorSection from "@/components/landing/InstrcutorSection";
import { StatsSection } from "@/components/landing/StatsSection";

export function LandingPage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <CourseSection />
      <InstrcutorSection />
      <CustomerReviewSection />
      <CallToActionSection />
    </div>
  );
}
