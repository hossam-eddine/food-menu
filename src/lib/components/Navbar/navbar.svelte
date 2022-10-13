<script>
    let show = true;

let innerWidth = 0;

$: if (innerWidth >= 767) {
    show = true;
}
$ :if(innerWidth<=767){
    show=false
}
// menu toggle 
function toggle() {
    show = !show;
}
</script>

<svelte:window bind:innerWidth />
<nav class="fixed z-10     w-full  custom-background">
    <div class="  m-auto  md:px-12 lg:px-7 ">
        <div
            class=" md:flex flex-wrap items-center justify-between  gap-6  md:gap-0"
        >
            <div class="   px-6 flex justify-between lg:w-max\ md:px-0">
                <a
                    href="https://tailus.io/blocks/hero-section"
                    aria-label="logo"
                    class="flex space-x-2 items-center"
                >
                    <img
                        src="https://tailus.io/sources/blocks/food-delivery/preview/images/icon.png"
                        class="w-12"
                        alt="tailus logo"
                        width="144"
                        height="133"
                    />
                    <span class="text-2xl font-bold text-yellow-900"
                        >Hsm <span class="logo" >Food</span
                        ></span
                    >
                </a>

                <button
                    aria-label="humburger"
                    id="hamburger"
                    class="relative w-10 h-10 -mr-2 lg:hidden md:hidden"
                    on:click={toggle}
                >
                    <div
                        aria-hidden="true"
                        id="line"
                        class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                    />
                    <div
                        aria-hidden="true"
                        id="line2"
                        class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                    />
                </button>
            </div>

            <div
                class="    lg:flex flex-wrap items-center space-y-6  rounded-xl   md:space-y-0 md:p-0 md:bg-transparent lg:w-7/12"
            >
                {#if show}
                    <div class="text-white  text-center lg:pr-4">
                        <ul
                            class=" space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0"
                        >
                            <li>
                                <a
                                    href="/"
                                    class="block md:px-4 transition hover:text-yellow-500"
                                >
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/menu"
                                    class="block md:px-4 transition hover:text-yellow-500"
                                >
                                    <span>Wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    class="block md:px-4 transition hover:text-yellow-500"
                                >
                                    <span>About</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</nav>



<style>

.custom-background {
        background-color: #2098b0;
    }

.logo{
        color: #e8b856;
    }

</style>