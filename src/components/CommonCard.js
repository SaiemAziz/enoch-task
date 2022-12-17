import { Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {AiFillHeart} from 'react-icons/ai'
import Timer from './Timer';


const CommonCard = ({ img = '', hotDeal = true, isAuction = false, title = 'No Title', isLiked = false, seller = 'No Seller', likeCount = 0,  previousAmount = 0, amount = 0, endTime }) => {

    let [liked, setLiked] = useState(isLiked)
    let [totalLiked, setTotalLiked] = useState(likeCount)
    
    let discount = 0;
    if(!isAuction){
        discount = Math.round(100-((amount)*100/previousAmount));  
    }

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
        <Card maxW='md' mx={'auto'} bg={'#0b2237'} p={3}>
            <CardBody pb={0}>
                <Box display='flex' alignItems={'center'} justifyContent={'space-between'} mb={5}>
                    <Badge border={'2px'} borderRadius='full' px={3} bg='#141a30' py='1' color={'#535874'} borderColor="#535874">
                        {hotDeal && 'Hot Deal'}
                    </Badge>
                    <Badge border={'2px'} borderRadius='full' px={3} bg='#141a30' py='1' color={'white'} borderColor={isAuction ? '#9e420b' : '#45379f'}>
                        {isAuction ? 'AUCTION' : 'SALE'}
                    </Badge>
                </Box>
                <Image
                    src={img}
                    alt='Green double couch with wooden legs'
                    borderRadius='md'
                    width={'full'}
                />
                <Stack my='6' spacing='0'>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontStyle={'normal'} fontSize='xl' color={'#dbdde0'}>{title}</Text>
                        <Box as={'div'} display={'flex'} alignItems={'center'}>
                            <Button fontSize={'2xl'} colorScheme={'ghost'} color={liked ? '#ff0080' : '#474763'} onClick={likeClicked} cursor={'pointer'} p={0}><AiFillHeart/></Button>
                            <Text fontSize={'xl'} color={liked ? '#c7ccd0': '#474763'}>{totalLiked}</Text>
                        </Box>
                    </Box>
                    <Text fontStyle={'normal'} fontSize='' color={'#3f7bb6'} >{seller}</Text>
                </Stack>

                <Box as={'div'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} my={5}>
                    <Box position={'relative'} w={'42%'} bg={'#0e1f35'} border={'2px'} borderColor={'#1a2b51'} p={1.5} mr={1}>
                        {isAuction ? 
                            <Text as={'b'} fontStyle={'normal'} fontSize='sm' color={'#00c000'} >HIGHEST BID</Text>:
                            <Text as={'b'} fontStyle={'normal'} fontSize='lg'>
                                <strike style={{color: '#f87d00'}}>
                                    <span style={{color: '#d9303b'}}>${previousAmount}</span>
                                </strike>
                            </Text>
                        }<br />
                        <Text fontStyle={'normal'} fontSize='xl' color={'#f3f4f5'} >${amount}</Text>
                        {
                            !isAuction && 
                            <Badge position={'absolute'} top={-4} right={1} fontSize={'md'} borderRadius='full' px={3} bg='#00b307' py={0.5} color={'#f5fcf7'}>
                                {discount}% OFF
                            </Badge>
                        }
                    </Box>
                    <Box w={'57%'} bg={'#0e1f35'} border={'2px'} borderColor={'#312a2f'} px={1} py={2}>
                        <Text as={'b'} fontStyle={'normal'} fontSize='sm' color={'#83add5'} >{isAuction ? 'AUCTION' : 'FLASH DEAL'} ENDS IN</Text>
                        <Timer endTime={endTime} />
                    </Box>
                </Box>
            </CardBody>
            <Box as={'section'} width={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={5} pt={0} >
                {
                    !isAuction &&
                    <Button p={6} variant='outline' borderColor={'#9099a4'}
                    color={"#e9eaeb"} borderRadius={'sm'}  w={'48%'} _hover={{backgroundColor: 'blue.700', borderColor: 'blue.700'}}>
                        ADD TO CART
                    </Button>
                }
                <Button p={6} w={isAuction? 'full' : '48%'} variant='solid' bg={'#0083f4'}
                    color={"white"} borderRadius={'sm'}  _hover={{backgroundColor: 'blue.800'}}>
                    {isAuction ? 'BID NOW' : 'BUY NOW'}
                </Button>
            </Box>
        </Card>
    );
};

export default CommonCard;