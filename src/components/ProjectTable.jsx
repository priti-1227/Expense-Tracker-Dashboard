import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  Progress,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import usa from "../assets/flags/us.png";
import { useThemeColors } from "../hook/useThemeColors";
import { BsThreeDotsVertical } from "react-icons/bs";
import avtar1 from "../assets/Avtar/avtar1.png";
import avtar2 from "../assets/Avtar/avtar2.png";

import figma from "../assets/Avtar/figma-label.png";
import sketch from "../assets/Avtar/sketch-label.png";
import social from "../assets/Avtar/social-label.png";

function ProjectTable() {
  const { bgColor, textColor } = useThemeColors();
  console.log("bg", bgColor, textColor);
  const customStyles = {
    headRow: {
      style: {
        color: textColor,
        borderColor: textColor,
        // backgroundColor: "black",
      },
    },
    pagination: {
      style: {
        color: textColor,
        backgroundColor: bgColor,
      },
    },
    rows: {
      style: {
        color: textColor,
        backgroundColor: bgColor,
      },
    },
    cells: {
      style: {
        padding: "2px",
        color: textColor,
        // backgroundColor: "black",
      },
    },
  };

  const columns = [
    {
      name: "NAME",

      sortable: true,
      cell: (row) => (
        <Box display="flex" alignItems="center" gap={4}>
          <Image
            src={figma}
            alt="flag"
            w={"40px"}
            h={"40px"}
            borderRadius={"full"}
          />
          <Box>
            <Text fontSize="medium" color="text.light" fontWeight="normal">
              {row.name}
            </Text>
            <Text textColor="#a5a3ae" fontSize="small">
              {row.date}
            </Text>
          </Box>
        </Box>
      ),
    },
    {
      name: "LEADER",
      selector: (row) => row.leader,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => <Progress value={50} colorScheme="blue" size="sm" />,
    },
    {
      name: "TEAM",
      selector: (row) => row.team,
      sortable: true,
      cell: (row) => (
        <AvatarGroup size="sm" max={3}>
          <Avatar name="Ryan Florence" src={avtar1} />
          <Avatar name="Segun Adebayo" src={avtar2} />
          <Avatar name="Kent Dodds" src={avtar1} />
        </AvatarGroup>
      ),
    },
    {
      name: "ACTION",
      selector: (row) => row.status,

      cell: (row) => <BsThreeDotsVertical color={"black"} />,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Website SEO",
      date: "10 May 2021",
      leader: "priti@gmail.com",
      status: { progress: 50 },
    },
    {
      id: 2,
      name: "Social Banners",
      date: "10 May 2021",
      leader: "triti@gmail.com",
      status: { progress: 80 },
    },
    {
      id: 3,
      name: "Logo Designs",
      date: "10 May 2021",
      leader: "kriti@gmail.com",
      status: { progress: 50 },
    },
    {
      id: 4,
      name: "IOS App Design",
      date: "10 May 2021",
      leader: "riti@gmail.com",
      status: { progress: 50 },
    },
    {
      id: 5,
      name: "Figma Dashboards",
      date: "10 May 2021",
      leader: "triti@gmail.com",
      status: { progress: 50 },
    },
    {
      id: 6,
      name: "kriti",
      date: "10 May 2021",
      leader: "kriti@gmail.com",
      status: { progress: 50 },
    },
    { id: 7, name: "riti", leader: "riti@gmail.com", status: { progress: 50 } },
    { id: 8, name: "riti", leader: "riti@gmail.com", status: { progress: 50 } },
    {
      id: 9,
      name: "triti",
      leader: "triti@gmail.com",
      status: { progress: 50 },
    },
    {
      id: 10,
      name: "kriti",
      leader: "kriti@gmail.com",
      status: { progress: 50 },
    },
    {
      id: 11,
      name: "riti",
      leader: "riti@gmail.com",
      status: { progress: 50 },
    },
  ];
  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = records.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <Box bg={bgColor} boxShadow="xl" rounded="md" p={1}>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={6}
      >
        <Text
          fontSize="large"
          fontWeight=""
          color={textColor}
          lineHeight="tall"
          letterSpacing="wide"
        >
          Projects
        </Text>
        <Flex alignItems={"center"} gap={4} fontSize={"14px"} color={textColor}>
          Search:
          <Input w={250} size={"lg"} onChange={handleFilter} />
        </Flex>
      </Box>
      <Divider mt={3}></Divider>
      <Box bg={bgColor}>
        <DataTable
          customStyles={customStyles}
          fontSize="larger"
          fontWeight="semibold"
          // color={textColor}
          lineHeight="tall"
          letterSpacing="wide"
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          fixedHeaderScrollHeight="300px"
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]}
        />{" "}
      </Box>
    </Box>
  );
}

export default ProjectTable;
