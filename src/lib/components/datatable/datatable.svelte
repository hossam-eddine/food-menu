<script>
// @ts-nocheck

    export let valeur_energetique;
    export let Graisses_sature;
    export let Hydrates_carbon;
    export let Protéines;
    export let Sel;
</script>

<div class="mt-5 overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
            Information nutritionnelle
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
        </p>
    </div>
    <div class="border-t border-gray-200">
        <dl>
            <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
                <dt class="text-sm font-medium text-gray-500">
                    Valeur énergétique
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {valeur_energetique}
                </dd>
            </div>
            <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
                <dt class="text-sm font-medium text-gray-500">
                    Graisses, c’est saturé
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {Graisses_sature}
                </dd>
            </div>
            <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
                <dt class="text-sm font-medium text-gray-500">
                    Hydrates de carbone, dont les sucres
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {Hydrates_carbon}
                </dd>
            </div>
            <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
                <dt class="text-sm font-medium text-gray-500">Protéines</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {Protéines}
                </dd>
            </div>
            <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
                <dt class="text-sm font-medium text-gray-500">Sel</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {Sel}
                </dd>
            </div>
        </dl>
    </div>
</div>
