import React, { useEffect, useState } from 'react'

export default function Details() {

    const [restaurentDetails, setRestaurentDetails] = useState();
    const [restaurentMenu, setRestaurentMenu] = useState();

    const getRestaurentDetails = async () => {
        const restaurentId = localStorage.getItem('restorantId')
        const response = await fetch(`http://localhost:5000/api/restaurent/getRestaurentdetails/${restaurentId}`, {
            methods: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            setRestaurentDetails(json.restaurentDetails)
            setRestaurentMenu(json.menuDetails)
        } else {
            console.log("Failed fo fetch data")
        }
    } 

    useEffect(() => {
        getRestaurentDetails();
    }, [])

    return (
        <>
            <div class="section" id="faq">
                <h2 class="secondary">Details</h2>

                <div class="container-details">
                    <div class="image-container">
                        <img src={`http://localhost:5000/public/restaurents/${restaurentDetails?.image}`} alt="Restaurant Image" />
                    </div>
                    <div class="info-container">
                        <h1>{restaurentDetails?.name}</h1>
                        <p>Address: {restaurentDetails?.address} , {restaurentDetails?.city} ,{restaurentDetails?.state}</p>
                        <p>Ratings: {restaurentDetails?.ratings}⭐</p>
                    </div>
                </div>
            </div>

            <div class="section" id="menu">
                <h2 class="secondary-menu">Our menue</h2>
                <div class="container">
                    {/* <ul class="category">
                        <li class="active">All</li>
                        <li>Biryani</li>
                        <li>Chicken</li>
                        <li>Pizza</li>
                        <li>Burger</li>
                        <li>Pasta</li>
                    </ul> */}

                    <div class="container">
                        <div class="restaurant-menu">
                        {(restaurentMenu) ?
                            restaurentMenu.map((menu, index) => (
                            <div class="menu-item">
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
