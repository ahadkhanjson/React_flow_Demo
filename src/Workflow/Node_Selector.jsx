/* eslint-disable react/jsx-key */
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronBarDown } from "react-bootstrap-icons";
import { useReactFlow } from "@xyflow/react";

const Nodes = [
  {  name: "Start_Trigger" },
  {  name: "On_Boarding" },
  {  name: "Sending_Welcome_Email" },
  {  name: "Creating_Employee_Record" },
  {  name: "Initial_training" },
];

export default function Node_Selector() {
  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }) => {
    const location = Math.random() * 500;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: name,
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronBarDown />}>
        Add Node
      </MenuButton>
      <MenuList>
        {Nodes.map((provider) => (
          <MenuItem onClick={() => onProviderClick(provider)}>
            {provider.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}