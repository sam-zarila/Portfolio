import Image from 'next/image';

import pharma from './Images/pharma.jpg'
import Header from './Header/Header';



export default function Home() {
  return (
    <div className="bg-[#0d0e15] text-white min-h-screen">
     <Header/>
    

      {/* About Me Section */}
      

      {/* Expertise Section */}
      <section className="py-20 bg-[#0d0e15] text-center">
  <h2 className="text-4xl font-extrabold text-white">Areas of Expertise</h2>
  <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="bg-[#15172b] py-10 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <h3 className="text-2xl font-bold text-yellow-400">UX/UI Design</h3>
      <p className="text-gray-400 mt-2">Figma - 80%</p>
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-yellow-400">80%</div>
          </div>
          <div className="flex h-2 rounded bg-gray-700">
            <div className="bg-yellow-400 h-full rounded" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#15172b] py-10 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <h3 className="text-2xl font-bold text-yellow-400">Linux Adminstration </h3>
      <p className="text-gray-400 mt-2">server installation - 80%</p>
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-yellow-400">80%</div>
          </div>
          <div className="flex h-2 rounded bg-gray-700">
            <div className="bg-yellow-400 h-full rounded" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#15172b] py-10 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <h3 className="text-2xl font-bold text-yellow-400">Frontend Development</h3>
      <p className="text-gray-400 mt-2">NestJS - 70%</p>
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-yellow-400">70%</div>
          </div>
          <div className="flex h-2 rounded bg-gray-700">
            <div className="bg-yellow-400 h-full rounded" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#15172b] py-10 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <h3 className="text-2xl font-bold text-yellow-400">Backend Development</h3>
      <p className="text-gray-400 mt-2">NestJS - 90%</p>
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-yellow-400">90%</div>
          </div>
          <div className="flex h-2 rounded bg-gray-700">
            <div className="bg-yellow-400 h-full rounded" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 bg-[#15172b] text-center">
  <h2 className="text-4xl font-extrabold text-white">Our Services</h2>
  <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-[#0d0e15] py-10 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 rounded-full bg-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2 2 4-4m3 3l3-3 3 3m-6 6h3a2 2 0 002-2v-3m-6 0H7a2 2 0 00-2 2v3m3 0h4"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-yellow-400">Web Development</h3>
      <p className="text-gray-400 mt-2">Building responsive websites using the latest technologies.</p>
    </div>

    <div className="bg-[#0d0e15] py-10 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 rounded-full bg-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h8M8 14h4m6-10l-2 3m4 0l-2 3m0 0h-3.5a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5H18a2.5 2.5 0 002.5-2.5V10.5a2.5 2.5 0 00-2.5-2.5H18M4 6h8"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-yellow-400">Graphic Design</h3>
      <p className="text-gray-400 mt-2">Crafting visually stunning graphics and branding material.</p>
    </div>
    

    <div className="bg-[#0d0e15] py-10 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 rounded-full bg-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8h6l-1.5 10h-6L3 8zm15 0h-6l1.5 10h6L18 8zm-4 0h6l-1.5 10h-6l1.5-10z"
            />
          </svg>
        </div>
        
      </div>
      <h3 className="text-2xl font-bold text-yellow-400">Mobile App Development</h3>
      <p className="text-gray-400 mt-2">Creating user-friendly mobile appsa for IOS and Android.</p>
    </div>
    <h3 className="text-2xl font-bold text-yellow-400">Database Management Systems</h3>
      <p className="text-gray-400 mt-2">Building responsive websites using the latest technologies.</p>
    </div>

    <div className="bg-[#0d0e15] py-10 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 rounded-full bg-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h8M8 14h4m6-10l-2 3m4 0l-2 3m0 0h-3.5a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5H18a2.5 2.5 0 002.5-2.5V10.5a2.5 2.5 0 00-2.5-2.5H18M4 6h8"
            />
          </svg>
        </div>
      </div>
    
  </div>
</section>
<section className="py-20 bg-[#0d0e15] text-center">
  <h2 className="text-4xl font-extrabold text-white">Our Work Experience</h2>
  <div className="container mx-auto mt-10 relative">
    {/* Vertical Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>

    {/* Experience Item 1 */}
    <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16 md:mb-20 relative">
      <div className="w-full md:w-5/12 bg-[#15172b] p-6 rounded-lg shadow-lg text-left">
        <h3 className="text-2xl font-bold text-yellow-400">Lead Developer - HomeHub Platform</h3>
        <p className="text-gray-400 mt-2">
          Led the development of a modern real estate platform, incorporating features like property listings, agent contact forms (via EmailJS), and a fully responsive user interface using Next.js and Tailwind CSS. 
        </p>
        <p className="text-gray-400 mt-2">
          Integrated backend systems with NestJS to handle property data and built a frontend for displaying hostels across major universities in Malawi (UNIMA, MUBAS, LUNAR, POLY, CU).
        </p>
      </div>
      
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-20 relative">
      <div className="w-full md:w-5/12 bg-[#15172b] p-6 rounded-lg shadow-lg text-left">
        <h3 className="text-2xl font-bold text-yellow-400">Web Developer - Liwonde Private Hospital</h3>
        <p className="text-gray-400 mt-2">
          Developed a fully responsive website for Liwonde Private Hospital, ensuring accessibility and a seamless user experience for patients and staff. 
        </p>
        <p className="text-gray-400 mt-2">
          Integrated key features such as appointment scheduling, service listings, and contact forms, utilizing modern web technologies like React.js and Tailwind CSS for the frontend.
        </p>
      </div>
      
    </div>

    {/* Experience Item 3 */}
    <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16 md:mb-20 relative">
      <div className="w-full md:w-5/12 bg-[#15172b] p-6 rounded-lg shadow-lg text-left">
        <h3 className="text-2xl font-bold text-yellow-400">Full-Stack Developer - FarmConnectApp</h3>
        <p className="text-gray-400 mt-2">
           to create the FarmConnect app, aimed at bridging the gap between farmers and buyers in Malawi. The app provided access to market data, farming resources, and direct connections to buyers and suppliers.
        </p>
        <p className="text-gray-400 mt-2">
          Focused on building the mobile interface with Flutter and ensuring a smooth integration with the backend using NestJS and Firebase for real-time chat and data synchronization.
        </p>
      </div>
      
    </div>
  </div>
</section>





<section className="py-20 bg-[#15172b] text-center">
  <h2 className="text-4xl font-extrabold text-white">Our Projects</h2>
  <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Project Item 1 */}
    <div className="bg-[#0d0e15] p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <Image src={pharma} alt="Project 1" width={500} height={200} className="rounded-lg" />
      <h3 className="text-yellow-400 mt-3 text-xl font-semibold">Liwonde Private Hospital</h3>
      <p className="text-gray-400 mt-2">Brief description of Project 1 highlighting key features and technologies used.</p>
      <a href="https://www.liwondeprivatehospital.com/" className="inline-block mt-4 text-sm font-bold text-yellow-400 hover:underline">View Project</a>
    </div>
    
    {/* Project Item 2 */}
    <div className="bg-[#0d0e15] p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <Image src="/project2.jpg" alt="Project 2" width={300} height={200} className="rounded-lg" />
      <h3 className="text-yellow-400 mt-3 text-xl font-semibold">Project 2</h3>
      <p className="text-gray-400 mt-2"></p>
      <a href="https://66f465f67997430649bec99b--homehubmw.netlify.app/" className="inline-block mt-4 text-sm font-bold text-yellow-400 hover:underline">View Project</a>
    </div>
    
    {/* Project Item 3 */}
    <div className="bg-[#0d0e15] p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <Image src="" alt="Project 3" width={300} height={200} className="rounded-lg" />
      <h3 className="text-yellow-400 mt-3 text-xl font-semibold">Project 3</h3>
      <p className="text-gray-400 mt-2">Brief description of Project 3 highlighting key features and technologies used.</p>
      <a href="#!" className="inline-block mt-4 text-sm font-bold text-yellow-400 hover:underline">View Project</a>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="py-20 bg-[#0d0e15] text-center">
        <h2 className="text-3xl font-bold text-white">Contact Us</h2>
        <div className="container mx-auto mt-10 max-w-lg">
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-5 rounded-lg bg-[#15172b] text-white border border-gray-700"
            />
            <textarea
              placeholder="Enter your message"
              className="w-full py-3 px-5 rounded-lg bg-[#15172b] text-white border border-gray-700"
              rows={5}
            ></textarea>
            <button className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#15172b] text-center text-gray-400">
        © 2024 All rights reserved.
      </footer>
    </div>
  );
}
