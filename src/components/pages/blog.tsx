import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

const queryClient = new QueryClient();

export default function Blog() {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogsList />
    </QueryClientProvider>
  );
}

function BlogsList() {
  const {
    isLoading,
    error,
    data: datas,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <div className="text-center">Loading...</div>;

  if (error)
    return (
      <div className="text-center text-red-500">
        An error has occurred: {(error as Error).message}
      </div>
    );

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center bg-slate-300 	">
      {datas?.map((data: any) => (
        <Card
          key={data.id}
          className="max-w-sm w-full bg-white shadow-md grid grid-cols-1 rounded-lg p-4 border-rose-600		"
        >
          <CardHeader>
            <h2 className="text-lg font-bold text-orange-400 ">
              User ID: {data.userId}
            </h2>
            <CardDescription>
              <h3 className="text-md text-emerald-400 font-semibold		">
                ID: {data.id}
              </h3>
            </CardDescription>
          </CardHeader>
           <CardContent>
            <h4 className="text-sm text-black	font-medium p-1	">
              Title: {data.title}
            </h4>
          </CardContent> 
          <CardFooter>
            <Link
              to="/$blogId"
              params={{
                blogId: data.id,
              }}
            >
              <h3 className="italic pt-3 text-indigo-600	">View Blog</h3>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
