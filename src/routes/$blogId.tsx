// import { useParams } from "@tanstack/react-router";
// import { useQuery } from "@tanstack/react-query";

// type MovieDetails = {
//   id: number;
//   title: string;
//   overview: string;
//   release_date: string;
//   poster_path: string | null;
//   runtime: number;
//   vote_average: number;
// };

// export default function MovieDetailPage() {
//   const { movieId } = useParams({ strict: false });

//   const { data, isLoading, error } = useQuery<MovieDetails>({
//     queryKey: ["movie", movieId],
//     queryFn: () =>
//       fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}?api_key=cc68c78ed49f7326fd9adc7dc8932d3f`
//       ).then((res) => res.json()),
//   });

//   if (isLoading) return <div className="text-center">Loading...</div>;
//   if (error)
//     return (
//       <div className="text-center text-red-500">
//         Error: {(error as Error).message}
//       </div>
//     );

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-4 text-rose-600">{data.title}</h1>
//       <img
//         src={
//           data.poster_path
//             ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
//             : "/fallback-image.jpg"
//         }
//         alt={data.title}
//         className="w-full max-w-md mx-auto rounded mb-4"
//       />
//       <p className="text-gray-700 mb-2">
//         <strong>Release Date:</strong> {data.release_date}
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Runtime:</strong> {data.runtime} mins
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Rating:</strong> {data.vote_average}/10
//       </p>
//       <p className="text-gray-700 mt-4">{data.overview}</p>
//     </div>
//   );
// }
