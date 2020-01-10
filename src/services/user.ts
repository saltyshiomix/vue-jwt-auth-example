const authHeader = (): { 'Authorization': string } | {} => {
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

const login = async (username: string, password: string): Promise<Response> => {
  const response = await fetch(`${process.env.VUE_APP_API_URL}/users/authenticate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const json = await response.json();

  if (!response.ok) {
    if (response.status === 401) {
      logout();
      location.reload(true);
    }
    const error = (json && json.message) || response.statusText;
    return Promise.reject(error);
  }

  const user = json;
  if (user.token) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  return user;
}

const logout = () => {
  localStorage.removeItem('user');
}

const getAllUsers = async () => {
  const response = await fetch(`${process.env.VUE_APP_API_URL}/users`, {
    method: 'GET',
    headers: authHeader(),
  });
  const json = await response.json();

  if (!response.ok) {
    if (response.status === 401) {
      logout();
      location.reload(true);
    }
    const error = (json && json.message) || response.statusText;
    return Promise.reject(error);
  }

  return json;
}

export const userService = {
  login,
  logout,
  getAllUsers,
};
