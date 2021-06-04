import { useIntervalFn } from '@vueuse/core';
import { onBeforeUnmount, ref } from 'vue';

import useDateCompareToRelative from '@/helpers/useDateCompareToRelative';
import IUseDateInterval from '@/types/interfaces/date/helpers/IUseDateInterval';

function useDateInterval(
  dateStartISO: string,
  duration = 600
): IUseDateInterval {
  const currentDateFormated = ref('');

  const { pause } = useIntervalFn(() => {
    currentDateFormated.value = useDateCompareToRelative(dateStartISO);
  }, duration);

  onBeforeUnmount(() => {
    pause();
  });

  return {
    currentDateFormated
  };
}

export default useDateInterval;
