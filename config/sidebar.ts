import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Github',
    href: 'https://github.com/KorlapuDev',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/korlapu-abhishek-b0968a233',
    icon: FaLinkedin,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/Abhi_Dev_1372?t=ghYZb4eal1bQfnR9Qg9M7w&s=09',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/__abhi__1372__/',
    icon: FaInstagram,
  },

  // {
  //   label: 'StackOverflow',
  //   href: 'https://stackoverflow.com/users/3867490/keysl',
  //   icon: FaStackOverflow,
  // },
  // {
  //   label: 'Youtube',
  //   href: 'https://www.youtube.com/channel/UCV-MiUVsKJrKJKKfUK58nhg',
  //   icon: FaYoutube,
  // },

  {
    label: 'Dev.to',
    href: 'https://dev.to/abhishek_korlapu_b20c921c',
    icon: FaDev,
  },
]
