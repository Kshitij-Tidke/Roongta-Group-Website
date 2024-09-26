import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick"; // Import react-slick
import { Heading, PropertyCard } from "../components";
import Move from "../assets/Other/Move.svg";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/properties"
        );
        setProperties(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching properties: {error.message}</div>;
  }

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    centerPadding: "0px", // No center padding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card on smaller screens
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <Heading title={"Featured Properties"} />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8"> {/* Updated padding */}
        <Slider {...settings}>
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              features={property.features.map((feature) => ({
                icon: Move,
                label: feature.label,
              }))}
              link={`/properties/${property.id}`}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Properties;
