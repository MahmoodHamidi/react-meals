import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Dev
        </p>
      </aside>
    </footer>
  );
};

export default FooterComponent;
