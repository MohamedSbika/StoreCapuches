import React from 'react'
import logo from "../img/IMG.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-white   pb-3 font-sans tracking-wide">


      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" lg:items-center">
          <a href="#">
            <img className='h-[10vw] w-[10vw] ml-24 mt-10 rounded-3xl' src={logo} alt="logo" />
          </a>
          <div className="ml-32 ">
            <a href="https://www.instagram.com/abdellino.officiel/?hl=fr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-gray-800 mt-10 hover:text-gray-600" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100091985985083" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-gray-800 ml-6 hover:text-gray-600" />
            </a>
          </div>
        </div>




        <div>
          <ul className="space-y-4 pl-32 pt-24">
            <li>
              <a href="/" className="text-gray-900 hover:text-black text-base">ACCUEIL</a>
            </li>
            <li>
              <a href="/store" className="text-gray-900 hover:text-black text-base">STORE</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-900 hover:text-black text-base">CONTACT</a>
            </li>
          </ul>
        </div>

        <div className='pl-24 pt-16'>
          <h4 className="text-lg font-semibold mb-6 text-gray-600">CONTACT</h4>
          <ul className="space-y-4">
            <li>
              <a href="" className="text-gray-600 hover:text-gray-900 text-sm">Abdellino9@gmail.com</a>
            </li>
            <li>
              <a href="" className="text-gray-600 hover:text-gray-900 text-sm">+216 54 316 183</a>
            </li>
            <li>
              <a href="" className="text-gray-600 hover:text-gray-900 text-sm">Sousse 4000</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-900 text-center text-sm ">© 2024 Copyright </p>
    </footer>
  );
}

export default Footer
