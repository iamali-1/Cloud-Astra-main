import { Database, Lock, Monitor, Terminal } from "react-feather";
import { AiOutlineCloud } from "react-icons/ai";
import { PiCompassTool, PiFloppyDiskLight } from "react-icons/pi";

const people = [
  {
    name: "Cloud Providers",
    role: "AWS, GCP, Hetzner, Digital Ocean, Heroku",
    Icon: <AiOutlineCloud size={60} />,
  },

  {
    name: "Tools",
    role: " Ansible, Terraform, Docker, Kubernetes, HashiCorp Vault, Graylog, Linux",
    Icon: <PiCompassTool size={60} />,
  },

  {
    name: "CI/CD",
    role: "Gitlab, Github Actions, BitBucket Pipelines, Jenkins, AWS CodePipeline",
    Icon: <PiFloppyDiskLight size={60} />,
  },

  {
    name: "Monitoring",
    role: "Cacti, Netdata, New Relic, Prometheus & Grafana, CloudWatch, Monit, Nagios",
    Icon: <Monitor size={60} />,
  },

  {
    name: "Security",
    role: "Wazuh, ThreatMapper, OpenVAS",
    Icon: <Lock size={60} />,
  },

  {
    name: "Databases",
    role: "MySQL, Postgres, MongoDB, CouchDB, Elastic Search, Redis",
    Icon: <Database size={60} />,
  },

  {
    name: "Work Environments",
    role: "Agile (Scrum)",
    Icon: <Terminal size={60} />,
  },
  // More people...
];

export default function Tools() {
  return (
    <div id={"tools"} className="bg-white pt-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight my-primary-text sm:text-4xl">
            Tools and tech stack
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-800">
            Smart technologies, tech stacks, and tools to provide you with the
            best cloud computing solutions.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <div className="h-16 w-16 rounded-full">{person.Icon}</div>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
