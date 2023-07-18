import { component$ } from "@builder.io/qwik";
import DocsSidebar from "~/components/common/DocsSidebar";


export default component$(() => {
  return (
    <>
    <section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-3xl">
          <header>
        <h1 class="text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-8 md:mb-16 font-heading">
          Docs
        </h1>
      </header>
    </section>
     <DocsSidebar />
    </>
  );
});