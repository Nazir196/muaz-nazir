import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 mt-4 flex items-center flex-col md:flex-row justify-between py-2">
    <div className="flex flex-shrink-0 items-center">
        <h1 className="m-4 text-gray-400 text-3xl font-lora hover:cursor-pointer">Muaz's Portfolio</h1>
    </div>

    <div className="md:m-8 flex items-center text-gray-400 justify-center gap-6 text-4xl hover:cursor-pointer">
      <a href="https://linkedin.com/in/muaz-nazir-108010200"><FaLinkedin /></a>
      <a href="https://github.com/Nazir196"><FaGithub /></a>
      <a href="https://instagram.com/__.muaaaz"><FaInstagram /></a>
      <a href="https://wa.me/+923218674831"><FaWhatsapp /></a> 
    </div>

  </nav>
  );
};

export default Navbar