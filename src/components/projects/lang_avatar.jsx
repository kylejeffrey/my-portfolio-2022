import { PropTypes } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import JavaScript from "../../images/js.png";
import Rails from "../../images/rails.png";
import React from "../../images/react.png";
import Ruby from "../../images/ruby.png";

const images = {
  ruby: Ruby,
};

export function LangAvatar({ dem = "56px", sx, imageKey = "ruby", ...props }) {
  console.log(props);
  return (
    <Avatar
      sx={{
        m: 2,
        p: 1,
        // backgroundColor:
        //   dem === "70px" ? "kylesColors.red" : "kylesColors.blue",
        height: dem,
        width: dem,
        ...sx,
      }}
      src={images[imageKey]}
      {...props}
    />
  );
}

// PropTypes = {
//   dem: PropTypes.string,
//   sx: PropTypes.object,
//   foo: PropTypes.string,
//   imageKey: PropTypes.oneOfString(["ruby", "javascript"]),
// };
