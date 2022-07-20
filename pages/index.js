//file imports
import styles from "../styles/Home.module.css";
import { useAuth } from "@/lib/auth";
import Logo from "../assets/logo";
//Node imports
import Head from "next/head";
import { Button, Heading, Flex, Box } from "@chakra-ui/react";
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
      <Flex  align-items="center" justify-content="center">
      <Logo />
      <main className={styles.main}>
        {auth.user ? (
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>
      </Flex>

    </Flex>
  );
};
export default Home;
