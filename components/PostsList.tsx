// Components
import PostCard from "./PostCard";

// Utils
import { fetchPosts } from "@/libs/utils"; 

async function PostList() {
    const posts = await fetchPosts();

    return (
        <section className="grid grid-cols-1 gap-3 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 xl:gap-5 xl:p-10">
            {posts.map((post) => (
                <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
        </section>
    )
}

export default PostList;