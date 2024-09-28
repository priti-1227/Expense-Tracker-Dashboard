import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Link,
  List,
  ListIcon,
  ListItem,
  Show,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaHome,
  FaInfo,
  FaTools,
  FaEnvelope,
  FaUnlock,
  FaLock,
} from "react-icons/fa";
import logo from "../assets/Logo.svg";
import { LuCircle } from "react-icons/lu";
import { LuCircleDot } from "react-icons/lu";
import { TbSmartHome } from "react-icons/tb";
import { BsLayoutSidebar } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { GoCircle } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { PiChats } from "react-icons/pi";
import { LuCalendarCheck } from "react-icons/lu";
import { TbLayoutKanban } from "react-icons/tb";
import { BsCart3, BsBook } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { useThemeColors } from "../hook/useThemeColors";

function SideBar() {
  const { bgColor, textColor, borderColor, grayText } = useThemeColors();
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);

  const toggleSidebarLock = () => {
    setIsSidebarLocked((prev) => !prev);
  };
  const btnRef = React.useRef();

  const items = [
    { icon: TbSmartHome, label: "Dashboard", link: "#" },
    { icon: BsLayoutSidebar, label: "Layout", link: "#" },
    { icon: MdOutlineContactPage, label: "Pages", link: "#" },
    { icon: CiMail, label: "Chat", link: "#" },
    { icon: PiChats, label: "Layout", link: "#" },
    { icon: LuCalendarCheck, label: "Calendar", link: "#" },
    { icon: TbLayoutKanban, label: "Kanban", link: "#" },
    { icon: BsCart3, label: "e-commerce", link: "#" },
    { icon: BsBook, label: "Academy", link: "#" },
    { icon: LiaFileInvoiceDollarSolid, label: "Invoices", link: "#" },
    { icon: LuUsers, label: "Users", link: "#" },
    { icon: FiSettings, label: "Settings", link: "#" },
    { icon: BsCart3, label: "e-commerce", link: "#" },
    { icon: BsBook, label: "Academy", link: "#" },
    { icon: LiaFileInvoiceDollarSolid, label: "Invoices", link: "#" },
    { icon: LuUsers, label: "Users", link: "#" },
    { icon: FiSettings, label: "Settings", link: "#" },
  ];
  return (
    <>
      <Show above="xl">
        <Box
          as="aside"
          w={"70px"}
          h={"100vh"}
          overflow="hidden"
          transition="width 0.5s"
          width={isSidebarLocked ? "250px" : "70px"}
          position={"sticky"}
          top={"0px"}
          left={"0px"}
          p={4}
          zIndex={111}
          _hover={{
            width: "250px",
            ".hover-link": { display: "block" },
          }}
          bg={bgColor}
        >
          <HStack position={"sticky"} top={"0px"} zIndex={22222222222222}>
            <Image src={logo} alt="logo" />
            <Heading
              as="h1"
              fontSize="2xl"
              fontWeight="bold"
              display={isSidebarLocked ? "block" : "none"}
              className="hover-link"
              transition="hover-link 0.3s"
            >
              Vuexy
            </Heading>
            <IconButton
              aria-label="Toggle Sidebar Lock"
              variant={"unstyled"}
              icon={
                isSidebarLocked ? (
                  <LuCircleDot size={20} />
                ) : (
                  <LuCircle size={20} />
                )
              }
              onClick={toggleSidebarLock}
              display={isSidebarLocked ? "block" : "none"}
              className="hover-link"
              transition="hover-link 0.3s"
              size={20}
              position={"absolute"}
              top={0}
              right={0}
            />
          </HStack>

          <List
            styleType="none"
            padding={1}
            margin={0}
            height="100%"
            overflowY={"auto"}
            color={textColor}
            display={"flex"}
            flexDirection={"column"}
            gap={isSidebarLocked ? "0" : "4"}
            mt={2}
            // gap={4}
            textColor={"gray"}
          >
            {items.map(({ icon: Icon, label, link }) => (
              <ListItem
                key={label}
                _hover={{ bg: "purple.50", color: textColor }}
                // my={3}
                // my={isSidebarLocked ? "0" : "0"}
                rounded={"md"}
                textAlign={"center"}
                display={"flex"}
                // px={2}
                p={isSidebarLocked ? "2" : "0"}
              >
                <Icon size={20} />

                <Accordion
                  allowToggle
                  allowMultiple
                  color="gray"
                  variant={"unstyled"}
                  textDecoration="none"
                  display={isSidebarLocked ? "block" : "none"}
                  className="hover-link"
                  transition="opacity hover-link 0.3s"
                  //   style={{ marginLeft: "5px" }}
                >
                  <AccordionItem border="none" px={2}>
                    <h2>
                      <AccordionButton
                        bg="transparent"
                        _focus={{ boxShadow: "none" }}
                        p={0}
                      >
                        <Box href={link} as="span" flex="1" textAlign="left">
                          {label}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      pb={2}
                      p={1}
                      display={"flex"}
                      alignItems={"center"}
                      gap={2}
                      rounded={"md"}
                      _hover={{ bg: "purple.200", textColor: "white" }}
                    >
                      <GoCircle size={10} />
                      Analaytic
                    </AccordionPanel>
                    <AccordionPanel
                      pb={2}
                      p={1}
                      display={"flex"}
                      alignItems={"center"}
                      gap={2}
                      rounded={"md"}
                      _hover={{ bg: "#7367f0", textColor: "white" }}
                    >
                      <GoCircle size={10} />
                      e-commerce
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </ListItem>
            ))}
          </List>
        </Box>
      </Show>
    </>
  );
}

export default SideBar;
