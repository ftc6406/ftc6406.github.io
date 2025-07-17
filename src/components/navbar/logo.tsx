function Logo() {
  return (
    <a href="#hero">
      <div className="flex sm:p-4 justify-self-start items-center">
        <img src="assets/logo.svg" alt="Logo" className="md:w-14 sm:w-4" />
        <div className="ml-4 md:ml-8 text-2xl md:text-4xl font-bold">
          First Tech Coyotes
        </div>
      </div>
    </a>
  );
}

export default Logo;
