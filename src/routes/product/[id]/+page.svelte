




<script>
    
    // @ts-nocheck





import { useLazyImage as lazyImage } from 'svelte-lazy-image';
    
    import Model from "$lib/components/3d_model/model.svelte";
    import { products } from "../../../stores/productstores.js";
    import Datatable from "$lib/components/datatable/datatable.svelte";
   
    let singleproduct
    export let data 
    singleproduct= $products.filter((pd)=>pd.id==data.p_id)
    
 


    
    
 

</script>

<section class="">
    <div class="container px-6 py-10 mx-auto">
    

        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="lazyload object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" data-src={singleproduct[0].image} alt="" use:lazyImage>

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              

                <h3  class="block mt-4 text-2xl font-semibold uppercase  hover:underline  md:text-3xl custom-color">
                {singleproduct[0].name}
                </h3>

                <p class="mt-3 text-sm text-gray-100 font-bold md:text-xl leading-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                    {singleproduct[0].description}
                </p>

                

               
            </div>
            
        </div>
        <Model model={singleproduct[0].model} />
        <Datatable
         valeur_energetique={singleproduct[0].valeur_energetique} 
         Graisses_sature={singleproduct[0].Graisses_sature}
         Hydrates_carbon={singleproduct[0].Hydrates_carbon}
         Protéines={singleproduct[0].Protéines}
         Sel={singleproduct[0].Sel}

         />
    </div>
</section>

<style>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);

    .custom-color{
        color: #e8b856;
    }

</style>
