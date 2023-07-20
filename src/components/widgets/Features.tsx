import { component$ } from "@builder.io/qwik";
import { IconStar } from "~/components/icons/IconStar";

export default component$(() => {
    const items = [
        {
            title: "Versatile Macro Creation",
            description: "Leverage scripting languages (Pascal, Python, C#, Delphi) for creating complex macros. This feature supports all client and server versions, offering enhanced flexibility.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Efficient Macro Performance",
            description: "Experience quick interactions with characters and instant game entry. Efficient data exchange between the client and server ensures fast and efficient macro performance.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Resource Efficiency",
            description: "With minimal resource consumption, you can manage a large number of game characters. This feature is designed to support high scalability without affecting performance.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Secure Script Assembly",
            description: "Create script assemblies that are secure and unreadable. These can be run in Stealth, ensuring your scripts remain safe from unauthorized access and edits.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Integrated Script Editor",
            description: "Use the built-in script editor, featuring syntax highlighting and auto-substitution functions, parameters, and more, providing an enhanced script development experience.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Powerful Path Finding",
            description: "The built-in path-finding feature ensures the fastest and best ways to move your characters, providing smart movement solutions for a smooth gaming experience.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Intelligent Character Movement",
            description: "Experience an intelligent system for character movement, offering the ability to check static tile possibilities and streamline the gameplay process.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Zoom and Map Tools",
            description: "Navigate the game with ease using the zoom tools and separate window map, similar to UO AutoMap. It's a feature designed for optimal navigation.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Quick ItemCash Capabilities",
            description: "The Quick ItemCash feature allows the handling of a large quantity of items in character vicinity swiftly and without issues, increasing efficiency and speed.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Secure and Valid Client",
            description: "Stealth Client offers 99.9% validation as the original client, making it virtually impossible for servers to identify, thus enhancing the security and trust.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Integrated Proxy Support",
            description: "Connect to the game server via SOCKS 4/5 and HTTP proxy, with authorization if required. Integrated proxy support provides versatility and security in connections.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Flexible Client Options",
            description: "Enjoy flexibility in client options, like playing area size adjustment, multi-patch support, and stamina check removal. Also, it reduces CPU load significantly without any client patching.",
            icon: "tabler:brand-tailwind",
        },
        {
            title: "Extensive Script API",
            description: "Stealth Client provides an extensive Script API with over 450 methods that can be invoked from the client, covering all in-game needs for a comprehensive gameplay experience.",
            icon: "tabler:brand-tailwind",
        }



];

    return (
        <section class="scroll-mt-16" id="features">
            <div class="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
                <div class="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
                    <p class="text-base text-primary-600 dark:text-purple-200 font-semibold tracking-wide uppercase">
                        Features
                    </p>
                    <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
                        What you get with <span class="whitespace-nowrap">Stealth Client</span>
                    </h2>
                    <p class="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">
                        Some of the highlight features that might make you excited
                    </p>
                </div>
                <div class="grid mx-auto space-y-6 gap-10 md:grid-cols-3 md:space-y-0">
                    {items.map(({ title, description }, index) => (
                        <div key={index} class="flex flex-row max-w-md h-full mb-4 items-start">
                            <div class="mb-4 mr-4">
                                <div class="text-white flex items-center justify-center w-12 h-12 rounded-full bg-secondary-500 dark:bg-secondary-700">
                                    <IconStar />
                                </div>
                            </div>
                            <div class="flex flex-col justify-start">
                                <h3 class="mb-3 mt-1 text-xl font-bold">{title}</h3>
                                <p class="text-gray-600 dark:text-slate-400">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});
