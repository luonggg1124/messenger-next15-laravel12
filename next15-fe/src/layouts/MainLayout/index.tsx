import Header from "@/components/Header";
import React, { ReactNode } from "react";
type Props ={
    children: ReactNode,
    className?: string

}
const MainLayout = ({children, className}:Props) => {
    return <div className="bg-white">
        <Header/>
        <main className={className}>
            {children}
        </main>
    </div>
}

export default MainLayout;