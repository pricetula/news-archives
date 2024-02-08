import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query'
import { NewsSnippets } from './components/NewsSnippets';
import { getNewsArticles } from './utils';


export async function Landing() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['news-snippets'],
        queryFn: () => getNewsArticles("0", "4")
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NewsSnippets />
        </HydrationBoundary>
    )
}