// Footer.js
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div>
        <p>&copy; 2024. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <a href="/explore/all" className="footer-link">Explore Products</a>
        <a href="/contact" className="footer-link">Contact Us</a>
        <a href="/about" className="footer-link">About Us</a>
      </div>
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
          <span>Twitter</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
