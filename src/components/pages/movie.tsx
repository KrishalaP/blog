// import { useQuery } from "@tanstack/react-query";
// import { Link } from "@tanstack/react-router";
// import {
//   Card,
//   CardHeader,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";

// type Movie = {
//   id: number;
//   title: string;
//   release_date: string;
//   overview: string;
//   poster_path: string | null;
// };

// type MoviesResponse = {
//   results: Movie[];
// };

export default function MoviesPage() {
  // const {
  //   data,
  //   isLoading,
  //   error,
  // } = useQuery<MoviesResponse>({
  //   queryKey: ["popularMovies"],
  //   queryFn: () =>
  //     fetch(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=cc68c78ed49f7326fd9adc7dc8932d3f"
  //     ).then((res) => res.json()),
  // });
  // console.log(data);
  

  // if (isLoading) return <div className="text-center">Loading...</div>;
  // if (error)
  //   return (
  //     <div className="text-center text-red-500">
  //       Error: {(error as Error).message}
  //     </div>
  //   );

  return (
    // <div className="flex flex-wrap gap-6 p-6 justify-center bg-slate-100">
    //   {data?.results.map((movie) => (
    //     <Card
    //       key={movie.id}
    //       className="max-w-sm w-full bg-white shadow rounded-lg border"
    //     >
    //       <CardHeader>
    //         <h2 className="text-lg font-bold text-orange-500">
    //           {movie.title}
    //         </h2>
    //         <CardDescription className="text-sm text-emerald-600">
    //           Release Date: {movie.release_date}
    //         </CardDescription>
    //       </CardHeader>

    //       <CardContent className="space-y-2">
    //         <img
    //           src={
    //             movie.poster_path
    //               ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    //               : "/fallback-image.jpg"
    //           }
    //           alt={movie.title}
    //           className="w-full h-auto rounded"
    //         />
    //         <p className="text-sm text-gray-700">
    //           {movie.overview.slice(0, 100)}...
    //         </p>
    //       </CardContent>

    //       <CardFooter>
    //         <Link
    //           to="/blog/$blogId"
    //           params={{ movieId: String(movie.id) }}
    //           className="italic pt-3 text-indigo-600 hover:underline"
    //         >
    //           View Movie Details
    //         </Link>
    //       </CardFooter>
    //     </Card>
    //   ))}
    // </div>
    <div>Hello</div>
  );
}
