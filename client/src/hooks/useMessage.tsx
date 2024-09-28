import {useState} from "react";

export const useMessage = <T = string | null>() => {
  const [message, setMessage] = useState<T | null>(null);

  const clearMessage = () => setMessage(null);

  return {message, setMessage, clearMessage};
};
