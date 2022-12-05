import React from "react";

import { Button, Link } from "@mui/material";
import { blue } from "@mui/material/colors";
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
        color="primary"
        sx={{
          width: { xs: "240px", md: "180px" },
          py: 1,
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
