import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  onSelectSort: (sort: string) => void;
  selectedSort: string;
};

const SortSelector = ({onSelectSort,selectedSort}:Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-date", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order By: {selectedSort? sortOrders.find(o=>o.value === selectedSort)?.label: "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} value={order.value} onClick={() => onSelectSort(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
