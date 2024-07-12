import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import p1 from "../assets/InspiritLogo-White.png";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
      <img src={p1} alt="" className="w-32 align-left" />
     
        {/* <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div> */}
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Menu</h6>
          <ul>
            <li className="py-2 text-sm">Services</li>
            <li className="py-2 text-sm">Technology</li>
            <li className="py-2 text-sm">Contact</li>
            <li className="py-2 text-sm">Sign In</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Information</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">FAQs</li>
            
            <li className="py-2 text-sm">Articles</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Policies</h6>
          <ul>
            
            <li className="py-2 text-sm">Terms & Conditions</li>
            <li className="py-2 text-sm">PAIA</li>
            <li className="py-2 text-sm">Cookie Policy</li>
            
          </ul>
              </div>
              
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          
      
      </div>
     
  );
};

export default Footer;
