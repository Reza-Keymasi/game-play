import {HStack ,Switch, Text, useColorMode} from "@chakra-ui/react" 

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}  />
        {colorMode === 'dark' ? <Text>Light Mode</Text>: <Text>Dark Mode</Text>}
    </HStack>
  )
}

export default ColorModeSwitch