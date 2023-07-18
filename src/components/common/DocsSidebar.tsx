import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type { DocumentHead } from "@builder.io/qwik-city";

import type { Post } from "~/types";
import { fetchPosts } from "~/utils/docs";
import { SITE } from "~/config.mjs";

export default component$(() => {
  const store = useStore<{ posts: Post[] }>({
    posts: [],
  });

  useTask$(async () => {
    if (isServer) {
      const posts = await fetchPosts();
      store.posts = posts.map((post: Post) => ({ ...post }));
    }
  });

  return (
    <section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-3xl">
      <ul>
        {store.posts.map((post: any) => (
          <li key={post.slug} class="">
                    <a
                      class="hover:text-primary-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200"
                      href={`/docs/${post.slug}`}
                    >
                      {post.title}
                    </a>
          </li>
        ))}
      </ul>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Docs — Stealth Client",
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
