<template>
  <div class="sign-warp">
    <q-card
      class="sign-container in vertical-middle absolute-center q-pa-xl"
      flat
      :bordered="q.screen.gt.xs"
      v-if="tab === 'in'"
    >
      <q-card-section class="column q-my-md">
        <img
          class="col self-center q-mb-md"
          src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"
        />
        <div class="text-h5 col self-center q-my-xs">{{ t('sign.in.title') }}</div>
        <div class="text-h6 col self-center">{{ t('sign.in.subtitle') }}</div>
      </q-card-section>

      <q-form @submit.prevent="submit(0)" class="q-gutter-md">
        <q-input
          outlined
          v-model="form.signIn.email"
          lazy-rules
          :label="t('sign.forms.email')"
          suffix="@stu.vma.edu.cn"
          :rules="[val => checkInput(val, 'sign.forms.email')]"
        />
        <q-input
          v-model="form.signIn.password"
          outlined
          lazy-rules
          :label="t('sign.forms.password')"
          :rules="[val => checkInput(val, 'sign.forms.password')]"
          :type="showPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="showPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="showPwd = !showPwd"
            />
          </template>
        </q-input>
        <q-card-actions class="q-mb-md">
          <q-btn :label="t('sign.in.toggle')" flat color="primary" @click="tab = 'up'" />
          <q-btn :label="t('sign.in.forget')" flat color="primary" />
          <q-space />
          <q-btn
            :label="t('sign.in.submit')"
            type="submit"
            :disable="submitWait"
            unelevated
            color="primary"
            style="width:100px"
          />
        </q-card-actions>
      </q-form>
      <div class="extra row justify-between">
        <div>
          <q-btn label="测试登录" @click="mockSignIn" />
          <LanguageSwitcher />
        </div>
        <div>
          <q-btn flat size="sm" :label="t('user.policy')" class="col" />
          <q-btn flat size="sm" :label="t('user.service')" class="col" />
        </div>
      </div>
    </q-card>
    <q-card
      class="sign-container up vertical-middle absolute-center q-pa-xl row"
      flat
      :bordered="q.screen.gt.sm"
      v-if="tab === 'up'"
    >
      <div class="col-8">
        <q-card-section class="column q-my-md">
          <img
            class="col self-center q-mb-md"
            src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"
          />
          <div class="text-h5 col self-center q-my-xs">{{ t('sign.up.title') }}</div>
        </q-card-section>

        <q-form @submit.prevent="submit(0)" class="q-gutter-md">
          <q-input
            outlined
            v-model="form.signIn.email"
            lazy-rules
            :label="t('sign.forms.email')"
            suffix="@stu.vma.edu.cn"
            :rules="[val => checkInput(val, 'sign.forms.email')]"
          />
          <q-input
            v-model="form.signIn.password"
            outlined
            lazy-rules
            :label="t('sign.forms.password')"
            :rules="[val => checkInput(val, 'sign.forms.password')]"
            :type="showPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="showPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPwd = !showPwd"
              />
            </template>
          </q-input>
          <q-card-actions class="q-mb-md">
            <q-btn :label="t('sign.up.toggle')" flat color="primary" @click="tab = 'in'" />
            <q-space />
            <q-btn
              :label="t('sign.up.submit')"
              type="submit"
              :disable="submitWait"
              unelevated
              color="primary"
              style="width:100px"
            />
          </q-card-actions>
        </q-form>
        <div class="extra row justify-between">
          <div>
            <LanguageSwitcher />
          </div>
          <div>
            <q-btn flat size="sm" :label="t('user.policy')" class="col" />
            <q-btn flat size="sm" :label="t('user.service')" class="col" />
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="column fit">
          <q-img :src="require('assets/image/user/sign-up.svg')" class="col self-center" />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {
  ref, reactive, defineComponent, defineAsyncComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

const LanguageSwitcher = defineAsyncComponent(() => import('components/LanguageSwitcher'));

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const q = useQuasar();
    const { t } = useI18n();

    const tab = ref('in');
    const showPwd = ref(true);
    const submitWait = ref(false);
    const form = reactive({
      signIn: {
        email: '',
        password: '',
      },
      register: {
        accept: false,
        name: '',
        id: 0,
        email: '',
        password: '',
      },
    });

    const checkInput = async (val, name) => (val && val.length > 0) || t('sign.plzInp') + t(name);

    async function back() {
      if (window.history.length > 0) {
        router.go(-1);
      } else {
        router.push({ name: 'Index' });
      }
    }
    async function success() {
      router.push(route.query.redirect ?? { name: 'ClubCenter' });
    }
    async function mockSignIn() {
      store.dispatch('user/mockSignIn').then(() => success());
    }
    async function submit(type) {
      if (submitWait.value) return;
      const data = type ? form.register : form.signIn;
      const action = type ? 'user/register' : 'user/signIn';
      submitWait.value = true;
      await store.dispatch(action, data)
        .then(() => {
          success();
        })
        .finally(() => {
          submitWait.value = false;
        });
    }
    return {
      t,
      tab,
      showPwd,
      submitWait,
      form,
      checkInput,
      back,
      mockSignIn,
      submit,
      q,
    };
  },
  components: {
    LanguageSwitcher,
  },
});
</script>
<style lang="scss" scoped>
.sign-warp {
  width: 100%;
  height: 100%;
  @media (max-width: $breakpoint-xs-max) {
    .sign-container.in {
      height: 100%;
      width: 100% !important;
      .extra {
        bottom: 10px !important;
      }
    }
  }
  @media (max-width: $breakpoint-sm-max) {
    .sign-container.up {
      height: 100%;
      width: 100% !important;
      .extra {
        bottom: 10px !important;
      }
    }
  }

  .sign-container {
    &.in {
      width: 448px;
    }
    &.up {
      width: 750px;
    }
    .extra {
      bottom: -60px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }
}
</style>
