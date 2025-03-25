export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

export const getLocalStorage = (key: string, defaultValue: any = null): any => {//eslint-disable-line @typescript-eslint/no-explicit-any
  if (!isBrowser()) {
    return defaultValue;
  }
  
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
};

export const setLocalStorage = (key: string, value: any): boolean => {//eslint-disable-line @typescript-eslint/no-explicit-any
  if (!isBrowser()) {
    return false;
  }
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
    return false;
  }
};

export const removeLocalStorage = (key: string): boolean => {
  if (!isBrowser()) {
    return false;
  }
  
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
    return false;
  }
};