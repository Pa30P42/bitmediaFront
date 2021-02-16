import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const useStatistics = ({ active }) => {
  const [date, setDate] = useState();
  const [userData, SetUserData] = useState();

  useEffect(() => {
    if (date) {
      return;
    }
    const dateInit = DateTime.now().c;
    const { year, month, day } = dateInit;
    const actualDate = `${year}-${month > 9 ? month : `0${month}`}-${
      day > 9 ? day : `0${day}`
    }`;
    setDate({ startDate: actualDate, endDate: actualDate });
  }, [date]);

  useEffect(() => {
    const rangeDates = [];
    const clicks = [];
    const views = [];
    let range;
    if (date) {
      range = Math.ceil(
        (DateTime.fromISO(date.endDate).ts -
          DateTime.fromISO(date.startDate).ts) /
          86400000
      );
    }

    for (let i = 0; i <= range; i += 1) {
      const dateObj = DateTime.fromMillis(
        DateTime.fromISO(date.startDate).ts + i * 86400000
      ).c;

      const { year, month, day } = dateObj;
      const actualDate = `${year}-${month > 9 ? month : `0${month}`}-${
        day > 9 ? day : `0${day}`
      }`;

      rangeDates.push(actualDate);
    }

    if (active) {
      rangeDates.forEach((elem) => {
        const activity = active.filter((el) => el.date === elem);
        if (activity.length) {
          clicks.push(activity[0].clicks);
          views.push(activity[0].page_views);
        } else {
          clicks.push(0);
          views.push(0);
        }
      });
    }

    SetUserData({
      rangeDates,
      clicks,
      views,
    });
  }, [date]);

  return {
    date,
    setDate,
    userData,
  };
};

export default useStatistics;
