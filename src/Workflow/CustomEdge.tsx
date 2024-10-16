import { IconButton } from "@chakra-ui/react";

import React from "react";
import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "@xyflow/react";
import { X } from "react-bootstrap-icons";

export default function CustomEdge(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            left: `${labelX}px`,
            top: `${labelY}px`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "all", // Ensures the button can be clicked
          }}
        >
          <IconButton
            aria-label="Delete Edge"
            icon={<X />}
            colorScheme="red"
            bg="transparent"
            size="sm"
            onClick={() =>
              setEdges((prevEdges) =>
                prevEdges.filter((edge) => edge.id !== id)
              )
            }
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
