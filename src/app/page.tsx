import { Landing } from "@/components/page/Landing";

export default async function Home() {
    async function getNewsArticles(from: string, to: string) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        const params = new URLSearchParams({
            to,
            from,
        });
        // const res = await fetch(`${baseUrl}/api/news?${params.toString()}`)
        // const resData = await res.json()
        // return resData?.data || []
        return [{"id":1,"snippet":"Is this really about policy, or is it personal?","source":"The New York Times","publish_date":"2023-12-01T00:00:09","word_count":880,"external_id":"nyt://article/535b0f54-b05a-53c7-9776-f23f5c848e1e","lead_paragraph":"Donald Trump hasn’t talked much about policy in this election cycle, except for vague assertions that he’ll somehow bring back low unemployment and low inflation — which, by the way, has already happened. (Unemployment has been at or below 4 percent for almost two years. Thursday’s report on consumer spending showed the Federal Reserve’s preferred measure of underlying inflation getting close to its 2 percent target.) Most of his energy seems to be devoted to the prospect of wreaking revenge on his political opponents, whom he promises to “root out” like “vermin.”","headline":"Donald Trump Still Wants to Kill Obamacare. Why?","jumbo_img":"https://static01.nyt.com/images/2023/11/30/multimedia/30krugman1-flgq/30krugman1-flgq-jumbo.jpg","thumbnail_img":"https://static01.nyt.com/images/2023/11/30/multimedia/30krugman1-flgq/30krugman1-flgq-thumbStandard.jpg","url":"https://www.nytimes.com/2023/11/30/opinion/trump-obamacare.html"},{"id":2,"snippet":"Prosecutors said the former corrections officers had made false statements to investigators after three of them assaulted Quantez Burks, 37, in March 2022.","source":"The New York Times","publish_date":"2023-12-01T00:02:56","word_count":673,"external_id":"nyt://article/adb494c7-950f-5a7f-be28-03536afd6ca1","lead_paragraph":"Six former correctional officers at a West Virginia jail are facing federal charges in the death of an inmate who was assaulted by a group of guards and died last year, the Justice Department said Thursday.","headline":"6 Former Jail Officers Charged in Death of West Virginia Inmate","jumbo_img":"https://static01.nyt.com/images/2023/11/30/multimedia/30xp-westvirginia-chqf/30xp-westvirginia-chqf-jumbo.jpg","thumbnail_img":"https://static01.nyt.com/images/2023/11/30/multimedia/30xp-westvirginia-chqf/30xp-westvirginia-chqf-thumbStandard.jpg","url":"https://www.nytimes.com/2023/11/30/us/west-virginia-correctional-officers-charged.html"},{"id":3,"snippet":"A blueprint reviewed by The Times laid out the attack in detail. Israeli officials dismissed it as aspirational and ignored specific warnings.","source":"The New York Times","publish_date":"2023-12-01T00:16:08","word_count":1582,"external_id":"nyt://article/427a4019-20ec-5b79-be62-9ea8fb811333","lead_paragraph":"Israeli officials obtained Hamas’s battle plan for the Oct. 7 terrorist attack more than a year before it happened, documents, emails and interviews show. But Israeli military and intelligence officials dismissed the plan as aspirational, considering it too difficult for Hamas to carry out.","headline":"Israel Knew Hamas’s Attack Plan More Than a Year Ago","jumbo_img":"https://static01.nyt.com/images/2023/11/30/multimedia/30israel-plans-2-tvhk/30israel-plans-2-tvhk-jumbo.jpg","thumbnail_img":"https://static01.nyt.com/images/2023/11/30/multimedia/30israel-plans-2-tvhk/30israel-plans-2-tvhk-thumbStandard.jpg","url":"https://www.nytimes.com/2023/11/30/world/middleeast/israel-hamas-attack-intelligence.html"},{"id":4,"snippet":"TikTok, which is owned by the Chinese company ByteDance, has been locked in a legal battle with Montana since the state passed the ban in April.","source":"The New York Times","publish_date":"2023-12-01T00:16:41","word_count":1030,"external_id":"nyt://article/e3122a10-c916-5d82-b1db-3b8b6c1fc664","lead_paragraph":"A federal judge in Montana on Thursday blocked a statewide ban of TikTok from taking effect next year, at least temporarily preventing the nation’s first such prohibition on the popular video app.","headline":"Judge Halts TikTok Ban in Montana","jumbo_img":"https://static01.nyt.com/images/2023/10/20/multimedia/HFO-Montana-Ban-jkhw/HFO-Montana-Ban-jkhw-jumbo.jpg","thumbnail_img":"https://static01.nyt.com/images/2023/10/20/multimedia/HFO-Montana-Ban-jkhw/HFO-Montana-Ban-jkhw-thumbStandard.jpg","url":"https://www.nytimes.com/2023/11/30/business/tiktok-montana-ban-blocked.html"},{"id":5,"snippet":"In his decades in politics, the statesman advised many presidents. Here are some of their thoughts from over the years, in their own words.","source":"The New York Times","publish_date":"2023-12-01T00:27:49","word_count":962,"external_id":"nyt://article/e2e22d32-ef8f-595f-acfa-cc176a341d26","lead_paragraph":"Henry A. Kissinger, the former secretary of state who died this week, was a go-to adviser for many American presidents over his decades in politics.","headline":"Kissinger Had the Ear of Presidents. He Had Their Awe and Ire, Too.","jumbo_img":"https://static01.nyt.com/images/2023/11/30/multimedia/30dc-kissinger-presidents-02a-wbvh/30dc-kissinger-presidents-02a-wbvh-jumbo.jpg","thumbnail_img":"https://static01.nyt.com/images/2023/11/30/multimedia/30dc-kissinger-presidents-02a-wbvh/30dc-kissinger-presidents-02a-wbvh-thumbStandard.jpg","url":"https://www.nytimes.com/2023/11/30/us/politics/kissinger-biden-trump-nixon-presidents.html"}]
    }
    const newsArticles = await getNewsArticles("0", "4")
    return <Landing newsArticles={newsArticles} />;
}
