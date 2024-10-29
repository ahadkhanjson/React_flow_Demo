/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, IconButton, Text } from '@chakra-ui/react';
import { Handle, Position , useReactFlow } from '@xyflow/react';
import React from 'react';
import { X } from 'react-bootstrap-icons';

function StartTrigger({
  id
}) {
  const { setNodes } = useReactFlow();
  return (
    <Box bg="green" border={"1px solid #aa1fff"} >
       
    <Box bg="green" p={1}>
     <Text fontSize="small" color="white" >
       START
     </Text>

    </Box>
    <IconButton
        aria-label="Delete Payment Provider"
        pointerEvents="all"
        icon={<X/>}
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
 </Box>
  );
}

export default StartTrigger;
