import MovieCard from "./MovieCard"
import { moviesData } from "./movieData"

const Trending = () => {
    return (
        <>
            <h3 className="card">Trending</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 gap-10 mb-12">
                {moviesData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="btn hover:scale-120 transition ease-out duration-500">
                    Load more
                </button>
            </div>
        </>
    )
}

export default Trending