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
      duration: 1400,
      once: false,
      easing: "ease-out-cubic",
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
          <h3 data-aos="fade-right">BUGATTI</h3>

          <ul data-aos="fade-left">
            <li><a href="#home">Home</a></li>
            <li><a href="#models">Models</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="overlay">
          <h1 data-aos="zoom-in" data-aos-duration="2000">
            BUGATTI
          </h1>

          <h2 data-aos="fade-up" data-aos-delay="300">
            LA VOITURE NOIRE
          </h2>

          <p data-aos="fade-up" data-aos-delay="600">
            Beyond Luxury. Beyond Speed.
          </p>

          <button data-aos="zoom-in" data-aos-delay="900">
            EXPLORE NOW
          </button>
        </div>
      </div>

      {/* Models */}
      <section id="models" className="models">
        <h2 data-aos="fade-up">OUR MODELS</h2>

        <div className="cards">
          <div className="card" data-aos="flip-left">
            <img src={chiron} alt="Bugatti Chiron" />

            <h3>BUGATTI CHIRON</h3>

            <p>
              The Bugatti Chiron combines extraordinary performance,
              luxury craftsmanship and cutting-edge engineering.
            </p>
          </div>

          <div className="card" data-aos="zoom-in">
            <img src={divo} alt="Bugatti Divo" />

            <h3>BUGATTI DIVO</h3>

            <p>
              Designed for exceptional handling with aggressive
              aerodynamics and iconic Bugatti styling.
            </p>
          </div>

          <div className="card" data-aos="flip-right">
            <img src={bolide} alt="Bugatti Bolide" />

            <h3>BUGATTI BOLIDE</h3>

            <p>
              Built for the track, delivering lightweight engineering
              and breathtaking speed.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery">
        <h2 data-aos="zoom-in">BUGATTI GALLERY</h2>

        <div className="gallery-grid">
          <img src={gallery1} alt="Gallery 1" data-aos="fade-up" />
          <img src={gallery2} alt="Gallery 2" data-aos="fade-down" />
          <img src={gallery3} alt="Gallery 3" data-aos="zoom-in" />
          <img src={gallery4} alt="Gallery 4" data-aos="flip-left" />
          <img src={gallery5} alt="Gallery 5" data-aos="flip-right" />
          <img src={gallery6} alt="Gallery 6" data-aos="zoom-in-up" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2 data-aos="fade-right">ABOUT BUGATTI</h2>

        <p data-aos="fade-left">
          Bugatti is one of the world's most prestigious luxury
          automobile manufacturers. Founded in 1909 by Ettore
          Bugatti, the brand is celebrated for creating hypercars
          that combine extraordinary engineering, timeless design,
          luxury craftsmanship, and record-breaking performance.
        </p>
      </section>

      {/* Performance */}
      <section className="performance">
        <h2 data-aos="zoom-in">PERFORMANCE</h2>

        <div className="stats">
          <div className="stat" data-aos="fade-up">
            <h1>420+</h1>
            <p>Top Speed (km/h)</p>
          </div>

          <div
            className="stat"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>1600 HP</h1>
            <p>Horse Power</p>
          </div>

          <div
            className="stat"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1>2.4 Sec</h1>
            <p>0 - 100 km/h</p>
          </div>

          <div
            className="stat"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h1>99</h1>
            <p>Limited Units</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2 data-aos="fade-up">CONTACT US</h2>

        <form data-aos="zoom-in">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

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