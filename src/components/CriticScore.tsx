import { Badge } from "@chakra-ui/react";
import React from "react";

type Props = {
  score: number;
};

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <>
      <Badge colorScheme={color} fontSize="14px" px={2} borderRadius={5}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
