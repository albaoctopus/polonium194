import Marketnew from "../components/Marketnew";
import WorldOne from "../components/WorldOne";

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { StartSteps } from "../components";



export const exploreWorlds = [
{
id: 'world-1',
imgUrl: '/planet-01.png',
title: 'МЕДИТАЦИЯ',
titlet: 'ОБЕРЕГ',

},
{
id: 'world-2',
imgUrl: '/planet-02.png',
title: 'ВЕЧНОЕ',
titlet: 'ФОКУС',

},
{
id: 'world-3',
imgUrl: '/planet-03.png',
title: 'ПОЛОНИУМ КЛУБ',
titlet: 'УКРАШЕНИЕ',

},

];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
        'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'Создание полноценного NFT маркетплейса',
   // subtitle:
    //    'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: 'Выпуск фан токенов',
   // subtitle:
   //     'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'Запуск ДАО',
    //subtitle:
     //   'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
  {
    imgUrl: '/planet-09.png',
    title: 'Начало строительства города мечты в Метавселенной',
    //subtitle:
    //    'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];
