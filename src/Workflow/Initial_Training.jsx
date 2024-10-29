/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react';
import { Handle, Position , useReactFlow } from '@xyflow/react';
import React from 'react';
import { X } from "react-bootstrap-icons";
import { IconButton } from '@chakra-ui/react';





function Creating_Employee_Record({
  id
}) {

  const { setNodes } = useReactFlow();

  return (
    <Box bg="yellow" border={"1px solid #aa1fff"} >
       
    <Box bg="yellow" p={1}>
     <Text fontSize="small" color="red" >
     Creating Record for Employee
     </Text>
  
    </Box>
    <IconButton
        aria-label="Delete Payment Provider"
        pointerEvents="all"
        icon={<X />}
        color="red"
        bg="transparent"
        size="small"
        onClick={() =>
          setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
        }
      />

      <Handle type='target' position={Position.Left} />
      <Handle type='source' position={Position.Right} />
    
 </Box>
  );
}

export default Creating_Employee_Record;
