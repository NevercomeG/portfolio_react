import { StackData } from "@/types/StacksTypes"

export const FrontEndData: StackData[] =[{
  title: 'Front End',
  mainImage : '/assets/img/frontend.svg',
  mainImageAlt : 'Image description',
  mainImagePosition : 'left',
  icons : [
    {
      iconsrc: 'logos:html-5',
      classname: 'h-14 w-14',
      color: '#0080FF',
      position: 'Upper',
    },
    {
      iconsrc: 'logos:css-3',
      classname: 'h-14 w-14',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'logos:javascript',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'devicon:typescript',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'devicon:react',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Lower',
    },
    {
      iconsrc: 'devicon:nextjs',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Lower',
    },
    {
      iconsrc: 'vscode-icons:file-type-tailwind',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Lower',
    },
    {
      iconsrc: 'devicon:materialui',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Lower',
    },
  ],
  detailedSkills:  [
    '➖ HTML, CSS, JavaScript, TypeScript.',
    '➖ React, Next.js.',
    '➖ Tailwind CSS, Material UI, etc.',
    '➖ Responsive Web Design.',
    ],
  }
]

export const BackEndData: StackData[] =[{
  title: 'Back End',
  mainImage : '/assets/img/backend.svg',
  mainImageAlt : 'Image description',
  mainImagePosition : 'right',
  icons : [
    {
      iconsrc: 'devicon:nodejs-wordmark',
      classname: 'h-12 w-12',
      color: '#0080FF',
      position: 'Upper',
    },
    {
      iconsrc: 'logos:express',
      classname: 'h-14 w-14',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'simple-icons:trpc',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'vscode-icons:file-type-light-prisma',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'logos:mongodb-icon',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Lower',
    },
    {
      iconsrc: 'logos:mysql-icon',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Lower',
    },

  ],
  detailedSkills:  [
    '➖ Node.js, Express, Prisma.',
    '➖ REST API, TRPC, etc.',
    '➖ Websockets.',
    '➖ MongoDB, PostgreSQL, etc.',
    ],
  }
]

export const DevOpsData: StackData[] =[{
  title: 'DevOps',
  mainImage : '/assets/img/vercel.svg',
  mainImageAlt : 'Image description',
  mainImagePosition : 'left',
  icons : [
    {
      iconsrc: 'mdi:digital-ocean',
      classname: 'h-12 w-12',
      color: '#0080FF',
      position: 'Upper',
    },
    {
      iconsrc: 'vscode-icons:file-type-docker',
      classname: 'h-14 w-14',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'logos:vercel-icon',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'logos:google-cloud',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Upper',
    },
    {
      iconsrc: 'logos:github-actions',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Lower',
    },
    {
      iconsrc: 'logos:aws',
      classname: 'h-12 w-12',
      color: 'black',
      position: 'Lower',
    },
  ],
  detailedSkills:  [
    '➖ AWS, GCP, Digital Ocean, Vercel',
    '➖ CI/CD, Github Actions',
    '➖ Linux & Windows.',
    '➖ More...',
    ],
  }
]
