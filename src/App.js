import logo from './logo.svg';
import './App.css';
import { Box, Button, SimpleGrid, Stack } from '@chakra-ui/react';
import CommonCard from './components/CommonCard';
import img1 from '../src/assets/img1.jpg'
import img2 from '../src/assets/img2.jpg'
import img3 from '../src/assets/img3.jpg'


function App() {
  return (
    <Box as='section' maxW='6xl' marginX={'auto'}>
      <SimpleGrid columns={{md: 2, lg: 3}} spacing='2vw'>
        <CommonCard 
          img={img1} 
          isAuction={true}
          hotDeal={true}
          title='#B8/457843'
          seller='Enoch Citizen'
          isLiked={false}
          likeCount={92}
          amount={260}
          endTime={'January, 10, 2023'}
        />
        <CommonCard 
          img={img2} 
          isAuction={true}
          hotDeal={true}
          title='#B8/457843'
          seller='Enoch Citizen'
          isLiked={true}
          likeCount={32}
          amount={260}
          endTime={'December, 27, 2022'}
        />
        <CommonCard 
          img={img3} 
          isAuction={false}
          hotDeal={true}
          title='#B8/457843'
          seller='Enoch Citizen'
          isLiked={false}
          likeCount={92}
          amount={260}
          previousAmount={300}
          endTime={'December, 31, 2022'}
        />
      </SimpleGrid>
    </Box>
  );
}

export default App;
