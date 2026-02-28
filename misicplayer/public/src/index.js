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
        console.log("популярная песня:", popular.title);

        const search = await searchTracks("Eminem");
        console.log("найденные результаты:", search.data[0]?.title);

        const topTracks = await getArtistTopTracks(27);
        console.log("топ песен исполнителя:", topTracks.data[0]?.title);

        await addTrackToLibrary(3135556);
        console.log("песня добавлена в библиотеку");

        const library = await getLibrary();
        console.log("библиотека:", library);

        await removeTrackFromLibrary(3135556);
        console.log("песня удалена из библиотеки");

        await clearLibrary();
        console.log("библиотека очистилась");

        console.log("Конец");
    } catch (e) {
        console.error("ошибка:", e.message);
    }
}

runApp();



window.addEventListener("DOMContentLoaded", () => {

    const page404 = document.getElementById("page404");

    function show404(e) {
        e?.preventDefault?.();
        page404.style.display = "flex";
    }

    function hide404() {
        page404.style.display = "none";
    }

    window.hide404 = hide404;

    // что бы работало 404 на все кнопки кроме кнопок внутри 404
    document.querySelectorAll("button").forEach(btn => {
        if (!btn.closest("#page404")) {
            btn.addEventListener("click", show404);
        }
    });
});
