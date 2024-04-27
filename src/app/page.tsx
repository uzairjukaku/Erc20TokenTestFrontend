import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-[#080808]">
      <Header></Header>

      <div className="grid grid-cols-2 p-10 h-screen container mx-auto ">
      <div className="flex flex-col gap-10 justify-center px-14">

          <h1 className="text-4xl text-slate-100">Invest in Ocean Coin!</h1>

          <p className=" text-slate-400">
          Ocean Coin is a digital currency designed to facilitate secure and efficient transactions within its ecosystem. With a focus on sustainability and innovation, Ocean Coin offers users a reliable platform for decentralized exchanges and environmental initiatives, ushering in a new wave of financial possibilities while promoting ecological stewardship.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
      <img src="/bgimage.png" alt="" srcset="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
