import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Toast,
  VStack,
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'

function Login() {
  const { login } = useContext(AuthContext)
  console.log('login: ', login)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    login(data)
  }
  return (
    <Box
      w={{ base: '90%', md: '400px' }}
      p={8}
      mx="auto"
      mt={10}
      bg="white"
      boxShadow="lg"
      borderRadius="lg"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Login
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Controller
              render={({ field }) => <Input {...field} />}
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              }}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Controller
              render={({ field }) => <Input type="password" {...field} />}
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              }}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="purple" width="full">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default Login
