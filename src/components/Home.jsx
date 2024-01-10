import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'
import shoe4 from '../assets/shoe4.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import { FaStar } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

// import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'

import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'

import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'
const Home = () => {
    const[close , setClose] = useState(false)
    const [img, setImg] = useState(p1)
    const [img2, setImg2] = useState(s1)
    const [img3, setImg3] = useState(b1)

    const [number, setNumber] = useState(1)
    // console.log(number);
    const arr = [
        {
            id: 1,
            img: shoe1
        },
        {
            id: 2,
            img: shoe2
        },
        {
            id: 3,
            img: shoe3
        },
        {
            id: 4,
            img: shoe4
        },
    ]
    const boxvariant = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2
            }
        }
    }
    const listvariant ={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
        }
    }
    return (
        <>
            <div className='nav xl:flex xl:justify-center sticky bg-white w-full top-0 z-20'>
                <div className=' py-3 lg:py-4 flex justify-between items-center px-3 xl:w-[80rem]'>
                    <div className="logo">
                        <h1 className=' font-medium text-2xl'>LOGO</h1>
                    </div>
                    <IoIosMenu onClick={()=>setClose(true)} className=' text-2xl lg:hidden' />
                    <ul className='hidden lg:flex items-center text-lg font-medium text-gray-400'>
                        <li className=' mr-4'>HOME</li>
                        <li className=' mr-4'>PRODUCT</li>
                        <li className=' mr-4'>FEATURED</li>
                        <li className=' mr-4'>BLOG</li>
                        <Link to='/shoe'><li className=' mr-4'>SHOP</li>
                        </Link>
                    </ul>
                    <ul className='hidden lg:flex text-lg font-medium'>
                        <li className=' mr-3' ><FaHeart /></li>
                        <li className=' mr-3' ><FaShoppingCart /></li>
                        <li className=' mr-3'><IoPerson /></li>
                    </ul>
                </div>

            </div>
            <div className=' xl:flex xl:justify-center'>
                <div className=' flex justify-between items-center  px-3 py-4 sm:py-0 sm:my-16 lg:mt-6  xl:w-[80rem]'>
                    <div onClick={number > 1 ? () => setNumber(number - 1) : null} className="arrowleft cursor-pointer hover:bg-orange-400 border-2 px-1 py-1 border-gray-400 border-solid rounded-full">
                        <IoIosArrowBack className=' text-3xl' />
                    </div>

                    {
                        arr.map((i) => i.id === number && <div className="  mincontainer flex flex-col sm:flex-row mx-1">
                            <motion.div
                                initial={{
                                    x: '-60vw',
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}

                                transition={{
                                    type: "spring",
                                    duration: 1.5
                                }}
                                className='  description sm:w-[27rem] xl:w-[30rem]  sm:flex sm:flex-col sm:justify-center sm:items-start sm:mx-2 '>
                                <h2 className=' font-medium text-lg  text-red-400 lg:text-3xl'>NIKE SPORT SHOES</h2>
                                <h1 className=' text-3xl font-medium lg:text-5xl '>NIKE METCON SHOES</h1>
                                <p className='my-3 lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi velit sunt magnam quod hic molestias corporis dolor, omnis praesentium quo persp</p>
                                <button className='font-medium border-2 border-solid border-black px-5 py-2'>ADD TO CART</button>
                            </motion.div>
                            <motion.div
                                initial={{
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1
                                }}

                                transition={{
                                    type: "spring",
                                    delay: 0.6,
                                    duration: 1.5
                                }}
                                className="img mt-4 sm:mt-0 ">
                                <img src={i.img} alt="" className='mainimg'/>
                            </motion.div>
                        </div>)
                    }


                    <div onClick={number < 4 ? () => setNumber(number + 1) : null} className="arrowright cursor-pointer hover:bg-orange-400 px-1 py-1 border-2 border-gray-400 border-solid rounded-full">
                        <IoIosArrowForward className=' text-3xl' />
                    </div>
                </div>
            </div>
            <div className=' xl:flex xl:justify-center mt-7 '>
                <div className="latestproducts xl:w-[80rem] flex flex-col items-center px-3 ">
                    <h1 className='text-xl font-medium sm:text-2xl lg:text-3xl '>
                        LATEST
                        <span className=' ml-1 text-orange-500 '>PRODUCTS</span>
                    </h1>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-4 md:grid-cols-3 gap-y-2 mt-3'>
                        <div className='relative round border-gray-400 border-2 border-solid rounded-md px-5 lg:px-7 py-10  bg-[#80808012]'>
                            <img src={pic1} alt="" className='img' />
                            <div className="info flex flex-col items-center">
                                <h1 className=' font-medium text-lg'>NIKE SHOES</h1>
                                <p>$200 <span className=' line-through'>$499</span></p>
                            </div>
                            <ul className='box absolute top-2 left-0 opacity-0'>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaHeart className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaShare className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaRegEye className=' text-2xl' /></li>
                            </ul>
                        </div>
                        <div className='relative round border-gray-400 border-2 border-solid rounded-md px-5 lg:px-7 py-10  bg-[#80808012]'>
                            <img src={pic2} alt="" className='img' />
                            <div className="info flex flex-col items-center">
                                <h1 className=' font-medium text-lg'>NIKE SHOES</h1>
                                <p>$200 <span className=' line-through'>$499</span></p>
                            </div>
                            <ul className='box absolute top-2 left-0 opacity-0'>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaHeart className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaShare className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaRegEye className=' text-2xl' /></li>
                            </ul>
                        </div>
                        <div className='relative round border-gray-400 border-2 border-solid rounded-md px-5 lg:px-7 py-10  bg-[#80808012]'>
                            <img src={pic5} alt="" className='img' />
                            <div className="info flex flex-col items-center">
                                <h1 className=' font-medium text-lg'>NIKE SHOES</h1>
                                <p>$200 <span className=' line-through'>$499</span></p>
                            </div>
                            <ul className='box absolute top-2 left-0 opacity-0'>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaHeart className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaShare className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaRegEye className=' text-2xl' /></li>
                            </ul>
                        </div>
                        <div className='relative round border-gray-400 border-2 border-solid rounded-md px-5 lg:px-7 py-10  bg-[#80808012]'>
                            <img src={pic2} alt="" className='img' />
                            <div className="info flex flex-col items-center">
                                <h1 className=' font-medium text-lg'>NIKE SHOES</h1>
                                <p>$200 <span className=' line-through'>$499</span></p>
                            </div>
                            <ul className='box absolute top-2 left-0 opacity-0'>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaHeart className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaShare className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaRegEye className=' text-2xl' /></li>
                            </ul>
                        </div>
                        <div className='relative round border-gray-400 border-2 border-solid rounded-md px-5 lg:px-7 py-10 bg-[#80808012] '>
                            <img src={pic5} alt="" className='img' />
                            <div className="info flex flex-col items-center">
                                <h1 className=' font-medium text-lg'>NIKE SHOES</h1>
                                <p>$200 <span className=' line-through'>$499</span></p>
                            </div>
                            <ul className='box absolute top-2 left-0 opacity-0'>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaHeart className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaShare className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaRegEye className=' text-2xl' /></li>
                            </ul>
                        </div>
                        <div className='relative round border-gray-400 border-2 border-solid rounded-md px-5 lg:px-7 py-10 bg-[#80808012] '>
                            <img src={pic6} alt="" className='img' />
                            <div className="info relative z-10 flex flex-col items-center">
                                <h1 className=' font-medium text-lg'>NIKE SHOES</h1>
                                <p>$200 <span className=' line-through'>$499</span></p>
                            </div>
                            <ul className='box absolute top-2 left-0 opacity-0'>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaHeart className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaShare className=' text-2xl' /></li>
                                <li className=' border-black border-2 border-solid rounded-md px-1 py-1 mb-2'><FaRegEye className=' text-2xl' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' xl:flex xl:justify-center mt-7 md:mt-16'>
                <div className=' xl:w-[80rem] flex flex-col items-center px-3'>
                    <h1 className='text-xl font-medium sm:text-2xl lg:text-3xl '>
                        NEW
                        <span className=' ml-1 text-orange-500 '>PRODUCTS</span>
                    </h1>
                    <div className='shoeitems'>
                        <div className='item1  border-gray-400 border-2 border-solid px-3 py-5 md:flex rounded-md lg:px-5 lg:py-3 mt-5 bg-[#80808012] '>
                            <ul className='flex md:flex-col border-gray-400 border-2 border-solid'>
                                <li onClick={() => setImg(p1)} className=' cursor-pointer hover:bg-orange-400 border-t-0 border-l-0 border-b-0 border-r-2 sm:border-r-0 border-gray-400 sm:border-b-2 border-solid  px-2 py-2'><img src={p1} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg(p2)} className=' cursor-pointer hover:bg-orange-400  border-t-0 border-l-0  border-b-0 sm:border-r-0 border-gray-400 border-2 md:border-b-2 border-solid  px-2 py-2'><img src={p2} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg(p3)} className='cursor-pointer hover:bg-orange-400  border-t-0 border-l-0 border-b-0 sm:border-r-0 border-gray-400 border-2 md:border-b-2 border-solid  px-2 py-2'><img src={p3} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg(p4)} className='cursor-pointer hover:bg-orange-400  px-2 py-2'><img src={p4} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                            </ul>
                            <img src={img} alt="" className='md:mx-3 mt-3 md:mt-0 w-full md:w-[15rem] lg:w-[21rem] xl:w-[25rem] xl:h-[21rem]' />
                            <div className="desc mt-3 md:mt-0 lg:w-[46rem] xl:w-[44rem]">
                                <h1 className=' font-medium text-lg lg:text-3xl'>NIKE MECTON SHOES</h1>
                                <ul className='flex my-2 lg:text-lg'>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                </ul>
                                <p className='lg:text-lg lg:my-2 text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laborum beatae sint ratione molestiae a fuga cumque? Porro, ex iste.</p>
                                <p className=' font-medium my-2 lg:text-lg'>$200 <span className=' line-through'>$499</span></p>

                                <button className='lg:text-xl font-medium border-black rounded-md border-solid border-2 px-4 py-1 mt-2'>ADD TO CART</button>
                            </div>
                        </div>
                        <div className='item1  border-gray-400 border-2 border-solid px-3 py-5 md:flex rounded-md lg:px-5 lg:py-3 mt-5 bg-[#80808012]'>
                            <ul className='flex md:flex-col border-gray-400 border-2 border-solid'>
                                <li onClick={() => setImg2(s1)} className='cursor-pointer hover:bg-orange-400  border-t-0 border-l-0 border-b-0 border-r-2 sm:border-r-0 border-gray-400 sm:border-b-2 border-solid  px-2 py-2'><img src={s1} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg2(s2)} className='cursor-pointer hover:bg-orange-400  border-t-0 border-l-0  border-b-0 sm:border-r-0 border-gray-400 border-2 md:border-b-2 border-solid  px-2 py-2'><img src={s2} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg2(s3)} className='cursor-pointer hover:bg-orange-400  border-t-0 border-l-0 border-b-0 sm:border-r-0 border-gray-400 border-2 md:border-b-2 border-solid  px-2 py-2'><img src={s3} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg2(s4)} className='cursor-pointer hover:bg-orange-400  px-2 py-2'><img src={s4} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                            </ul>
                            <img src={img2} alt="" className='md:mx-3 mt-3 md:mt-0 w-full md:w-[15rem] lg:w-[21rem] xl:w-[25rem] xl:h-[21rem]' />
                            <div className="desc mt-3 md:mt-0 lg:w-[46rem] xl:w-[44rem]">
                                <h1 className=' font-medium text-lg lg:text-3xl'>NIKE MECTON SHOES</h1>
                                <ul className='flex my-2 lg:text-lg'>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                </ul>
                                <p className='lg:text-lg lg:my-2 text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laborum beatae sint ratione molestiae a fuga cumque? Porro, ex iste.</p>
                                <p className=' font-medium my-2 lg:text-lg'>$200 <span className=' line-through'>$499</span></p>

                                <button className='lg:text-xl font-medium border-black rounded-md border-solid border-2 px-4 py-1 mt-2'>ADD TO CART</button>
                            </div>
                        </div>
                        <div className='item1  border-gray-400 border-2 border-solid px-3 py-5 md:flex rounded-md lg:px-5 lg:py-3 mt-5 bg-[#80808012]'>
                            <ul className='flex md:flex-col border-gray-400 border-2 border-solid'>
                                <li onClick={() => setImg3(b1)} className='cursor-pointer hover:bg-orange-400  border-t-0 border-l-0 border-b-0 border-r-2 sm:border-r-0 border-gray-400 sm:border-b-2 border-solid  px-2 py-2'><img src={b1} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg3(b2)} className='cursor-pointer hover:bg-orange-400  border-t-0 border-l-0  border-b-0 sm:border-r-0 border-gray-400 border-2 md:border-b-2 border-solid  px-2 py-2'><img src={b2} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg3(b3)} className='cursor-pointer hover:bg-orange-400  border-t-0 border-l-0 border-b-0 sm:border-r-0 border-gray-400 border-2 md:border-b-2 border-solid  px-2 py-2'><img src={b3} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                                <li onClick={() => setImg3(b4)} className='cursor-pointer hover:bg-orange-400  px-2 py-2'><img src={b4} alt="" className=' md:w-32 xl:w-[5.5rem]' /></li>
                            </ul>
                            <img src={img3} alt="" className='md:mx-3 mt-3 md:mt-0 w-full md:w-[15rem] lg:w-[21rem] xl:w-[25rem] xl:h-[21rem]' />
                            <div className="desc mt-3 md:mt-0 lg:w-[46rem] xl:w-[44rem]">
                                <h1 className=' font-medium text-lg lg:text-3xl'>NIKE MECTON SHOES</h1>
                                <ul className='flex my-2 lg:text-lg'>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500' /></li>
                                </ul>
                                <p className='lg:text-lg lg:my-2 text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laborum beatae sint ratione molestiae a fuga cumque? Porro, ex iste.</p>
                                <p className=' font-medium my-2 lg:text-lg'>$200 <span className=' line-through'>$499</span></p>
                                <button className='lg:text-xl font-medium border-black rounded-md border-solid border-2 px-4 py-1 mt-2'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' xl:flex xl:justify-center'>
                <div className=' xl:w-[80rem] px-3 flex flex-col items-center mt-7 md:mt-16'>
                    <h1 className='font-medium text-2xl lg:text-3xl'>
                        TEAM <span className=' text-orange-500 '>WEBLOG</span>
                    </h1>
                    <div className=' grid grid-cols-1 sm:grid-cols-3 gap-x-2 sm:gap-x-4'>
                        <div className='card bg-[#80808012] border-gray-400 border-2 border-solid rounded-md py-4 px-2 mt-5'>
                            <div className=' flex flex-col items-center'>
                                <img src={person1} alt="" className=' border-gray-400 border-2 border-solid rounded-full w-20 h-20 lg:w-32 lg:h-32' />
                                <p className='lg:px-4 text-center lg:text-xl my-3 text-gray-500 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, libero cum. Totam labore ipsum doloremque provident atque repellendus porro omnis possimus, itaque nostrum eaque vel.</p>
                                <ul className='flex my-2 lg:text-lg'>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                </ul>
                            </div>

                        </div>
                        <div className='card bg-[#80808012] border-gray-400 border-2 border-solid rounded-md py-4 px-2 mt-5'>
                            <div className=' flex flex-col items-center'>
                                <img src={person2} alt="" className=' border-gray-400 border-2 border-solid rounded-full w-20 h-20 lg:w-32 lg:h-32' />
                                <p className='lg:px-4 text-center lg:text-xl my-3 text-gray-500 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, libero cum. Totam labore ipsum doloremque provident atque repellendus porro omnis possimus, itaque nostrum eaque vel.</p>
                                <ul className='flex my-2 lg:text-lg'>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                </ul>
                            </div>

                        </div>
                        <div className='card bg-[#80808012] border-gray-400 border-2 border-solid rounded-md py-4 px-2 mt-5'>
                            <div className=' flex flex-col items-center'>
                                <img src={person3} alt="" className=' border-gray-400 border-2 border-solid rounded-full w-20 h-20 lg:w-32 lg:h-32' />
                                <p className='lg:px-4 text-center lg:text-xl my-3 text-gray-500 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, libero cum. Totam labore ipsum doloremque provident atque repellendus porro omnis possimus, itaque nostrum eaque vel.</p>
                                <ul className='flex my-2 lg:text-lg'>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                    <li className=' mr-2'><FaStar className=' text-yellow-500 text-lg' /></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=' xl:flex xl:justify-center mt-7 md:mt-16 '> 
              <div className="grid grid-cols-2 md:grid-cols-5 mt-7  xl:w-[80rem] px-3">
                <div>
                <h1 className=' font-medium text-lg'>PRODUCTS</h1>
                 <ul className=' text-gray-400 mt-5'>
                    <li className=' mb-2'>Footwear</li>
                    <li className=' mb-2'>Clothing</li>
                    <li className=' mb-2'>Acessories</li>
                 </ul>
                 <ul  className=' text-gray-400 mt-5'>
                    <li className=' mb-2'>Outlet-sale</li>
                    <li className=' mb-2'>New Arrivals</li>
                    <li className=' mb-2' >Special Offer</li>
                    <li lassName=' mb-2'>Flat 20% discount</li>
                 </ul>
                </div>
                <div className=''>
                <h1 className=' font-medium text-lg'>SPORTS</h1>
                <ul  className=' text-gray-400 mt-5'>
                  <li className=' mb-2'>Cricket</li>
                  <li className=' mb-2'>Football</li>
                  <li className ='mb-2'>Running</li>
                  <li className=' mb-2'>Gym</li>
                  <li className ='mb-2'>Tennis</li>
                  <li className ='mb-2'>Outdoor</li>
                  <li className=' mb-2'>Basketball</li>
                  <li className ='mb-2'>Swimming</li>
                  <li className ='mb-2'>Skating</li>
                </ul>
                </div>
                <div className=' mt-5 md:mt-0'>
                <h1 className=' font-medium text-lg'>COLLECTIONS</h1>
                <ul  className=' text-gray-400 mt-5'>
                  <li className=' mb-2'>Ultraboost</li>
                  <li className=' mb-2'>Superstar</li>
                  <li className ='mb-2'>NMD</li>
                  <li className=' mb-2'>Stan Smith</li>
                  <li className ='mb-2'>Sustainablity</li>
                  <li className ='mb-2'>Predator</li>
                  <li className=' mb-2'>Partey</li>
                  <li className ='mb-2'>adicolor</li>
                </ul>
                </div>
                <div className=' mt-5 md:mt-0'>
                <h1 className=' font-medium text-lg'>SUPPPORT</h1>
                <ul  className=' text-gray-400 mt-5'>
                  <li className=' mb-2'>Help</li>
                  <li className=' mb-2'>Customer Services</li>
                  <li className ='mb-2'>Returns & Exchanges</li>
                  <li className=' mb-2'>Shipping</li>
                  <li className ='mb-2'>Order Tracker</li>
                  <li className ='mb-2'>Store Locator</li>
                  <li className=' mb-2'>Running Shoe Finder</li>
                  <li className ='mb-2'>Tersms & Conditions</li>
                </ul>
                </div>
                <div className=' mt-5 md:mt-0'>
                <h1 className=' font-medium text-lg'>FOLLOW US</h1>
                <FaInstagramSquare  className=' text-2xl my-3'/>
                </div>
              </div>
            </div>
            <div className=' xl:flex xl:justify-center'>
            <div className=' xl:w-[80rem] mt-4 flex flex-col items-center ont-medium text-gray-400 py-6'>
                <ul className='flex justify-center'>
                    <li className=' mr-3'>Privacy |</li>
                    <li className=' mr-3'>Terms |</li>
                    <li className=' mr-3'>Support</li>
                </ul>
                <p className=' mt-3'>Since 20201 Indian Private Limited</p>
              </div>
            </div>
          {close &&  <div className='forphone flex justify-center items-center screen fixed w-full h-full top-0 bg-white z-20'>
             <motion.ul
             variants={boxvariant}
             animate="visible"
             initial="hidden"
             className=' font-medium text-xl text-gray-400'>
                <motion.li variants={listvariant} className=' mb-3'>HOME</motion.li>
                <motion.li variants={listvariant} className=' mb-3'>FEATURED</motion.li>
                <motion.li variants={listvariant} className=' mb-3'>PRODUCTS</motion.li>
                <motion.li variants={listvariant} className=' mb-3'>BLOG</motion.li>
              <Link to='/shoe'><motion.li variants={listvariant} className=' mb-3'>SHOP</motion.li></Link>  
             </motion.ul>
             <IoMdCloseCircle onClick={()=>setClose(false)} className=' absolute top-3 text-3xl right-3' />
            </div> }
        </>
    )
}

export default Home
