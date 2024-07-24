import React from 'react'
import Profil from "../assets/images/ProfilBW.jpg"
const About = () => {
  return (
    <div className='flex flex-col items-center md:mt-14 mt-5'>
        <h1 className='text-dark-blue border border-dark-blue px-4 py-2 rounded-xl font-semibold'>About</h1>
        <p className='text-primary font-semibold mt-5 md:text-xl text-lg md:text-center'>Hello! I am a student majoring in <span className="text-secondary">Information Systems </span> at Politeknik Caltex Riau. With a <span className="text-secondary">strong passion for web development</span>, I continuously strive to enhance my skills and knowledge in both <span className="text-secondary">front-end </span> and <span className="text-secondary">back-end technologies</span>. I am dedicated to creating <span className="text-secondary"> functional and aesthetically pleasing web solutions </span> that provide <span className="text-secondary"> seamless user experiences</span>.</p>
    </div>
  )
}

export default About