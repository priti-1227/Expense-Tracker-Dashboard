import { useColorModeValue } from "@chakra-ui/react";

// Custom hook to get theme-based values
export const useThemeColors = () => {
  const bgColor = useColorModeValue("bg.light", "bg.dark");
  const textColor = useColorModeValue("#6f6b7d", "#cfd3ec");
  const grayText = useColorModeValue("#6f6b7d", "#b6bee3");

  const borderColor = useColorModeValue("gray.200", "gray.200");
  const cyanIconBg = useColorModeValue("cyan.100", "cyan.300");
  const purpleIconBg = useColorModeValue("purple.100", "purple.300");
  const greenIconBg = useColorModeValue("green.100", "green.300");
  const orangeIconBg = useColorModeValue("orange.100", "orange.300");
  const redIconBg = useColorModeValue("red.100", "red.300");
  const grayIconBg = useColorModeValue("gray.100", "gray.300");

  return {
    bgColor,
    textColor,
    borderColor,
    grayText,
    cyanIconBg,
    purpleIconBg,
    greenIconBg,
    orangeIconBg,
    redIconBg,
    grayIconBg,
  };
};
