import { PostTypes } from "@/types/postTypes"
import Link from 'next/link'

// incremental static generation (rendering every 20 seconds)
// it render all endpoints and the tsx
// export const revalidate = 20;

export default async function PostPage()
{
    // incremental static generation the revalidate is just for the particular end point (rendering every 24hrs seconds)
    const postsRes = await fetch("http://localhost:3004/posts", {
        next: {
            revalidate: 60 * 60 * 24
        }
    })
    const post =( await postsRes.json() as [PostTypes])
    console.log("this is posts",post)

    return (<div>
        <h1>All post</h1>
        <ul>
            {
                post.map((item)=>{
                    return <>
                        <li>
                            <Link href={`/posts/${item.id}`}>
                                <h2>{item.title}</h2>
                            </Link>
                  </li>
                    </>
                })
            }
        </ul>
    </div>)
}