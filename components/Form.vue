<template>
<section class="bg-gray-100">
    <div class="py-12 mx-auto max-w-4xl"> 
        <form
        action="https://formspree.io/f/mayvrajp"
        method="POST"
        class="flex flex-col space-y-6"
        >
        <label class="flex flex-col">
            <span class="text-lg font-medium mb-1">Your email:</span>
            <input type="email" name="email" class="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300">
        </label>
        <label class="flex flex-col">
            <span class="text-lg font-medium mb-1">Your message:</span>
            <textarea name="message" class="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </label>
        <!-- your other form fields go here -->
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300">Send</button>
        </form>
    </div>
</section>
</template>