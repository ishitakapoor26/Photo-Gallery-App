const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const getImages = async (nextCursor) => {
  const params = new URLSearchParams();
  if (nextCursor) {
    params.append("next_cursor", nextCursor);
  }
  const response = (await fetch(`${API_URL}/photos?${params}`)).json();
  return response;
};
