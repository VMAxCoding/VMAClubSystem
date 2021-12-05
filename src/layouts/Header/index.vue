<template>
  <q-header class="header" v-if="show">
    <q-toolbar>
      <q-toolbar-title shrink class="row items-center no-wrap q-mx-lg">
        <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg" />
        <span class="q-ml-sm text-weight-medium">{{ t('app.name') }}</span>
      </q-toolbar-title>
      <Tabs />
      <q-space />
      <BtnGroup />
    </q-toolbar>
  </q-header>
</template>

<script>
import {
  computed, defineComponent, defineAsyncComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const Tabs = defineAsyncComponent(() => import('./tabs'));
const BtnGroup = defineAsyncComponent(() => import('./btn-group'));

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    const show = computed(() => route.meta.showHeader ?? true);
    return {
      t,
      show,
    };
  },
  components: {
    Tabs,
    BtnGroup,
  },

});
</script>
<style lang="scss" scoped>
.header {
  background: transparent;
  color: inherit;
}
</style>
