import { Variants } from 'framer-motion'

export const RevealAnimation: Variants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1
    }
  }
}
