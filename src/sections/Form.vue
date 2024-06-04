<template>
	<form class="grid-cols-1 md:grid-cols-2 grid gap-x-m gap-y-l bg-white max-w-[46rem] w-full p-2xl rounded-[1rem] justify-self-center self-start">
		<h2 class="md:col-span-2 text-dark-grey text-heading font-bold">Contact Us</h2>
		<Input label="First name" />
		<Input label="Last name" />

		<Input label="Email Address" class="md:col-span-2" />

		<RadioGroup class="md:col-span-2" label="Query Type" v-model="selected">
      <RadioItem value="general">General Enquiry</RadioItem>
      <RadioItem value="support">Support Request</RadioItem>
		</RadioGroup>

    <TextArea label="Message" class="w-full md:col-span-2" />
    <Checkbox class="md:col-span-2 py-s" />
    <Button class="md:col-span-2">Submit</Button>
	</form>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
  import Input from '../components/Form/Input.vue';
  import RadioGroup from '../components/Form/Radio/Group.vue';
  import RadioItem from '../components/Form/Radio/Item.vue';
  import TextArea from '../components/Form/TextArea.vue'
  import Checkbox from '../components/Form/Checkbox.vue';
  import Button from '../components/Form/Button.vue';

  const selected = ref()
</script>
