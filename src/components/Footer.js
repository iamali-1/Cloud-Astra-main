import React from "react";
import { Link } from "react-router-dom";
import logo_web_white from "../assets/images/white_logo.png";
import { astraLink } from "./Navbar";

export default function Footer() {
  const footerNavs = [
    {
      label: "Menu",
      items: [
        { href: astraLink + 'about', name: 'About Us' },
        { href: astraLink + 'services', name: 'Services' },
        { href: astraLink + 'projects', name: 'Projects' },
        { href: astraLink + 'portfolio', name: 'Portfolio' },
        { href: astraLink + 'career', name: 'Career' },
        { href: astraLink + 'contact', name: 'Contact Us' },
      ],
    },
    {
      label: "Terms",
      items: [
        { href: astraLink, name: 'Privacy & Policy' },
        { href: astraLink, name: 'Terms and Conditions' },
      ],
    },
    {
      label: "Contact",
      items: [
        { email: 'contact@astra-analytica.com' },
        { number: '+1-6692411463' },
        { address: 'Astra Analytica Corporation 134 Stuart Ave STE B11 Vally Stream, NY' },
      ],
    },
  ];

  return (
    <footer className="relative my-footer mt-6">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="relative py-12">
            <div className="relative w-full">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-x-4">
                <div className="md:col-span-3 flex justify-center items-center">
                  <Link to="#">
                    <img
                      src={logo_web_white}
                      style={{ width: '100rem', height: '6rem' }}
                      alt="Astra-analytica logo"
                      className="mx-auto"
                    />
                  </Link>
                </div>
  
                <div className="md:col-span-9 ">
                  <div className="flex justify-between margin-left">
                    {footerNavs.map((nav, index) => (
                      <div key={index} className="w-full md:w-1/3 mt-8 md:mt-0 ">
                        <ul className="list-none footer-list text-start">
                          <h4 className="text-[#059BDF] text-2xl">{nav.label}</h4>
                          {nav.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="mt-2">
                              {item.href ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  className="btn btn-link font-medium hover:text-[#059BDF] after:bg-[#059BDF] duration-500 ease-in-out"
                                >
                                  {item.name}
                                </a>
                              ) : null}
                              {item.email ? <p className="text-white mt-1">{`${item.email}`}</p> : null}
                              {item.number ? <p className="text-white mt-1">{` ${item.number}`}</p> : null}
                              {item.address ? <p className="text-white mt-1">{` ${item.address}`}</p> : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
        <div className="container text-center">
          <div className="grid  items-center gap-6">
            <div className="text-center">
              <p className="mb-0 text-gray-300 font-medium">
                Copyright©
                <a href="https://astra-analytica.com/" target='_blank' className="mx-3 text-md text-[#059BDF]">Astra Analytica</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  
}
