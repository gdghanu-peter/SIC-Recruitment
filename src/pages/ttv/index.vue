<template>
  <div>
    <Ttv />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Tuyển thành viên - CLB Chứng khoán SIC - FTU',
  meta: [
    // General description for SEO
    {
      name: 'description',
      content: 'Tuyển thành viên - CLB Chứng khoán SIC - FTU',
    },

    // Open Graph for Facebook, Messenger, Instagram
    {
      property: 'og:title',
      content: 'Tuyển thành viên - CLB Chứng khoán SIC - FTU',
    },
    {
      property: 'og:description',
      content: 'Tuyển thành viên - CLB Chứng khoán SIC - FTU',
    },
    {
      property: 'og:image',
      content: '/thumbnail.png', // Replace with the correct path to your thumbnail
    },
    {
      property: 'og:image:alt',
      content: 'Tuyển thành viên - CLB Chứng khoán SIC - FTU Thumbnail Image',
    },
    {
      property: 'og:url',
      content: 'https://www.sic-ftu.com/ttv', // The URL of your page
    },
    {
      property: 'og:type',
      content: 'website', // Type of content, typically "website" or "article"
    },
    {
      property: 'og:locale',
      content: 'vi_VN', // Locale of the content, e.g., Vietnamese for Vietnam
    },

    // Facebook App ID (optional but recommended if using Facebook Analytics or Pixel)
    {
      property: 'fb:app_id',
      content: 'your_facebook_app_id', // Replace with your actual Facebook App ID
    },

    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image', // Shows large image in the Twitter card
    },
    {
      name: 'twitter:title',
      content: 'Tuyển thành viên - CLB Chứng khoán SIC - FTU',
    },
    {
      name: 'twitter:description',
      content: 'Tuyển thành viên - CLB Chứng khoán SIC - FTU',
    },
    {
      name: 'twitter:image',
      content: '/thumbnail.png', // Replace with your thumbnail image path
    },
    {
      name: 'twitter:image:alt',
      content: 'Tuyển thành viên - CLB Chứng khoán SIC - FTU Thumbnail Image',
    },

    // Additional metadata for other platforms
    {
      name: 'theme-color',
      content: '#ffffff', // Optional, can customize the browser's theme color
    },
  ],
})
</script>
