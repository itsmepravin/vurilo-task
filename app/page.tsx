import Image from "next/image";

import cakeOneImage from "@/app/_assets/img/cake-one.jpg";
import Icon from "@/app/_components/Icon";

import lockIcon from "@/app/_assets/img/lock.svg";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="w-6/12 py-4 z-[2] flex gap-2 backdrop-blur-[1rem] rounded-[2rem] opacity-80 bg-red-200 pl-8">
        <Image src={lockIcon} width={20} height={20} alt="Lock Icon" />

        <input
          type="text"
          name=""
          id=""
          value="https:\\myplant.com\\"
          className="bg-transparent outline-none"
        />
      </div>

      {/* Main Section */}
      <div className="flex gap-8 w-full justify-center flex-col sm:flex-row">
        <div className="py-4 flex justify-center items-center gap-2 backdrop-blur-[1rem] rounded-[2rem] opacity-80 bg-red-200 self-center ">
          <div className="flex flex-row gap-4 px-2 sm:flex-col">
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </div>
        </div>

        <section className="h-[100vh] relative min-h-[20vh] z-[2] flex backdrop-blur-[1rem] rounded-[2rem] sm:w-[80%]">
          <div className="p-8 flex-1">
            <div className="status flex justify-between items-center">
              <div className="flex gap-4">
                <Icon />
                <Icon />
                <Icon />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none min-w-full"
                />
                <Image
                  src={lockIcon}
                  width={20}
                  height={20}
                  alt="Lock Icon"
                  className="absolute right-[5%] top-[25%]"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-5%] left-[25%] w-6/12 py-4 px-4 z-[2] flex justify-between items-center gap-2 backdrop-blur-[1rem] rounded-[50%] opacity-80 bg-red-500">
            {/* div with title and price */}
            <div>
              <p className="text-3xl text-white">Monstera Deliciousa</p>
              <p className="text-2xl">$244</p>
            </div>
            {/* Button */}
            <div className="flex">
              <Image src={lockIcon} width={20} height={20} alt="Lock Icon" />
              <span>Add to Cart</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
