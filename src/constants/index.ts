export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Please enter a valid password',
  INVALID_FIRST_NAME: 'Please enter a valid first name',
  INVALID_LAST_NAME: 'Please enter a valid last name',
  INVALID_USER: 'Invalid user',
  FAILED_CREATE_USER: 'Failed to create user',
  FAILED_UPDATE_USER: 'Failed to update user',
  FAILED_DELETE_USER: 'Failed to delete user',
  FAILED_GET_USERS: 'Failed to get users',
  FAILED_GET_USER: 'User not found',
  FAILED_GET_JOKE: 'Failed to get joke',
  MISSING_CREDENTIALS: 'Missing credentials',
}

export const SUCCESS_MESSAGES = {
  CONNECTION_SUCCESS: 'Database connection established',
  SERVER_STARTED: (port: number) => `Server started on ${port}`,
  USER_LOGGED_IN: 'User logged in',
}

export const CONFIG = {
  FALLBACK_SERVER_PORT: 3000,
}

export const STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}

export const jokeApiUrl = 'https://api.chucknorris.io/jokes/random';
