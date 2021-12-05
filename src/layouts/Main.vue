<template>
  <q-layout view="hHh Lpr fFf">
    <Header />
    <Footer />
    <q-page-container>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
      <BottomRightBtns />
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  defineComponent, provide, computed, defineAsyncComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';

const BottomRightBtns = defineAsyncComponent(() => import('components/BottomRightBtns'));
const Header = defineAsyncComponent(() => import('./Header'));
const Footer = defineAsyncComponent(() => import('./Footer'));

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    const meta = () => ({
      title: computed(() => t(route.name ? `pages.${route.name}` : 'information.error')).value,
      titleTemplate: (title) => `${title} | ${t('app.name')}`,
      meta: {
        description: { name: 'description', content: 'Page 1' },
        keywords: { name: 'keywords', content: 'Quasar website' },
        equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      },
    });
    useMeta(meta);
    const goList = [
      { icon: 'home', name: 'Index', to: { name: 'Index' } },
      { icon: 'school', name: 'ClubCenter', to: { name: 'ClubCenter' } },
      { icon: 'manage_accounts', name: 'UserCenter', to: { name: 'UserCenter' } },
      { icon: 'help', name: 'Help', to: { name: 'Help' } },
    ];
    provide('goList', goList);
  },
  components: {
    Header,
    Footer,
    BottomRightBtns,
  },
});
</script>
