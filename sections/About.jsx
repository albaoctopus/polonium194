'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Про Polonium194" textStyles="text-center text-[32px] text-white" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Здравствуйте, <span className="font-extrabold text-white">Друзья!</span> С радостью предлагаю вам свой NFT-проект  <span className="font-extrabold text-white">Polonium194</span>.{' '}
        {' '}
        В прошлом я занимался строительством в{' '}
        <span className="font-extrabold text-white">реальном мире</span>, но теперь пришло время строить в
        {' '}
        <span className="font-extrabold text-white">Метавселенной</span>. И не только здания. Давайте вместе построим <span className="font-extrabold text-white">новые города</span>. 
        Давайте построим <span className="font-extrabold text-white">новое общество</span>. По законам <span className="font-extrabold text-white">Свободы и Справедливости</span>. Начнем с NFT. Проект представлен тремя разделами. 
        В <span className="font-extrabold text-white">"Медитациях"</span> вы обнаружите НФТ-обереги, наполненные энергией моих слов. 
        В <span className="font-extrabold text-white">"Вечности"</span> вы найдете бизнес-стратегии и фокус на главных моментах. 
        Украшение проекта - <span className="font-extrabold text-white">клуб Polonium194</span>. Вступайте в клуб и будем вместе двигаться к <span className="font-extrabold text-white">цели!</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
