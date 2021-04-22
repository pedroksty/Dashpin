import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarDrawerProviderProps {
  children: ReactNode

}

type sideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as sideBarDrawerContextData)

export function SideBarDrawerProvider({children}: SideBarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])


  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext)