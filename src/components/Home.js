import React from 'react';
import img from '../assets/2.png'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
export default function Home() {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1> TechStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div >

            <div className='home2'>
                <img src={img} alt="graphics" />
                <div>
                    <p>
                        We are your one and o nly solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className='home3' id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, earum cumque aliquam laudantium, officiis quam eius tempore temporibus dolor iste voluptate reiciendis deleniti laborum nesciunt assumenda doloribus ea voluptas autem ducimus praesentium asperiores? Sequi unde aut inventore voluptatem ut, molestias atque ducimus. Enim tempore similique sint architecto eos labore doloremque modi, quod ut velit assumenda dicta beatae et quo facere repellat recusandae adipisci! Officia ipsam doloribus sequi reprehenderit amet tempora, veritatis inventore exercitationem neque illum numquam explicabo illo harum facilis sit maxime fugiat accusantium fuga velit assumenda consectetur voluptate. Reiciendis, libero vero possimus omnis deleniti tempore! Laboriosam non repellendus numquam.
                    </p>
                </div>
            </div>

            <div className='home4' id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay: "0.1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div >


        </>
    );
}
