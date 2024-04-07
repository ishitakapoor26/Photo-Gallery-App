const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const getImages = async (nextCursor) => {
  const params = new URLSearchParams();
  if (nextCursor) {
    params.append("next_cursor", nextCursor);
  }
  const response = (await fetch(`${API_URL}/photos?${params}`)).json();
  return response;
};

export const searchImages = async (searchValues, nextCursor) => {
  const params = new URLSearchParams();
  params.append("expression", searchValues);
  if (nextCursor) {
    params.append("next_cursor", nextCursor);
  }
  const response = (await fetch(`${API_URL}/search?${params}`)).json();
  return response;
};
