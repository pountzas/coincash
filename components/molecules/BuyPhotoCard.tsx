type BuyPhotoCardProps = {
  title: string;
  src: string;
  description: string;
  mirror?: boolean;
};

function BuyPhotoCard({ title, src, description, mirror }: BuyPhotoCardProps) {
  return (
    <div
      className={`flex-col justify-start items-start xl:justify-center xl:items-center gap-x-6 flex  ${
        mirror ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <img
        className="w-[300px] h-[200px] xl:w-[540px] xl:h-[360px]"
        src={src}
      />
      <div
        className={`flex-col justify-start items-start lg:justify-around lg:items-center xl:justify-around ${
          mirror ? "xl:items-start" : "xl:items-end"
        } lg:w-[300px] lg:h-[200px] xl:w-[540px] xl:h-[360px] flex `}
      >
        <div className="justify-start flex flex-col gap-6 pt-6 md:gap-3 lg:pt-0">
          <div className="text-zinc-900 text-2xl xl:text-4xl font-semibold">
            {title}
          </div>
          <div
            className={`w-[296px] text-zinc-900 text-base xl:text-xl font-normal ${
              mirror && ""
            }`}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyPhotoCard;
