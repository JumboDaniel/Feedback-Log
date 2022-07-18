//file imports
import styles from '../styles/Home.module.css'
import { useAuth } from '@/lib/auth'
//Node imports 
import Head from 'next/head'
import { Button, Heading } from '@chakra-ui/react'


const Home= ()=> {
  const auth= useAuth()
  return (
    <div className={styles.container}>
      <Head>
        <title>Feedback Log</title>
        <meta name="description" content="Feedback log" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading className={styles.title}>
          Feedback Log
        </Heading>
        <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>  
        <Button onClick={(e) => auth.signout()}>Sign out</Button>  

      <section>
        {JSON.stringify(auth.user)}
      </section>
      </main>

    </div>
  )
}
export default Home
