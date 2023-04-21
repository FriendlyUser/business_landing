<script setup>
import Knowledge from '../assets/icons/undraw_sharing_knowledge_03vp.svg'
</script>

<template>
  <section class="flex flex-col md:flex-row mt-10 mb-10 mr-10 ml-10">
    <div class="md:w-1/2 knowledge">
      <Knowledge />
    </div>
    <div class="md:w-1/2 md:pl-10 flex items-center">
      <div>
        <h2 class="text-2xl font-bold mb-4">Knowledge Transfer</h2>
        <p class="text-lg mb-4 mr-16">
          We believe in empowering our clients with the knowledge they need to succeed. When you partner with us, we work closely with your team to transfer our expertise and help you build the skills you need to achieve your goals. Our consultative approach ensures that we understand your unique needs and challenges, so we can provide guidance and recommendations that align with your business objectives.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.knowledge svg {
    scale: 0.6;
}
</style>