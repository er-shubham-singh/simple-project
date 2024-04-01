import {Box,Image,Heading, Container,Stack, Text} from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


//

const headingOptions={
    pos:'absolute',
    left : '50%',
    top:'50%',
    transform:'translate(-50%, -50%)',
    textTransform:'upperCase',
    p:'4',
    size:'2xl',
}
const Home = () => {
  return <Box >

<MyCarousel />
<Container maxW ={'container.xl'} minH={'70vh'} p="16" >
    <Heading textTransform={'upperCase'} py="2" w={'fit-content'} borderBottom={"2px solid"} m="auto" marginTop={['-350','auto']}>
        Services
        </Heading>
        <Stack
        h='full'
        p={'4'}
        alignItems={"center"}
        direction={['column','row']} //stack ki achhi baat ye hai ki responsivee banti jati haai mobile ke column ho jayega aur big screen ke liye row
        
        >
            <Image src={img5} h= {['40','400']} filter={"hue-rotate(-130deg)"} />


        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
        Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. Voluptate, 
            autem velit blanditiis sequi libero odit facere iste.
             Fugiat, laborum culpa enim at corrupti officia cumque beatae fuga laboriosam alias repellat.
             Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. Voluptate, 
            autem velit blanditiis sequi libero odit facere iste.
             Fugiat, laborum culpa enim at corrupti officia cumque beatae fuga laboriosam alias repellat.
             
        </Text>
        </Stack>
</Container>
   </Box>
  
};
 const MyCarousel = () =>(
    <Carousel
     autoPlay 
     infiniteLoop 
     interval={1000} 
     showStatus={false} 
     showThumbs={false} 
     showArrows={false}
     >
        <Box w={'full'} h={'100vh'}>
<Image src ={img1} />
<Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
<Image src ={img2} />
<Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Future is gaming</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
<Image src ={img3} />
<Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming on Console</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
<Image src ={img4} />
<Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Knight Light is Cool</Heading>
        </Box>
     </Carousel>
);


export default Home;
