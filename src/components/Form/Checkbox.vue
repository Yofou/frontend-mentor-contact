<template>
  <label class="flex gap-m items-center">
    <button type="button" class="w-[1rem] h-[1rem] grid place-items-center rounded-[.125rem] border-2 border-medium-grey" @click="onClick">
      <span v-if="isChecked" class="w-[.5rem] h-[.5rem] bg-green" />
    </button>
    <span>I consent to being contacted by the team <span class="text-green">*</span></span>
  </label>
</template>

<script setup lang="ts">
///// refs/provide-inject/variables /////
const isChecked = defineModel<boolean>()

///// methods /////
const onClick = () => {
  isChecked.value = !isChecked.value
}
</script>
