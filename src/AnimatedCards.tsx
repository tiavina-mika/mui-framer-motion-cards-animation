import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

// parent animation
const containerAnimation = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.2
      }
    }
  },
  transition: {
    type: "tween",
    ease: "anticipate",
    duration: 0.6
  }
};

// each children animation
const itemAnimation = {
  variants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const AnimatedCards = () => {
  const GridContainer = motion(Grid);
  const GridItem = motion(Grid);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <GridContainer
        {...containerAnimation}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(36)).map((_, index: number) => (
          <GridItem {...itemAnimation} item xs={2} sm={2} md={4} key={index}>
            <Item>{index + 1}</Item>
          </GridItem>
        ))}
      </GridContainer>
    </Box>
  );
};

export default AnimatedCards;