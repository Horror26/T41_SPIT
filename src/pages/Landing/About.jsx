import React from 'react'
import ContactUsForm from "../../common/Form";

export const About = () => {
  return (
    <div className="mx-auto p-5 bg-gray-100">
      <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
      <p className="text-center text-[#058e45] mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  )
}

export default About;
