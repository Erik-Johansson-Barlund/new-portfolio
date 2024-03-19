import { motion } from 'framer-motion'

function Transition ({ children }: any): any {
  return (
    <>
      {children}
      <motion.div
        className='slide-in fixed top-0 left-0 w-screen h-screen bg-zinc-900 origin-bottom'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className='slide-out fixed top-0 left-0 w-screen h-screen bg-zinc-900 origin-top'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default Transition
