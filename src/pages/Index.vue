<template>
  <div class="row items-end justify-center warp">
    <div class="col-md-8 col-10 container">
      <div class="row justify-between">
        <div class="col-md-8 col-12">
          <div class="text-h1 text-weight-bold text-primary q-pb-sm">{{ t('index.hero.title') }}</div>
          <div class="text-h2 text-weight-bold text q-pb-xl">{{ t('index.hero.subtitle') }}</div>
          <div class="text-h4 text q-pb-xl">{{ t('index.hero.slogan') }}</div>
          <div class="q-gutter-lg absolute">
            <q-btn
              outline
              rounded
              size="lg"
              padding="md xl"
              color="primary"
              :icon="link.icon"
              :label="t(`pages.${link.name}`)"
              :target="link.to instanceof Object ? null : '_blank'"
              :to="link.to instanceof Object ? link.to : null"
              :type="link.to instanceof Object ? null : 'a'"
              :href="link.to instanceof Object ? null : link.to"
              v-for="link in hero.links"
              :key="link.name"
            />
          </div>
        </div>
        <div class="col-md-4 col-0">
          <q-img :src="hero.img" :ratio="1" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const hero = {
      img: 'https://cdn.quasar.dev/img/parallax2.jpg',
      links: [
        {
          icon: 'school',
          name: 'ClubCenter',
          to: { name: 'ClubCenter' },
        },
        {
          icon: 'verified',
          name: 'VMAOfficial',
          to: 'https://www.vankemeisha.com',
        },
      ],
    };
    return {
      t,
      hero,
    };
  },
});
</script>
<style lang="scss" scoped>
.warp {
  padding: 0;
  width: 100%;
  height: calc(100vh - 64px);
  .container {
    height: 85%;
  }
}

.body--light {
  .text {
    color: var(--q-dark);
  }
}

.body--dark {
  .text {
    color: #fff;
  }
}
</style>
