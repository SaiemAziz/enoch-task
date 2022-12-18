import { Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import {AiFillHeart} from 'react-icons/ai'


// CommonCard component
const CommonCard = ({ img = '', hotDeal = false, isAuction = false, title = 'No Title', isLiked = false, seller = 'No Seller', likeCount = 0,  previousAmount = 0, amount = 0, endTime }) => {

    // states and variables
    let [liked, setLiked] = useState(isLiked)
    let [totalLiked, setTotalLiked] = useState(likeCount)
    
    // discount calculation
    let discount = 0;
    if(!isAuction && previousAmount > 0){
        discount = Math.round(100-((amount)*100/previousAmount));  
    }

    // like react handler function
    let likeClicked = () => {
        if(liked){
            setTotalLiked(x => x-1)
        }
        else {
            setTotalLiked(x => x+1)
        }
        setLiked(!liked)
    }    

    return (
        <Card mx={'auto'} bg={'#0b2237'} p={3}>
            <CardBody>

                {/* top badges */}
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={5}>
                    {
                        hotDeal ? <Badge border={'2px'} borderRadius={'full'} px={3} bg={'#141a30'} py={1} color={'#535874'} borderColor={"#535874"}>
                                    Hot Deal
                                </Badge> : <Text></Text>
                    }
                    <Badge border={'2px'} borderRadius={'full'} px={3} bg={'#141a30'} py={1} color={'white'} borderColor={isAuction ? '#9e420b' : '#45379f'}>
                        {isAuction ? 'AUCTION' : 'SALE'}
                    </Badge>
                </Box>

                {/* image  */}
                <Image
                    src={img}
                    borderRadius={'md'}
                    width={'full'}
                />

                {/* title and like  */}
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontStyle={'normal'} fontSize={'xl'} color={'#dbdde0'}>{title}</Text>
                    <Box as={'div'} display={'flex'} alignItems={'center'}>
                        <Button fontSize={'2xl'} colorScheme={'ghost'} color={liked ? '#ff0080' : '#474763'} onClick={likeClicked} cursor={'pointer'} p={0}><AiFillHeart/></Button>
                        <Text fontSize={'xl'} color={liked ? '#c7ccd0': '#474763'}>{totalLiked}</Text>
                    </Box>
                </Box>
                <Text fontStyle={'normal'} fontSize='' color={'#3f7bb6'} >{seller}</Text>
                
                {/* bid sale and timer     */}
                <Box as={'div'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} my={5}>
                    <Box position={'relative'} w={'42%'} bg={'#0e1f35'} border={'2px'} borderColor={'#1a2b51'} p={1.5} mr={1}>
                        {isAuction ? 
                            <Text as={'b'} fontStyle={'normal'} fontSize={'sm'} color={'#00c000'} >HIGHEST BID</Text>:
                            <Text as={'b'} fontStyle={'normal'} fontSize={'lg'}>
                                <strike style={{color: '#f87d00'}}>
                                    <span style={{color: '#d9303b'}}>${previousAmount}</span>
                                </strike>
                            </Text>
                        }<br />
                        <Text fontStyle={'normal'} fontSize={'xl'} color={'#f3f4f5'} >${amount}</Text>
                        {
                            !isAuction && 
                            <Badge position={'absolute'} top={-4} right={1} fontSize={'md'} borderRadius={'full'} px={3} bg='#00b307' py={0.5} color={'#f5fcf7'}>
                                {discount}% OFF
                            </Badge>
                        }
                    </Box>
                    <Box bg={'#0e1f35'} border={'2px'} borderColor={'#312a2f'} px={1} py={2} flexGrow={1}>
                        <Text as={'b'} fontStyle={'normal'} fontSize={'sm'} color={'#83add5'} >{isAuction ? 'AUCTION' : 'FLASH DEAL'} ENDS IN</Text>
                        <Timer endTime={endTime} />
                    </Box>
                </Box>

                {/* footer buttons  */}
                <Box as={'section'} width={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={3}>
                    {
                        !isAuction &&
                        <Button py={6} px={3} variant='outline' borderColor={'#9099a4'}
                        color={"#e9eaeb"} borderRadius={'sm'}  _hover={{backgroundColor: 'blue.700', borderColor: 'blue.700'}}>
                            ADD TO CART
                        </Button>
                    }
                    <Button py={6} flexGrow={1} variant='solid' bg={'#0083f4'}
                        color={"white"} borderRadius={'sm'}  _hover={{backgroundColor: 'blue.800'}}>
                        {isAuction ? 'BID NOW' : 'BUY NOW'}
                    </Button>
                </Box>
            </CardBody>


        </Card>
    );
};



// Timer function component
function Timer({endTime}){
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const getTime = () => {
      const time = Date.parse(endTime) - Date.now();    
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(endTime), 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Box as='div' className="timer" role="timer" display={'flex'} justifyContent={'space-between'} color={'white'} pr={1} fontSize={'18px'}>
        
          <Box as='div' className="box">
            <Text id="day">{days < 10 ? "0" + days : days}</Text>
          </Box>
          <Text>:</Text>
          <Box as='div' className="box">
            <Text id="hour">{hours < 10 ? "0" + hours : hours}</Text>
          </Box>
          <Text>:</Text>
          <Box as='div' className="box">
            <Text id="minute">{minutes < 10 ? "0" + minutes : minutes}</Text>
          </Box>
          <Text>:</Text>
          <Box as='div' className="box">
            <Text id="second">{seconds < 10 ? "0" + seconds : seconds}s</Text>
          </Box>
        
      </Box>
    );
};


export default CommonCard;
export {
    Timer
}