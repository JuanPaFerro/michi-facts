import { useEffect, useState } from "react";
import { getRandomImage, IMAGES_URL_PREFIX } from "../services/images";

export const useCatImage = ({ fact }) => {
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState();

    useEffect(() => {
        if (!fact) return;

        setLoading(true);
        getRandomImage({ fact: fact }).then((newImageURL) => {
            setImageURL(newImageURL);
            setLoading(false);
        });
    }, [fact]);

    return { imageURL: `${IMAGES_URL_PREFIX}${imageURL}`, loading };
};
