import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import {
  DateWrapper,
  DateChooseWrapper,
  DateDescription,
  ChosenDate,
  DayPickerWrapper,
} from "./DateStyled";
import useDate from "./hooks/useDate";

const Date = ({ setDate, date }) => {
  const {
    openStartDate,
    showStartDate,
    handleStartDayClick,
    openEndDate,
    showEndDate,
    handleEndDayClick,
  } = useDate({ date, setDate });

  return (
    <DateWrapper>
      <DateChooseWrapper>
        <DateDescription>
          Start date:
          <ChosenDate onClick={openStartDate}>
            {date && date.startDate}
          </ChosenDate>
        </DateDescription>
        {showStartDate && (
          <DayPickerWrapper>
            <DayPicker onDayClick={handleStartDayClick} />{" "}
          </DayPickerWrapper>
        )}
      </DateChooseWrapper>
      <DateChooseWrapper>
        <DateDescription>
          End date:
          <ChosenDate onClick={openEndDate}>{date && date.endDate}</ChosenDate>
        </DateDescription>
        {showEndDate && (
          <DayPickerWrapper>
            <DayPicker onDayClick={handleEndDayClick} />
          </DayPickerWrapper>
        )}
      </DateChooseWrapper>
    </DateWrapper>
  );
};

export default Date;
