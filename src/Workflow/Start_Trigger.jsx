/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react';
import { Handle, Position } from '@xyflow/react';
import React from 'react';

function StartTrigger() {
  return (
    <Box bg="green" border={"1px solid #aa1fff"} >
       
    <Box bg="green" p={1}>
     <Text fontsize="small" color="white" >
       START
     </Text>

    </Box>
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
