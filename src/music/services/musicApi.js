import { apiClient } from "../../shared/api/apiClient.js";

const DEEZER_BASE_URL = "https://api.deezer.com";

export function getTrack(id) {
    return apiClient(`${DEEZER_BASE_URL}/track/${id}`);
}

export function searchTracks(query) {
    return apiClient(`${DEEZER_BASE_URL}/search?q=${query}`);
}

export function getArtistTopTracks(artistId) {
    return apiClient(`${DEEZER_BASE_URL}/artist/${artistId}/top?limit=10`);
}

export function addTrackToLibrary(trackId) {
    return apiClient("/api/library", {
        method: "пост",
        body: JSON.stringify({ trackId }),
    });
}

export function removeTrackFromLibrary(trackId) {
    return apiClient(`/api/library/${trackId}`, {
        method: "удалить",
    });
}
export function getPopularTrack() {
    return apiClient(`${DEEZER_BASE_URL}/track/3135556`);
}