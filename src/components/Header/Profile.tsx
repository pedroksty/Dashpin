import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile( {showProfileData = true}: ProfileProps ) {
  return (
    <Flex align="center" >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Pedro henrique
          </Text>
          <Text color="gray.300" fontSize="small">
            pedro@interas.com.br
          </Text>
        </Box>
      )}

    <Avatar size="md" name="Pedro henrique" src="https://github.com/pedroksty.png" />
  </Flex>
  )
}