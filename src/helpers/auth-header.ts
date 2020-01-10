export const authHeader = (): { 'Authorization': string } | {} => {
  const storaged = localStorage.getItem('user');
  if (!storaged) {
    return {};
  }
  let user = JSON.parse(storaged);
  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token };
  } else {
    return {};
  }
};
