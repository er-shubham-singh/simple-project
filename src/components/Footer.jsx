import React from 'react';
import {Box, Button, HStack, Heading, Input, Stack, VStack,Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';

const Footer= () => {
  return <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
     <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
        <Heading size="md" textTransform={"upperCase"} textAlign={'center'}>
            Follow me on Instagram
        </Heading>
         <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input placeHolder={'Enter email here...'} border={'none'} borderRadius={'none'} outline={"none"} focusBorderColor='none'/>
            <Button p={'0'} color={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend size={20} />
            </Button>
         </HStack>
        </VStack>
        <VStack w={'full'} 
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}>
            <Heading size={'md'} textTransform={'upperCase'} textAlign={'center'}>
                Video Hub
                </Heading>
                <Text>All right</Text>
        </VStack>

        <VStack w={'full'}
        borderBlock={['2px solid white','none']}
        borderBottom={['none']}
        marginTop={['2','none']}>
       
            <Heading size={'md'} textTransform={'upperCase'} marginTop={['2','none']}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme='purple'>
                <a href="https://www.google.com/" target='blank'>Google</a>
            </Button>
            <Button variant={'link'} colorScheme='purple'>
                <a href="https://www.instagram.com/mrshubham_singh?igsh=MWE0dmxhMjdtMGdhNQ==" target='blank'>Instagram</a>
            </Button>
            
        </VStack>
        
     </Stack>
  </Box>
}
// <HStack >

export default Footer;