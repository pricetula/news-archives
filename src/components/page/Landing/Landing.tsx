import type { NewsData } from "@/data"; // Import the NewsData type
import { NewsSnippet } from "./components/NewsSnippet";


export interface LandingProps {
    newsArticles: NewsData[];
}

export async function Landing({ newsArticles }: LandingProps) {
    return (
        <article>
            <ul>
                {
                    (newsArticles || []).map((article) => (
                        <li key={article.id}>
                            <NewsSnippet article={article}/>
                        </li>
                    ))

                }
            </ul>
        </article>
    );
}