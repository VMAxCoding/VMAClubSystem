<template>
  <q-footer v-if="show" class="lt-md">
    <q-tabs
      class="tabs shadow-8"
      align="justify"
      indicator-color="transparent"
      active-color="primary"
    >
      <q-route-tab
        v-for="item in tabList"
        :icon="item.icon"
        :label="t(`pages.${item.name}`)"
        :key="item.name"
        :to="item.to"
        exact
      />
    </q-tabs>
  </q-footer>
</template>
<script>
import {
  computed, defineComponent, inject,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    const show = computed(() => route.meta.showFooter ?? true);
    const tabList = inject('goList');
    return {
      t,
      show,
      tabList,
    };
  },
});
</script>
<style lang="scss" scoped>
.body--light {
  .tabs {
    background: #fff;
    color: #70757a;
  }
}

.body--dark {
  .tabs {
    background: var(--q-dark);
    color: #9aa0a6;
  }
}
</style>
