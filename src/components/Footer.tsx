import Background4 from "../Background/Background4.avif";
// import Background5 from "../Background/Background5.avif";
import SocialIcons from "./SocialIcons";
import Model1 from "../Background/model1.webp"
const jewelryBackgrounds = [
  `url(${Background4})`, 
  // `url(${Background5})`,
  `url(${Model1})`,  // Fixed typo here
];

const Footer = () => {
  const randomBackground = jewelryBackgrounds[Math.floor(Math.random() * jewelryBackgrounds.length)];

  return (
    <footer className="py-40 flex flex-col items-center " style={{ background: randomBackground, backgroundSize: 'cover' }}>
      <div className="container mx-auto flex flex-col items-center justify-between text-white w-full h-full">
        <div className="flex space-x-4 mb-4 text-3xl mt-[200px]">
          <SocialIcons/>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
