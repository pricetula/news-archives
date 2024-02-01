import { ReactQueryClientProvider } from "@/app/provider/ReactQueryClientProvider";
import { TopNav } from "../TopNav";

export interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: Readonly<LayoutProps>) {
    return (
        <ReactQueryClientProvider>
            <main className="pt-10">
                <TopNav />
                {children}
            </main>
        </ReactQueryClientProvider>
    );
}