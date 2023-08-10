//@ts-expect-error
import { motion } from 'framer-motion';

const loadingContainer = {
  width: '2rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const loadingCircle = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: 'black',
  borderRadius: '0.25rem',
};

const loadingCircleWhite = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: 'white',
  borderRadius: '0.25rem',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '50%',
  },
  end: {
    y: '150%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const DotLoader = ({ color = 'black' }) => {
  const style = color === 'black' ? loadingCircle : loadingCircleWhite;
  return (
    <motion.div style={loadingContainer} variants={loadingContainerVariants} initial='start' animate='end'>
      <motion.span style={style} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <motion.span style={style} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <motion.span style={style} variants={loadingCircleVariants} transition={loadingCircleTransition} />
    </motion.div>
  );
};

export default DotLoader;
