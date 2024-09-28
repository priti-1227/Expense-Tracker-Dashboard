// src/components/IconButton.js
import React from "react";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types"; // For prop type validation

const IconButton = ({ icon: Icon, bg, color, size, w, rounded, ...props }) => {
  return (
    <Box
      p={2}
      w={w || 35} // Default width
      bg={bg || "#d9f8fc"} // Default background color
      rounded={rounded || "md"}
      color={color || "#00cfe8"}
      {...props} // Allows additional props like onClick
    >
      {Icon && <Icon size={size} />} {/* Default icon color */}
    </Box>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired, // Ensure icon is a valid React component
  bg: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default IconButton;
