<script setup lang="ts">
import type { Kaomoji } from '@/types/kaomoji';

defineProps<{
  kaomoji: Kaomoji
}>()
</script>

<template>
  <div class="kaomoji-card">
    <span class="kaomoji-string">{{kaomoji.string}}</span>
    <div class="separator"></div>
    <div class="kaomoji-tags">
      <!-- All kaomoji keys go here -->
      <span 
      class="key-tag"
      v-for="cat in kaomoji.categories" 
      :key="cat">
      {{cat}}
      </span>
    </div>
  </div>
</template>
