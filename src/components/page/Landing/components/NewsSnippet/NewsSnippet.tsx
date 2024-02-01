import Image from "next/image";
import { NewsData } from "@/data";

export interface NewsSnippetProps {
    article: NewsData;
}

export function NewsSnippet({ article }: NewsSnippetProps) {
    return (
        <article>
            <h2>{article.headline}</h2>
            <p>{article.snippet}</p>
            {
                article.jumbo_img && (
                    <Image
                        src={article.jumbo_img}
                        blurDataURL={article.thumbnail_img}
                        alt={article.headline}
                        width={300}
                        height={250}
                    />
                )
            }
        </article>
    )
}