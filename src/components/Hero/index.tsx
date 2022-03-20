import React from 'react'
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

// props
type HeroProps = {
  content?: string;
  image?: IGatsbyImageData;
  title: string;
};

const Hero = ({ image, title, content }: HeroProps) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)

export default Hero
