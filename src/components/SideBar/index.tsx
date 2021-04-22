import { DrawerCloseButton, DrawerContent, DrawerOverlay, Box, Drawer, useBreakpointValue, DrawerHeader, DrawerBody  } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SideBarContext'
import { SideBarNav } from './SideBarNav'

export function SideBar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen}  placement="top" onClose={onClose} >
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4" >
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>
             <SideBarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8" >
      <SideBarNav />
    </Box>
  )
}