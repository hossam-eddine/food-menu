<script>
    import "../app.css";

    import Footer from "$lib/components/Footer/footer.svelte"
    import Navbar from "$lib/components/Navbar/navbar.svelte";

</script>


<div class="relative w-full   custom-background">
    
<Navbar/>

<slot />


<Footer/>



</div>

<style>
    .custom-background {
        background-color: #2098b0;
    }
    
</style>
