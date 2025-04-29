import React from "react";
import PropTypes from "prop-types";

const DestinationCard = ({ destination }) => {
  return (
    <div style={styles.card}>
      <img src={destination.image} alt={destination.name} style={styles.image} />
      <h2>{destination.name}</h2>
      <h4>{destination.location}</h4>
      <p>{destination.description}</p>
      <p style={styles.price}>{destination.price}</p>
    </div>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    maxWidth: "300px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  price: {
    fontWeight: "bold",
    color: "#27ae60",
  },
};

export default DestinationCard;
