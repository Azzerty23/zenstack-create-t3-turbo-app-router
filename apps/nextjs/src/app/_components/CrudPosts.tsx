"use client";

import { useFindManyPost } from "@acme/hooks";

export const CrudPosts = () => {
  const { data: posts } = useFindManyPost();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold">Posts</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* <PostForm />
            <PostList /> */}
        {posts?.map((post) => (
          <div key={post.id} className="rounded-md border p-4">
            <h3 className="text-xl font-bold">{post.name}</h3>
            <p className="text-gray-500">{post.createdAt.toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
