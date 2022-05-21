<template>
  <div class="full-size-table rounded-lg sm:shadow-lg overflow-scroll mt-10 mx-4 lg:mx-10">
<!--    <table class="unresponsive-table w-full flex bg-white shadow-lg overflow-hidden text-center">-->
    <table class="unresponsive-table w-full bg-white overflow-hidden shadow-lg text-center">
      <thead class="text-white">
      <tr class="bg-secondary-color table-row rounded-l-lg sm:rounded-none">
        <th class="p-3 sm:w-40">
          מוסד
        </th>
        <th class="p-3 sm:w-40">
          תעודת זהות
        </th>
        <th class="p-3 sm:w-40">
          שם משפחה
        </th>
        <th class="p-3 sm:w-40">
          שם פרטי
        </th>
        <th class="p-3 sm:w-40">
          ארץ לידה
        </th>
        <th class="p-3 sm:w-40">
          תאריך לידה
        </th>
        <th class="p-3 sm:w-40">
          תאריך עלייה
        </th>
        <th class="p-3 sm:w-40">
          מין
        </th>
        <th class="p-3 sm:w-40">
          לאום
        </th>
        <th class="p-3 sm:w-40">
          טלפון בבית
        </th>
        <th class="p-3 sm:w-40">
          טלפון נייד
        </th>
        <th class="p-3 sm:w-40">
          אימייל
        </th>
      </tr>
      </thead>

      <tbody class="flex-1 sm:flex-none">
      <tr v-for="(student, index) in 9" :key="index">
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
        <td class="border-gray border-t border-l hover:bg-primary-color hover:text-gray p-3">
          {{ student }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.unresponsive-table {
  display: inline-table !important;
  thead > tr:not(:first-child) {
    display: none;
  }

  td, th {
    height: 50px !important;
    white-space: nowrap;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
}
</style>