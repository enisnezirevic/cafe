type ErrorData = {
  key: string;
  value: [string];
}

export const extractFirstErrorMessage = (errorData: ErrorData): string | null => {
  if (errorData) {
    for (const [_, v] of Object.entries(errorData)) {
      if (Array.isArray(v) && v.length > 0) {
        return v[0];
      }
    }
  }
  return null;
};

export const handleBadRequestError = (e: any, defaultMessage: string) => {
  if (e.response) {
    const {status, data} = e.response;

    if (status === 400) {
      return extractFirstErrorMessage(data) || defaultMessage;
    }

    return "We were unable to connect to the server. Please check your internet connection and try again.";
  }
};