import { Box, Typography } from "@mui/material";
import AnimatedCards from "./AnimatedCards";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div>
        <Box mb={2}>
          <Typography>Animate material ui cards with framer motion</Typography>
        </Box>
        <AnimatedCards />
      </div>
      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://www.linkedin.com/in/tiavina-michael-ralainirina/">
            <Typography>By Tiavina Michael Ralainirina</Typography>
          </a>
        </Box>
      </div>
    </Box>
  );
};

export default App;
