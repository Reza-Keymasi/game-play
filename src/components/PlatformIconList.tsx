import {
    FaPlaystation,
    FaXbox,
    FaWindows,
    FaLinux,
    FaApple,
    FaAndroid,
  } from "react-icons/fa";
  import {MdPhoneIphone} from "react-icons/md"
  import {SiNintendo} from "react-icons/si"
  import {BsGlobe} from "react-icons/bs"
  import {IconType} from "react-icons"
import { Platform } from '../hooks/useGame'
import { HStack, Icon } from '@chakra-ui/react'

interface Props {
    platforms:Platform[]
}

const PlatformIconList = ({platforms}:Props) => {
    const iconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintento:SiNintendo,
        mac:FaApple,
        androoid:FaAndroid,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe
      }
  return (
    <HStack marginY="10px">
     {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color="gray.500" />)}
    </HStack>
  )
}

export default PlatformIconList