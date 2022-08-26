import "./styles.css";
import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";

export default function App() {
  return (
    
    <Box w="100%" p={3} color="white">
      <ImageSlider slides={SlideData} />
    </Box>
  );
}
