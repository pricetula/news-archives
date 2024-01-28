import { Button } from "@/components/ui/button";

/*
revalidate the data at most every hour
*/
export const revalidate = 3600

export function Landing() {
    return (
        <article>
            <h1>Landing</h1>
            <Button>Button</Button>
        </article>
    );
}