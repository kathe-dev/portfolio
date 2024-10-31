import Image from "next/image";

import Header from "@/components/header";

export default function Home() {
  return (
    <div className=" w-screen h-full overflow-x-hidden ">
      <Header />
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold ">Hello, World!</h1>
          <Image src="/Images/kathe-icon-clean.png" alt="Logo" width={200} height={200} />
        </div>
      </div>
      <div className="flex items-center justify-center w-screen h-screen"/>
    </div>
  );
}
