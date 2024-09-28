import React from "react";
import { Box, Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";

const NotificationIcon = ({ icon, notificationCount, ...props }) => (
  <Box position="relative" display="inline-block" {...props}>
    {icon}
    {notificationCount > 0 && (
      <Badge
        position="absolute"
        top="-2px"
        right="-2px"
        transform="translate(50%, -50%)"
        color={"white"}
        bg={"red"}
        rounded="full"
        px={1.5}
        fontSize="xs"
      >
        {notificationCount}
      </Badge>
    )}
  </Box>
);

NotificationIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  notificationCount: PropTypes.number,
};

NotificationIcon.defaultProps = {
  notificationCount: 0,
};

export default NotificationIcon;
