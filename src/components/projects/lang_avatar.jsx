import { Avatar } from "@mui/material";
import PropTypes, { string } from "prop-types";
import Bootstrap from "../../images/bootstrap.png";
import CSS from "../../images/css-3.png";
import HTML from "../../images/html-5.png";
import JavaScript from "../../images/js.png";
import MUI from "../../images/mui.svg";
import Rails from "../../images/rails.png";
import React from "../../images/react.png";
import Ruby from "../../images/ruby.png";

const images = {
  bootstrap: Bootstrap,
  css: CSS,
  html: HTML,
  javascript: JavaScript,
  rails: Rails,
  react: React,
  ruby: Ruby,
  mui: MUI,
};

export function LangAvatar({ sx, imageKey, ...props }) {
  console.log(props);
  return (
    <Avatar
      sx={{
        m: 2,
        p: 1,
        height: { xs: "40px", md: "56px" },
        width: { xs: "40px", md: "56px" },
        ...sx,
      }}
      src={images[imageKey]}
      {...props}
    />
  );
}

// Experimenting with PropTypes

LangAvatar.propTypes = {
  sx: PropTypes.object,
  imageKey: PropTypes.oneOf(Object.keys(images)),
};
