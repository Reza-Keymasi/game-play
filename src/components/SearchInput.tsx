import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch:(searchText:string) => void
}

const SearchInput = ({onSearch}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(inputRef.current) onSearch(inputRef.current.value)
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
