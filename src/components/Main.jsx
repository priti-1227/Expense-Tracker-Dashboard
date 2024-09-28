import { Box, Container, Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import MainContent from '../sections/MainContent'
import Sales from './Sales'
import SliderContainer from './Shared/SliderContainer'
import ExpenseForm from './ExpenseForm'
import SideBar from './SideBar'

function Main() {
  const { colorMode } = useColorMode()
  return (
    <>
      <Flex>
        <SideBar />
        <Box
          bg={colorMode === 'dark' ? '#25293c' : '#f8f7fa'}
          opacity={'0.5px'}
          w={{ base: 'calc(100%-0px)', xl: 'calc(100% - 70px)' }}
          // padding={{ base: "4px", sm: "6px" }}
          p={4}
        >
          <Header />
          <MainContent />
          <Sales />

          <ExpenseForm />
        </Box>
      </Flex>
    </>
  )
}

export default Main
