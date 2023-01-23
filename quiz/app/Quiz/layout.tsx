"use client"
import { ChakraProvider, Heading, Highlight } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
                <Heading p="5">
                    <Highlight query='Quiz' styles={{  bg: 'orange.100' , rounded: 'full'}}>
                        Quiz App
                    </Highlight>
                </Heading>
                {children}
        </ChakraProvider>
      </body>
    </html>
  )
}