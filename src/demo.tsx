import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion, Variants } from "framer-motion";

export const itemAnimation = {
  variants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
};

export const containerAnimation = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delay: 0.2
      }
    }
  },
  transition: {
    type: "tween",
    ease: "anticipate",
    duration: 0.2
  }
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function ResponsiveGrid() {
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
        {Array.from(Array(6)).map((_, index) => (
          <GridItem {...itemAnimation} item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </GridItem>
        ))}
      </GridContainer>
    </Box>
  );
}
