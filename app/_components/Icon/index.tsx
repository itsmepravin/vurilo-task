import Image from "next/image";

import homeIcon from "@/app/_assets/img/home.svg";

const Icon = () => {
  return (
    <div className="bg-custom-glass p-4 rounded-[2rem] z-[2] backdrop-blur-[2rem] flex justify-center items-center cursor-pointer opacity-60 hover:opacity-100">
      <Image src={homeIcon} width={20} height={20} alt="Home Icon" />
    </div>
  );
};

export default Icon;
