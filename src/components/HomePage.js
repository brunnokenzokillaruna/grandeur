import React from 'react';
import './styles/HomePage.css';
import banner from '../assets/banner.png';
import menu from '../assets/menu.png';
import order from '../assets/order.png';
import restaurant from '../assets/restaurant.png';
import chef from '../assets/chef.png';
import logo from '../assets/logo.png';
import facebook from "../assets/icon-facebook.png";
import instagram from "../assets/icon-instagram.png";
import twitter from "../assets/icon-twitter.png";
import youtube from "../assets/icon-youtube.png";
import transition from "../transition";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Grandeur Logo" className="logo-image" />
          <div className="logo-text">Grandeur</div>
        </div>
        <div className="menu-links">
          <Link to="/">Home</Link>
          <Link to="/MenuPage">Menu</Link>
        </div>
      </nav>

      <section className="image-banner">
        <img src={banner} alt="Elegant Dining" />
      </section>

      <section className="website-content">
        <div className="column">
          <img src={restaurant} alt="Restaurant" />
          <h3>GRANDEUR ROOFTOP</h3>
          <hr class="hr-content"></hr>
          <p>Savor the sophisticated fusion of Parisian culinary artistry and Montreal's vibrant dining scene, masterfully curated by Chef Jacob Eichmann at Grandeur. Our chic, third-floor rooftop oasis offers a captivating setting for late-night indulgence under the stars, enveloped in a warm and inviting ambiance. Allow our attentive and knowledgeable staff to tailor a memorable dining experience for you, featuring delectable and inventive creations. Embark on a gastronomic journey that unites the essence of Paris with the soul of Montreal, exclusively at Grandeur.</p>
        </div>
        <div className="column">
          <img src={menu} alt="Menu" />
          <h3>MENU</h3>
          <hr class="hr-content"></hr>
          <p>Our menu presents an exquisite melding of French culinary finesse and Montreal's distinctive flavors. Each dish is meticulously crafted, incorporating innovative taste sensations and the finest ingredients, guaranteeing an exceptional dining encounter. Immerse yourself in the harmonious union of time-honored classics and modern gastronomy as you traverse our curated selection of dishes, redefining the essence of French-Canadian cuisine.</p>
        </div>
        <div className="column">
          <img src={order} alt="Order" />
          <h3>FOR TAKEAWAY</h3>
          <hr class="hr-content"></hr>
          <p>If you're unable to join us at Grandeur, fret not! Experience our sumptuous creations in the cozy embrace of your home, shared with loved ones. Simply place an order through our website and let us bring the essence of Grandeur's culinary delights to your doorstep. Relish the impeccable tastes of our French-Canadian fusion, wherever you choose to dine.</p>
        </div>
      </section>

      <section className="chef-content">
        <img src={chef} alt="Chef" className="chef-photo" />
        <div className="chef-info">
          <h2>JACOB EICHMANN</h2>
          <hr class="hr-content"></hr>
          <h3>CHEF</h3>
          <p>"I have always been drawn to the refined and cosmopolitan atmosphere of Montreal. The city's ability to seamlessly blend different cultures and its distinct European charm resonate deeply with me and my personal experiences. Montreal's unique global identity truly mirrors my own journey in life."</p>
          <p>Jacob Eichmann is an acclaimed chef, author, and TV personality who has achieved remarkable success with his restaurants worldwide. Throughout his illustrious career, he has received numerous accolades, including a rare three-star review from The New York Times and multiple James Beard Foundation Awards. Chef Eichmann has found a wealth of inspiration in Montreal, where he draws upon the talents of local growers and producers to create menus that embody his French roots and reflect the cultural diversity of his home in New York City. With his culinary approach, he embodies the city's sophisticated, worldly sensibility, which resonates closely with his own journey, blending a global dynamic with European flair.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          © 2022 Grandeur Restaurant. All rights reserved.
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" /></a>
          <a href="https://twitter.com/"><img src={twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com/" class="instagram-icon"><img src={instagram} alt="Instagram" /></a>
          <a href="https://www.youtube.com/"><img src={youtube} alt="YouTube" /></a>
        </div>
      </footer>

    </div>
  );
}

export default transition(HomePage);
