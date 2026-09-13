const baseUrl = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`error: ${res.status} `);
};

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {}, { headers }).then(handleServerResponse);
};

export function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers,
    // Send the data in the body as a JSON string.
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => handleServerResponse(res));
}

export function deleteItem(itemsId) {
  return fetch(`${baseUrl}/items/${itemsId}`, {
    method: "DELETE",
    headers,
  }).then((res) => handleServerResponse(res));
}
