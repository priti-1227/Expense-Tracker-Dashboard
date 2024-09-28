import React from 'react'
import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
} from '@chakra-ui/react'
import card1 from '../assets/cardImages/card1.png'
import CirculatBar from '../assets/cardImages/CircularBar.png'
import { BsCart3 } from 'react-icons/bs'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { FaRegClock } from 'react-icons/fa6'
import { PiTicketThin } from 'react-icons/pi'
import { RiLink } from 'react-icons/ri'
import IconButton from '../components/Shared/IconButton'
import { CiCalendar } from 'react-icons/ci'
import { LuPieChart } from 'react-icons/lu'
import { RiPaypalLine } from 'react-icons/ri'

import { useThemeColors } from '../hook/useThemeColors'
import { BiDollar } from 'react-icons/bi'
import CustomBarChart from '../components/Shared/CustomBarChart'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts'
import CircularProgressBar from '../components/Shared/CircularProgress'
import SliderContainer from '../components/Shared/SliderContainer'
import ExpenseContext from '../context/ExpenseProvider'
import { useContext } from 'react'
// const data = [
//   { name: 'January', Total: 300 },
//   { name: 'February', Total: 600 },
//   { name: 'March', Total: 250 },
//   { name: 'April', Total: 900 },
//   { name: 'May', Total: 400 },
//   { name: 'June', Total: 950 },
//   { name: 'June', Total: 900 },
// ]

// const chartData = [
//   { x: 'Mo', y: 200 },
//   { x: 'Tu', y: 600 },
//   { x: 'We', y: 500 },
//   { x: 'Th', y: 450 },
//   { x: 'Fr', y: 700 },
//   { x: 'Sa', y: 550 },
//   { x: 'Su', y: 600 },
// ]

function MainContent() {
  const { state } = useContext(ExpenseContext)
  console.log('state: ', state)

  //Calculated monthly expenses
  const getMonthlyExpenses = (expense) => {
    const monthlyTotal = {} //{ "2024-9": 300, "2024-10": 450 }
    expense.forEach((expense) => {
      const date = new Date(expense.DateTime)
      const month = `${date.getFullYear()} - ${date.getMonth() + 1}`
      console.log('month: ', month)
      if (!monthlyTotal[month]) {
        monthlyTotal[month] = 0
      }
      monthlyTotal[month] += parseFloat(expense.Amount)
      console.log('monthlyTotal[month]: ', monthlyTotal[month])
    })

    return Object.entries(monthlyTotal).map(([month, total]) => ({
      month,
      total,
      //Object.entries(monthlyTotals) produce [["2024-9", 300], ["2024-10", 450]]  arrow function create new object , map function return array of object
    }))
  }
  const data = getMonthlyExpenses(state.expenses)
  console.log('data: ', data)

  //Calculate weekly expense
  const getCurrentWeekRange = () => {
    const currentDate = new Date()
    console.log('currentDate: ', currentDate)
    const startOfWeek = new Date(
      currentDate.setDate(currentDate.getDate() - currentDate.getDay())
    ) //sunday - 0
    console.log('startOfWeek: ', startOfWeek)
    const endOfWeek = new Date(currentDate.setDate(startOfWeek.getDate() + 6)) //saturday
    console.log('endOfWeek: ', endOfWeek)

    startOfWeek.setHours(0, 0, 0, 0)
    endOfWeek.setHours(23, 59, 59, 999)

    return { startOfWeek, endOfWeek }
  }
  const filterExpensesForCurrentWeek = (expenses) => {
    const { startOfWeek, endOfWeek } = getCurrentWeekRange()
    return expenses.filter((expenses) => {
      const expenseDate = new Date(expenses.DateTime)
      console.log('expenseDate: ', expenseDate)
      return expenseDate >= startOfWeek && expenseDate <= endOfWeek
    })
  }

  const getDailyExpensesForWeek = (weeklyExpenses) => {
    const dailyTotal = {}
    weeklyExpenses.forEach((expense) => {
      const date = new Date(expense.DateTime)
      const day = date.toLocaleDateString('en-US', { weekday: 'short' })
      console.log('day: ', day)

      if (!dailyTotal[day]) {
        dailyTotal[day] = 0
      }
      dailyTotal[day] += parseFloat(expense.Amount)
    })
    return Object.entries(dailyTotal).map(([day, total]) => ({
      x: day,
      y: total,
    }))
  }
  const weeklyExpenses = filterExpensesForCurrentWeek(state.expenses)
  console.log('weeklyExpenses: ', weeklyExpenses)
  const chartData = getDailyExpensesForWeek(weeklyExpenses)
  console.log('chartData: ', chartData)
  // const chartData = [
  //   {
  //     day: 'Wed',
  //     total: 34,
  //   },
  //   {
  //     day: 'Thu',
  //     total: 54,
  //   },
  //   {
  //     day: 'Fri',
  //     total: 56,
  //   },
  //   {
  //     day: 'Sat',
  //     total: 546,
  //   },
  // ]

  // Assuming expenses is an array of expense objects like:

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M' // Millions
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k' // Thousands
    } else {
      return num.toString() // Less than 1000
    }
  }
  const currentDate = new Date()

  // Calculate start and end of current week
  const startOfWeek = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1)
  ) // Monday
  const endOfWeek = new Date(currentDate.setDate(startOfWeek.getDate() + 6)) // Sunday

  // Calculate start and end of current month
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  )
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ) // Last day of the month

  // Calculate start and end of current year
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1)
  const endOfYear = new Date(currentDate.getFullYear(), 11, 31)

  let weekTotal = 0
  let monthTotal = 0
  let yearTotal = 0

  state.expenses.forEach((expense) => {
    const expenseDate = new Date(expense.DateTime)
    const amount = parseFloat(expense.Amount)

    if (expenseDate >= startOfWeek && expenseDate <= endOfWeek) {
      weekTotal += amount
    }

    if (expenseDate >= startOfMonth && expenseDate <= endOfMonth) {
      monthTotal += amount
    }

    if (expenseDate >= startOfYear && expenseDate <= endOfYear) {
      yearTotal += amount
    }
  })

  console.log(`Total for Current Week: ${formatNumber(weekTotal)} Rs`)
  console.log(`Total for Current Month: ${formatNumber(monthTotal)} Rs`)
  console.log(`Total for Current Year: ${formatNumber(yearTotal)} Rs`)

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
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2,1fr)' }}
      gap={6}
      py={6}
    >
      {/* ***********first box***** */}
      {/* <Grid
        bg={"#7367f0"}
        boxShadow="xl"
        rounded="md"
        p={6}
        color={"white"}
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        gap={4}
      >
        <GridItem>
          <Text fontSize={"xl"}>Website Analytics</Text>
          <Text>Total 28.5% Conversion Rate</Text>
          <Text my={3}>Spending</Text>
          <Flex gap={6}>
            {" "}
            <Box display={"flex"} alignItems={"center"} gap={4}>
              <Text bg={"#6f6b7d"} p={2} rounded={"lg"}>
                {" "}
                28%
              </Text>
              <Text>Spend</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={4}>
              <Text bg={"#6f6b7d"} p={2} rounded={"lg"}>
                {" "}
                28%
              </Text>
              <Text>Spend</Text>
            </Box>
          </Flex>
          <Flex gap={6} mt={2}>
            {" "}
            <Box display={"flex"} alignItems={"center"} gap={4}>
              <Text bg={"#6f6b7d"} p={2} rounded={"lg"}>
                {" "}
                28%
              </Text>
              <Text>Spend</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={4}>
              <Text bg={"#6f6b7d"} p={2} rounded={"lg"}>
                {" "}
                28%
              </Text>
              <Text>Spend</Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem hideBelow={"md"}>
          <Image src={card1} alt="card1" w={"180px"} h={"180px"}></Image>
        </GridItem>
      </Grid> */}
      <SliderContainer />

      {/* ********Right div*********** */}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2,1fr)' }}
        gap={6}
      >
        {/* ### 1 st  */}
        <GridItem bg={bgColor} boxShadow="xl" rounded="md" p={6}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Text fontSize={'smaller'} color={grayText}>
              Sales Overview
            </Text>
            <Text color={'#28c76f'} fontSize={'larger'} fontWeight={'normal'}>
              +18.2%
            </Text>
          </Box>
          <Text fontSize={'3xl'} color={textColor}>
            $42.5k
          </Text>
          <Flex justifyContent={'space-between'} mt={6} gap={2}>
            <Box>
              <Flex gap={2} alignItems={'center'}>
                <IconButton bg={cyanIconBg} icon={BsCart3}></IconButton>
                <Text color={textColor} fontSize={'md'}>
                  Order
                </Text>
              </Flex>

              <Text fontSize={'xl'} fontWeight={'normal'} color={textColor}>
                62.2%
              </Text>
              <Text color={grayText}>6,440</Text>
            </Box>
            <Box position="relative" height="100px" padding="10">
              <Divider
                orientation="vertical"
                style={{
                  position: 'absolute',
                  top: '10px',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: '90%',
                }}
              />

              <Center
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                bg="#a8aaae"
                px={'8px'}
                py={'4px'}
                rounded={'full'}
                textColor={'#6f6b7d'}
                fontSize={'small'}
              >
                vs
              </Center>
            </Box>
            <Box>
              <Flex gap={2} alignItems={'center'}>
                <Text color={textColor} fontSize={'md'}>
                  {' '}
                  Visits
                </Text>

                <IconButton
                  bg={purpleIconBg}
                  color={'purple.200'}
                  icon={RiLink}
                ></IconButton>
              </Flex>
              <Text fontSize={'xl'} fontWeight={'normal'} color={textColor}>
                62.2%
              </Text>
              <Text color={grayText}>6,440</Text>
            </Box>
          </Flex>

          <Progress
            value={80}
            size="sm"
            color="#d9f8fc"
            bg={'#7367f0'}
            rounded={'md'}
          />
        </GridItem>
        {/* #### 2nd */}
        <GridItem bg={bgColor} boxShadow="xl" rounded="md" p={3}>
          <IconButton
            bg={greenIconBg}
            color="green.200"
            icon={CiCalendar}
            rounded={'full'}
          ></IconButton>

          <Text fontSize={'xl'} color={textColor}>
            {formatNumber(yearTotal)}
          </Text>
          <Text fontSize={'sm'} color={grayText}>
            Expenses This Year
          </Text>
          <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
            <AreaChart
              width={200}
              height={150}
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#28c76f" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#28c76f" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="none" />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#28c76f"
                fillOpacity={1}
                fill="url(#total)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </GridItem>
      </Grid>
      {/* ********3rd grid  */}
      <GridItem bg={bgColor} boxShadow="xl" rounded="md" p={6}>
        <Box
          // gap={8}
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Heading
              as="h2"
              size="md"
              fontSize={'xl'}
              color={textColor}
              fontWeight={'normal'}
            >
              Weekly Expenses
            </Heading>
            <Text fontSize="smaller" color={grayText}>
              Weekly Expenses Overview
            </Text>
            <Flex
              alignItems="center"
              mt={{ base: '2px', md: '20px' }}
              justifyItems={'center'}
              color={'#6f6b7d'}
            >
              <Text fontSize="35px" fontWeight={'normal'} color={textColor}>
                {formatNumber(weekTotal)} Rs
              </Text>
              <Box ml={2} bg={greenIconBg} px={2} py={1} rounded="md">
                <Text fontSize="sm" color="green.200">
                  +4.2%
                </Text>
              </Box>
            </Flex>

            <Text fontSize="sm" mt={2}>
              You informed of this week compared to last week
            </Text>
          </Box>
          <Box>
            <CustomBarChart data={chartData} width={400} height={200} />
            <Tooltip />
          </Box>
        </Box>

        <Flex
          border={'1px'}
          borderColor={borderColor}
          p={4}
          justifyContent={'space-between'}
          mt={6}
          rounded={'md'}
          direction={{ base: 'column', md: 'row' }}
          gap={4}
        >
          <Box>
            <Flex gap={2} alignItems={'center'}>
              <IconButton
                bg={purpleIconBg}
                color={'purple.200'}
                icon={BiDollar}
              ></IconButton>
              <Text fontSize="sm" color={textColor}>
                Earnings
              </Text>
            </Flex>

            <Text fontSize={'2xl'} color={textColor}>
              $545.69
            </Text>
            <Progress
              value={80}
              size="xs"
              color={'purple.200'}
              colorScheme="purple"
              rounded={'md'}
            />
          </Box>

          <Box>
            <Flex gap={2} alignItems={'center'}>
              <IconButton bg={cyanIconBg} icon={LuPieChart}></IconButton>

              <Text fontSize="sm" color={textColor}>
                Earnings
              </Text>
            </Flex>

            <Text fontSize={'2xl'} color={textColor}>
              $545.69
            </Text>
            <Progress value={80} size="xs" color="#a5a3ae" rounded={'md'} />
          </Box>

          <Box>
            <Flex gap={2} alignItems={'center'}>
              <IconButton
                bg={redIconBg}
                icon={RiPaypalLine}
                color={'red.200'}
              ></IconButton>

              <Text fontSize="sm" color={textColor}>
                Earnings
              </Text>
            </Flex>

            <Text fontSize={'2xl'} color={textColor}>
              $545.69
            </Text>
            <Progress value={80} size="xs" colorScheme="red" rounded={'md'} />
          </Box>
        </Flex>
      </GridItem>
      {/* *********4th box********* */}
      <Grid
        bg={bgColor}
        boxShadow="xl"
        rounded="md"
        p={6}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2,1fr)' }}
      >
        <GridItem>
          <Text fontSize={'xl'} color={textColor}>
            Support Tracker
          </Text>
          <Text color={grayText} fontSize={'smaller'}>
            Last 7 Days
          </Text>
          <Text fontSize={'4xl'} mt={10} fontWeight={'bold'} color={textColor}>
            164
          </Text>
          <Text color={textColor} fontSize={'medium'}>
            Total Tickets
          </Text>
          <List spacing={3} mt={10}>
            <ListItem
              display={'flex'}
              alignContent={'center'}
              alignItems={'center'}
              gap={4}
            >
              <IconButton
                bg={purpleIconBg}
                icon={PiTicketThin}
                color={'purple.200'}
              ></IconButton>
              <Box color={textColor}>
                New Tickets
                <Text color={grayText} fontSize={'smaller'}>
                  142
                </Text>
              </Box>
            </ListItem>
            <ListItem
              display={'flex'}
              alignContent={'center'}
              alignItems={'center'}
              gap={4}
            >
              <IconButton
                bg={cyanIconBg}
                icon={FaRegCircleCheck}
                color={'cyan.200'}
              ></IconButton>
              <Box color={textColor}>
                Response Time
                <Text color={grayText} fontSize={'smaller'}>
                  28
                </Text>
              </Box>
            </ListItem>
            <ListItem
              display={'flex'}
              alignContent={'center'}
              alignItems={'center'}
              gap={4}
            >
              <IconButton
                bg={orangeIconBg}
                icon={FaRegClock}
                color={'orange.200'}
              ></IconButton>
              <Box color={textColor}>
                Response Time
                <Text color={grayText} fontSize={'smaller'}>
                  28
                </Text>
              </Box>
            </ListItem>
          </List>
        </GridItem>
        <GridItem
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <CircularProgressBar
            value={85}
            text={`${85}%`}
            strokeWidth={10} // Increased stroke width
            separatorCount={40}
            color="#7367f0" // Color of the progress bar
            gradientEndColor="#eae8fd"
            separatorWidth="10px" // Custom separator width
          />
          <div>
            {/* <Doughnut
              data={data}
              options={{
                elements: {
                  center: {
                    legend: { display: true, position: 'right' },
                    text: 'Red is 2/3 the total numbers',
                    color: '#FF6384', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 20, // Default is 20 (as a percentage)
                    minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                    lineHeight: 25, // Default is 25 (in px), used for when text wraps
                  },
                },
              }}
            /> */}
          </div>
        </GridItem>
      </Grid>
    </Grid>
  )
}

export default MainContent
