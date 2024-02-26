import React, { useState } from "react"


export default function Contact() {
  return (
    <div className="container flex-col flex m-auto">
      <h1 className="font-bold text-6xl text-center mb-32">Contact form</h1>
      <form method="POST" 
      action="#"
      className="flex flex-col flex-grow place-items-center">
        <div className="m-4">
          <label className="block text-center mb-2">Name</label>
          <input className="w-[270px]" type="text" id="name" name="name" required />
        </div>

        <div className="m-4">
          <label className="block text-center mb-2">type of business</label>
          <input className="w-[270px]" type="text" id="business-type" name="name" required />
        </div>

        <div className="m-4">
          <label className="block text-center mb-2">Email</label>
          <input className="w-[270px]" type="email" name="email" required />
        </div>

        <div className="m-4">
          <label className="block text-center mb-2">Message</label>
          <textarea name="message" className="w-[270px]" required></textarea>
        </div>

        <button type="submit" className="bg-green-600 rounded mb-32 p-2 w-[270px]">
         Contact</button>
      </form>
    </div>
  );
}