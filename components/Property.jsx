import Link from 'next/link';
import Image from 'next/image';
import millify from 'millify';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified, GoUnverified } from 'react-icons/go';
import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property }) => {
    const {
        coverPhoto,
        completionStatus,
        price,
        rentFrequency,
        rooms,
        title,
        baths,
        area,
        agency,
        isVerified,
        externalID,
    } = property;
    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex
                flexWrap="wrap"
                w="420px"
                p="5"
                paddingTop="0"
                justifyContent="flex-start"
                cursor="pointer"
            >
                <Box>
                    <Image
                        src={coverPhoto ? coverPhoto?.url : DefaultImage}
                        width={400}
                        height={260}
                    />
                </Box>
                <Box w="full">
                    <Flex
                        paddingTop="2"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Flex alignItems="center">
                            <Box paddingRight="3" color="green.400">
                                {isVerified ? <GoVerified /> : <GoUnverified />}
                            </Box>
                            <Text fontWeight="bold" fontSize="lg">
                                AED {millify(price)}
                                {rentFrequency && `/${rentFrequency}`}
                            </Text>
                        </Flex>
                        <Box>
                            <Avatar size="sm" src={agency?.logo?.url} />
                        </Box>
                    </Flex>
                    <Flex
                        alignItems="center"
                        p="1"
                        justifyContent="space-between"
                        w="250px"
                        color="green.400"
                    >
                        {rooms}
                        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
                        <BsGridFill />
                    </Flex>
                    <Text fontSize="md">
                        {title.length > 35
                            ? title.substring(0, 35) + '...'
                            : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    );
};

export default Property;
