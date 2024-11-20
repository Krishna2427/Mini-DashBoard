import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} AuthBase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
