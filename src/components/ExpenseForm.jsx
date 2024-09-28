import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useThemeColors } from '../hook/useThemeColors'
import { useForm } from 'react-hook-form'

import { useContext } from 'react'
import ExpenseContext, { ExpenseProvider } from '../context/ExpenseProvider'
import ExpenseList from './ExpenseList'

const schema = yup.object().shape({
  DateTime: yup.string().required('Date Time is required'),
  Category: yup.string().required('Category is required'),
  SpentOn: yup.string().required('SpentOn is required'),
  Amount: yup
    .number()
    .typeError('Amount must be a number')
    .required('Amount is required'),
})

function ExpenseForm() {
  const { bgColor, textColor, grayText } = useThemeColors()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const { state, dispatch } = useContext(ExpenseContext)

  // const [formData, setFormData] = useState([])

  const onSubmit = (data) => {
    console.log('Form submitted>>>', data)
    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        id: Date.now(),
        ...data,
      },
    })
    reset()
  }

  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2,1fr)' }}
        gap={6}
      >
        <GridItem bg={bgColor} boxShadow="xl" rounded="md" p={6}>
          <Box display={'flex'} flexDirection={'column'} gap={3}>
            <Heading
              as="h2"
              size="md"
              fontSize={'xl'}
              color={textColor}
              fontWeight={'normal'}
            >
              Expense Info
            </Heading>
            <Text fontSize="smaller" color={grayText}>
              Enter your expense information below.
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.DateTime} mb={3}>
                <Input
                  id="DateTime"
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  {...register('DateTime')}
                />
                <FormErrorMessage>{errors?.DateTime?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.Category} mb={3}>
                <Select id="Category" {...register('Category')}>
                  {state.categories.length !== 0
                    ? state.categories.map((item, id) => (
                        <option id={id}>{item}</option>
                      ))
                    : null}
                  {console.log('gshdghasd>>>', state.categories)}
                </Select>
                <FormErrorMessage>{errors?.Category?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.SpentOn} mb={3}>
                <Input
                  id="SpentOn"
                  placeholder="Spent on"
                  size="sm"
                  {...register('SpentOn')}
                />
                <FormErrorMessage>{errors?.SpentOn?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.Amount} mb={3}>
                <InputGroup size="sm">
                  <Input
                    id="Amount"
                    placeholder="Amount"
                    type="number"
                    {...register('Amount')}
                  />
                  <InputRightElement width="2.5rem">
                    <Button h="1.75rem" size="sm">
                      Rs
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors?.Amount?.message}</FormErrorMessage>
              </FormControl>
              <Textarea placeholder="Remarks" size="sm" mb={3} />
              <Button colorScheme="purple" type="submit">
                + Expense Add
              </Button>
            </form>
          </Box>
        </GridItem>
        {/* 2nd grid  */}
        <GridItem bg={bgColor} boxShadow="xl" rounded="md" p={6}>
          {/* <Box display={'flex'} flexDirection={'column'} gap={3} maxH={'400px'}>
            <Heading
              as="h2"
              size="md"
              fontSize={'xl'}
              color={textColor}
              fontWeight={'normal'}
            >
              Recent Expense
            </Heading>
            <Text fontSize="smaller" color={grayText}>
              Here are few expenses you've made
            </Text>
            <List overflowY={'scroll'}>
              {formData.map((expense, index) => (
                <ListItem
                  key={index}
                  bgColor={bgColor}
                  boxShadow="xl"
                  p={3}
                  display={'flex'}
                  justifyContent={'space-between'}
                  mb={2}
                >
                  <Text display={'flex'} flexDirection={'column'}>
                    <span>{expense.Category}</span>
                    <span>{expense.SpentOn}</span>
                    <span>{expense.DateTime}</span>
                  </Text>
                  <Text>{expense.Amount} Rs</Text>
                </ListItem>
              ))}
            </List>
          </Box> */}
          <ExpenseList />
        </GridItem>
      </Grid>
    </>
  )
}

export default ExpenseForm
