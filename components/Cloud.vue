<script setup>
import CloudComputing from '../assets/icons/undraw_cloud_hosting_7xb1.svg'
</script>

<template>
<section class="bg-gray-100 py-12 max-h-1/2">
    <div class="flex flex-col md:flex-row mt-10 mb-10 mr-10 ml-10">
        <div class="md:w-1/2 md:pr-10 flex items-center">
            <div>
                <h2 class="text-2xl font-bold mb-4">Cloud Computing</h2>
                <p class="text-lg mb-4">
                    Our cloud computing solutions enable your organization to scale and optimize your IT infrastructure while reducing costs. We offer a range of services including cloud migration, cloud hosting, and cloud management. Our team of experts will work with you to understand your business needs and recommend the right cloud solutions to meet your specific requirements.
                </p>
            </div>
        </div>
        <div class="md:w-1/2 cloudComputing">
            <CloudComputing class="w-full h-auto" />
        </div>
    </div>
</section>
</template>

<style scoped>
.cloudComputing svg {
    scale: 0.6;
}
</style>
