import type {AxiosError} from 'axios';
import {createInfiniteQuery} from 'react-query-kit';

import {client} from '../common';
import type {Player} from './types';
import {Meta} from '..';

type Response = {
  data: Player[];
  meta: Meta;
};
type Variables = {};

export const usePlayers = createInfiniteQuery<Response, Variables, AxiosError>({
  initialPageParam: 1,
  queryKey: ['players'],
  fetcher: async (variables: Variables, {pageParam}) => {
    try {
      const response = await client.get(
        `https://www.balldontlie.io/api/v1/players?page=${pageParam}&per_page=10`,
      );

      return response.data;
    } catch (e) {
      return console.log(e);
    }
  },
  getNextPageParam(lastPage) {
    return lastPage.meta?.next_page;
  },
});
