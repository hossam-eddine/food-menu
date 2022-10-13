<script>
// @ts-nocheck


export let model
</script>

<div class="container mx-auto   mt-5 h-auto  ">
 <h1 class="text-white mb-3 font-bold lg:text-2xl md:text-2xl text-xl">Image de réalité augmentée</h1>
    <!--Modelviewer 3D -->
    <model-viewer   class=" lazyload container     bg-white  rounded-md h-60" src={model} ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1">
        <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
        </div>
        
        
    </model-viewer>

</div>