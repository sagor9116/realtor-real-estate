import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Realtor Real Estate</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Realtor Real Estate" />
                <meta name="title" property="og:title" content="Realtor" />
                <meta property="og:type" content="website" />
                <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/51880186577_41b3f75e78_h.jpg" />
                <meta name="description" property="og:description" content="Realtor Real Estate" /><meta name="author" content="Sagor Roy" />
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <NavBar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
};

export default Layout;
