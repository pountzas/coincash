import SignUpInput from "../molecules/SignUpInput";
import TermsSection from "../molecules/TermsSection";
import TopFooterSection from "../molecules/TopFooterSection";

function Footer() {
  return (
    <div className="w-full md:h-[631px] h-[548px] px-6 py-12 bg-gradient-to-b from-[#020D1F] to-[#0066FF] flex-col justify-center items-center gap-12 inline-flex relative">
      <TopFooterSection />

      <SignUpInput />

      <TermsSection />
    </div>
  );
}

export default Footer;
