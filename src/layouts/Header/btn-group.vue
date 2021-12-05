<template>
  <div class="q-gutter-sm row items-center no-wrap">
    <q-btn round dense flat icon="apps">
      <q-tooltip>Google Apps</q-tooltip>
    </q-btn>
    <q-btn round dense flat icon="notifications" v-if="isSignIn">
      <q-badge color="red" text-color="white" floating>2</q-badge>
      <q-tooltip>Notifications</q-tooltip>
    </q-btn>
    <LanguageSwitcher />
    <q-btn round flat v-if="isSignIn">
      <q-avatar size="26px">
        <q-img :src="user.avatar || require('assets/image/user/avatar.png')" />
      </q-avatar>
      <q-tooltip>Account</q-tooltip>
      <q-popup-proxy :offset="[0, 20]" transition-show="jump-down" transition-hide="jump-up">
        <div class="user-card">
          <UserCard />
        </div>
      </q-popup-proxy>
    </q-btn>
    <q-btn
      color="primary"
      :label="t('user.signIn')"
      v-if="!isSignIn && !isSignInPage"
      @click="signIn"
    />
  </div>
</template>

<script>
import {
  computed, defineComponent, defineAsyncComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const LanguageSwitcher = defineAsyncComponent(() => import('components/LanguageSwitcher'));
const UserCard = defineAsyncComponent(() => import('./user-card'));

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const user = computed(() => store.getters['user/user']);
    const isSignIn = computed(() => store.getters['user/isSignIn']);
    const isSignInPage = computed(() => route.name === 'Sign');

    const signIn = () => router.push({ name: 'Sign', query: { redirect: route.path } });
    return {
      t,
      user,
      isSignIn,
      isSignInPage,
      signIn,
    };
  },
  components: {
    LanguageSwitcher,
    UserCard,
  },

});
</script>
<style lang="scss" scoped>
.user-card {
  max-height: calc(100vh - 162px);
  width: 250px;
}
</style>
