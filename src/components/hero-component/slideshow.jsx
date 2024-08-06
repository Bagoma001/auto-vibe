import { useEffect, useState } from "react";

import firstImg from "../../assets/vehicles.jpg";
import secondImg from "../../assets/vehicle-two.jpg";

const heroContent = [
  {
    image: firstImg,
    heading:
      "Unless The Power of Automobiles: Explore Our Premium Auto Collection",
    description:
      "Welcome to Auto-vibe, where choice and quality come together to create an unparalleled car shopping experience.",
    id: "01",
  },

  {
    image: secondImg,
    heading:
      "Unless The Power of Automobiles: Explore Our Premium Auto Collection",
    description:
      "Welcome to Auto-vibe, where choice and quality come together to create an unparalleled car shopping experience.",
    id: "02",
  },
];

export default function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < heroContent.length - 1 ? prevIndex + 1 : 0
      );
    }, 55000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slideshow">
        <ul className="hero-styling">
          {heroContent.map((hero, index) => (
            <li key={hero.id} className={index > 0 ? "list-position" : ""}>
              <div
                className={
                  index === currentImageIndex ? "active" : "hero-transition"
                }
              >
                <img
                  src={hero.image}
                  alt={hero.description}
                  key={index}
                  className={index === currentImageIndex ? "active" : ""}
                />

                <div className="text-positioning">
                  <h1>{hero.heading} </h1>
                  <p>{hero.description} </p>

                  <a href="./shop" className="shop-button">
                    Shop now
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
