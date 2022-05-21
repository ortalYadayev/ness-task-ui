<template>
    <div class="min-h-screen bg-gray py-10">
      <div class="flex justify-center mb-5">
        <button @click="openForm" class="duration-300 border-2 border-secondary-color text-secondary-color hover:bg-secondary-color hover:text-gray rounded-lg px-3 py-1.5" >
          {{ titleButton }}
        </button>

      </div>

      <Form v-if="open" />

      <Table />
    </div>
</template>

<script setup>
import Form from '../components/Form.vue';
import Table from '../components/Table.vue';
import { ref } from "vue";

const open = ref(false);
const titleButton = ref('לרשום תלמיד');

function openForm() {
  open.value = !open.value;

  if(open.value) {
    titleButton.value = 'ביטול רישום';
    console.log(titleButton.value)
  } else {
    titleButton.value = 'לרשום תלמיד';
  }
}
</script>