import { Avatar, Button, Container, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
        <VStack 
        alignItem={'stretch'} 
        spacing={'8'} 
        w={['full','96']} 
        m={'auto'} 
        my={'16'}>
        <Heading>Video Hub</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}/>
        
        <Input 
     placeholder='Name'
      type='text'
       required
        focusBorderColor={'purple.500'} 
    />


    <Input 
     placeholder='Type email'
      type='email'
       required
        focusBorderColor={'purple.500'} 
    />

    <Input 
     placeholder='Type password'
      type='password'
       required
        focusBorderColor={'purple.500'} />
   
   <Button w={'full'} colorScheme='purple' type='submit' required>Sign IN</Button>
        
        <HStack alignSelf={'flex-end'}>
            <Text textAlign={'right'} >All tready SignUp ?</Text>
        <Button variant={'link'} colorScheme={'purple'} >
    <Link to={"/login"}>Login Now</Link>
   </Button>
   </HStack>
        </VStack>
    </form>
  </Container>
}


export default Signup;