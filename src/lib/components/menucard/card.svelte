<script>
    // @ts-nocheck

    import { fade ,fly} from "svelte/transition";
    import { useLazyImage as lazyImage } from 'svelte-lazy-image';
    export let product;
</script>

<!--Padding 4 option -->
<div class="lg:w-1/3  w-full      ">
    <a transition:fly="{{ y: 200, duration: 2000 }}"  href={`product/${product.id}`} class="flex relative cursor-pointer  ">
        <img
            alt="gallery"
            class="lazyload  absolute inset-0 w-full h-full object-cover object-center"
            data-src={product.image}
            use:lazyImage
        />
        <!--z-10-->
        <div
            class="px-8 py-10 relative  w-full border-4 border-gray-200  opacity-0 hover:opacity-75 custom-background"
        >
            <h2
                class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
            >
                {product.name}
            </h2>
            <h1 class="title-font text-lg  mb-3 uppercase font-bold">
                {product.name}
            </h1>
            <p class="leading-relaxed">{product.description}</p>
        </div>
    </a>
</div>


<style>
    .custom-background {
        background-color: #2098b0;
        color: white ;
    }

    .custom-background > h1{
        color: #e8b856;
    }
</style>