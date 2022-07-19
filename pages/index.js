//file imports
import styles from "../styles/Home.module.css";
import { useAuth } from "@/lib/auth";
import Logo from "../assets/logo";
//Node imports
import Head from "next/head";
import { Button, Heading, Flex } from "@chakra-ui/react";

const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      className={styles.container}
      as="main"
      align="center"
      maxW="100%"
      justify="center"
      gap="5"
    >
      <Head>
        <title>Feedback Log</title>
        <meta name="description" content="Feedback log" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Logo />
        {auth.user ? (
          <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}

        <section>{JSON.stringify(auth.user)}</section>
      </main>
    </Flex>
  );
};
export default Home;
