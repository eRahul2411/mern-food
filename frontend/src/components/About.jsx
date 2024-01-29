import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
   <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we`re serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Assumenda temporibus,
                     aliquid commodi repellendus reprehenderit facere nisi.
                      Cumque perferendis atque
                      recusandae similique consequatur commodi ad, beatae ipsa soluta voluptatibus, aspernatur eligendi impedit quam nostrum
                       accusantium, optio at iure ipsum sint blanditiis veniam. Eum reprehenderit fugiat, doloribus dolorem voluptatem est maxime vel?
                </p>
                <Link to={"/"} >Explore Menu <span>
                <HiOutlineArrowNarrowRight/>
                </span>
                </Link>

            </div>
            <div className="banner">
                <img src="/about.png" alt="" className="" />
            </div>

        </div>
   </section>
  );
};

export default About
