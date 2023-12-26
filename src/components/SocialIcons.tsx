import { FaFacebook, FaInstagram, FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <>
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
    </>
  );
};

export default SocialIcons;
