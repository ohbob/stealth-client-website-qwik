import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
const coverImage =
  "/window.png";

const windows = "https://eu2.contabostorage.com/2e3384f1ecd34bf0b79b2ed8b513abf6:stealth-releases/Stealth_Latest.rar"
const linux = "https://eu2.contabostorage.com/2e3384f1ecd34bf0b79b2ed8b513abf6:stealth-releases/Stealth_Linux_Latest.zip"
const macosx = "https://eu2.contabostorage.com/2e3384f1ecd34bf0b79b2ed8b513abf6:stealth-releases/UOStealth.pkg"


export default component$(() => {
  return (
    <section
      class={`bg-gradient-to-b md:bg-gradient-to-r from-white via-purple-50 to-sky-100 dark:bg-none mt-[-72px]`}
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:h-screen 2xl:h-auto pt-[72px]">
        <div class="py-12 md:py-20 2xl:min-h-0 lg:flex lg:gap-8 lg:items-center lg:py-16">
          <div class="mx-auto text-center basis-1/2 lg:text-left md:pb-16 pb-12 lg:pb-0">
            <div>
              <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                Elevate your Ultima Online Gameplay <br />
                <span class="text-[#039de1]">Hadless client</span> +{" "}
                <span class="sm:whitespace-nowrap text-[#039de1]">
                  Script Engine
                </span>
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mb-8 dark:text-slate-400">

                  Powered by Pascal and Python programming languages, empowers you to take control like never before. Automate tasks, exchange data seamlessly, and execute dynamic scripts. Level up your gaming with our advanced scripting capabilities.
                </p>
                <div class="flex flex-col flex-nowrap gap-4 m-auto max-w-xs sm:flex-row sm:justify-center sm:max-w-md lg:justify-start lg:m-0 lg:max-w-7xl">
                  <div class="flex w-full sm:w-auto">
                    <a
                        class="btn bg-gray-50 dark:bg-transparent sm:mb-0 w-full"
                        href={windows}
                        target="_blank"
                        rel="noopener"
                    >
                      Windows
                    </a>
                  </div>

                  <div class="flex w-full sm:w-auto">
                    <a
                      class="btn bg-gray-50 dark:bg-transparent sm:mb-0 w-full"
                      href={linux}
                      target="_blank"
                      rel="noopener"
                    >
                      Linux
                    </a>
                  </div>
                  <div class="flex w-full sm:w-auto">
                    <a
                        class="btn bg-gray-50 dark:bg-transparent sm:mb-0 w-full"
                        href={macosx}
                        target="_blank"
                        rel="noopener"
                    >
                      Mac OSX
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="relative m-auto max-w-5xl">
              <Image
                src={coverImage}
                layout="constrained"
                width={493}
                height={616}
                alt="Qwind Hero Image (Cool dog)"
                class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
