import Image from 'next/image';
import logo from "@/app/images/Group 11.png";

export function Header() {
    return(
        <div className="header flex justify-between h-[100px] items-center w-[1170px] justify-self-center">
            <a className="logo " href="https://giaic-q2-class-sunday-9-12-assignment-6.vercel.app/"><Image src={logo} alt="/" width={70} /></a>
            <nav className="buttons flex text-[12px] items-center justify-center gap-x-[25px]">
                
                <a className='relative no-underline text-gray-800 text-xs tracking-wider px-2.5 group' href="https://giaic-q2-class-sunday-9-12-assignment-6.vercel.app/"> 
                    MAIN 
                    <span className="absolute left-0 bottom-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute right-0 top-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                </a>
                
                <a className='relative no-underline text-gray-800 text-xs tracking-wider px-2.5 group' href="/gallery"> 
                    GALLERY 
                    <span className="absolute left-0 bottom-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute right-0 top-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                </a>
                
                <a className='relative no-underline text-gray-800 text-xs tracking-wider px-2.5 group' href="/projects"> 
                    PROJECTS 
                    <span className="absolute left-0 bottom-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute right-0 top-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                </a>
                
                <a className='relative no-underline text-gray-800 text-xs tracking-wider px-2.5 group' href="/certifications"> 
                    CERTIFICATIONS 
                    <span className="absolute left-0 bottom-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute right-0 top-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                </a>
                
                <a className='relative no-underline text-gray-800 text-xs tracking-wider px-2.5 group' href="/contacts"> 
                    CONTACTS 
                    <span className="absolute left-0 bottom-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute right-0 top-[-10px] h-px w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                </a>
                
            </nav>
        </div>
    )
}
