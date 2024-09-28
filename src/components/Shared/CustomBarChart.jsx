import { Tooltip, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { BarChart, XAxis, Bar, YAxis, ResponsiveContainer } from "recharts";

const CustomBarChart = ({ data, width = 300, height = 250 }) => {
  const max = Math.max(...data.map((item) => item.y));

  const CustomBar = (props) => {
    const { x, y, width, height, payload } = props;
    const barColor = payload.y === max ? "#7367f0" : "#eae8fd";

    return <rect x={x} y={y} width={width} height={height} fill={barColor} />;
  };

  // const responsiveAspect = useBreakpointValue({
  //   base: 2 / 1, // Default aspect ratio for small screens
  //   md: 1 / 1, // Change to 1:1 for larger screens
  // });

  return (
    // <ResponsiveContainer width="100%" aspect={responsiveAspect}>
    <BarChart
      width={width}
      height={height}
      data={data}
      barSize={20}
      padding={0}
      margin={0}
      barGap={0}
    >
      <XAxis
        dataKey="x"
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 12 }}
        padding={{ left: 0, right: 0 }}
        domain={[2, "auto"]}
      />
      <YAxis
        axisLine={false}
        tick={false}
        padding={{ left: 0, right: 0 }}
        domain={[0, "auto"]}
      />
      <Bar dataKey="y" shape={<CustomBar />} />
    </BarChart>
    // </ResponsiveContainer>
  );
};

export default CustomBarChart;
