import {useState} from "react";

export const useError = <T = string | null>() => {
  const [error, setError] = useState<T | null>(null);

  const clearError = () => setError(null);

  return {error, setError, clearError};
};
