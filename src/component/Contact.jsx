import React from 'react';
import '../Style/Contact.css'; // Import your CSS file
import { useRef, useEffect } from "react";

const Contact = () => {

    const googleMapRef = useRef(null);

    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places'; // Replace with your API key
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            const google = window.google;
            const map = new google.maps.Map(googleMapRef.current, {
                center: { lat: 40.758896, lng: -73.985130 }, // Replace with your store's coordinates
                zoom: 16, // Adjust zoom level as needed
            });

            new google.maps.Marker({
                map: map,
                position: { lat: 40.758896, lng: -73.985130 }, // Replace with your store's coordinates
            });
        });

        return () => {
            const scripts = document.getElementsByTagName('script');

            for (let i = 0; i < scripts.length; i++) {
                if (scripts[i].src.includes(`maps.googleapis.com`)) {
                    scripts[i].remove();
                }
            }
        }
    }, []);

    return (
        <div className="contact-container">
            <div className="map-section">
                <div className="google-map" ref={googleMapRef}></div>
            </div>
            <div className="form-section">
                <div className="contact-form">
                    <h2>Leave Us a Message</h2>
                    <form>
                        <div className="name-inputs">
                            <input type="text" placeholder="First" required />
                            <input type="text" placeholder="Last" required />
                        </div>
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Comment or Message" required></textarea>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
                <div className="store-info">
                    <h2>Our Store</h2>
                    <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
                    <p>PHONE: +1 212 244 2681</p>
                    <p>E-MAIL: office@example.org</p>
                    <h3>Store Hours</h3>
                    <p>Sun: Closed</p>
                    <p>Mon to Sat: 10 AM - 5:30 PM</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;