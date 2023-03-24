import { motion } from 'framer-motion';

import styles from '../styles';

const Marketnew = ({ activeWorld }) => {
  return (
    <motion.div
      className={`${styles.innerWidth} mx-auto`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {activeWorld && (
        <div className="mt-10">
          {activeWorld}
        </div>
      )}
    </motion.div>
  );
};

export default Marketnew;