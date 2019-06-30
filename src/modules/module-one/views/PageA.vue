<template>
  <div class="page">
    <h3>This is a page: A</h3>
    <span>vuex state <strong>name</strong>: {{ name }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'mopa',

  computed: {
    ...mapState(['name']),
  },
};
</script>
