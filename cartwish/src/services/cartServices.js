import apiClient from "../utils/api-client";

export function addToCardAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}

export function getCartAPI() {
  return apiClient.get("/cart");
}

export function removeFromCartAPI(id) {
  return apiClient.patch(`/cart/remove/${id}`);
}

export function increseProductAPI(id) {
  return apiClient.patch(`/cart/increase/${id}`);
}

export function decreaseProductAPI(id) {
  return apiClient.patch(`/cart/decrease/${id}`);
}
