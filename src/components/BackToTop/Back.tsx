import { useEffect, useState } from "react"


/** @todo: refactor whole code **/

function BackToTop() {
     // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <section id="back_to_top">
      {showButton && (
        <button 
            onClick={scrollToTop}
            className="!fixed bottom-5 right-5  rounded-full bg-green-700 p-3 text-white 
            transition duration-150 ease-in-out hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-green-700"
            id="btn_back_to_top">
            <svg
                aria-hidden="false"
                focusable="false"
                data-prefix="fas"
                className="h-3 w-3"
                role="img"
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
            </svg>
        </button>
      )}
    </section>
    )
}
    
export default BackToTop

