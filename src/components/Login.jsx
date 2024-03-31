import { Button, Container, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
        <VStack 
        alignItem={'stretch'} 
        spacing={'8'} 
        w={['full','96']} 
        m={'auto'} 
        my={'16'}>
        <Heading>Welcome Back</Heading>
    <Input  placeholder='Type email' type='email' required focusBorderColor={'purple.500'} />
    <Input  placeholder='Type password' type='password' required focusBorderColor={'purple.500'} />
   <Button variant={'link'} alignSelf={'flex-end'}>
    <Link to={"/forgetpassword"}>Forget Password</Link>
   </Button>
   <Button w={'full'} colorScheme='purple' type='submit' required>log IN</Button>
        
        <HStack alignSelf={'flex-end'}>
            <Text textAlign={'right'} >New user ?</Text>
        <Button variant={'link'} colorScheme={'purple'} >
    <Link to={"/signup"}>Sign Up</Link>
   </Button>
   </HStack>
        </VStack>
    </form>
  </Container>
}

export default Login;