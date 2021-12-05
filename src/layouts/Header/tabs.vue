<template>
  <q-tabs shrink inline-label active-color="primary" class="tabs gt-sm">
    <q-route-tab
      v-for="tab in tabList"
      :key="tab.name"
      :to="tab.to"
      :icon="tab.icon"
      exact
      :label="t(`pages.${tab.name}`)"
    />
  </q-tabs>
</template>

<script>
import {
  defineComponent, inject,
} from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const tabList = inject('goList');
    return {
      t,
      tabList,
    };
  },

});
</script>
<style lang="scss" scoped>
.tabs {
  min-height: 64px;
}
</style>
