import React from "react";

import PropTypes from "prop-types";
import {
  BootstrapPlainIcon,
  Css3PlainIcon,
  FigmaPlainIcon,
  GithubOriginalIcon,
  GitPlainIcon,
  HerokuPlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  MaterialuiPlainIcon,
  PostgresqlPlainIcon,
  RailsPlainIcon,
  ReactOriginalIcon,
  RubyPlainIcon,
  SassOriginalIcon,
} from "react-devicons";

const iconNames = {
  ruby: RubyPlainIcon,
  rails: RailsPlainIcon,
  javascript: JavascriptPlainIcon,
  react: ReactOriginalIcon,
  html: Html5PlainIcon,
  css: Css3PlainIcon,
  bootstrap: BootstrapPlainIcon,
  mui: MaterialuiPlainIcon,
  heroku: HerokuPlainIcon,
  postgresql: PostgresqlPlainIcon,
  sass: SassOriginalIcon,
  git: GitPlainIcon,
  github: GithubOriginalIcon,
  figma: FigmaPlainIcon,
};

export function LangAvatar({ sx, imageKey, ...props }) {
  const IconComponent = iconNames[imageKey];
  return (
    <IconComponent
      key={imageKey}
      color="white"
      size="32px"
      style={{ margin: "8px" }}
      {...props}
    />
  );
}

// Experimenting with PropTypes

LangAvatar.propTypes = {
  sx: PropTypes.object,
  imageKey: PropTypes.oneOf(Object.keys(iconNames)),
};
