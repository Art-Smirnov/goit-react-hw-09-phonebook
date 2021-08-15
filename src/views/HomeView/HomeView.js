import { useEffect, useRef } from 'react';
import { TimelineLite } from 'gsap/all';

import { textAnimation } from '../../helpers/animate-text';
import './HomeView.scss';

export default function HomeView() {
  let tittleTextRef = useRef(null);
  let titleRef = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    textAnimation(tittleTextRef);
  }, []);

  useEffect(() => {
    const t1 = new TimelineLite({ delay: 0.3 });

    t1.fromTo(titleRef, 1, { y: -500 }, { y: 0 }).fromTo(
      textRef,
      1,
      {
        transform: 'scale(0.1)',
        opacity: 0,
      },
      {
        transform: 'scale(1)',
        opacity: 1,
      },
    );
  }, []);
  return (
    <>
      <h1 className="title" ref={el => (titleRef = el)}>
        <div ref={el => (tittleTextRef = el)}>Home Page</div>
      </h1>
      <p className="home-page-info" ref={el => (textRef = el)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        quidem quod corporis rem, vero cupiditate repellendus nobis iste est
        ullam quae? Possimus ea tempore aliquam consectetur saepe dolor in quod
        sunt autem totam nihil, repudiandae tenetur quam veniam similique sequi
        quia aut et, sapiente mollitia. Quia placeat reiciendis numquam
        deleniti.
      </p>
    </>
  );
}
