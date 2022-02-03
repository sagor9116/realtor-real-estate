import Link from 'next/link';
import {
    Flex,
    Box,
    Spacer,
    Menu,
    MenuButton,
    MenuItem,
    IconButton,
    MenuList,
} from '@chakra-ui/react';

import {
    RiMenu3Line,
    RiHomeHeartFill,
    RiChatCheckFill,
    RiSearchEyeFill,
    RiKey2Fill,
} from 'react-icons/ri';

const NavBar = () => {
    return (
        <Flex p="2" borderBottom="1px" borderColor="gray.300">
            <Box fontSize="3xl" color="green.400" fontWeight="bold">
                <Link href="/" paddingLeft="2">
                    REALTOR
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<RiMenu3Line />}
                        aria-label="Options"
                        variant="outline"
                        fontSize="xl"
                        color="black"
                    />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<RiHomeHeartFill />}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem icon={<RiSearchEyeFill />}>
                                Search
                            </MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<RiChatCheckFill />}>
                                For Rent
                            </MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<RiKey2Fill />}>For Sale</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
};

export default NavBar;
