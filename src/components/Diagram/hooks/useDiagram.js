import { useEffect, useState } from "react";

const useDiagram = ({ xAxisData, yAxisData }) => {
  const [data, setData] = useState({});

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 20,
      },
    },
    scales: {
      xAxes: [{ gridLines: { drawBorder: false, display: false } }],
      yAxes: [
        {
          gridLines: {
            color: "#F1F1F1",
            drawBorder: false,
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 7,
          },
        },
      ],
    },
  };

  useEffect(() => {
    setData({
      labels: xAxisData,
      datasets: [
        {
          ladels: "Clicks",
          data: yAxisData,
          borderColor: "#3a80ba",
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderWidth: 6,
        },
      ],
    });
  }, [xAxisData, yAxisData]);

  return {
    options,
    data,
  };
};

export default useDiagram;
