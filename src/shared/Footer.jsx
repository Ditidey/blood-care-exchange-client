import React from 'react';
import { BiLogoFacebookCircle, BiLogoGmail } from 'react-icons/bi';
import { AiTwotonePhone } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className=" bg-slate-950 text-white pt-8 pb-6">
        <div className=" mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-8">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 24/7.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <FaTwitter className='text-blue-500 w-6 h-5 mx-auto'></FaTwitter> </button>
                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <BiLogoFacebookCircle className='text-blue-500 w-6 h-5 mx-auto'></BiLogoFacebookCircle></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <AiTwotonePhone className='text-red-800 w-6 h-5 mx-auto'></AiTwotonePhone></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <BiLogoGmail className='text-red-500 w-6 h-5 mx-auto'></BiLogoGmail>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href=" ">About Us</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href=" ">Blog</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href=" ">Sponsors</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href=" ">Free Services</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href=" ">BCC</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href=" ">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href=" ">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href=" ">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6  border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023!</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> BloodCareExchange </a>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;