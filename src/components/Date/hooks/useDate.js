import { useState } from "react";

const useDate = ({ date, setDate }) => {
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  const openEndDate = () => {
    setShowEndDate(!showEndDate);
  };
  const openStartDate = () => {
    setShowStartDate(!showStartDate);
  };

  const handleStartDayClick = (day) => {
    const stringDate = day.toLocaleDateString().split(".").reverse().join("-");
    setDate({ ...date, startDate: stringDate });
    setShowStartDate(false);
  };
  const handleEndDayClick = (day) => {
    const stringDate = day.toLocaleDateString().split(".").reverse().join("-");
    setDate({ ...date, endDate: stringDate });
    setShowEndDate(false);
  };

  return {
    openStartDate,
    showStartDate,
    handleStartDayClick,
    openEndDate,
    showEndDate,
    handleEndDayClick,
  };
};

export default useDate;
