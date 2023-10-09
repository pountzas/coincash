function TopFooterSection() {
  return (
    <div className="self-stretch h-[136px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch text-center">
        <span className="text-white text-[32px] md:text-[40px] font-bold">
          Get started{" "}
        </span>
        <span className="text-blue-600 text-[32px] md:text-[40px] font-bold">
          today
        </span>
      </div>
      <div className="self-stretch text-center md:text-[20px] text-white text-base font-normal lg:px-[164px] md:px-[80px] px-4">
        Sing up to receive email updates on new products announcements, special
        promotions sales an more.
      </div>
    </div>
  );
}

export default TopFooterSection;
