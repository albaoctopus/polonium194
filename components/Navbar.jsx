'use client';

import { motion } from 'framer-motion';
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        POLONIUM 194
      </h2>
      <div>
      <ConnectWallet
      accentColor="#0284c7"
      />

    </div>
    </div>
  </motion.nav>
);

export default Navbar;
