const FACTS_ENDPOINT_URL = `https://catfact.ninja/fact`;

export const getRandomFact = async () => {
    const response = await fetch(FACTS_ENDPOINT_URL);
    const json = await response.json();
    const { fact } = json;
    return fact;
};
