import React from "react";
import Card from "./Card";
import WebImg from "../../public/website-design.png";
import WebApp from "../../public/app-design.png";
import Ui from "../../public/ui-design.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="my-12 h-[100%] ">
      <div className="Container  ">
        <h1 className="text-[2rem] sm:text-[4rem] text-center ">What I Do </h1>
        <p className="w-[70%] m-auto text-[14px] font-thin text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic
          praesentium itaque tenetur voluptatem qui eaque architecto, explicabo
          saepe maiores sint? Nihil dolor maxime magni quibusdam numquam sunt in
          laborum vel, laudantium illo tempore beatae expedita sed . deleniti
          reiciendis.
        </p>
        <Card
          Img={<Image src={WebApp} width={60} height={60} alt="sdjh" />}
          title='Web App Development' className="mt-7 transition ease-in duration-300 cursor-default hover:bg-[gray] flex w-fit m-auto bg-gradient-to-r from-blue-300 to-purple-500 p-5 rounded-md items-center gap-7"
        />
        <Card
          Img={<Image src={WebImg} width={60} height={60} alt="sdjh" />}
          title='Website development' className="mt-7 transition ease-in duration-300 cursor-default hover:bg-[gray] flex  w-fit  m-auto bg-gradient-to-r from-blue-300 to-purple-500 p-5 rounded-md items-center gap-7"
        />
        <Card
          Img={<Image src={Ui} width={60} height={60} alt="sdjh" />}
          title='UI/UX Design' className="mt-7 transition ease-in duration-300 cursor-default hover:bg-[#642b61] flex w-fit m-auto bg-gradient-to-r from-blue-300 to-purple-500 p-5 rounded-md items-center gap-7"
        />
      </div>
    </div>
  );
};

export default About;
