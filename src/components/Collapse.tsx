import { Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  content: string;
  expandedByDefault?: boolean;
  limit?: number
};

const Collapse = ({ content, expandedByDefault = false, limit = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(expandedByDefault);

  if (content.length < limit) return <Text>{content}</Text>;
  return !isExpanded ? (
    <>
      <Text display={"inline"}>{content.substring(0, limit) + "... "}</Text>
      <Text
        fontWeight={"bold"}
        color={"blue.500"}
        display={"inline"}
        cursor={"pointer"}
        as={"u"}
        onClick={() => setIsExpanded(true)}
      >
        More
      </Text>
    </>
  ) : (
    <>
      <Text display={"inline"}>{content + " "}</Text>
      <Text
        fontWeight={"bold"}
        color={"blue.500"}
        display={"inline"}
        cursor={"pointer"}
        as={"u"}
        onClick={() => setIsExpanded(false)}
      >
        Less
      </Text>
    </>
  );
};

export default Collapse;
