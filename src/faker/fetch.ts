import users from './users';

export const configureFakeFetch = () => {
  const originalFetch = window.fetch;

  window.fetch = (url: any, opts: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
          const params = JSON.parse(opts.body);
          const user = users.find(u => u.username === params.username && u.password === params.password);
          if (user) {
            const { password, ...rest } = user;
            return resolve({
              ok: true,
              json: () => Promise.resolve({
                ...rest,
                token: 'fake-jwt-token',
              }),
            } as any);
          } else {
            return reject('Username or password is incorrect');
          }
        }

        if (url.endsWith('/users') && opts.method === 'GET') {
          if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            return resolve({
              ok: true,
              json: () => Promise.resolve(users),
            } as any);
          } else {
            return reject('Unauthorised');
          }
        }

        originalFetch(url, opts).then(response => resolve(response));
      }, 300);
    });
  };
};
