import Image from "next/image";
import { NewsData } from "@/data";
import Link from "next/link";

export interface NewsSnippetProps {
    article: NewsData;
}

export function NewsSnippet({ article }: NewsSnippetProps) {
    return (
        <article>
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
            <h2>
                <Link href={`/news/${article.id}`}>
                    {article.headline}
                </Link>
            </h2>
            <p>{article.snippet}</p>
        </article>
    )
}