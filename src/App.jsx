import "./App.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import hero from "./assets/bugatti.jpeg";

import chiron from "./assets/Chiron.png";
import divo from "./assets/Divo.png";
import bolide from "./assets/Bolide.png";

import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";
import gallery3 from "./assets/gallery3.png";
import gallery4 from "./assets/gallery4.png";
import gallery5 from "./assets/gallery5.png";
import gallery6 from "./assets/gallery6.png";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>

      {/* Hero Section */}

      <div
        id="home"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.7)), url(${hero})`,
        }}
      >

        <nav>

          <h3>BUGATTI</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#models">Models</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </nav>

        <div className="overlay">

          <h1>BUGATTI</h1>

          <h2>LA VOITURE NOIRE</h2>

          <p>Beyond Luxury. Beyond Speed.</p>

          <button>EXPLORE NOW</button>

        </div>

      </div>

      {/* Models */}

      <section
        id="models"
        className="models"
        data-aos="fade-up"
      >

        <h2>OUR MODELS</h2>

        <div className="cards">

          <div className="card">

            <img
              src={chiron}
              alt="Bugatti Chiron"
            />

            <h3>BUGATTI CHIRON</h3>

            <p>
              The Bugatti Chiron combines extraordinary
              performance, luxury craftsmanship and
              cutting-edge engineering.
            </p>

          </div>

          <div className="card">

            <img
              src={divo}
              alt="Bugatti Divo"
            />

            <h3>BUGATTI DIVO</h3>

            <p>
              Designed for exceptional handling with
              aggressive aerodynamics and iconic
              Bugatti styling.
            </p>

          </div>

          <div className="card">

            <img
              src={bolide}
              alt="Bugatti Bolide"
            />

            <h3>BUGATTI BOLIDE</h3>

            <p>
              Built for the track, delivering
              lightweight engineering and
              breathtaking speed.
            </p>

          </div>

        </div>

      </section>
            {/* Gallery */}

      <section
        id="gallery"
        className="gallery"
        data-aos="zoom-in"
      >

        <h2>BUGATTI GALLERY</h2>

        <div className="gallery-grid">

          <img src={gallery1} alt="Gallery 1" />
          <img src={gallery2} alt="Gallery 2" />
          <img src={gallery3} alt="Gallery 3" />
          <img src={gallery4} alt="Gallery 4" />
          <img src={gallery5} alt="Gallery 5" />
          <img src={gallery6} alt="Gallery 6" />

        </div>

      </section>

      {/* About */}

      <section
        id="about"
        className="about"
        data-aos="fade-right"
      >

        <h2>ABOUT BUGATTI</h2>

        <p>
          Bugatti is one of the world's most prestigious luxury automobile
          manufacturers. Founded in 1909 by Ettore Bugatti, the brand is
          celebrated for creating hypercars that combine extraordinary
          engineering, timeless design, luxury craftsmanship, and
          record-breaking performance.
        </p>

      </section>

      {/* Performance */}

      <section
        className="performance"
        data-aos="fade-left"
      >

        <h2>PERFORMANCE</h2>

        <div className="stats">

          <div className="stat">
            <h1>420+</h1>
            <p>Top Speed (km/h)</p>
          </div>

          <div className="stat">
            <h1>1600 HP</h1>
            <p>Horse Power</p>
          </div>

          <div className="stat">
            <h1>2.4 Sec</h1>
            <p>0 - 100 km/h</p>
          </div>

          <div className="stat">
            <h1>99</h1>
            <p>Limited Units</p>
          </div>

        </div>

      </section>
            {/* Contact */}

      <section
        id="contact"
        className="contact"
        data-aos="fade-up"
      >

        <h2>CONTACT US</h2>

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            SEND MESSAGE
          </button>

        </form>

      </section>

      {/* Footer */}

      <footer data-aos="fade-up">

        <h3>BUGATTI</h3>

        <p>© 2026 Bugatti Luxury Website</p>

        <p>
          Designed by <strong>Srilakshmi</strong>
        </p>

      </footer>

    </>
  );
}

export default App;