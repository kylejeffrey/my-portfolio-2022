import { Box, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box
      id="about"
      sx={{
        m: { xs: "0 auto 160px" },
        maxWidth: { xs: "640px", md: "800px" },
        mb: "160px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Betatron", fontSize: "80px" }}
      >
        ABOUT ME
      </Typography>
      <Box
        sx={{
          // minWidth: "480px",
          maxWidth: "800px",
          m: "32px auto",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            m: "16px 32px",
            fontFamily: "NeueHaasDisplayThin",
            fontSize: "18px",
          }}
        >
          {/* MY NAME IS KYLE JEFFREY. I WAS BORN AND RAISED IN PHOENIX, ARIZONA AND
          HAVE LIVED IN OSAKA, JAPAN SINCE 2013.  */}
          My name is Kyle Jeffrey. I was born and raised in Phoenix, Arizona and
          have lived in Osaka, Japan since 2013.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            m: "16px 32px",
            fontFamily: "NeueHaasDisplayThin",
            fontSize: "18px",
          }}
        >
          {/* AS A FULL-STACK WEB DEVELOPER, I HAVE A DEEP INTEREST IN TAKING
          INNOVATIVE IDEAS AND MAKING THEM A REALITY THROUGH CODE. SINCE
          BECOMING A DEVELOPER, I'VE BUILT SIDE PROJECTS TO HELP ME LEARN NEW
          TECHNOLOGIES AND EXPLORE CREATIVE IDEAS. */}
          As a full-stack web developer, I have a deep interest in taking
          innovative ideas and making them a reality through code. Since
          becoming a developer, I've built side projects to help me learn new
          technologies and explore creative ideas.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            m: "16px 32px",
            fontFamily: "NeueHaasDisplayThin",
            fontSize: "18px",
          }}
        >
          {/* IN MY SPARE TIME, I LIKE TO WORK ON MUSIC PRODUCTION, MAKING SCI-FI
          INSPIRED DRUM AND BASS. SOME OF MY INSPIRATION STEMS FROM MOVIES SUCH
          AS BLADE RUNNER, DISTRICT 9, AND EX MACHINA. I'M ALSO INFLUENCED BY
          ARTISTS AND MUSICIANS SUCH AS NOISIA, BILLAIN, AND SPOR. */}
          In my spare time, I like to work on music production, making sci-fi
          inspired drum and bass. Some of my inspiration stems from movies such
          as Blade Runner, District 9, and Ex Machina. I'm also influenced by
          artists and musicians such as Noisia, Billain, and Spor.
        </Typography>
      </Box>
    </Box>
  );
};
