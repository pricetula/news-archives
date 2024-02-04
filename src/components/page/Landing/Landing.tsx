"use client"
import type { NewsData } from "@/data"; // Import the NewsData type
import { NewsSnippet } from "./components/NewsSnippet";


export interface LandingProps {
    newsArticles: NewsData[];
}

export async function Landing({ newsArticles }: LandingProps) {
    return (
        <ul className="flex flex-wrap">
            {
                (newsArticles || []).map((article) => (
                    <li key={article.id} className="w-1/4">
                        <NewsSnippet article={article} />
                    </li>
                ))

            }
        </ul>
    );
}