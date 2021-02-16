import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Title, ChartWrapper } from "./DiagramStyled";
import useDiagram from "./hooks/useDiagram";

const Diagram = ({ title, chartData: { xAxisData, yAxisData } }) => {
  const { options, data } = useDiagram({ xAxisData, yAxisData });
  return (
    <div>
      <Title>{title}</Title>
      <ChartWrapper>
        <Line options={options} data={data} />
      </ChartWrapper>
    </div>
  );
};

export default Diagram;
