import { Container, Spinner, Text ,keyframes} from "@chakra-ui/react";

const Loader = () => {

    const animationKeyframes = keyframes`
    0% { transform: scale(0.9) }
   
    100% { transform: scale(1) }
  `;

    const animation = `${animationKeyframes} 0.2s ease-in-out infinite alternate-reverse`;

    return (
        <Container height={'100%'} display={'flex'} alignItems={"center"} gap={"10px"} justifyContent={"center"} flexDirection={"column"}>
            <Spinner />
            <Text animation={animation}>Loading...</Text>
        </Container>
    )
}

export default Loader