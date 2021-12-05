<template>
  <q-card flat bordered class="fit">
    <div class="avatar-container column">
      <q-avatar size="80px" class="col self-center" v-if="isSignIn">
        <q-img :src="user.avatar || require('assets/image/user/avatar.png')" />
      </q-avatar>
      <div class="q-mt-md text-weight-bold col self-center">{{ user.name }}</div>
      <div class="col self-center">{{ user.id }}</div>
      <div class="q-mb-md col self-center">{{ user.email }}</div>
      <q-btn class="col self-center" :label="t('user.manage')" @click="goToUser" outline rounded />
    </div>
    <q-separator />
    <div class="action-container column">
      <q-btn outline :label="t('user.signOut')" @click="signOut" class="col self-center" />
    </div>
    <q-separator />
    <div class="footer-container column">
      <div class="col self-center row justify-evenly">
        <q-btn flat size="sm" :label="t('user.policy')" class="col" />
        <q-btn flat size="sm" :label="t('user.service')" class="col" />
      </div>
    </div>
  </q-card>
</template>

<script>
import {
  computed, defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const store = useStore();

    const user = computed(() => store.getters['user/user']);
    const isSignIn = computed(() => store.getters['user/isSignIn']);

    const signOut = () => store.dispatch('user/signOut');
    const goToUser = () => router.push({ name: 'UserCenter' });

    return {
      t,
      user,
      isSignIn,
      signOut,
      goToUser,
    };
  },
});
</script>
<style lang="scss" scoped>
.avatar-container {
  margin: 20px 33px;
}
.action-container {
  margin: 16px;
}
.footer-container {
  margin: 14px 33px;
}
</style>
