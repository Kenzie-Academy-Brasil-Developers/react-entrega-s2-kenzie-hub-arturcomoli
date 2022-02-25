import { motion } from "framer-motion";

const BackgroundAnimation = ({ ...rest }) => {
  return (
    <motion.section
      {...rest}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.75,
      }}
    ></motion.section>
  );
};
export default BackgroundAnimation;
