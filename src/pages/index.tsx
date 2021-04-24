import { useRouter } from 'next/router';
import {Box, Button, Flex, Stack} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from '../components/Form/input'
import { Logo } from '../components/Header/Logo';

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async ({email, password}) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    
    router.push('/dashboard')

  }

  return (
   <Flex
     w="100vw"
     h="100vh"
     align="center"
     justify="center"
     >
     <Flex
       as="form"
       w="100%"
       maxWidth="360"
       bg="gray.800"
       p="8"
       borderRadius={8}
       flexDir="column"
       onSubmit={handleSubmit(handleSignIn)}
       >
         <Stack  spacing="4" >
           <Box mx="auto" justifyContent="center" align="center">
            <Logo  />
           </Box>

            <Input
              name="email"
              type="email"
              error={errors.email}
              label="E-mail"
              {...register('email')} 
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')} 
            />
         </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>    

      </Flex>
   </Flex>
  )
}
