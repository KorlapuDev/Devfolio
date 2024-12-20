import { memo, useState } from 'react'
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { simpleOpacity } from 'config/animations'

const Logo = () => {
  const { colorMode } = useColorMode()
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const MotionImage = motion(Image)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (

      <AnimatePresence>
        <Link href="/" passHref>
          {colorMode === ThemeMode.Dark ? (
            
              <MotionImage
                className={!isMobile ? styles.logo : ''}
                width={!isMobile ? '10%' : '17%'}
                objectFit="cover"
                src="./DEVlogo.png"
                alt="Abhi dev Logo"
                fallbackSrc="./DEVlogo.jpg"
                variants={simpleOpacity}
                initial="initial"
                animate={isLogoLoaded && 'animate'}
                onLoad={() => setLogoLoaded(true)}
                zIndex={2}
              />
        
          ) : (
            <MotionImage
              className={!isMobile ? styles.logo : ''}
              objectFit="cover"
              width={!isMobile ? '10%' : '17%'}
              src="./DEVlogo.png"
              fallbackSrc="./DEVlogo.jpg"
              alt="Abhi Logo"
              variants={simpleOpacity}
              initial="initial"
              animate={isLogoLoaded && 'animate'}
              onLoad={() => setLogoLoaded(true)}
              zIndex={2}
            />
          )}
        </Link>
      </AnimatePresence>

  )
}

export default memo(Logo)
