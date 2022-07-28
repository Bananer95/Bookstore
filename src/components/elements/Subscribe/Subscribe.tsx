import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <>
      <div className="subscribe">
        <h3>Subscribe to Newsletter</h3>
        <p>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
        <form action="">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
};

export { Subscribe };
