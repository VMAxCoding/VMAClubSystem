<template>
  <div class="row">
    <div class="col-2">.col-9</div>
    <div class="col-10">.col-9</div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import {
  computed, defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const store = useStore();
    const clubList = computed(() => store.getters['clubs/list']);
    const { t } = useI18n();

    return {
      clubList,
      t,
    };
  },
});
</script>
