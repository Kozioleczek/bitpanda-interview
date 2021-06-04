import { useIntervalFn } from '@vueuse/core';
import { onBeforeUnmount, ref, Ref } from 'vue';

import useDateCompareToRelative from '@/helpers/useDateCompareToRelative';

interface IUseDateInterval {
  currentDateFormated: Ref<string>;
}

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
