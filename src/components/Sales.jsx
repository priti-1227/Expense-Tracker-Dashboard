import {
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  List,
  ListItem,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'

import { BsThreeDotsVertical } from 'react-icons/bs'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md'
import { PiTicketThin } from 'react-icons/pi'
import { CiMail } from 'react-icons/ci'
import { RiLink } from 'react-icons/ri'
import chart2 from '../assets/cardImages/chart2.png'
import india from '../assets/flags/in.png'
import usa from '../assets/flags/us.png'
import ProjectTable from './ProjectTable'
import { BiDollar } from 'react-icons/bi'
import { useThemeColors } from '../hook/useThemeColors'
import IconButton from './Shared/IconButton'
import CustomMenu from './Shared/CustomMenu'
import { TbClick } from 'react-icons/tb'
import { LuUsers } from 'react-icons/lu'
import { IoWarningOutline } from 'react-icons/io5'
import { IoBanOutline } from 'react-icons/io5'

import { color } from 'framer-motion'

// import { dataList, totalEarning } from "../../src/data/data";

const SaleByCountries = [
  {
    state: 'Emails',
    amount: '$8,567k',
    percentage: '12.4%',
    country: 'United States',

    flagSrc: usa,
  },
  {
    state: 'Opened',
    amount: '$9,345k',
    percentage: '15.6%',
    country: 'india',
    flagSrc: india,
  },
  {
    state: 'Clicked',
    amount: '$8,567k',
    percentage: '12.4%',
    country: 'United States',
    flagSrc: usa,
  },
  {
    state: 'Subscribe',
    amount: '$9,345k',
    percentage: '10.6%',
    country: 'Canada',
    flagSrc: india,
  },
  {
    state: 'Complaints',
    amount: '$8,567k',
    percentage: '10.4%',
    country: 'United States',
    flagSrc: usa,
  },
  {
    state: 'Unsubscribe',
    amount: '$9,345k',
    percentage: '15.6%',
    country: 'Canada',
    flagSrc: india,
  },
]

const totalEarning = [
  { amount: '$9,345k', percentage: '15.6%', country: 'Canada', icon: BiDollar },
  {
    amount: '$8,567k',
    percentage: '12.4%',
    country: 'United States',
    flagSrc: usa,
  },
]

function Sales() {
  const {
    bgColor,
    textColor,
    borderColor,
    grayText,
    cyanIconBg,
    purpleIconBg,
    greenIconBg,
    orangeIconBg,
    redIconBg,
    grayIconBg,
  } = useThemeColors()
  const dataList = [
    {
      state: 'Clicked',
      amount: '$8,567k',
      percentage: '12.4%',
      country: 'United States',

      icon: CiMail,
      bg: greenIconBg,
      color: 'green.200',
    },
    {
      state: 'Subscribe',
      amount: '$9,345k',
      percentage: '10.6%',
      country: 'Canada',
      icon: RiLink,
      bg: cyanIconBg,
      color: 'cyan.200',
    },
    {
      state: 'Complaints',
      amount: '$8,567k',
      percentage: '10.4%',
      country: 'United States',
      icon: TbClick,
      bg: orangeIconBg,
      color: 'orange.200',
    },
    {
      state: 'Complaints',
      amount: '$8,567k',
      percentage: '10.4%',
      country: 'United States',
      icon: LuUsers,
      bg: purpleIconBg,
      color: 'purple.200',
    },
    {
      state: 'Complaints',
      amount: '$8,567k',
      percentage: '10.4%',
      country: 'United States',
      icon: IoWarningOutline,
      bg: grayIconBg,
      color: 'gray.200',
    },
    {
      state: 'Complaints',
      amount: '$8,567k',
      percentage: '10.4%',
      country: 'United States',
      icon: IoBanOutline,
      bg: redIconBg,
      color: 'red.200',
    },
  ]
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={6}
      >
        {/* ****1st box***** */}
        <Box bg={bgColor} boxShadow="xl" rounded="md" p={6}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Text
                fontSize="larger"
                fontWeight="normal"
                color={textColor}
                lineHeight="tall"
                letterSpacing="wide"
              >
                Sales by Countries
              </Text>
              <Text color={grayText} fontSize="small">
                Monthly Sales Overview
              </Text>
            </Box>
            {/* <BsThreeDotsVertical /> */}
            <CustomMenu
              menuButtonProps={{ background: 'transparent' }}
              icon={<BsThreeDotsVertical />}
              menuListProps={{
                minWidth: '150px',
                _hover: 'transparent',
              }}
              menuItems={[
                {
                  label: 'Download',
                  onClick: () => {},
                },
                {
                  label: 'Refresh',
                  onClick: () => {},
                },
                {
                  label: 'Share',
                  onClick: () => {},
                },
              ]}
            ></CustomMenu>
          </Box>
          <List mt={8}>
            {SaleByCountries.map((data, index) => (
              <ListItem
                key={index}
                my={4}
                display="flex"
                justifyContent="space-between"
                alignContent="center"
              >
                <Box display="flex" gap={6}>
                  <Image
                    src={data.flagSrc}
                    alt="flag"
                    w={'40px'}
                    h={'40px'}
                    borderRadius={'full'}
                  />
                  <Box>
                    <Text
                      fontSize="medium"
                      color={textColor}
                      fontWeight="normal"
                    >
                      {data.amount}
                    </Text>
                    <Text textColor={grayText} fontSize="small">
                      {data.country}
                    </Text>
                  </Box>
                </Box>
                <Box display="flex">
                  {data.percentage < '12' ? (
                    <MdOutlineKeyboardArrowDown size={20} color="red" />
                  ) : (
                    <MdOutlineKeyboardArrowUp size={20} color="#28c76f" />
                  )}
                  <Text
                    color={data.percentage < '12' ? 'red' : '#28c76f'}
                    fontSize="medium"
                    fontWeight="semibold"
                  >
                    {data.percentage}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* ****2nd Box ********** */}
        <Box bg={bgColor} boxShadow="xl" rounded="md" p={6}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Text
                fontSize="larger"
                fontWeight="normal"
                color={textColor}
                lineHeight="tall"
                letterSpacing="wide"
              >
                Total Earning
              </Text>
              <Box
                as="span"
                display={'flex'}
                justifyContent={'space-around'}
                alignItems={'center'}
              >
                <Text
                  textColor="#a5a3ae"
                  fontSize="35px"
                  fontWeight="normal"
                  color={textColor}
                  lineHeight="taller"
                  letterSpacing="wide"
                >
                  87%
                </Text>
                <MdOutlineKeyboardArrowUp size={20} color="#28c76f" />
                <Text color="#28c76f">25.8%</Text>
              </Box>
            </Box>
            {/* <BsThreeDotsVertical /> */}
            <CustomMenu
              menuButtonProps={{ background: 'transparent' }}
              icon={<BsThreeDotsVertical />}
              menuListProps={{
                minWidth: '150px',
                _hover: 'transparent',
              }}
              menuItems={[
                {
                  label: 'Download',
                  onClick: () => {},
                },
                {
                  label: 'Refresh',
                  onClick: () => {},
                },
                {
                  label: 'Share',
                  onClick: () => {},
                },
              ]}
            ></CustomMenu>
          </Box>
          <Image src={chart2} alt="chart2"></Image>
          <List mt={8}>
            {totalEarning.map((data, index) => (
              <ListItem
                key={index}
                my={6}
                display="flex"
                justifyContent="space-between"
                alignContent="center"
              >
                <Box display="flex" gap={6}>
                  <IconButton
                    bg={greenIconBg}
                    icon={CiMail}
                    color="green.200"
                  ></IconButton>
                  <Box>
                    <Text
                      fontSize="medium"
                      color={textColor}
                      fontWeight="normal"
                    >
                      Emails
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" gap={4}>
                  <Text color={'#5d596c'}>12,346</Text>
                  <Text color="#28c76f" fontSize="medium" fontWeight="semibold">
                    {data.percentage}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* *********3rd Box**** */}
        <Box bg={bgColor} boxShadow="xl" rounded="md" p={6}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Text
                fontSize="larger"
                fontWeight="normal"
                color={textColor}
                lineHeight="tall"
                letterSpacing="wide"
              >
                Monthly Campaign State
              </Text>
              <Text color={grayText} fontSize="small">
                8.52k Social Visiters
              </Text>
            </Box>
            {/* <BsThreeDotsVertical /> */}
            <CustomMenu
              menuButtonProps={{ background: 'transparent' }}
              icon={<BsThreeDotsVertical />}
              menuListProps={{
                minWidth: '150px',
                _hover: 'transparent',
              }}
              menuItems={[
                {
                  label: 'Download',
                  onClick: () => {},
                },
                {
                  label: 'Refresh',
                  onClick: () => {},
                },
                {
                  label: 'Share',
                  onClick: () => {},
                },
              ]}
            ></CustomMenu>
          </Box>
          <List mt={8}>
            {dataList.map((data, index) => (
              <ListItem
                key={index}
                my={6}
                display="flex"
                justifyContent="space-between"
                alignContent="center"
              >
                <Box display="flex" gap={6}>
                  <IconButton
                    bg={data.bg}
                    icon={data.icon}
                    color={data.color}
                    size={20}
                  ></IconButton>
                  {/* <IconButton
                    bg={data.bg}
                    icon={data.icon}
                    color={data.color}
                  ></IconButton> */}
                  <Box>
                    <Text
                      fontSize="medium"
                      color={textColor}
                      fontWeight="normal"
                    >
                      {data.state}
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" gap={4}>
                  <Text color={'#5d596c'}>12,346</Text>
                  <Text color="#28c76f" fontSize="medium" fontWeight="semibold">
                    {data.percentage}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* **********4th Box********** */}
        <Box bg={bgColor} boxShadow="xl" rounded="md" p={6}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Text
                fontSize="larger"
                fontWeight="normal"
                color={textColor}
                lineHeight="tall"
                letterSpacing="wide"
              >
                Monthly Campaign State
              </Text>
              <Text textColor={grayText} fontSize="small">
                8.52k Social Visiters
              </Text>
            </Box>
            {/* <BsThreeDotsVertical /> */}
            <CustomMenu
              menuButtonProps={{ background: 'transparent' }}
              icon={<BsThreeDotsVertical />}
              menuListProps={{
                minWidth: '150px',
                _hover: 'transparent',
              }}
              menuItems={[
                {
                  label: 'Download',
                  onClick: () => {},
                },
                {
                  label: 'Refresh',
                  onClick: () => {},
                },
                {
                  label: 'Share',
                  onClick: () => {},
                },
              ]}
            ></CustomMenu>
          </Box>
          <List mt={8}>
            {dataList.map((data, index) => (
              <ListItem
                key={index}
                my={6}
                display="flex"
                justifyContent="space-between"
                alignContent="center"
              >
                <Box display="flex" gap={6}>
                  <IconButton
                    bg={data.bg}
                    icon={data.icon}
                    color={data.color}
                    size={20}
                  ></IconButton>
                  <Box>
                    <Text
                      fontSize="medium"
                      color={textColor}
                      fontWeight="normal"
                    >
                      {data.state}
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" gap={4}>
                  <Text color={'#5d596c'}>12,346</Text>
                  <Text color="#28c76f" fontSize="medium" fontWeight="semibold">
                    {data.percentage}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <GridItem
          colSpan={{ base: 0, sm: 2 }}
          display={{ base: 'none', sm: 'block' }}
        >
          <ProjectTable />
        </GridItem>
      </Grid>
    </>
  )
}

export default Sales
