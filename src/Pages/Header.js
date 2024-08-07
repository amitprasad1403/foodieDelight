import React from 'react'
import { Link,useLocation } from 'react-router-dom'

export default function Header() {

    const location = useLocation();

    return (
        <>
            <div className="menu">
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <ion-icon name="grid-outline"></ion-icon>
                    </label>

                    {/* <label className="logo">FoodieDelight</label> */} 
                        <img className='logo-1' src="assets/images/logo-1.png" /> 
                    

                    <ul>
                        <li>
                            <Link to="/" className={`${location.pathname === '/' ? 'active' : ''}`}>Home</Link> 
                        </li>
                        <li>
                            {/* <Link to="/details" className={`${location.pathname === '/details' ? 'active' : ''}`}>Details</Link>  */}
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li> 
                    </ul>
                </nav>
            </div>
        </>
    )
}
