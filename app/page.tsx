import { Suspense } from "react";
import PostList from "@/components/PostsList";
import PostCardSkeleton from "@/components/PostCardSkeleton";

async function Home() {
  return (
    <section>
      <Suspense fallback={
        <div className="grid grid-cols-1 gap-3 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 xl:gap-5 xl:p-10">
          {Array.from({ length: 50 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      }>
        <PostList />
      </Suspense>
    </section>
  )
};

export default Home;