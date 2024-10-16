export const getGifs = async (category) => {
    const apiKey = 'Ito9lJE7Pb41rINy81yxofYeYlveDaBc';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=10`;

    try {
        const response = await fetch(url);

        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const { data } = await response.json();

        // Mapea los resultados
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }));

        return gifs;

    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return []; // Retorna un array vacío en caso de error
    }
};
