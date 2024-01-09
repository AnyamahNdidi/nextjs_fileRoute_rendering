import React from "react";

interface ChildrenProps
{
    children: React.ReactNode;
}


export default function PostsLayout({children}: ChildrenProps)
{
    return (<div className="p-4 bg-blue-950 min-h-screen">
        <div className="p-4  bg-white rounded-xl">{children}</div>
    </div>)
    
}