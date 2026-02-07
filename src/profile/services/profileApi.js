import { apiClient } from "../../shared/api/apiClient.js";

export function getProfile() {
    return apiClient("/api/profile", {
        method: "GET",
    });
}

export function updateProfile(data) {
    return apiClient("/api/profile", {
        method: "PATCH",
        body: JSON.stringify(data),
    });
}
