import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: ...
      </MenuButton>
      <MenuList>
        <MenuItem>hillo</MenuItem>
        <MenuItem>hillo</MenuItem>
        <MenuItem>hillo</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector