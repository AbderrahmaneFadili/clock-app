import React, { useState } from "react";
import {
  LessMoreCircle,
  LessMoreLabel,
  LessMoreWrapper,
} from "./LessMore.styles";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const LessMore = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <LessMoreWrapper>
      <LessMoreLabel>{showMore ? "less" : "more"}</LessMoreLabel>
      <LessMoreCircle onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <FiChevronUp size={"1.2rem"} />
        ) : (
          <FiChevronDown size={"1.2rem"} />
        )}
      </LessMoreCircle>
    </LessMoreWrapper>
  );
};

export default LessMore;
