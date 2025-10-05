import { CategorySection } from "@/components/landingPage/CategorySection";
import CourseSection from "@/components/landingPage/CourseSection";
import { HeroSection } from "@/components/landingPage/HeroSection";
import InstrcutorSection from "@/components/landingPage/InstrcutorSection";
import { StatsSection } from "@/components/landingPage/StatsSection";

export function LandingPage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <CourseSection />
      <InstrcutorSection />
    </div>
  );
}
