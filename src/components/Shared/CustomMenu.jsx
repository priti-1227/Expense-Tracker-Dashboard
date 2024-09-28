import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

const CustomMenu = ({
  icon,
  menuButtonProps,
  menuItems,
  menuListProps,

  ...props
}) => (
  <Menu {...props} placement="bottom-end">
    <MenuButton
      as={IconButton}
      aria-label="Menu options"
      icon={icon || "Open"}
      // variant="unstyled"
      _hover={{ bg: "none" }}
      _focus={{ boxShadow: "none" }}
      _active={{ bg: "none" }}
      {...menuButtonProps}
    />
    <MenuList border={"none"} {...menuListProps}>
      {menuItems &&
        menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            command={item.command}
            onClick={item.onClick}
            _hover={{ bg: "transparent" }}
          >
            {item.label}
          </MenuItem>
        ))}
    </MenuList>
  </Menu>
);

CustomMenu.propTypes = {
  icon: PropTypes.element,
  menuButtonProps: PropTypes.object,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element, //icon for menu button
      command: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};

export default CustomMenu;
