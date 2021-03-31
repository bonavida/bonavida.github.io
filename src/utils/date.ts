import { constants } from '@constants/index';

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
  lang = constants.DEFAULT_LANG,
}: DateParams): string =>
  new Date(date).toLocaleDateString(constants.LOCALE_BY_LANG[lang], options);
