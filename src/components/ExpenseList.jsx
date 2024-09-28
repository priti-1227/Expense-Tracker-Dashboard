import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useThemeColors } from '../hook/useThemeColors'
import ExpenseContext from '../context/ExpenseProvider'
import FilterComponent from './Shared/FilterComponent'

function ExpenseList() {
  const { bgColor, textColor, grayText } = useThemeColors()
  const { state, dispatch } = useContext(ExpenseContext)

  const [filterData, setFilterData] = useState(state.expenses)
  console.log('filterData: ', filterData)

  const applyFilters = (filters) => {
    console.log('Filters applied:', filters)
    const newFilterData = state.expenses.filter((expenses) => {
      console.log('state.expenses: ', state.expenses)
      const matchesCategory = filters.category
        ? expenses.Category === filters.category
        : true
      console.log('matchesCategory: ', matchesCategory)

      const matchesDate = filters.date
        ? expenses.DateTime === filters.date
        : true
      console.log('match: ', matchesDate)
      return matchesCategory && matchesDate
    })
    setFilterData(newFilterData)
    console.log('newFilterData: ', newFilterData)
  }
  useEffect(() => {
    setFilterData(state.expenses)
  }, [state.expenses])

  const categoryOptions = state.categories.map((category) => ({
    value: category,
    label: category,
  }))
  console.log('categoryOptions: ', categoryOptions)

  return (
    <Box display={'flex'} flexDirection={'column'} gap={3} maxH={'400px'}>
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
      <FilterComponent
        categoryOptions={categoryOptions}
        onApplyFilters={applyFilters}
      />

      <List overflowY={'scroll'}>
        {filterData.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          filterData.map((expense, index) => (
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
          ))
        )}
        {console.log('state.expenses: ', state.expenses)}
      </List>
    </Box>
  )
}

export default ExpenseList
