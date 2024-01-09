import React from "react";

interface ChildrenProps
{
    children: React.ReactNode;
}

export default function GeneralLayout({children }: ChildrenProps)
{
    return (
        <div className="max-w-2xl mx-auto">{children}</div>
    )
}