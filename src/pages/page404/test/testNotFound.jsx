import React from 'react';
import './testNotFound.style.css'; 

function NotFoundPage() {
  return (
    <div className="not-found-container text-center text-white d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-1 text-warning mb-4">404</h1>
      
      <p className="lead mb-4">
          **Oops, looks like you've wandered into deep space!**
      </p>

      <p className="text-muted mb-5">
          **This resource wasn't found; perhaps the Galactic Empire just captured it.**
      </p>

      <div className="mt-3">
          <a href="/" className="btn btn-warning btn-lg me-3 shadow-sm">
              **Return to Base (Home)**
          </a>
          <a href="https://starwars.fandom.com/wiki/404" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg shadow-sm">
              **Ask help from R2-D2**
          </a>
      </div>

      <div className="star-wars-text mt-5">
          <p>**Don't worry. Try again or use the Force to find what you're looking for.**</p>
      </div>
    </div>
  );
}

export default NotFoundPage;