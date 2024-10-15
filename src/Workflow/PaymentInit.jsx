import { Box ,Text } from '@chakra-ui/react'
import { Handle, Position } from '@xyflow/react'
import React from 'react'

function PaymentInit({ data:{ amount } }) {
  return (
    <Box bg="white" border={"1px solid #aa1fff"} >
       
       <Box bg="#410566" p={1}>
        <Text fontsize="small" color="white" >
            Payment Initialized
        </Text>

       </Box>
        <Box p={2} >
            <Text fontSize="2xl" color="bule.600" >
                ${amount}
            </Text>
        </Box>
         <Handle type='source' position={Position.Right} />
    </Box>
  )
}

export default PaymentInit