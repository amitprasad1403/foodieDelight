import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import slogans from './Slogans';

export default function Home() {

    const navigate = useNavigate()
    var zindex = 0;
    const [index, setIndex] = useState(0);

    const [restaurentList, setRestaurentList] = useState();
    const [topMenuList, setTopMenuList] = useState();

    const activeRestaurentList = async () => {
        const response = await fetch(`http://localhost:5000/api/restaurent/getRestaurents`, {
            methods: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            setRestaurentList(json.data)
        } else {
            console.log("Failed fo fetch data")
        }
    }

    const topMenus = async () => {
        const response = await fetch(`http://localhost:5000/api/menu/topMenus`, {
            methods: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            setTopMenuList(json.data)
        } else {
            console.log("Failed fo fetch data")
        }
    }

    const handleClick = (id) => {
        localStorage.setItem('restorantId', id);
        navigate("/details")
    }

    useEffect(() => {

        activeRestaurentList();
        topMenus();

        const intervalId = setInterval(() => {
            zindex = zindex % slogans.length;
            //   setIndex((prevIndex) => (prevIndex + 1) % slogans.length);
            setIndex(zindex)
            zindex += 1;
        }, 5000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
            <div className="section flex" id="hero-section">
                <div className="text">
                    <h1 className="primary">
                        {slogans[index].title}
                    </h1>

                    <p className="tertiary">
                        {slogans[index].slogan}
                    </p>

                    <a href="#menu" className="btn">Explore Menu</a>
                </div>
                <div className="visual">
                    <img src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/home-banner.png" alt="" />
                </div>
            </div>


            <div className="section" id="restaurents">
                <h2 className="secondary">Restaurants with online food delivery</h2>
                <div className="scroll-wrapper">
                    <div className="scroll-container">

                        {(restaurentList) ?
                            restaurentList.map((resto, index) => (
                                <div
                                    key={index}
                                    className="box-restaurents"
                                    style={{
                                        backgroundImage: `url(http://localhost:5000/public/restaurents/${resto.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        objectFit: `cover`
                                    }}
                                    onClick={() => handleClick(resto.restaurent_id)}
                                >
                                    <h2>{resto.name}</h2>
                                    <p>{resto.short_desc}</p>
                                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                                </div>
                            ))
                            :
                            <>
                            </>

                        }

                    </div>
                </div>
            </div> 

            <div className="section" id="how-it-works">
                <h1 className="">Best Offers</h1><br />
                <div className="container flex">
                    <div className="box">
                        <img src="assets/images/offer-1.png" alt="Easy Order" />
                    </div>
                    <div className="box">
                        <img src="assets/images/offer-2.png" alt="Best Quality" />
                    </div>
                    <div className="box">
                        <img src="assets/images/offer-3.png" alt="Fast Delivery" />
                    </div>
                </div>
            </div>

            <div className="section" id="menu">
                <h2 className="secondary-menu">Top menues</h2>
                <div className="container">

                    <div className="container">
                        <div className="restaurant-menu">
                            {(topMenuList) ?
                                topMenuList.map((menu, index) => (
                                    <div class="menu-item" onClick={() => handleClick(menu.restaurent_id)} style={{cursor:`pointer`}}>
                                        <img src={`http://localhost:5000/public/menu/${menu?.food_image}`}
                                            alt="" />

                                        <div class="title">{menu.food_name} | {menu.category}</div>

                                        <div class="location">Rating : {menu.ratings}⭐</div>

                                        <div class="order flex">
                                            <div class="price">₹ {menu.price}</div>
                                            <a href="javascript:void(0)" class="btn btn-menu">Order Now</a>
                                        </div>
                                    </div>
                                ))
                                :
                                <>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
