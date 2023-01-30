export const IMAGES_URL_PREFIX = "https://cataas.com/";

export const getRandomImage = async ({ fact }) => {
    const IMAGES_ENDPOINT_URL = `${IMAGES_URL_PREFIX}cat/says/${fact
        .split(" ", 3)
        .join(" ")}?size=50&color=red&json=true`;

    const response = await fetch(IMAGES_ENDPOINT_URL);
    const json = await response.json();
    const { url } = json;
    return url;
};
