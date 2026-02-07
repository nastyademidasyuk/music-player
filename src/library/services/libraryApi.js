import { apiClient } from "../../shared/api/apiClient.js";

export function getLibrary() {
    return apiClient("/api/library");
}
export function clearLibrary() {
    return apiClient("/api/library", {
        method: "удалить",
    });
}