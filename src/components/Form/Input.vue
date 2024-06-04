<template>
	<label class="flex flex-col gap-xs">
		<span class="text-body-s text-dark-grey">{{ props.label }}  <span class="text-green">*</span></span>
		<input type="text" class="py-s px-l border border-medium-grey rounded-[.5rem] text-body-m">
	</label>
</template>

<script setup lang="ts">
	const props = defineProps<{
		label?: string
	}>()
</script>
