import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiRedux,
  SiGhost,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
  SiFlask,
  SiJetbrains,
  SiPython,
  SiDjango,
  SiZendframework,
  SiExpress,
  SiFastapi,
  SiMui,
  SiTailwindcss,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node',
      icon: FaNode,
    },
    {
      name: 'Python',
      icon: SiPython,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Flask',
      icon: SiFlask,
    },
    {
      name: 'Django',
      icon: SiDjango,
    },
    {
      name: 'Express',
      icon: SiExpress,
    },
    {
      name: 'Fast API',
      icon: SiFastapi,
    },
  ],
  frontend: [
    {
      name: 'React Js',
      icon: SiReact,
    },
    // {
    //   name: 'NextJS',
    //   icon: SiReact,
    // },
    // {
    //   name: 'Apollo Graphql',
    //   icon: SiApollographql,
    // },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    // {
    //   name: 'VueJS',
    //   icon: SiVueDotJs,
    // },
    // {
    //   name: 'Ghost',
    //   icon: SiGhost,
    // },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    // {
    //   name: 'MsSQL',
    //   icon: SiMicrosoftsqlserver,
    // },
    {
      name: 'Prisma',
      icon: SiExpress,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },

    // {
    //   name: 'Redis',
    //   icon: TbBrandPrisma,
    // },
    // {
    //   name: 'SocketIO',
    //   icon: SiSocketDotIo,
    // },
    // {
    //   name: 'Google Pubsub',
    //   icon: SiGooglecloud,
    // },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'GCP',
      icon: SiGooglecloud,
    },
    {
      name: 'CPanel',
      icon: SiCpanel,
    },
    {
      name: 'Rancher',
      icon: SiRancher,
    },
    {
      name: 'GitlabCICD',
      icon: SiGitlab,
    },
    {
      name: 'Buildkite',
      icon: BsQuestionSquare,
    },
  ],
  'ui frameworks': [
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },

    {
      name: 'MaterialUI',
      icon: SiMui,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    // {
    //   name: 'ChakraUI',
    //   icon: BsQuestionSquare,
    // },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    // {
    //   name: 'Jet Brains IDE',
    //   icon: SiJetbrains,
    // },
    // {
    //   name: 'SourceTree',
    //   icon: FaSourcetree,
    // },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
  ],
  games: [
    {
      name: 'Unity3D',
      icon: SiUnity,
    },
  ],
  desktop: [
    // {
    //   name: 'Windows Forms, WPF',
    //   icon: SiMicrosoft,
    // },
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
