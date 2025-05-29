import HeroSection from "@/components/audit/HeroSection";
import ProcessSection from "@/components/audit/ProcessSection";
import TargetAudienceSection from "@/components/audit/TargetAudienceSection";
import ResultsSection from "@/components/audit/ResultsSection";
import FinalCTASection from "@/components/audit/FinalCTASection";
import DisclaimerSection from "@/components/audit/DisclaimerSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <HeroSection />
      <ProcessSection />
      <TargetAudienceSection />
      <ResultsSection />
      <FinalCTASection />
      <DisclaimerSection />
    </div>
  );
};

export default Index;
