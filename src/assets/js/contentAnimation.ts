import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { getDOMElement } from './utilities';

export default function animateContent() {
  gsap.registerPlugin(ScrollTrigger);

  const mainElem = getDOMElement('main');

  if (mainElem) {
    const homeContentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.page__section-about',
        start: 'top 90%',
        end: 'top 5%',
        scrub: 4
      },
      defaults: {
        ease: 'power4.inOut',
        duration: 2
      }
    });

    homeContentTimeline
      .fromTo(
        '#main .grid__item',
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          stagger: 1.75,
          duration: 8
        }
      );
  }
}
