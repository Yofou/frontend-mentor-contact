<template>
	<label class="w-full">
		<span class="py-s px-l border border-medium-grey rounded-[.5rem] w-full flex gap-m items-center text-body-m">
      <span class="w-[1.25rem] h-[1.25rem] rounded-full grid place-items-center border border-medium-grey">
        <span v-if="isSelected" class="w-2/3 h-2/3 block rounded-full bg-green"></span>
      </span>
      <slot />
    </span>
		<input class="sr-only" form="test" type="radio" v-model="model" :value="value" />
	</label>
</template>

<script setup lang="ts">
	import { computed, inject, ref, type Ref } from 'vue';

	const props = defineProps<{ value?: string }>()
  const model = inject<Ref<string>>('radio-selected', ref(''))

  const isSelected = computed(() => {
    return props.value === model.value
  })
</script>
