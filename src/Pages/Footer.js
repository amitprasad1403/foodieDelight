import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer" id="about">
                <div className="container flex">
                    <div className="footer-about">
                        <h2>About</h2>
                        <p>
                        FoodieDelight delivers your favorite meals straight to your door. With fast delivery and a wide selection of top restaurants, we make dining at home both easy and delightful. Enjoy delicious food and convenient service with just a few taps. Your next meal is always a delight with FoodieDelight.
                        </p>
                    </div>

                     

                    <div className="quick-links">
                        {/* <h2>Quick Links</h2>

                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Menu</li>
                            <li>Order</li>
                            <li>Services</li>
                        </ul> */}
                    </div>

                    <div className="footer-category">
                        <h2>Our Menu</h2>

                        <ul>
                            <li>Biryani</li>
                            <li>Chicken</li>
                            <li>Pizza</li>
                            <li>Burger</li>
                            <li>Pasta</li>
                        </ul>
                    </div>

                    <div className="get-in-touch">
                        <h2>Get in touch</h2>
                        <ul>
                            <li>Account</li>
                            <li>Support Center</li>
                            <li>Feedback</li>
                            <li>Suggession</li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    <p>Copyright &copy; 2024. All Rights Reserved.</p>
                </div>
            </div>

            <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
            <script noModule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
        </>
    )
}
