import { FaFacebook, FaInstagram, FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Background4 from "../Background/Background4.avif";
import Background5 from "../Background/Background5.avif";

const jewelryBackgrounds = [
  `url(${Background4})`, 
  `url(${Background5})`,
];

const Footer = () => {
  const randomBackground = jewelryBackgrounds[Math.floor(Math.random() * jewelryBackgrounds.length)];

  return (
    <footer className="py-40 flex flex-col items-center" style={{ background: randomBackground, backgroundSize: 'cover' }}>
      <div className="container mx-auto flex flex-col items-center justify-between text-white w-full h-full">
        <div className="flex space-x-4 mb-4 text-3xl mt-[200px]">
          <a href="https://www.facebook.com/your-profile-url" className="text-white hover:text-gray-900">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/your-profile-url" className="text-white hover:text-gray-900">
            <FaInstagram />
          </a>
          <a href="mailto:kab618@gmail.com" className="text-white hover:text-gray-900">
            <FaEnvelope />
          </a>
          <a href="https://github.com/your-username" className="text-white hover:text-gray-900">
            <FaGithub />
          </a>
          <a href="https://twitter.com/your-twitter" className="text-white hover:text-gray-900">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" className="text-white hover:text-gray-900">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
