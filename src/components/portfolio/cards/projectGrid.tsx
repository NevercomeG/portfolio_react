import Image from "next/image";
import Link from "next/link";

import { Project } from "../../../pages/projects/types/types";

type Props = {
  projects: Project[];
};

const ProjectGrid: React.FC<Props> = ({ projects }) => {
  return (
    <div className="grid grid-flow-row pt-24 grid-cols-1 justify-center items-center px-12 md:grid-cols-2 gap-4 lg:grid-cols-3">
      {projects.map((project) => (
        <Link legacyBehavior key={project.id} href={`/projects/${project.id}`} passHref>
          <a className="block rounded-lg p-4 shadow-sm shadow-white">
            <div className="h-56 w-full relative rounded-md overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </div>
            <div className="mt-2">
              <dl>
                <div>
                  <dt className="sr-only">Price</dt>
                  <dd className="text-sm">$240,000</dd>
                </div>
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd className="font-medium text-gray-500">Portfolio</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p>{project.languages.join(", ")}</p>
                  <p className="font-medium text-gray-500"></p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
