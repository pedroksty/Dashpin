import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SideBarDrawerProvider } from '../contexts/SideBarContext'
import { makeServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <QueryClientProvider client={queryClient} >

        <SideBarDrawerProvider>

          <Component {...pageProps} />

        </SideBarDrawerProvider>

        <ReactQueryDevtools />

      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
