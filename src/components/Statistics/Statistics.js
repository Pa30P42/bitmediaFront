import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import Date from "../Date/Date";
import { Title, Wrapper } from "./StatisticsStyled";
import Diagram from "../Diagram/Diagram";
import useStatistics from "./hooks/useStatistics";

const Statistics = ({ first_name, last_name, active }) => {
  const { date, setDate, userData } = useStatistics({ active });
  return (
    <Wrapper>
      <Title>
        {`${first_name} 
${last_name}`}
      </Title>
      <Date date={date} setDate={setDate} />
      <Diagram
        title="Clicks"
        chartData={{
          xAxisData: userData?.rangeDates,
          yAxisData: userData?.clicks,
        }}
      />
      <Diagram
        title="Views"
        chartData={{
          xAxisData: userData?.rangeDates,
          yAxisData: userData?.views,
        }}
      />
    </Wrapper>
  );
};

export default Statistics;
