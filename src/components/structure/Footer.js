import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/anurag-kx" className="has-text-white" target="_blank">
            <strong>Anurag K</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p>
        <p>
          Open-Sourced at &nbsp; {" "} 
          <a href="https://github.com/anurag-kx/personal-portfolio" className="has-text-white" target="_blank">
            <i className="fab fa-2x fa-github"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
