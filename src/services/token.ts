const TOKEN_KEY = 'six-cities-token';

export const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
};

export const dropToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};


