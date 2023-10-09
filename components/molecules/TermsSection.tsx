import Logo from "./Logo";
import LogoSmall from "./LogoSmall";

function TermsSection() {
  return (
    <div className="lg:px-[164px] md:px-[80px] h-[156px] flex-col md:flex-row gap-12 md:gap-0 justify-center md:justify-between w-full px-8 items-center flex md:absolute md:pt-20 md:bottom-0">
      <LogoSmall color="#FFFFFF" />
      <Logo color="#FFFFFF" />

      <div className=" h-[66px] flex-col md:flex-row md:justify-normal justify-start items-center gap-6 flex">
        <div className="text-white text-sm font-semibold">Privacy Policy</div>
        <div className="text-white text-sm font-semibold">
          Terms and conditions
        </div>
      </div>
    </div>
  );
}

export default TermsSection;
