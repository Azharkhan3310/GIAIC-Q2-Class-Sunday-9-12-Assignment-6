// Design: https://www.figma.com/community/file/891374608655348853/website-of-architects-free-website

import Image from 'next/image';
import ContactForm from '../app/components/contact-form';
import rectangle6 from "@/app/images/Rectangle 6.png";
import rectangle8 from "@/app/images/Rectangle 8.png";
import rectangle10 from "@/app/images/Rectangle 10.png";
import rectangle12 from "@/app/images/Rectangle 12.png";
import rectangle9 from "@/app/images/Rectangle 9.png";
import frame9 from "@/app/images/Frame 9.png";
import frame8 from "@/app/images/Frame 8.png";
import slidenumbers from "@/app/images/slide-numbers.png";
import image15 from "@/app/images/image 15.png";
import image16 from "@/app/images/image 16.png";
import image17 from "@/app/images/image 17.png";
import image18 from "@/app/images/image 18.png";
import image19 from "@/app/images/image 19.png";
import arrow2rightLongBlack from "@/app/images/arrow-2-right-long.png";
import arrow2rightLongWhite from "@/app/images/arrow-2-right-long-white.png";

export default function Home() {
  return (
    <div className='main_parent grid w-[100%] justify-items-center gap-y-[100px] mb-[150px]'>

      <div className='main_project flex w-[1170px] justify-between '>
        <div className='main_project_Left pt-[300px] flex flex-col gap-y-[75px] '>
          <div className=''>
            <h1 className='text-[64px] font-thin text-[#BDBDBD] leading-none '>
              PROJECT <br />
              <span className='text-[64px] font-bold text-[#333333]'>Lorum</span>
            </h1>
          </div>
          <div className='main_project_Left_buttons flex gap-x-[20px]'>
            <Image src={frame9} alt="/" />
            <Image src={frame8} alt="/" />
          </div>
          <Image className='' src={slidenumbers} alt="/" />
        </div>
        <div className='main_project_right relative'>
          <Image className='' src={rectangle6} alt="/" />
          <a href="" className=' flex justify-center items-center absolute bottom-0 left-0 w-[222px] h-[71px] bg-[#FFFFFF] gap-x-[20px] pr-[3%]'>
            <h1 className='text-[#333333] text-[12px] tracking-[2.5px] '>VIEW PROJECT</h1>
            <Image className='' src={arrow2rightLongBlack} alt="/" />
          </a>
        </div>
      </div>

      <div className='main_about bg-[#FBFBFB] grid grid-cols-3  w-[1170px] px-[125px]  '>
        <div className='main_about_left'>
          <Image className='mt-[30px]' src={rectangle8} alt="/" />
          <Image className='mt-[30px]' src={rectangle10} alt="/" />
        </div>
        <div className='main_about_middle  '>
          <Image className='mt-[60px]' src={rectangle9} alt="/" />
        </div>
        <div className='main_about_right w-[400px] mt-[30px] gap-y-[50px]'>
          <h1 className='text-[64px] font-thin text-[#BDBDBD]'>About</h1>
          <p className='font-thin text-[16px] mt-[30px] mb-[40px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <a href="" className=' flex justify-center items-center bottom-0 left-0 w-[222px] h-[71px] bg-[#FFFFFF] gap-x-[20px] pr-[3%]'>
            <h1 className='text-[#333333] text-[12px] tracking-[2.5px] '>READ MORE</h1>
            <Image className='' src={arrow2rightLongBlack} alt="/" />
          </a>
        </div>
      </div>

      <div className='main-statement w-[1170px]  '>
        <h1 className='text-[64px] font-thin text-[#BDBDBD]'>Main Focus/Mission Statement</h1>
        <div className='flex gap-x-[100px] justify-between '>
          <div className='flex  gap-x-[20px]'>
            <h1 className='text-[200px] font-black text-[#F2F2F2]'>1</h1>
            <p className='text-[22px] text-[#333333] w-[279px] leading-9 self-center mt-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
          <div className='flex gap-x-[20px] '>
            <h1 className='text-[200px] font-black text-[#F2F2F2]'>2</h1>
            <p className='text-[22px] text-[#333333] w-[420px] leading-9 self-center mt-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
          </div>
        </div>
      </div>

      <div className='Our_Projects w-[1170px]'>
        <h1 className='text-[64px] font-thin text-[#BDBDBD] mb-[50px]'>Our Projects</h1>
        <div className='grid grid-row-3 justify-betwwen gap-y-[30px]'>
          <div className='flex justify-betwwen gap-x-[30px]'>
            <Image className='relative place-content-center' src={rectangle12}  alt="/" /> 
            <Image className='' src={image15} alt="/" />
          </div>
          <div className='flex justify-betwwen gap-x-[30px]'>
            <Image className='' src={image16} alt="/" />
            <Image className='' src={image17} alt="/" />
            <Image className='' src={image18} alt="/" />
          </div>
          <a href="" className=' flex justify-center place-self-end items-center w-[222px] h-[71px] bg-[#333333] gap-x-[10px] '>
            <h1 className='text-[#FFFFFF] text-[12px] tracking-[2.5px] '>ALL PROJECTS</h1>
            <Image className='' src={arrow2rightLongWhite} alt="/" />
          </a>
        </div>
      </div>

      <div className='Contact_Us w-[1170px] '>
        <h1 className='text-[64px] font-thin text-[#BDBDBD] mb-[10px]'>Contact Us</h1>
        <div className='flex h-[369px] gap-x-[30px]'>
         <ContactForm />
         <Image className=' ' src={image19} alt="/" />
        </div>
        <a href="" className=' flex justify-center items-center w-[222px] h-[71px] bg-[#333333] gap-x-[10px] mt-[75px] '>
          <h1 className='text-[#FFFFFF] text-[12px] tracking-[2.5px] '>SEND EMAIL</h1>
          <Image className='' src={arrow2rightLongWhite} alt="/" />
        </a>
      </div>

    </div>
  );
}
