import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../stores/gameQueryStore";

const PlatformSelector = () => {
  const { gameQuery, update } = useGameQueryStore();
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton my={2} as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem onClick={() => update({ platformId: p.id })} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
