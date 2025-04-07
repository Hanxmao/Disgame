import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

const SearchBar = () => {
    const {update} = useGameQueryStore()
    const searchRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: FormEvent)=>{
        event.preventDefault()
        if(searchRef.current) update({search:searchRef.current.value})
    }


  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref = {searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
