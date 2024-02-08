import { NewsData } from "@/data";

export interface NewsSnippetProps {
    news?: NewsData;
}

export function NewsSnippet({ news }: NewsSnippetProps) {
    return <div>{news?.headline}</div>
}