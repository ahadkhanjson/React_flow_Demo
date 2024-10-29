/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react';
import { Handle, Position , useReactFlow } from '@xyflow/react';
import { X } from "react-bootstrap-icons";
import { IconButton } from '@chakra-ui/react';
import React from 'react';

function Initial_training({
  
    id,
  }) {

    const { setNodes } = useReactFlow();
  return (
    <Box bg="white" border={"1px solid #aa1fff"} >
       
    <Box bg="green" p={1}>
     <Text fontsize="small" color="white" >
       Initial Training
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
     {/* <Box p={2} >
         <Text fontSize="2xl" color="bule.600" >
             ${amount}
         </Text>
     </Box> */}
      <Handle type='source' position={Position.Right} />
      <Handle type='target' position={Position.Left} />
 </Box>
  );
}

export default Initial_training;
