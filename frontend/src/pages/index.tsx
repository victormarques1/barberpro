import  Head from "next/head"
import { Flex, Text } from '@chakra-ui/react'


export default function Home(){
  return(
    <>
        <Head>
          <title>BarberPro - Seu sistema completo</title>
        </Head>
        <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center">
          <Text color="barber.100" fontSize={30}>Página home</Text>
        </Flex>
    </>
  )
}