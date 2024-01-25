import { TopNav } from "../TopNav";

export interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: Readonly<LayoutProps>) {
    return (
        <main>
            <TopNav />
            {children}
        </main>
    );
}