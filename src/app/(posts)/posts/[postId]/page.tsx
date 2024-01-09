import { PostTypes } from "@/types/postTypes";


interface PostPageProps
{
    params: {
        postId:number
    }
}

export default async function SinglePost({params}: PostPageProps)
{
    console.log("checking for the post id",params.postId);
    const postRest = await fetch(`http://localhost:3004/posts/${params.postId}`);
    const post = (await postRest.json()) as PostTypes
    return (
        <main>
            <h1>{post.title}</h1>
            <div>{post .body}</div>
        </main>
    )
}