/* eslint @typescript-eslint/no-explicit-any: 0 */

import { User } from '@/entities';
import users from './users';

export const configureFakeFetch = (): void => {
  const originalFetch = window.fetch;

  window.fetch = (url: any, opts: any): Promise<Response> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
          const params = JSON.parse(opts.body);
          const _user = users.find(
            (u: User) =>
              u.username === params.username && u.password === params.password,
          );
          if (_user) {
            // eslint-disable-next-line
            const { password, ...rest } = _user;
            const user: Omit<User, 'password'> = {
              ...rest,
              token: 'fake-jwt-token',
            };
            return resolve({
              ok: true,
              json: () => Promise.resolve(user),
            } as any);
          } else {
            return reject('Username or password is incorrect');
          }
        }

        if (url.endsWith('/users') && opts.method === 'GET') {
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            return resolve({
              ok: true,
              json: () => Promise.resolve(users),
            } as any);
          } else {
            return reject('Unauthorised');
          }
        }

        originalFetch(url, opts).then((response) => resolve(response));
      }, 300);
    });
  };
};
