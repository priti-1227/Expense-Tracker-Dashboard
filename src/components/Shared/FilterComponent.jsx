import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import Select from 'react-select'

function FilterComponent({ categoryOptions, onApplyFilters }) {
  console.log('categoryOptions: ', categoryOptions)
  const [filterValues, setFilterValues] = React.useState({})
  const handleFilterChange = (key, value) => {
    setFilterValues({
      ...filterValues,
      [key]: value,
    })
  }

  const handleApply = () => {
    onApplyFilters(filterValues)
  }
  return (
    <>
      <Box p={4} bg="white" maxW="100%" boxShadow="sm" borderRadius="md">
        <Stack direction="row" spacing={4} alignItems="center">
          <FormControl>
            <Select
              options={categoryOptions}
              isSearchable={true}
              placeholder="Search category"
              onChange={(option) =>
                handleFilterChange('category', option?.value)
              }
            />
            {console.log('categoryOptions: ', categoryOptions)}
          </FormControl>
          <Button colorScheme="teal" onClick={handleApply}>
            Search
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default FilterComponent
