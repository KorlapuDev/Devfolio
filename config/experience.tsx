import { Link } from '@chakra-ui/react'

export type Company = 'LogiXHunt'| 'Lentra'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  LogiXHunt: {
    name: 'Logi X Hunt',
    longName: 'Deloitte Consulthing Phils. Delivery Center',
    subDetail: 'Consulthing Phils. Delivery Center',
    url: 'https://www.logixhunt.com/',
    position: 'Full Stack Developer || MERN Stack Developer',
    duration: 'MAR 2024 - Present',
    logo: {
      light: '/worked_at_logos/Logixhunt/logix-logo.png',
      dark: '/worked_at_logos/Logixhunt/logix-logo.png',
    },
    roles: [
      <>
      Rebuilt an authentication system on a prebuilt application, increasing the web application’s security by 25% using
      an OTP system, JWT, hashing techniques, sessions, and cookies. Optimized rendering and re-rendering by 15%.Wrote numerous unit tests for Backend APIs using Mocha and Chai, achieving a test coverage of 87%.
      Played an active role in React and Nodejs project, contributing to key decisions that resulted in 15% improvement
      in project outcomes.Implementation of payment gateway and mailing system, SMS WhatsApp system implementation.
      </>
    ],
  },
  Lentra: {
    name: 'Lentra',
    longName: 'Scentregroup Limited AU',
    subDetail: 'via Prosource BPO',
    url: 'https://lentra.ai/',
    position: 'Software Engineer',
    duration: 'Feb 2020 - Sep 2021',
    logo: {
      light: '/worked_at_logos/lentra/logo-new.svg',
      dark: '/worked_at_logos/lentra/logo-new.svg',
    },
    roles: [
      <>
       Optimized application functionality by implementing business logic and queries, achieving a 20% improvement. Optimized data fetching, reading, updating, and deleting operations through API development, leading to a more responsive and user-friendly application. 
      </>,
      <>
        Developed and implemented a secure authentication and authorization system using Javascript, HTML5, CSS3, Typescript, Node.JS, Express.JS, and React.JS, reducing security vulnerabilities by 15%. 
        Actively participated in MLOps and Transaction Mining projects, ensuring high code quality and achieving a 10% reduction in process execution time. 
      </>,
    ],
  },
  
}

export const ExperiencesList = [
  Experiences.LogiXHunt,
  Experiences.Lentra,

]
