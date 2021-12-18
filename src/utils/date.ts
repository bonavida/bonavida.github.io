import Constants from '@constants/common';

interface DateParams {
  date: string;
  options?: Intl.DateTimeFormatOptions;
  lang?: string;
}

export const getFormattedDate = ({
  date,
  options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
  lang = Constants.DEFAULT_LANG,
}: DateParams): string =>
  new Date(date).toLocaleDateString(Constants.LOCALE_BY_LANG[lang], options);

export const hasReachedAWeek = (time: string): boolean => {
  if (!time) return false;
  const date = new Date(+time);
  const aWeekAgo = new Date();
  aWeekAgo.setDate(aWeekAgo.getDate() - 7);
  return date < aWeekAgo;
};
