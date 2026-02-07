import { getProfile, updateProfile } from "./profile/services/profileApi.js";
import {
    getTrack,
    searchTracks,
    getArtistTopTracks,
    addTrackToLibrary,
    removeTrackFromLibrary,
    getPopularTrack,
} from "./music/services/musicApi.js";
import { getLibrary, clearLibrary } from "./library/services/libraryApi.js";

async function runApp() {
    try {
        console.log("Старт");

        const profile = await getProfile();
        console.log("Profile:", profile);

        await updateProfile({ name: "лолошка", role: "listener" });
        console.log("Аккаунт обновился");

        const track = await getTrack(3135556);
        console.log("песни:", track.title);

        const popular = await getPopularTrack();
        console.log("поплурняеы песни:", popular.title);

        const search = await searchTracks("Eminem");
        console.log("найденные результаты:", search.data[0]?.title);

        const topTracks = await getArtistTopTracks(27);
        console.log("топ песен исполнителя:", topTracks.data[0]?.title);

        await addTrackToLibrary(3135556);
        console.log("песня добавлена в библиотеку");

        const library = await getLibrary();
        console.log("библиотека:", library);

        await removeTrackFromLibrary(3135556);
        console.log("песня удалена с библиотеки");

        await clearLibrary();
        console.log("библиотека очистилась");

        console.log("Конец");
    } catch (e) {
        console.error("ошибка:", e.message);
    }
}

runApp();
