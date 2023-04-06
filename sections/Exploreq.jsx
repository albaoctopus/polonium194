'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import Marketnew from '../components/Marketnew';
import WorldOne from '../components/WorldOne';
import WorldTwo from '../components/WorldTwo';
import WorldThree from '../components/WorldThree';

const Exploreq = () => {
  const [active, setActive] = useState('world-2');
  const [activeWorld, setActiveWorld] = useState(null);

  const handleClick = (id) => {
    switch (id) {
      case 'world-1':
        setActiveWorld(<WorldOne />);
        break;
      case 'world-2':
        setActiveWorld(<WorldTwo />);
        break;
      case 'world-3':
        setActiveWorld(<WorldThree />);
        break;
      default:
        setActiveWorld(null);
    }
    setActive(id);
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| NFT" textStyles="text-center text-[32px] text-white" />
        <TitleText
          title={<>Выбери свою свободу<br className="md:block hidden" /> и моё NFT</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={handleClick}
            />
          ))}
        </div>
      </motion.div>
      <Marketnew activeWorld={activeWorld} />
    </section>
  );
};




export default Exploreq;
