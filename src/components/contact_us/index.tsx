import type { ReactNode } from "react";

const ContactUs = (): ReactNode => {
  return (
    <footer
      id="contact"
      className="p-8 md:p-16 lg:p-32 space-y-12
        bg-stone-900 text-base md:text-lg lg:text-xl"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl">Contact Us</h1>

      <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-4 lg:gap-32">
        <p>Still have any question? Feel free to reach out to us.</p>
        <p className="select-all">example@gmail.com</p>
      </div>

      <hr className="text-base text-white/60 leading-0" />
      <div className="flex items-center space-x-4 ">
        <img src="/assets/logo.svg" className="w-10 md:w-12 lg:w-14" />
        <p>First Tech Coyotes</p>
      </div>
    </footer>
  );
}

export default ContactUs;
