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
  const previousDate = new Date(+time);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(today.getDate() - 7);
  return previousDate < today;
};
