import React from "react";

import { Button, Link } from "@mui/material";
import PropTypes from "prop-types";

export function VideoButton({ video }) {
  return (
    <Link
      href={video}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ textDecoration: "none" }}
    >
      <Button
        variant="contained"
        // color="something"
        sx={{
          width: { xs: "240px", md: "440px", lg: "392px" },
          py: 1,
          mt: { xs: 2, md: 2 },
          mx: { xs: 0, md: "auto" },
          "&:hover": {
            backgroundColor: "#AB47BC",
            boxShadow: "0px 0px 15px #AB47BC",
          },
        }}
      >
        Watch Demo Video!
      </Button>
    </Link>
  );
}

VideoButton.propTypes = {
  video: PropTypes.string.isRequired,
};
