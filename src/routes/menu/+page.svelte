<script>


    
    import { fly} from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    import { products } from "../../stores/productstores.js"
    import Card from "$lib/components/menucard/card.svelte";


</script>


<section transition:fly   class="text-gray-600 ">
    <div class=" container  mx-auto   px-5 py-24 ">
      <div class=" flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl  font-medium title-font mb-4 ">Our Menu </h1>
      </div>
      <div class="  flex flex-wrap -m-4   ">
        
    {#each $products as product }

   
        <Card {product}/>
    {/each}
       
        
      </div>
    </div>
  </section>




  <style>
    h1{
        color: #e8b856;
    }
  </style>