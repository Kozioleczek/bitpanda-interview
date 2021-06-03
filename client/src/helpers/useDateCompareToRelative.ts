import { DateTime } from 'luxon';

function useDateCompareToRelative(date: string): string {
  const parsedDate = DateTime.fromISO(date).setLocale('en');
  const relativeDate = parsedDate.toRelative();

  if (relativeDate) {
    return relativeDate;
  }

  return 'Unable to compare date';
}

export default useDateCompareToRelative;
