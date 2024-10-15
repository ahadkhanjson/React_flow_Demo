import { Box , Flex, Text} from '@chakra-ui/react'
import { Position , Handle } from '@xyflow/react'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'

function PaymentCountry({ data:{ currency , country , countryCode } }) {
  return (
      <Flex
      alignItems={"center"}
      borderRadius={"8px"}
      bg={"#e2e8f0"}
      border={"2px solid #bbbdbf"}
      p={2}
      gap={2}
      width={"7em"}    
      >
        <Box>
  
       <ReactCountryFlag countryCode={countryCode} svg aria-label={country} style={{
        fontSize:'2em' , lineHeight:'2em'
       }} />

    </Box>
    <Flex grow={1}>
      <Box>
        <Text>{country}</Text>
        <Text>{currency}</Text>

      </Box>
    </Flex>
    <Handle type='source' position={Position.Right} />
    <Handle type='target' position={Position.Left} />
    </Flex>
    
  )
}

export default PaymentCountry