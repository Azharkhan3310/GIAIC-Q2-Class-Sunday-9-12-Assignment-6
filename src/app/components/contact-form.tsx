"use client";

import { useState } from 'react';


export default function ContactForm() {

    const [form] = useState({
        name: '',
        phone: '',
        email: '',
        interestedIn: '',
        message: ''
      });

return (
    <form  className="w-[100%] grid gap-y-[10px] ">
      <div className="flex items-center h-[45px] bg-[#F3F3F3] p-[15px] gap-x-[10px] ">
        <label className=" text-[#8D8D8D] text-[14px] " >
          Name
        </label>
        <input className="bg-[#F3F3F3]" 
               id="name" type="text" name="name" value={form.name}  />
      </div>
      <div className="flex items-center h-[45px] bg-[#F3F3F3] p-[15px] gap-x-[10px]">
        <label className="text-[#8D8D8D] text-[14px]" >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input className="bg-[#F3F3F3]" 
               id="phone" type="tel" name="phone" value={form.phone}  required />
      </div>
      <div className="flex items-center h-[45px] bg-[#F3F3F3] p-[15px] gap-x-[10px]">
        <label className="text-[#8D8D8D] text-[14px]" >
          E-mail <span className="text-red-500">*</span>
        </label>
        <input className="bg-[#F3F3F3]" 
               id="email" type="email" name="email" value={form.email}  required />
      </div>
      <div className="flex items-center h-[45px] bg-[#F3F3F3] p-[15px] gap-x-[10px]">
        <label className="text-[#8D8D8D] text-[14px]" >
          Interested In
        </label>
        <input className="bg-[#F3F3F3]" 
               id="interestedIn" type="text" name="interestedIn" value={form.interestedIn}  />
      </div>
      <div className="grid h-[147px]  bg-[#F3F3F3] p-[15px]">
        <label className="text-[#8D8D8D] text-[14px]" >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea className=" p-[15px] bg-[#F3F3F3]" 
                  id="message" name="message" value={form.message}  required />
      </div>
    </form>
  );
};



