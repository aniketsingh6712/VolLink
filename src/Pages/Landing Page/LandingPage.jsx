// pages/LandingPage.jsx



import VolunteerSection from "../../component/Start Page/VolunteerSection";
import OrganizationSection from "../../component/Start Page/OrganisationSection";
import CTASection from "../../component/Start Page/CTASection";
import Footer from "../../component/Start Page/Footer";
import HeroSection from "../../component/Start Page/HeroSection";
import Features from "../../component/Start Page/FeautesSection";

export default function LandingPage() {
  return (
    <div className="bg-[#F9FAFB]">

        <HeroSection />
        <Features/>
         {/* ✅ Reusable Volunteer Section */}

      <VolunteerSection />

      <OrganizationSection />

      <CTASection />

      {/* ✅ Reusable Footer */}
      <Footer />

    </div>
  );
}