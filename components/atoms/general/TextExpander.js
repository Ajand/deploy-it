/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";

const TextExpander = ({ body, min }) => {
  const [expanded, setExpanded] = useState(false);
  if (body.length < min) return body;
  return (
    <>
      {expanded ? body : `${body.substring(0, min - 3)}...`}
      <span
        css={(theme) =>
          css`
            cursor: pointer;
            color: ${theme.palette.secondary.main};
          `
        }
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((exp) => !exp);
        }}
      >
        {expanded ? "shrink" : "expand"}
      </span>
    </>
  );
};

export default TextExpander;
