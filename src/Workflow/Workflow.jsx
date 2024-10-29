/* eslint-disable no-unused-vars */
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
import { Box, Button } from '@chakra-ui/react';
import { initialEdges, initialNodes } from './Workflow.constants';
import PaymentInit from './PaymentInit';
import PaymentCountry from './PaymentCountry';
import PaymentProvider from './PaymentProvider';
import PaymentProviderSelect from './PaymentProviderSelect';
import CustomEdge from './CustomEdge';
import StartTrigger from './Start_Trigger';
import On_Boarding from './On_Boarding';
import Sending_Welcome_Email from './Sending_Custom_Email';
import Creating_Employee_Record from './Initial_Training';
import Initial_training from './Initial_Trainning';
import Node_Selector from './Node_Selector';
 

 
export default function Workflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: 'custom-edge' };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );

  const nodeTypes ={
    "PaymentInit":PaymentInit,
    "paymentCountry":PaymentCountry,
    "paymentProvider":PaymentProvider,
    "paymentProviderSelect":PaymentProviderSelect,
    "Start_Trigger":StartTrigger,
    "On_Boarding":On_Boarding,
    "Sending_Welcome_Email":Sending_Welcome_Email,
    "Creating_Employee_Record":Creating_Employee_Record,
    "Initial_training":Initial_training,
    "Node_Selector":Node_Selector

  }

  const edgeTypes = {
     'custom-edge':CustomEdge
  }
 
  return (
    <>
    <Button onClick={()=>{
      console.log("Nodes :", nodes)
      console.log("Edges :", edges);
      
    }} > Print Path and node in console </Button>
  <Box height={"90vh"} width={"80vw"} border={"1px solid black"}  >
      <ReactFlow   
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
       
      >
        <Controls />
        {/* <MiniMap /> */}
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      </Box>
      </>
  );
}