import { BASE_URL } from "../utils/constants";

const headers = {
  "Content-Type": "application/json",
};

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`error: ${res.status} `);
};

export const getItems = () => {
  return fetch(`${BASE_URL}/items`, { headers }).then(handleServerResponse);
};

export function addItem({ name, imageUrl, weather }, token) {
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    // Send the data in the body as a JSON string.
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => handleServerResponse(res));
}

export function deleteItem(itemsId, token) {
  return fetch(`${BASE_URL}/items/${itemsId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleServerResponse(res));
}

export function updateUser({ name, avatar }, token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then((res) => handleServerResponse(res));
}

export function addCardLike(id, token) {
  return fetch(`${BASE_URL}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleServerResponse(res));
}

export function removeCardLike(id, token) {
  return fetch(`${BASE_URL}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleServerResponse(res));
}
