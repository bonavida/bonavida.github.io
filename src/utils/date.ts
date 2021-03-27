export const getFormattedDate = (
  date: string,
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
): string => new Date(date).toLocaleDateString('en-US', options);
