import type {AxiosError} from 'axios';
import {createMutation} from 'react-query-kit';

import {client} from '../common';
import type {User} from './types';

type Variables = {username: string; password: string};
type Response = User;

export const useSingIn = createMutation<Response, Variables, AxiosError>({
  mutationFn: async variables =>
    client({
      url: 'https://dummyjson.com/auth/login',
      method: 'POST',
      data: variables,
    }).then(response => response.data),
});
