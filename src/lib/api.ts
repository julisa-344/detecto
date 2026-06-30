const API_URL = import.meta.env.VITE_STRAPI_URL;
const TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

export const fetchAPI = async (endpoint: string) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error en la API");
  }

  return res.json();
};