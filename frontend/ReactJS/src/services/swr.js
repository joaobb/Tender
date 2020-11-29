import useSWR, { cache } from 'swr';

import api from './api';

const useFetch = (link = '') => {
  const { data, error, mutate } = useSWR(link, async () => {
    // if (cache.has(link)) {
    //   return cache.get(link);
    // }

    // if (link) {
    const response = await api.get(link);
    cache.set(link, response.data);
    return response.data;
    // }

    // return { data: null, error: 'Cannot fetch this route', mutate };
  });

  return { data, error, mutate };
};

export default useFetch;
