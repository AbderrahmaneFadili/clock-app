import React, { useState } from "react";
import {
  LessMoreCircle,
  LessMoreLabel,
  LessMoreWrapper,
} from "./LessMore.styles";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { toggleShowMore } from "../../store/actions/showMoreInfo.actions";
import { useDispatch } from "react-redux";

const LessMore = () => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
    dispatch(toggleShowMore());
  };

  return (
    <LessMoreWrapper>
      <LessMoreLabel>{showMore ? "less" : "more"}</LessMoreLabel>
      <LessMoreCircle onClick={handleShowMore}>
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
