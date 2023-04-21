<template>
<div>
  <div class="hero flex flex-wrap mr-10 ml-10 mt-10">
    <div class="w-full md:w-3/5 flex flex-col justify-center">
      <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
      <p class="text-gray-700 text-lg mb-8">{{ subtitle }}</p>
      <button class="hero-button bg-gray-800 text-white py-4 px-8 rounded-full text-xl hover:bg-gray-900 transition-colors duration-300">{{ button }}</button>
    </div>
    <div class="md:w-2/5">
      <HomeHero />
    </div>
  </div>
  <Features />
  <Tasks />
  <Cloud />
  <Knowledge />
  <Form />
</div>
</template>

<script>
import HomeHero from "./HomeHero.vue";
import Features from "./Services.vue";
import Tasks from "./Tasks.vue";
import Cloud from "./Cloud.vue";
import Knowledge from "./Knowledge.vue";
import Form from "./Form.vue";
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/800x600'
    }
  },
   components: {
    HomeHero,
    Features,
    Tasks,
    Cloud,
    Knowledge,
    Form,
  }
}
</script>

<style>
.hero {
  height: 80vh;
}

.hero-image {
  height: 100%;
}

.hero-content {
  height: 100%;
}
</style>
