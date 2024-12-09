import { createFileRoute } from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'

export const Route = createFileRoute('/$blogId')({
  component: OneBlog,
})
                                       
export default function OneBlog() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
    </QueryClientProvider>
  )
}

function Blog() {
  const { blogId } = Route.useParams()
  const { isLoading, error, data } = useQuery({
    queryKey: ['OneData'],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`).then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return <div className="text-center">Loading...</div>

  if (error)
    return (
      <div className="text-center text-red-500">
        An error has taken place: {(error as Error).message}
      </div>
    )

    
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center p-6">
      <Card
        key={data.id}
        className="w-[95%] mx-w-xl max-w-4xl bg-white shadow-xl flex flex-col border-solid	border-stone-500	 mt-10	 rounded-lg p-8  h-[80vh]"
      >
        <CardHeader>
          <h2 className="text-2xl font-bold text-green-500	 ">
            User ID: &nbsp; {data.userId}
          </h2>
          <CardDescription>
            <h3 className="text-2xl text-amber-500 font-semibold ">
              ID: &nbsp; {data.id}
            </h3>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-2">
          <h4 className="text-xl text-teal-600 font-semibold p-2">
            Title: {data.title}
          </h4>
          <p className="text-md leading-7 tracking-widest max-w-md	text-red-500 font-normal line-clamp-3 p-2">
            Body: {data.body}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
