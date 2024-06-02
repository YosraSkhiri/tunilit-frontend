import {
  useEffect,
  useRef,
} from 'react'

import appleBooksIllusBg from "/images/appleBooksBg.webp"
import certifIllusBg from "/images/certifBg.webp"
import globeIllusBg from "/images/globeBg.webp"
import openBookIllusBg from "/images/openBookBg.webp"
import { Title } from '~/components'

import {
  AppleBooksIllus,
  CertifIllus,
  GlobeIllus,
  OpenBookIllus,
} from "../Illustrations"
import styles from './HeroTitle.module.scss'

const HeroTitle = () => {

  const openBookSVGRef = useRef<SVGSVGElement>(null)
  const openBookIMGRef = useRef<HTMLImageElement>(null)

  const certifSVGRef = useRef<SVGSVGElement>(null)
  const certifIMGRef = useRef<HTMLImageElement>(null)

  const globeSVGRef = useRef<SVGSVGElement>(null)
  const globeIMGRef = useRef<HTMLImageElement>(null)

  const appleBooksSVGRef = useRef<SVGSVGElement>(null)
  const appleBooksIMGRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      const LIMIT = 10
      const tx = (x - 0.5) * 2 * LIMIT
      const ty = (y - 0.5) * 2 * LIMIT;

      [
        {
          svg: openBookSVGRef,
          img: openBookIMGRef,
        },
        {
          svg: certifSVGRef,
          img: certifIMGRef,
        },
        {
          svg: globeSVGRef,
          img: globeIMGRef,
        },
        {
          svg: appleBooksSVGRef,
          img: appleBooksIMGRef,
        },
      ].forEach((illus, i) => {
        const {
          img,
          svg,
        } = illus

        if (i % 2 === 0) {
          if (svg.current) {
            svg.current.style.willChange = 'transform'
            svg.current.style.transformStyle = 'preserve-3d'
            svg.current.style.transform =
              `
            translate3d(${tx / 2}px, ${ty / 2}px, 0) 
            rotateY(${tx * 1.1}deg) 
            rotateX(${-ty * 1.1}deg)
            `
          }

          if (img.current) {
            img.current.style.willChange = 'transform'
            img.current.style.transformStyle = 'preserve-3d'
            img.current.style.transform =
              `
            translate3d(${-tx / 1.2}px, ${-ty / 1.2}px, 0) 
            rotateY(${tx * 1.1}deg) 
            rotateX(${-ty * 1.1}deg)
            `
          }
        } else {
          if (svg.current) {
            svg.current.style.willChange = 'transform'
            svg.current.style.transformStyle = 'preserve-3d'
            svg.current.style.transform =
              `
            translate3d(${-tx / 2}px, ${-ty / 2}px, 0) 
            rotateY(${-tx * 1.1}deg) 
            rotateX(${ty * 1.1}deg)
            `
          }

          if (img.current) {
            img.current.style.willChange = 'transform'
            img.current.style.transformStyle = 'preserve-3d'
            img.current.style.transform =
              `
            translate3d(${tx / 1.2}px, ${ty / 1.2}px, 0) 
            rotateY(${-tx * 1.1}deg) 
            rotateX(${ty * 1.1}deg)
            `
          }
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={styles['header__title']}>
      <Title />
      <div className={`${styles['header-illus']} ${styles['book-illus']}`}>
        <OpenBookIllus
          className={styles['illus']}
          ref={openBookSVGRef}
        />
        <img
          alt="background image"
          className={styles['img']}
          ref={openBookIMGRef}
          src={openBookIllusBg}
        />
      </div>
      <div className={`${styles['header-illus']} ${styles['certif-illus']}`}>
        <CertifIllus
          className={styles['illus']}
          ref={certifSVGRef}
        />
        <img
          alt="background image"
          className={styles['img']}
          ref={certifIMGRef}
          src={certifIllusBg}
        />
      </div>
      <div className={`${styles['header-illus']} ${styles['globe-illus']}`}>
        <GlobeIllus
          className={styles['illus']}
          ref={globeSVGRef}
        />
        <img
          alt="background image"
          className={styles['img']}
          ref={globeIMGRef}
          src={globeIllusBg}
        />
      </div>
      <div className={`${styles['header-illus']} ${styles['apple-books-illus']}`}>
        <AppleBooksIllus
          className={styles['illus']}
          ref={appleBooksSVGRef}
        />
        <img
          alt="background image"
          className={styles['img']}
          ref={appleBooksIMGRef}
          src={appleBooksIllusBg}
        />
      </div>
    </div>
  )
}

export default HeroTitle
