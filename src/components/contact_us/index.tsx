import type { ReactNode } from 'react';

const ContactUs = (): ReactNode => {
  return (
    <footer
      id="contact"
      className="section space-y-12
        bg-stone-900 body-text text-white"
    >
      <h1 className="section-header">Contact Us</h1>

      <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-4 lg:gap-32">
        <p>Still have any question? Feel free to reach out to us.</p>

        <a className="select-all" href="mailto:example@gmail.com">
          example@gmail.com
        </a>
      </div>

      <hr className="text-white/60" />
      <div className="flex items-center gap-4">
        <img src="/assets/logo.svg" className="w-10 md:w-12 lg:w-14" />
        <p>First Tech Coyotes</p>
      </div>

      <p className="italic">
        FIRST®, FIRST® Robotics Competition, and FIRST® Tech Challenge, are
        registered trademarks of FIRST®{' '}
        <a
          className="select-all"
          href="https://www.firstinspires.org"
          target="_blank"
        >
          www.firstinspires.org
        </a>{' '}
        which is not overseeing, involved with, or responsible for this
        activity, product, or service. © 2025 For Inspiration and Recognition of
        Science and Technology (FIRST). Used by special permission. All rights
        reserved. FIRST is not overseeing, involved with, or responsible for
        this activity, product, or service.
      </p>
    </footer>
  );
};

export default ContactUs;
