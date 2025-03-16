import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/platform-service";

type Props = {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId: number | null;
};

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find((p) => p.id === selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton my={2} as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem onClick={() => onSelectPlatform(p)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
