import Navbar from '@/components/Navbar';
import Image from 'next/image';
import InteractiveImage from '@/components/InteractiveImage';
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import '../app/globals.css';

const Page = () => {
  return (
    <div>
      <Navbar />
      <div id="Home" className="h-screen flex flex-col justify-center items-center text-white">
        <div className="flex flex-col md:flex-row items-center">
        <div className='md:mr-10 ml-[120px]'>
        <div className='w-[450px] h-[450px] mt-11 rounded-full overflow-hidden shadow-[0_0_4px_2px_rgba(179,54,255,1)] transition-shadow duration-300 hover:shadow-[0_0_12px_6px_rgba(179,54,255,0.8)]'>
        <Image
      src="/images/meee.jpg" // Correct path
      alt="Description of the image"
      width={600}
      height={600}
    />
        </div>
        </div>

          <div className='md:ml-10 mt-10 md:mt-0'>
            <div className='flex text-[45px] md:text-[65px] font-bold justify-end mr-11 mt-20'>
              <div>I AM</div>
              <div className='ml-2 text-[#B336FF]'>RITEEKA GAWAND</div>
            </div>
            <div className='mt-3'>
              <p className='text-[18px] md:text-[22px] leading-relaxed font-bold text-right mr-11'>
                As a dedicated MERN Stack Developer, I specialize in crafting dynamic web applications with a strong emphasis on front-end development. My skills include leveraging React.js and Tailwind CSS to create visually engaging interfaces, while utilizing Express.js and Node.js for robust back-end solutions and MongoDB for efficient database management.
              </p>
            </div>
            <div className='mt-5 flex justify-end mr-11'>
              <a
                href='https://www.linkedin.com/in/riteeka-gawand-702553212/'
                target='_blank'
                rel='noopener noreferrer'
                className='relative'
              >
                <FiLinkedin
                  className='text-white text-[25px] ml-5 transition-transform duration-300 hover:scale-150 hover:text-[#B336FF] hover:shadow-[0_0_10px_2px_rgba(179,54,255,0.8)]'
                />
              </a>
              <a
                href='https://www.instagram.com/your-profile'
                target='_blank'
                rel='noopener noreferrer'
                className='relative'
              >
                <FaInstagram
                  className='text-white text-[25px] ml-5 transition-transform hover:scale-150 hover:text-[#B336FF] hover:shadow-[0_0_10px_2px_rgba(179,54,255,0.8)]'
                />
              </a>
              <a
                href='https://github.com/riteekagawand'
                target='_blank'
                rel='noopener noreferrer'
                className='relative'
              >
                <LuGithub
                  className='text-white text-[25px] ml-5 transition-transform duration-300 hover:scale-150 hover:text-[#B336FF] hover:shadow-[0_0_10px_2px_rgba(179,54,255,0.8)]'
                />
              </a>
              <a
                href='mailto:riteekagawand7@gmail.com'
                className='relative'
              >
                <MdOutlineMail
                  className='text-white text-[25px] ml-5 transition-transform duration-300 hover:scale-150 hover:text-[#B336FF] hover:shadow-[0_0_10px_2px_rgba(179,54,255,0.8)]'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'><InteractiveImage /></div>
      
      <div id="About" className="h-screen flex justify-center items-center text-white">
        <h2>About</h2>
      </div>
      
      <div id="Projects" className="h-screen flex justify-center items-center text-white">
        <h2>Projects</h2>
      </div>
      
      <div id="Contact" className="h-screen flex justify-center items-center text-white">
        <h2>Contact</h2>
      </div>
    </div>
  );
};

export default Page;
