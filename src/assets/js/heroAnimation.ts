import gsap from 'gsap';

import { getDOMElement } from './utilities';

export default function animateHero() {
  const homePageElem = getDOMElement('page-home');

  if (homePageElem) {
    const heroTimeline = gsap.timeline({
      defaults: {
        ease: 'power4.inOut',
        duration: 2
      }
    });

    heroTimeline
      .fromTo(
        '.page__section-hero',
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 2.2
        }
      )
      .fromTo(
        '.hero__illustration',
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          x: '-40%',
          opacity: 0.75
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          x: '0%',
          opacity: 1
        },
        '-=2.1'
      )
      .fromTo(
        '.hero__title',
        {
          clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          duration: 1.5
        },
        '-=1.5'
      )
      .fromTo(
        '.hero__tag-line',
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          duration: 1.5
        },
        '-=1.5'
      )
      .fromTo(
        '.hero__cta',
        {
          clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          duration: 1.5
        },
        '-=1.5'
      );
  }
}
