export async function apiClient(url, options = {}) {
    const method = options.method || "GET";
    const body = options.body ? JSON.parse(options.body) : null;

    console.log("-");
    console.log("REST API REQUEST");
    console.log("Method:", method);
    console.log("URL:", url);
    if (body) console.log("Body:", body);
    console.log("-");

    await new Promise((resolve) => setTimeout(resolve, 200));


    if (url === "/api/profile" && method === "GET") {
        return { name: "лолошка", role: "listener" };
    }
    if (url === "/api/library" && method === "GET") {
        return [
            { id: 1, title: "пробный трек 1" },
            { id: 2, title: "пробный трек 2" },
        ];
    }


    if (url.includes("api.deezer.com/track")) {
        return {
            id: 3135556,
            title: "Mock Deezer Track",
            artist: { name: "Mock Artist" },
        };
    }


    if (url.includes("api.deezer.com/search")) {
        return {
            data: [
                { id: 1, title: "Найти тржк 1" },
                { id: 2, title: "найти трэк 2" },
            ],
        };
    }

    if (url.includes("/artist/") && url.includes("/top")) {
        return {
            data: [{ id: 1, title: "Топ песен артиста" }],
        };
    }


    return null;
}
