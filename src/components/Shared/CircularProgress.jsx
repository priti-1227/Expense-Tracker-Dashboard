import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "../Shared/RadialSeparators";
import styled from "styled-components";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { useThemeColors } from "../../hook/useThemeColors";

const CircularProgressBar = ({
  value,
  text,
  strokeWidth,
  separatorCount,
  color,
  separatorWidth,
}) => {
  const gradientId = "progressGradient";
  const { bgColor, textColor } = useThemeColors();
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Box w={"280px"} h={"280px"} style={{ transform: "rotate(-210deg)" }}>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#eae8fd" />
          </linearGradient>
        </defs>
      </svg>

      <CircularProgressbarWithChildren
        value={value}
        strokeWidth={strokeWidth} // This determines the height/thickness of the progress bar
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: `url(#${gradientId})`, // Color of the progress path
          textColor: textColor, // Color of the text
          trailColor: "transparent", // Background track color
          rotation: 0,
        })}
      >
        <Box
          style={{
            fontSize: "24px",
            textAlign: "center",
            transform: "rotate(210deg)",
          }}
        >
          {text}
        </Box>
        <RadialSeparators
          count={separatorCount}
          style={{
            background: "#fff", // Background color for the separators
            width: separatorWidth, // Width of the separators
            height: `${strokeWidth}%`, // Height adjustment to match the strokeWidth
          }}
        />
      </CircularProgressbarWithChildren>
    </Box>
  );
};

export default CircularProgressBar;
