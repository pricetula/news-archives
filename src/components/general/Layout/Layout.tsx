import { TopNav } from "../TopNav";

export interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: Readonly<LayoutProps>) {
    return (
        <main className="pt-10">
            <TopNav />
            {children}
        </main>
    );
}