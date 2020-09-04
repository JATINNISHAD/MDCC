import React from 'react';

const Home =()=>{
    return(
        <div>
            <section id="showcase">
                <div className="title" >
                    <h1>Maa Durga Cyber Cafe</h1>
                    <p>platform to serve your digital needs</p>
                </div>
            </section>
            <section id="services">
                
                <div className="cards">
                    <div className="card">
                        <div className="card-img">
                            <img src="https://www.motaen.com/upload/resize/1280/800/upload/wallpapers/source/2009/08/31/09/01/20234/mota_ru_983101-b30.jpg" alt="card-img"/>
                        </div>
                        <div className="card-content">
                            <h3>Xerox</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src="https://www.cambridgeenglish.org/static-assets/Images/a1w004-filling-in-a-form_tcm32-289257.jpg" alt="card-img"/>
                        </div>
                        <div className="card-content">
                            <h3>Online Form</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src="https://www.vodafone.in/content/dam/vodafoneideadigital/StaticPages/VodafoneBlog/420x145_1.jpg" alt="card-img"/>
                        </div>
                        <div className="card-content">
                            <h3>Online Bill</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src="https://besthqwallpapers.com/Uploads/23-3-2018/45456/thumb2-payment-online-credit-card-4k-online-shopping-credit-card-in-hand.jpg" alt="card-img"/>
                        </div>
                        <div className="card-content">
                            <h3>Payment</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src="https://www.bankbazaar.com/images/india/infographic/aadhar-card1.jpg" alt="card-img"/>
                        </div>
                        <div className="card-content">
                            <h3>E-Aadhar Card</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src="https://www.diyprinting.com.ph/wp-content/uploads/2017/05/I-tech-Laminator-and-laminating-film.jpg" alt="card-img"/>
                        </div>
                        <div className="card-content">
                            <h3>Lamination</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="about">
                <div className="about-div" >
                    <h1>About Us</h1>
                    <p>We are <strong>Saharanpur</strong> Based Cyber Cafe. We provide Internet related services like filling up forms, xerox ,etc .</p>
                </div>
                <div className="iframe-div" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6123477600045!2d77.53214351491414!3d29.961827129426094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeaeb9f0e40bf%3A0x9ae16a1b57518dc2!2sMaa%20Durga%20Cyber%20Cafe!5e0!3m2!1sen!2sin!4v1598964241221!5m2!1sen!2sin" width="300" height="350" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </section>

            <section id="contact">
                <div className="contact-img">
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-contact-person-png-3.png" alt="contact-img" />
                </div>
                <div className="contact-div" >
                    <h1>Contact Us</h1>
                    <ul>
                        <li>Email : jatinwale@gmail.com</li>
                        <li>Phone : 0132-247008</li>
                        <li>Mobile : 8279363933</li>
                    </ul>
                </div>
                
            </section>
        </div>
    )
}

export default Home;