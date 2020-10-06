export const simpleDate = (createdDate: string): any => {
  const now: number = new Date().getTime();
  const date: number = new Date(createdDate).getTime();
  let diff: number = (now - date) / 1000;

  if (diff < 0) diff = 0;
  let day_diff: number = Math.floor(diff / 86400);
  if (isNaN(day_diff) || day_diff < 0) return;

  return (
    (day_diff === 0 &&
      ((diff < 60 && "방금전") ||
        (diff < 120 && "1 분전") ||
        (diff < 3600 && Math.floor(diff / 60) + " 분전") ||
        (diff < 7200 && "1 시간전") ||
        (diff < 86400 && Math.floor(diff / 3600) + " 시간전"))) ||
    (day_diff === 1 && "어제") ||
    (day_diff < 7 && day_diff + " 일전") ||
    (day_diff < 31 && Math.floor(day_diff / 7) + " 주전") ||
    (day_diff < 360 && Math.floor(day_diff / 30) + " 개월전") ||
    (day_diff >= 360 &&
      (Math.floor(day_diff / 360) === 0 ? 1 : Math.floor(day_diff / 360)) +
        " 년전")
  );
};
