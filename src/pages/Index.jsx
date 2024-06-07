import { Container, Text, VStack, Box, Heading, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>John Doe</Heading>
          <Text fontSize="lg" color="gray.600">Full Stack Developer</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="md" color="gray.500" mb={4}>
            Passionate about building scalable web applications and working with modern web technologies.
          </Text>
          <Button colorScheme="teal" size="lg">Contact Me</Button>
        </Box>
        <HStack spacing={4}>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            onClick={() => window.open("https://github.com", "_blank")}
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            onClick={() => window.open("https://linkedin.com", "_blank")}
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            onClick={() => window.open("https://twitter.com", "_blank")}
          />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;