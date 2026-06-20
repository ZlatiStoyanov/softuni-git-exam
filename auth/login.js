function login(username, password) {
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  return {
    user: username,
    authenticated: true,
  };
}

module.exports = { login };
