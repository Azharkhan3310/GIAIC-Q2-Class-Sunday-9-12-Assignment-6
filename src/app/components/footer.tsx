import Image from 'next/image';
import footerlogo from "@/app/images/Group 11 1.png";
import location from "@/app/images/Vector.png";
import phone from "@/app/images/Group.png";
import envelope from "@/app/images/Envelope.png";
import facebook from "@/app/images/facebook.png";
import twitter from "@/app/images/twitter.png";
import LinkedIn from "@/app/images/Linked In.png";
import pinterest from "@/app/images/pininterest.png";


export function Footer() {
    return(
        <div className="Footer flex h-[417px] bg-[#2C2C2C] py-[3.5%] px-[20%] ">
          <div className='flex w-[75%] gap-x-[15%]'>
            <div>
                <a href="" className="Footer_Logo " ><Image src={footerlogo}  alt="/" width={150} /></a>
            </div>
            <div className="Footer_Information ">
                <h1 className='Footer_Information_Heading text-[16px] font-bold text-[#FFFFFF] mb-[30px]'>Information</h1>
                <nav className="Footer_Information_buttons grid text-[#FFFFFF] h-[200px] text-[14px]">
                    <a href="http://localhost:3000/"> Main </a>
                    <a href="/gallery"> Gallery </a>
                    <a href="/projects"> Projects </a>
                    <a href="/certifications"> Certifications </a>
                    <a href="/contacts"> Contacts </a>
                </nav>
            </div>
            <div className="Footer_Contacts ">
                <h1 className='Footer_Contacts_Heading text-[16px] font-bold text-[#FFFFFF] mb-[25px]'>Contacts</h1>
                <div className='Footer_Contacts_Detail grid h-[250px] '>
                    <div className='Footer_Contacts_Detail_Location  flex w-[100%] h-[16px] text-[#FFFFFF] gap-x-[10px]'>
                        <Image src={location} alt="/" />
                        <p className='text-[#FFFFFF] text-[14px] leading-none'>1234 Sample Street Austin Texas 78704</p> 
                    </div>
                    <div className='Footer_Contacts_Detail_Phone flex w-[100%] h-[16px] text-[#FFFFFF] gap-x-[10px]'>
                        <Image src={phone} alt="/" />
                        <p className=' text-[#FFFFFF] text-[14px]'>512.333.2222</p>
                    </div>
                    <div className='Footer_Contacts_Detail_Envelope flex w-[100%] items-center h-[11px] text-[#FFFFFF] gap-x-[10px]'>
                        <Image src={envelope} alt="/" />
                        <p className='text-[#FFFFFF] text-[14px] leading-none'>sampleemail@gmail.com</p>
                    </div>
                </div>
            </div>
          </div>
          <div className='flex justify-center w-[25%]'>
            <div className="Footer_Social_Media ">
                <h1 className='Footer_Social_Media text-[16px] font-bold text-[#FFFFFF] mb-[25px]'>Social Modia</h1>
                <div className='flex gap-x-[30px]'>
                <a href=""><Image src={facebook} alt="/" /></a>
                <a href=""><Image src={twitter} alt="/" /></a>
                <a href=""><Image src={LinkedIn} alt="/" /></a>
                <a href=""><Image src={pinterest} alt="/" /></a>
                </div>
            </div>
          </div>
        </div>
    )
}
