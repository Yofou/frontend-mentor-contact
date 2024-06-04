<template>
	<label class="w-full flex flex-col gap-xs">
    <span class="text-body-s text-dark-grey">{{ props.label }} <span class="text-green">*</span> </span>
		<span class="w-full grid grid-cols-2 gap-m">
			<slot />
		</span>
	</label>
</template>

<script setup lang="ts">
	import { provide } from 'vue';

	const props = defineProps<{
		label?: string
	}>()

	const model = defineModel<any>()
	provide('radio-selected', model)
</script>
