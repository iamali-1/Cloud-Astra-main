import { LuNetwork } from "react-icons/lu";
import { SiVitest } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { SiAzuredevops } from "react-icons/si";
import { FiMonitor } from "react-icons/fi";
import { BsFileEarmarkCode } from "react-icons/bs";

export default function Services() {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="mt-10 text-2xl my-primary-text font-extrabold mx-auto md:text-3xl">
          Services We Offer
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 sm:px-0">
            <h5 className="text-xl font-semibold mt-5">
              Managed DevOps Services:
            </h5>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-800">
              Our Managed DevOps services are designed to transform your
              development processes, fostering collaboration and accelerating
              time-to-value. From source code management to continuous
              integration and delivery (CI/CD), we provide end-to-end DevOps
              solutions tailored to your unique requirements.
            </p>
          </div>

          <div className="px-4  mt-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">
              <div className="flex justify-start items-start gap-3">
                <SiAzuredevops size={25} color="#059bdf" /> Continuous
                Integration and Delivery:
              </div>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Automate your build and deployment pipelines, ensuring faster and
              more reliable software releases.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">
              <div className="flex justify-start items-start gap-3">
                <BsFileEarmarkCode size={25} color="#059bdf" /> Continuous
                Infrastructure as Code (IaC):
              </div>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Streamline infrastructure management with IaC, enabling
              consistent, repeatable, and scalable deployments.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">
              <div className="flex justify-start items-start gap-3">
                <FiMonitor size={25} color="#059bdf" /> Continuous Monitoring
                and Optimization:
              </div>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Gain real-time insights into your applications and infrastructure
              to proactively identify and resolve issues, ensuring optimal
              performance.
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 sm:px-0">
            <h5 className="text-xl font-semibold mt-5">Automation Solutions</h5>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-800">
              Efficiency is the cornerstone of successful enterprises. Our
              Automation Solutions focus on eliminating manual processes,
              reducing errors, and enhancing overall productivity across your
              organization.
            </p>
          </div>

          <div className="px-4  mt-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">
              <div className="flex justify-start items-start gap-3">
                <LuNetwork size={25} color="#059bdf" /> Workflow Automation:
              </div>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Design and implement automated workflows tailored to your business
              processes, reducing manual intervention and improving efficiency.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">
              <div className="flex justify-start items-start gap-3">
                <SiVitest size={25} color="#059bdf" /> Test Automation:
              </div>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Accelerate the testing lifecycle with automated testing processes,
              ensuring the robustness and reliability of your applications.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">
              <div className="flex justify-start items-start gap-3">
                <MdOutlineSecurity size={25} color="#059bdf" /> Security
                Automation:
              </div>
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Strengthen your security posture by automating threat detection,
              incident response, and compliance checks.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
