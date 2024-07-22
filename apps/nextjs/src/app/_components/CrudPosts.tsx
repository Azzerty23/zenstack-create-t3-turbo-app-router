"use client";

import { Button } from "@mantine/core";

import { useCreatePost, useFindManyPost } from "@acme/hooks";

export const CrudPosts = () => {
  const { data: posts } = useFindManyPost();
  const { mutate: createPost } = useCreatePost();

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
        <Button
          onClick={() =>
            createPost({
              data: {
                name: "test5",
              },
            })
          }
        >
          Create Post
        </Button>
      </div>
    </div>
  );
};
