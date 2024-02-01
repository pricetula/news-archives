import { Landing } from "@/components/page/Landing";
import type { NewsData } from "@/data";

export default async function Home() {
  async function getNewsArticles(from: string, to: string) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const params = new URLSearchParams({
      to,
      from,
    });
    const res = await fetch(`${baseUrl}/api/news?${params.toString()}`)
    const resData = await res.json()
    return resData?.data || []
  }
  const newsArticles = await getNewsArticles("0", "4")
  return <Landing newsArticles={newsArticles}/>;
}
