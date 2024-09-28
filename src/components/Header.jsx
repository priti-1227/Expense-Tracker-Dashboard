import {
  Avatar,
  AvatarBadge,
  Box,
  HStack,
  Hide,
  Icon,
  Image,
  Input,
  Show,
  Stack,
  background,
  border,
  color,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomMenu from "./Shared/CustomMenu";
import { IoSunnyOutline } from "react-icons/io5";
import { VscExtensions } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Profile from "../assets/header/Profile.png";
import { IoMoonOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import NotificationIcon from "./Shared/NotificationIcon";
import { useThemeColors } from "../hook/useThemeColors";
import SideBar from "./SideBar";
function Header() {
  const { colorMode, setColorMode } = useColorMode();
  const { bgColor, textColor } = useThemeColors();
  const [isopen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <HStack
        position="sticky"
        top="8px"
        zIndex={1000}
        bg={bgColor}
        boxShadow="xl"
        px="8"
        py={2}
        gap={{ base: "2px", md: "20px" }}
        color={textColor}
        rounded={"md"}
      >
        <Show below="xl">
          <IoMdMenu size={30} onClick={toggleSidebar} />
        </Show>

        <IoSearchOutline size={30} />

        <Input
          placeholder="Search"
          size="md"
          variant={"unstyled"}
          border={"none"}
          p={3}
          color={textColor}
        />
        <IoLanguageOutline size={30} />
        <CustomMenu
          menuButtonProps={{ background: "transparent" }}
          icon={
            colorMode === "system" ? (
              <RiComputerLine size={25} />
            ) : colorMode === "dark" ? (
              <IoMoonOutline size={25} />
            ) : (
              <IoSunnyOutline size={20} />
            )
          }
          menuListProps={{
            minWidth: "150px",

            bg: bgColor,
            color: textColor,
          }}
          menuItems={[
            {
              label: "Light",
              onClick: () => setColorMode("light"),
              icon: <IoSunnyOutline size={20} />,
            },
            {
              label: "Dark",
              onClick: () => setColorMode("dark"),
              icon: <IoMoonOutline size={20} />,
            },
            {
              label: "System",
              onClick: () => {
                console.log("Switching to system mode");
                setColorMode("system");
              },
              icon: <RiComputerLine size={20} />,
            },
          ]}
        ></CustomMenu>

        <VscExtensions size={30} />
        <NotificationIcon
          icon={<IoNotificationsOutline size={25} />}
          notificationCount={3}
        />

        <Stack direction="row" spacing={4}>
          <Avatar src={Profile} w={"40px"} h={"40px"}>
            <AvatarBadge boxSize="0.8em" bg="green.500" />
          </Avatar>
        </Stack>
      </HStack>
    </>
  );
}

export default Header;
