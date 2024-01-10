import { CiFilter } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";

import 'swiper/css';

const Shoe = () => {
    const data = [
        {
            img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
            title: "Nike Air Monarch IV",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Nike",
            color: "white",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
            title: "Nike Air Vapormax Plus",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Nike",
            color: "red",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
            title: "Nike Waffle One Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Nike",
            color: "green",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
            title: "Nike Running Shoe",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Adidas",
            color: "black",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
            title: "Flat Slip On Pumps",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Vans",
            color: "green",
            category: "flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
            title: "Knit Ballet Flat",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 50,
            company: "Adidas",
            color: "black",
            category: "flats",
        },

        {
            img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
            title: "Loafer Flats",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 50,
            company: "Vans",
            color: "white",
            category: "flats",
        },

        {
            img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
            title: "Nike Zoom Freak",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Nike",
            color: "green",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
            title: "Nike Men's Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Adidas",
            color: "blue",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
            title: "PUMA BLACK-OCE",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 150,
            company: "Puma",
            color: "green",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
            title: "Pacer Future Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 150,
            company: "Puma",
            color: "red",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
            title: "Unisex-Adult Super",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 150,
            company: "Puma",
            color: "black",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
            title: "Roma Basic Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 150,
            company: "Puma",
            color: "white",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
            title: "Pacer Future Doubleknit",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 150,
            company: "Puma",
            color: "black",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
            title: "Fusion Evo Golf Shoe",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 100,
            company: "Puma",
            color: "green",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
            title: "Rainbow Chex Skate",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 100,
            company: "Vans",
            color: "red",
            category: "flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
            title: "Low-Top Trainers",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 100,
            company: "Vans",
            color: "white",
            category: "sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
            title: "Vans Unisex Low-Top",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 100,
            company: "Vans",
            color: "blue",
            category: "sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
            title: "Classic Bandana Sneakers",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 50,
            company: "Nike",
            color: "black",
            category: "sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
            title: "Chunky High Heel",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 50,
            company: "Vans",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
            title: "Slip On Stiletto High Heel",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 100,
            company: "puma",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
            title: "DREAM PAIRS Court Shoes",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 150,
            company: "Nike",
            color: "red",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
            title: "Nike Air Vapormax Plus",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Nike",
            color: "red",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
            title: "Low Mid Block Heels",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 200,
            company: "Nike",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
            title: "Chunky High Heel",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 50,
            company: "Adidas",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
            title: "Amore Fashion Stilettos",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 150,
            company: "Adidas",
            color: "white",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
            title: "Bridal Sandals Glitter",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 50,
            company: "Adidas",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
            title: "Wedding Prom Bridal",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: 50,
            company: "Adidas",
            color: "black",
            category: "flats",
        },
    ];
    const [cart, setCart] = useState([])
    const [cartShow, setCartShow] = useState(false)
    const [removeItem, setRemoveItem] = useState(null)
    const addtocart = (item) => {
        if (cart.length === 0) {
            setCart([...cart, item])
        }
        else {
            const data = cart.filter((i) => i.title === item.title)
            if (data.length !== 0) {
                window.alert('Item found')
            }
            else {
                setCart([...cart, item])
            }
        }
    }
    const [arr, setArr] = useState(data)
    const [shoe, setShoe] = useState()
    const [search, setSearch] = useState(null)
    const [minprice, setMinprice] = useState()
    const [maxprice, setMaxprice] = useState()
    const [color, setColor] = useState(null)
    const [show, setShow] = useState(false)
    const [brand, setBrand] = useState()
    const company = [
        {
            name: null
        },
        {
            name: 'Nike'
        },
        {
            name: 'Adidas'
        },
        {
            name: 'Puma'
        },
        {
            name: 'Vans'
        }
    ]
    const catarr = [
        {
            rname: null,
            dname: 'All'
        },
        {
            rname: 'sneakers',
            dname: 'Sneakers'
        },
        {
            rname: 'flats',
            dname: 'Flats'
        },
        {
            rname: 'sandals',
            dname: 'Sandals'
        },
        {
            rname: 'heels',
            dname: 'Heels'
        }
    ]
    const colorarr = [
        {
            rname: null,
            dname: 'All'
        },
        {
            rname: 'black',
            dname: 'Black'
        },
        {
            rname: 'blue',
            dname: 'Blue'
        },
        {
            rname: 'red',
            dname: 'Red'
        },
        {
            rname: 'green',
            dname: 'Green'
        },
        {
            rname: 'white',
            dname: 'White'
        }
    ]
    const priceset = (min, max) => {
        setMinprice(min)
        setMaxprice(max)
    }
    useEffect(() => {
        if (removeItem) {
            setCart(cart.filter((i) => i.title !== removeItem.title))
        }
    }, [removeItem])
    useEffect(() => {
        if (search) {
            let pattern = RegExp(`${search}`, 'g')
            setArr(data.filter((i) => i.title.match(pattern)))
        }
        else {
            setArr(data)
            setShoe()
            setMinprice()
            setMaxprice()
            setColor()
            setBrand()
        }
    }, [search])
    useEffect(() => {
        if (shoe && minprice && maxprice && color && brand) {
            setArr(data.filter((i) => i.category === shoe && i.newPrice >= minprice && i.newPrice <= maxprice && i.color === color && i.company === brand))
        }
        else if (shoe && minprice && maxprice && brand) {
            setArr(data.filter((i) => i.category === shoe && i.newPrice >= minprice && i.newPrice <= maxprice && i.company === brand))
        }
        else if (color && minprice && maxprice && brand) {
            setArr(data.filter((i) => i.newPrice >= minprice && i.newPrice <= maxprice && i.color === color && i.company === brand))
        }
        else if (shoe && minprice && maxprice && color) {
            setArr(data.filter((i) => i.category === shoe && i.newPrice >= minprice && i.newPrice <= maxprice && i.color === color))
        }
        else if (minprice && maxprice && brand) {
            setArr(data.filter((i) => i.newPrice >= minprice && i.newPrice <= maxprice && i.company === brand))
        }
        else if (shoe && minprice && maxprice) {
            setArr(data.filter((i) => i.category === shoe && i.newPrice >= minprice && i.newPrice <= maxprice))
        }
        else if (color && minprice && maxprice) {
            setArr(data.filter((i) => i.newPrice >= minprice && i.newPrice <= maxprice && i.color === color))
        }
        else if (minprice && maxprice) {
            // console.log(minprice, maxprice);
            setArr(data.filter((i) => i.newPrice >= minprice && i.newPrice <= maxprice))
        }
        else if (shoe && brand) {
            setArr(data.filter((i) => i.category === shoe && i.company === brand))
        }
        else if (shoe && color) {
            setArr(data.filter((i) => i.category === shoe && i.color === color))
        }
        else if (shoe && color && brand) {
            setArr(data.filter((i) => i.category === shoe && i.color === color && i.company === brand))
        }
        else if (color && brand) {
            setArr(data.filter((i) => i.color === color && i.company === brand))
        }
        else if (shoe) {
            setArr(data.filter((i) => i.category === shoe))
        }
        else if (color) {
            setArr(data.filter((i) => i.color === color))
        }
        else if (brand) {
            setArr(data.filter((i) => i.company === brand))
        }

        else {
            setArr(data)
        }
    }, [shoe, minprice, maxprice, color, brand])
    return (
        <>
            <div className=" xl:flex xl:justify-center">
                <div className="block lg:flex xl:w-[84rem]   ">
                    <div className=" hidden lg:block sticky  top-0 left-0 border-gray-300 border-2 border-solid border-t-0 border-l-0 border-b-0  h-[100vh] w-[15%]">
                        <div className=" cart py-2 flex justify-center border-t-0 border-r-0 border-l-0 border-gray-300 border-2 border-solid ">
                            <div className=" cursor-pointer  relative" onClick={() => setCartShow(true)}>
                                <IoCartOutline className=" text-3xl" />
                                <div className=" w-5  h-5 top-[-4px] right-[-9px] text-white absolute bg-black rounded-full flex justify-center items-center">
                                    {cart.length}
                                </div>
                            </div>

                        </div>
                        <div className=" flex justify-center">
                            <div className=" flex flex-col  py-1">
                                <div>
                                    <h1 className=" font-medium">Category</h1>
                                    <ul className=" mt-1">
                                        {
                                            catarr.map((i) => <li key={i.rname} className="mb-1" onClick={() => setShoe(i.rname)}>
                                                <input type="radio" name='' id="" checked={i.rname === shoe && true} />
                                                <label htmlFor="" className="ml-1 text-sm font-medium">{i.dname}</label>
                                            </li>)
                                        }


                                    </ul>
                                </div>
                                <div className=" mt-2">
                                    <h1 className=" font-medium">Price</h1>
                                    <ul className=" mt-1">
                                        <li className="mb-1" onClick={() => priceset(null, null)} >
                                            <input type="radio" name='' id="" checked={minprice === null && true} />
                                            <label htmlFor="" className="ml-1 text-sm font-medium">All</label>
                                        </li>
                                        <li className="mb-1" onClick={() => priceset(10, 50)}>
                                            <input type="radio" name='' id="" checked={minprice === 10 && true} />
                                            <label htmlFor="" className="ml-1 text-sm font-medium">$10 - $50</label>
                                        </li>
                                        <li className="mb-1" onClick={() => priceset(50, 100)}>
                                            <input type="radio" name='' id="" checked={minprice === 50 && true} />
                                            <label htmlFor="" className="ml-1 text-sm font-medium">$50 - $100</label>
                                        </li>
                                        <li className="mb-1" onClick={() => priceset(100, 150)}>
                                            <input type="radio" name='' id="" checked={minprice === 100 && true} />
                                            <label htmlFor="" className="ml-1 text-sm font-medium">$100 - $150</label>
                                        </li>
                                        <li className="mb-1" onClick={() => priceset(160, 200)}>
                                            <input type="radio" name='' id="" checked={minprice === 160 && true} />
                                            <label htmlFor="" className="ml-1 text-sm font-medium">Over $150</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className=" mt-2">
                                    <h1 className=" font-medium">Color</h1>
                                    <ul className=" mt-1">
                                        {
                                            colorarr.map((i) => <li key={i.rname} className="mb-1 flex items-center" onClick={() => setColor(i.rname)}>
                                                <div className=" w-3 h-3 rounded-full" style={i.dname === 'All' ? { background: 'linear-gradient(to left , red, black , blue ,white, green)' } : i.rname === 'white' ? { backgroundColor: i.rname, borderWidth: '1px', borderColor: 'black', borderStyle: 'solid' } : { backgroundColor: i.rname }}></div>
                                                <label htmlFor="" className="ml-1 text-sm font-medium">{i.dname}</label>
                                            </li>)
                                        }


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-[85%]">
                        <div className=' flex justify-between py-4 px-2 items-center border-gray-300  border-2 border-t-0 border-l-0 border-r-0'>
                            <input type="text" onChange={(e) => setSearch(e.target.value)} className=' border-0  rounded-md py-2 pl-3 pr-6 text-md  outline-none bg-[#80808040]' placeholder='Enter your search shoes' />
                            <div className=" flex">
                                <CiFilter className=' text-3xl lg:hidden cursor-pointer' onClick={() => setShow(true)} />
                                <FaRegHeart className="text-3xl hidden sm:block sm:ml-2 cursor-pointer" />
                            </div>


                        </div>
                        <div className=" px-2 g mt-4">
                            {
                                company.map((i) => <button key={i.name} onClick={() => setBrand(i.name)} className=" font-medium text-sm py-2 px-3 mr-2 mb-2 border-2 border-gray-300 rounded-md" style={i.name === brand ? { backgroundColor: 'black', color: 'white' } : {}}>{!i.name ? 'All Product' : i.name}</button>)
                            }

                        </div>
                        <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-2 px-2 py-4'>
                            {arr.length === 0 ? <h1>No product found!</h1> : arr.map((i) => <div onClick={() => addtocart(i)} className=' border-gray-300 rounded-md py-4 px-3 border-2 cursor-pointer'>
                                <img src={i.img} alt="" />
                                <h1 className=' font-semibold text-pretty mt-3'>{i.title}</h1>
                                <div className=' flex items-center text-sm my-1 font-semibold'>
                                    <ul className=' flex'>
                                        <li className=' mr-1'><FaStar className='text-yellow-500' />
                                        </li>
                                        <li className=' mr-1'><FaStar className='text-yellow-500' />
                                        </li>
                                        <li className=' mr-1'><FaStar className='text-yellow-500' />
                                        </li>
                                        <li className=' mr-1'><FaStar className='text-yellow-500' />
                                        </li>
                                    </ul>
                                    <p className=' text-pretty'>{i.reviews}</p>
                                </div>
                                <div className=' flex text-sm font-semibold'>
                                    <p className=' line-through mr-2'>{i.prevPrice}</p>
                                    <p>{i.newPrice}</p>
                                </div>
                            </div>)

                            }


                        </div>
                    </div>
                </div>
            </div>
            {show && <div className="lg:hidden bg-white fixed top-0 z-10 h-full w-full flex flex-col justify-center">
                <div className=" grid grid-cols-2 sm:grid-cols-3 place-items-center gap-y-2 ">
                    <div className="text-md sm:text-lg">
                        <h1 className=" font-medium">Category</h1>
                        <ul className=" mt-1 ">
                            {
                                catarr.map((i) => <li key={i.rname} className="mb-1" onClick={() => setShoe(i.rname)}>
                                    <input type="radio" name='' id="" checked={i.rname === shoe && true} />
                                    <label htmlFor="" className="ml-1  font-medium">{i.dname}</label>
                                </li>)
                            }


                        </ul>
                    </div>
                    <div className=" text-md sm:text-lg">
                        <h1 className=" font-medium">Price</h1>
                        <ul className=" mt-1">
                            <li className="mb-1" onClick={() => priceset(null, null)} >
                                <input type="radio" name='' id="" checked={minprice === null && true} />
                                <label htmlFor="" className="ml-1 text-sm font-medium">All</label>
                            </li>
                            <li className="mb-1" onClick={() => priceset(10, 50)}>
                                <input type="radio" name='' id="" checked={minprice === 10 && true} />
                                <label htmlFor="" className="ml-1 text-sm font-medium">$10 - $50</label>
                            </li>
                            <li className="mb-1" onClick={() => priceset(50, 100)}>
                                <input type="radio" name='' id="" checked={minprice === 50 && true} />
                                <label htmlFor="" className="ml-1 text-sm font-medium">$50 - $100</label>
                            </li>
                            <li className="mb-1" onClick={() => priceset(100, 150)}>
                                <input type="radio" name='' id="" checked={minprice === 100 && true} />
                                <label htmlFor="" className="ml-1 text-sm font-medium">$100 - $150</label>
                            </li>
                            <li className="mb-1" onClick={() => priceset(160, 200)}>
                                <input type="radio" name='' id="" checked={minprice === 160 && true} />
                                <label htmlFor="" className="ml-1 text-sm font-medium">Over $150</label>
                            </li>
                        </ul>
                    </div>
                    <div className="text-md sm:text-lg ">
                        <h1 className=" font-medium">Color</h1>
                        <ul className=" mt-1 ">
                            {
                                colorarr.map((i) => <li key={i.dname} className="mb-1 mr-4 sm:mr-0 flex items-center" onClick={() => setColor(i.rname)}>
                                    <div className=" w-3 h-3 rounded-full" style={i.dname === 'All' ? { background: 'linear-gradient(to left , red, black , blue ,white, green)' } : i.rname === 'white' ? { backgroundColor: i.rname, borderWidth: '1px', borderColor: 'black', borderStyle: 'solid' } : { backgroundColor: i.rname }}></div>
                                    <label htmlFor="" className="ml-1  font-medium">{i.dname}</label>
                                </li>)
                            }


                        </ul>
                    </div>
                </div>
                <div className=" flex justify-center flex-col items-center my-4">
                    <button className=" bg-black text-white px-4 py-1 rounded-md text-lg" onClick={() => setShow(false)}>Close</button>
                    <button className=" mt-3  text-lg px-4 py-1 bg-black text-white rounded-md" onClick={() => setCartShow(true)}>Cart : {cart.length}</button>
                </div>
            </div>}
            {cartShow && <div className=" bg-white fixed top-0 w-full h-full z-20   ">
                <div className=" mt-28 px-4">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}

                    >
                        {cart.length === 0 ? <h1>Empty Cart!</h1> : cart.map((i) => <SwiperSlide><div className='   border-gray-300 rounded-md py-4 px-3 border-2'>
                            <img src={i.img} alt="" />
                            <h1 className=' font-semibold text-pretty mt-3'>{i.title}</h1>
                            <div className=' flex items-center text-sm my-1 font-semibold'>
                                <ul className=' flex'>
                                    <li className=' mr-1'><FaStar className='text-yellow-500' />
                                    </li>
                                    <li className=' mr-1'><FaStar className='text-yellow-500' />
                                    </li>
                                    <li className=' mr-1'><FaStar className='text-yellow-500' />
                                    </li>
                                    <li className=' mr-1'><FaStar className='text-yellow-500' />
                                    </li>
                                </ul>
                                <p className=' text-pretty'>{i.reviews}</p>
                            </div>
                            <div className=' flex text-sm font-semibold'>
                                <p className=' line-through mr-2'>{i.prevPrice}</p>
                                <p>{i.newPrice}</p>
                            </div>
                            <button className=" bg-black lg:text-md px-4 py-1 text-white rounded-md mt-3" onClick={() => setRemoveItem(i)}>Remove</button>
                        </div></SwiperSlide>)

                        }
                    </Swiper>

                </div>
                <div className=" flex justify-center">
                    <button className=" bg-black text-lg px-4 py-1 text-white rounded-md mt-4" onClick={() => setCartShow(false)}>Close</button>
                </div>
            </div>}
        </>
    )
}

export default Shoe
