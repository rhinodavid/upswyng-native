import React from "react";

import { colors } from "../App.styles";
import { TIconProps } from "../types";

const HygieneIcon = (props: TIconProps) => {
  const color = props.color || colors.white;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51.113"
      height="57.736"
      viewBox="0 0 51.113 57.736">
      \
      <path
        fill={color}
        d="M471.967,618.657H456.534a.843.843,0,0,1,0-1.686h15.433a.843.843,0,0,1,0,1.686Zm13.286-.129h-11.41V602.061h11.41Zm-3.889-11.67a1.556,1.556,0,1,0-1.556,1.556A1.555,1.555,0,0,0,481.363,606.858Zm24.174,27.5H491.6V582.442c0-.161.1-1.563,2.19-1.563a1.861,1.861,0,0,1,2.1,1.628c-2.241.763-3.557,2.845-3.05,4.145l9.31-2.527c-.465-1.2-2.389-2.082-4.585-1.945a3.563,3.563,0,0,0-3.777-3.018c-3.019,0-3.874,2.115-3.9,3.255v51.94h-5.017c-.025,0-.047-.014-.072-.014h-3.171v-7.52a11.555,11.555,0,0,0,4.148-6.871H456.6s.778,8.169,9.206,9.594l1.6,4.8h-5.5a1.278,1.278,0,0,0,0,2.556h22.888c.012,0,.022-.006.033-.006h20.712a1.268,1.268,0,1,0,0-2.536Zm-12.16-45.8,9.335-2.528-.284-1.053-9.335,2.528Zm6.29,1.265-.356-1.425a.734.734,0,1,0-1.425.354l.354,1.427a.735.735,0,0,0,1.427-.356Zm-.259,4.245a.735.735,0,0,0,1.425-.356l-.356-1.425a.734.734,0,1,0-1.425.354Zm1.166,4.083A.734.734,0,1,0,502,597.8l-.354-1.427a.735.735,0,0,0-1.427.356Zm-4.863-6.708-.354-1.425a.735.735,0,1,0-1.427.354l.356,1.427a.735.735,0,1,0,1.425-.356Zm-.259,4.374a.735.735,0,1,0,1.425-.355l-.354-1.425a.735.735,0,1,0-1.425.356Zm6.452-7.844.355,1.427a.735.735,0,1,0,1.425-.355l-.356-1.425a.734.734,0,0,0-1.425.354Zm1.166,4.02.356,1.425a.735.735,0,1,0,1.425-.356l-.354-1.425a.735.735,0,0,0-1.427.356Z"
        transform="translate(-455.692 -579.164)"
      />
    </svg>
  );
};

export default HygieneIcon;
