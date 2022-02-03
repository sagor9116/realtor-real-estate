import Link from 'next/link';
import Image from 'next/image';
import { Box, Text, Button, Flex } from '@chakra-ui/react';


const Banner = ({imgURL,purpose,title1,title2,desc1,desc2,buttonText,linkName}) => {
    return (
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mt="10" gap="10">
        <Image src={imgURL} width="500" height="300" alt='banner images' />
        <Box>
          <Text fontSize="sm" color='gray.500' fontWeight="medium">{purpose}</Text>
          <Text fontSize="3xl" color='gray.500' fontWeight="bold">{title1} <br />
            {title2}
          </Text>
          <Text fontSize="lg" color='gray.500' paddingTop="3" paddingBottom="3">{desc1} <br /> {desc2}</Text>
          <Button colorScheme="teal" variant="outline">
            <Link href={linkName}>{buttonText}</Link>
          </Button>
        </Box>
      </Flex>
  );
};

export default Banner;
