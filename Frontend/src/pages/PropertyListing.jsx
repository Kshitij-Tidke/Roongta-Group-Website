import React, { useEffect, useState } from "react";
import axios from "axios";
import { Radio, PropertyCard, Heading } from "../components";
import Move from "../assets/Other/Move.svg"; // Import the icon you use for features

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [uniquePropertyTypes, setUniquePropertyTypes] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);

  // Fetch properties from the API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/properties");
        setProperties(response.data);
        setFilteredProperties(response.data); // Initialize filtered properties with all properties

        // Extract unique property types from features (labels)
        const allFeatures = response.data.flatMap((property) =>
          property.features.map((feature) => feature.label)
        );
        const uniqueTypes = Array.from(new Set(allFeatures)); // Get unique property types
        setUniquePropertyTypes(uniqueTypes);

        // Extract unique locations from properties
        const allLocations = response.data.map((property) => property.location);
        const uniqueLocs = Array.from(new Set(allLocations)); // Get unique locations
        setUniqueLocations(uniqueLocs);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = () => {
    // Filter properties based on selectedType (property type) and selectedLocation
    let filtered = properties;

    if (selectedType) {
      filtered = filtered.filter((property) =>
        property.features.some((feature) => feature.label.toLowerCase() === selectedType.toLowerCase())
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error fetching properties: {error.message}</div>;
  }

  return (
    <>
      <div className="pt-8">
        <Heading title={"Property List"} className={"py-8 bg-blue-800 text-white"} />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row p-4">
        {/* Left Sidebar with Radio Buttons */}
        <div className="lg:w-1/4 w-full p-4 border-r">
          {/* Property Type Section */}
          <div>
            <h4 className="font-bold mb-2 text-lg">Property Type</h4>
            {uniquePropertyTypes.map((type, index) => (
              <Radio
                key={index}
                id={`propertyType-${index}`}
                name="property_type"
                value={type}
                label={type}
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
              />
            ))}
          </div>

          {/* Location Section */}
          <div className="mt-4">
            <h4 className="font-bold mb-2 text-lg">Location</h4>
            {uniqueLocations.map((location, index) => (
              <Radio
                key={index}
                id={`location-${index}`}
                name="location"
                value={location}
                label={location}
                checked={selectedLocation === location}
                onChange={() => setSelectedLocation(location)}
              />
            ))}
          </div>

          {/* Search Button */}
          <div className="mt-4">
            <button
              onClick={handleSearch}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Side for Property Cards */}
        <div className="lg:w-3/4 w-full p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {filteredProperties.map((property) => (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListing;
