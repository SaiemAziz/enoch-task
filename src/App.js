import "./App.css";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import CommonCard from "./components/CommonCard";
import img1 from "../src/assets/img1.jpg";
import img2 from "../src/assets/img2.jpg";
import img3 from "../src/assets/img3.jpg";

// Main function
function App() {
  return (
    <Box as="section" maxW="6xl" marginX={"auto"}>
      <Text
        align={"center"}
        fontStyle={"normal"}
        fontSize={"4xl"}
        color={"#dbdde0"}
        padding={10}
      >
        Offer Sales
      </Text>
      <SimpleGrid columns={{ md: 2, lg: 3 }} spacing="2vw">
        {/* 1st card  */}
        <CommonCard
          img={img1}
          isAuction={true}
          hotDeal={true}
          title="#B8/457843"
          seller="Enoch Citizen"
          isLiked={false}
          likeCount={92}
          amount={260}
          endTime={"January, 10, 2027"}
        />
        {/* 2nd card  */}
        <CommonCard
          img={img2}
          isAuction={true}
          hotDeal={true}
          title="#B8/457843"
          seller="Enoch Citizen"
          isLiked={true}
          likeCount={32}
          amount={260}
          endTime={"December, 27, 2027"}
        />
        {/* 3rd card */}
        <CommonCard
          img={img3}
          isAuction={false}
          hotDeal={true}
          title="#B8/457843"
          seller="Enoch Citizen"
          isLiked={false}
          likeCount={92}
          amount={260}
          previousAmount={300}
          endTime={"December, 31, 2027"}
        />
      </SimpleGrid>
    </Box>
  );
}

export default App;
