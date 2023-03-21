//file imports
import styles from "../styles/Home.module.css";
import { useAuth } from "@/lib/auth";
import Logo from "@/assets/logo";
import { GoogleSvg, GithubSvg } from "@/assets/svg";
//Node imports
import Head from "next/head";
import { Button, Heading, Flex, Box, Stack } from "@chakra-ui/react";
import EmptyState from "@/components/EmptyState";

const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      className={styles.container}
      as="main"
      align="center"
      W="100%"
      justify="center"
      gap="5"
    >
      <Head>
        <title>Feedback Log</title>
        <meta name="description" content="Feedback log" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex align-items="center" justify-content="center">
        <Logo />
        <main className={styles.main}>
          {auth.user ? (
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          ) : (
            <Stack>
              <Button
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                _hover={{ bg: "gray.700" }}
                _active={{ bg: "gray.800", transform: "scale(0.95)" }}
                size="lg"
                onClick={(e) => auth.signinWithGithub()}
              >
                <GithubSvg />
                Sign In With Github
              </Button>
              <Button
                backgroundColor="white"
                color="gray.900"
                fontWeight="medium"
                variant="outline"
                _hover={{ bg: "gray.100" }}
                _active={{ bg: "gray.100", transform: "scale(0.95)" }}
                size="lg"
                onClick={(e) => auth.signinWithGoogle()}
              >
                <GoogleSvg />
                Sign In With Google
              </Button>
            </Stack>
          )}
        </main>
      </Flex>
    </Flex>
  );
};
export default Home;
