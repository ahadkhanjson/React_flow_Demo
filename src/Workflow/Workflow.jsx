import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
import { Box } from '@chakra-ui/react';
import { initialEdges, initialNodes } from './Workflow.constants';
import PaymentInit from './PaymentInit';
import PaymentCountry from './PaymentCountry';
import PaymentProvider from './PaymentProvider';
 

 
export default function Workflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const nodeTypes ={
    "PaymentInit":PaymentInit,
    "paymentCountry":PaymentCountry,
    "paymentProvider":PaymentProvider
  }
 
  return (
  <Box height={"90vh"} width={"80vw"} border={"1px solid black"}  >
      <ReactFlow   
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        {/* <MiniMap /> */}
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      </Box>
  );
}