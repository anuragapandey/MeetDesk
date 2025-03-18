"use client"
// import { useRouter } from 'next/navigation';
// import { FaFacebook,FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import Link  from 'next/link';
// const page = () => {
//   return (
//     <>
//     <div className='flex flex-col gap-7'>
//       <section className='flex items-center justify-center'>
//         <h1 className='text-5xl max-w-[700px] text-white'>
//         Advanced Video Conferencing & Collaboration
//          Platform for Seamless Communication.
//         </h1>
//       </section>

//       <section className='text-white'>
//         <h1 className='text-3xl mb-3'>Video calls and meetings for everyone</h1>
//         <h4 className='text-xl mb-3'>Connect, collaborate and celebrate from anywhere with dhoom</h4>
//         <div className='flex gap-2 flex-wrap w-full'>
//           <button className='flex gap-2 bg-cyan-500 py-2 px-3 rounded'>
//             <img src="./icons/video.svg" alt="video" />
//             <span>New Meeting</span>
//           </button>
//           <div className="flex gap-2 border px-2 py-1 ">
//           <img src="./icons/video.svg" alt="video" />
//             <input className='w-full bg-inherit' type="text" placeholder='Enter a code or link' />
//           </div>
//           <button>join</button>
//         </div>

//       </section>
//     </div>
//     </>
//   )
// }

// const faqData = [
//   {
//     id: 1,
//     question: "How do I raise funds?",
//     answer: "Login with Wallet - Fill up form - Hit Submit"
//   },
//   {
//     id: 2,
//     question: "Can I raise funds for a friend as well?",
//     answer: "Yes, you can also raise funds for a friend, a loved one or anyone in need during life's crucial moments."
//   },
//   {
//     id: 3,
//     question: "Does the raised amount reach the individual directly?",
//     answer: "Props (short for properties) are used to pass data from a parent component to a child component in React."
//   },
//   {
//     id: 4,
//     question: "What is state in React?",
//     answer: "With Ketto, the money you collect goes directly to the bank account associated with your fundraising page. Raising money for yourself or anyone has never been easier."
//   },
//   {
//     id: 5,
//     question: "Is It safe?",
//     answer: " Your Ketto fundraiser features the very best in secure payment encryption technology also 	Immutable transactions stored on blockchain."
//   }
//   ];

// export default page
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Dashboard = () => {
  const [selected, setSelected] = useState(null)

  function toggle(i){
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
}
  return (
    <div className="p-6 space-y-8 text-white">
      {/* Hero Section */}
      <section id="how-it-works" className="text-center">
        <h1 className="text-3xl font-bold">Welcome to Dhoom Video streaming</h1>
        <p className="text-gray-600 mt-2">Seamless video conferencing at your fingertips.</p>
        <p className="text-gray-600 mt-2">Connect, collaborate and celebrate from anywhere with dhoom</p>
        
      </section>

      {/* How It Works */}
      <section id="how-it-works">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {["Create a Meeting", "Share the Link", "Join & Collaborate"].map((step, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">{step}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

       {/* FAQ Section */}
       <section>
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
        {faqData.map((item)=> (
            <div key={item.id} className='border-b-1 border-b-[#f5f5f5da]' >
  <div onClick={()=> { toggle(item.id) }}  className={` hover:bg-[#2a242489]   
   flex justify-between items-center py-[12px] text-[20px] px-4 ${selected===item.id? 'isLight:bg-[#F5F5F5] bg-[#2a242489] ': ''} `}>
  <h2  >
        {item.question}
    </h2>
    <span>
    {selected===item.id ? '-' : '+'}
    </span>
  </div>
  <div className={` ${selected===item.id? 'block': 'hidden'}`}>
    {/* <p className={`pb-[12px] text-[#2a242489] text-[20px] px-4 ${selected===item.id ? 'content show ' : 'content'}`}>  {item.answer} </p> */}
    <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          selected === item.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className={`pb-[12px] text-white' text-[20px] px-4`}>
          {item.answer}
        </p>
      </div>
  </div>
</div>
          ))}

        </div>
      </section>

          {/* contact us */}
       <div id="contact-us" className='flex gap-[20px] items-center my-[20px]' >
            <div>
                <p className={`text-2xl text-white`} >Have any questions for us? Chat with our team on Facebook or WhatsApp now.</p>
            </div>
            <div className='flex gap-1.5 sm:flex-wrap' >
                <a target='_blank'
                href="https://wa.me/9555991214?text=Hi, I just checked out your Dhoom project can we connect? ">
                <button
      type='button'
      className={`font-epilogue hover:translate-y-[-2px active:translate-y-1 transition-all font-semibold text-[16px] 
        leading-[26px] text-white min-h-[52px] flex items-center justify-around gap-1 
        px-4 rounded-[10px] bg-[#13CB6A] `} 
      onClick={()=>{}}
    >
        <FaWhatsapp />
      chat with us
    </button>
                </a>
                <a href="https://www.facebook.com/Anirudhakolay/" target='_blank'>
                <button
      type='button'
      className={`font-epilogue hover:translate-y-[-2px active:translate-y-1 transition-all font-semibold text-[16px] 
        leading-[26px] text-white min-h-[52px] flex items-center justify-around gap-1 
        px-4 rounded-[10px] bg-[#354E84] `} 
      onClick={()=>{}}
    >
        <FaFacebook />
      chat with us
    </button>
                </a>
            
           
            </div>
        </div>


      {/* Footer */}
      
      <footer className='w-full' >
  <div className="mt-6 px-4 py-3 bg-[#045452] w-[100%] flex justify-between items-center min-h-25">
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/Anirudhakolay/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://github.com/AmandeepGuggi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaGithub />
          </a>
          <a href="https://x.com/anirudha_kolay" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/anirudha_kolay/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/amandeep-guggi-a128a6347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-gray-400">Follow us for updates, news, and more!</p>
      </div>
      <div className="bg-[#073C3B] px-3 ">
      <div className="p-6  rounded-xl  w-full  text-center">
        <h2 className="text-2xl font-semibold mb-2">👨‍💻 Meet the Team</h2>
        <p className="text-gray-400 mb-4">Built with ❤️ by a passionate team of developers & blockchain enthusiasts.</p>
        
        <div className="flex justify-center gap-1 md:flex-nowrap flex-wrap space-x-6">
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Krushna Mane</p>
            <p className="text-gray-400 text-sm">Blockchain Engineer</p>
          </div>
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Anirudha Kolay</p>
            <p className="text-gray-400 text-sm">Blockchain Operator & Documentation Lead</p>
          </div>
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Co-Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Kartik Salunkhe</p>
            <p className="text-gray-400 text-sm">Presentation & Visual Designer</p>
          </div>
          <div className="text-center mr-6">
            <img src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg" alt="UI Designer" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Amandeep Guggi</p>
            <p className="text-gray-400 text-sm">Frontend & UI/UX Developer</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-gray-500 text-center py-8 text-sm">© {new Date().getFullYear()} CrowdFunding Hub | All Rights Reserved</p>
      </div>
</footer>
    </div>
  );
};

const faqData = [
  {
    id: 1,
    question: "How do I create a meeting?",
    answer: "To create a meeting, simply log in to your account and click on the 'Create Meeting' button. A unique meeting link will be generated, which you can share with participants. You can also configure settings like enabling a waiting room, setting a password, or choosing whether participants can join before the host."
  },
  {
    id: 2,
    question: "Do participants need to sign up?",
    answer: "No, participants do not need to create an account to join a meeting. They can simply click on the meeting link provided by the host and enter the meeting. However, signing up allows users to access additional features like scheduling meetings, saving chat history, and customizing their profile."
  },
  {
    id: 3,
    question: "Can I record my meetings?",
    answer: "Yes, the host has the ability to record meetings for future reference. The recordings can be saved locally on your device or in cloud storage, depending on your subscription plan. Participants will be notified when the meeting is being recorded, ensuring transparency and compliance with privacy regulations."
  },
  {
    id: 4,
    question: "Is screen sharing available?",
    answer: "Yes, both hosts and participants can share their screens during a meeting. This feature is useful for presentations, online classes, and remote collaboration. The host can control who is allowed to share their screen, and multiple participants can share their screens simultaneously if enabled."
  },
  {
    id: 5,
    question: "Is my meeting secure?",
    answer: "Yes, our platform uses end-to-end encryption to protect your meetings from unauthorized access. Hosts can enable additional security features such as password protection, waiting rooms, and restricted entry to ensure that only invited participants can join. We also have measures in place to prevent unwanted disruptions, such as the ability to mute or remove participants."
  }
];



export default Dashboard;