import { useFact } from "./hooks/useFact";
import { useCatImage } from "./hooks/useCatImage";
import { SyncLoader } from "react-spinners";

import "./App.css";

function App() {
    const { fact, refreshFact } = useFact();
    const { imageURL, loading } = useCatImage({ fact: fact });

    return (
        <main>
            <section className="title">
                <h1>😺 Michi Facts 😺</h1>
                <button onClick={refreshFact}>🐾 Get Another MichiFact 🐾</button>
            </section>
            <section className="content">
                {fact && <p>{fact}</p>}
                {!loading && imageURL ? (
                    <img
                        src={imageURL}
                        width={300}
                        alt={`An image from a cat saying "${fact?.split(" ", 3).join(" ")}"`}
                    />
                ) : (
                    <SyncLoader color="#fff" loading={loading} size={15} />
                )}
            </section>
        </main>
    );
}

export default App;
