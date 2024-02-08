"use client"
import {
    useQuery,
} from '@tanstack/react-query'
import { NewsSnippet } from './components/NewsSnippet';
import { getNewsArticles } from '../../utils';

export function NewsSnippets() {
    const { data } = useQuery({
        queryKey: ['news-snippets'],
        queryFn: () => getNewsArticles("0", "4")
    })
    return (
        <ul>
            {
                data?.map((news) => (
                    <li key={news.id}>
                        <NewsSnippet news={news} />
                    </li>
                ))
            }
        </ul>
    )
}