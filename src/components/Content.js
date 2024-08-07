import React from "react";

import image from "../assets/images/company/1.jpg";
import image1 from "../assets/images/company/2.jpeg";
import image2 from "../assets/images/company/3.jpg";
import Services from "./Services";

import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
  User,
  Youtube,
} from "react-feather";

const Content = () => {
  return (
    <div id="content" className="container mt-12">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div className="lg:col-span-8 md:col-span-7">
          <h3 className="text-2xl my-primary-text font-extrabold mx-auto md:text-3xl">
            Our Commitment
          </h3>
          <p className="text-slate-800 mt-4">
            At Astra Analytica, we understand that seamless collaboration, rapid
            deployment, and continuous integration are at the heart of
            successful software development. Our commitment is to empower your
            organization with tailored solutions that enhance productivity,
            reduce time-to-market, and ensure the highest quality of software
            delivery.
          </p>

          <div className="grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-12">
              <img
                src={image}
                className="rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
            </div>
            <div className="col-span-6">
              <img
                src={image1}
                className="rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
            </div>
            <div className="col-span-6">
              <img
                src={image2}
                className="rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
            </div>
          </div>

          <Services />
        </div>

        <div className="lg:col-span-4 md:col-span-5">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
            <h5 className="text-xl font-semibold">
              Why Choose Astra Analytica?
            </h5>
            <ul className="list-none mt-4">
              <li className=" mt-2">
                <span className="text-slate-800 font-bold">
                  Expertise and Experience:
                </span>
                <p>
                  Benefit from our team of seasoned professionals with a proven
                  track record in delivering successful DevOps and Automation
                  solutions across diverse industries.
                </p>
              </li>
              <li className=" mt-2">
                <span className="text-slate-800 font-bold">
                  Tailored Solutions:
                </span>
                <p>
                  We understand that every organization is unique. Our solutions
                  are customized to fit your specific needs, ensuring maximum
                  impact and value.
                </p>
              </li>
              <li className=" mt-2">
                <span className="text-slate-800 font-bold">
                  Continuous Innovation:
                </span>
                <p>
                  Stay ahead in the ever-evolving tech landscape. We
                  continuously explore emerging technologies to bring you the
                  latest and most effective solutions.
                </p>
              </li>

              <li className=" mt-2">
                <span className="text-slate-800 font-bold">
                  Reliability and Security:
                </span>
                <p>
                  Trust in a partner that prioritizes the security and
                  reliability of your systems. Our solutions are designed with
                  best practices in mind to safeguard your critical assets.
                </p>
              </li>

              {/* <li className="flex justify-between mt-12">
                <span className="text-slate-400 font-medium">Social:</span>

                <ul className="list-none ltr:text-right rtl:text-left">
                  <li className="inline">
                    <span
                      to="https://dribbble.com/shreethemes"
                      target="_blank"
                      className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                    >
                      <Facebook />
                    </span>
                  </li>
                  <li className="inline">
                    <span
                      to="https://www.behance.net/shreethemes"
                      target="_blank"
                      className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                    >
                      <Instagram />
                    </span>
                  </li>
                  <li className="inline">
                    <span
                      to="http://linkedin.com/company/shreethemes"
                      target="_blank"
                      className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                    >
                      <Linkedin />
                    </span>
                  </li>

                  <li className="inline">
                    <span
                      to="https://www.instagram.com/shreethemes/"
                      target="_blank"
                      className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                    >
                      <Youtube />
                    </span>
                  </li>
                  <li className="inline">
                    <span
                      to="https://twitter.com/shreethemes"
                      target="_blank"
                      className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"
                    >
                      <Twitter />
                    </span>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
