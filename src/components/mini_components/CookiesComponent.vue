<template>
  <div v-if="!isCookie" class="cookie_parent">
    <div class="cookie_heading d-flex justify-content-between w-100">
      <div class="cookie_heading_text">{{$t('we_use_cookie')}}</div>
      <div>
        <img
          alt="close"
          src="@/assets/img/x.svg"
          class="pointer"
          style="width: 28px"
          @click="closeCookie"
        />
      </div>
    </div>
    <div class="cookie_content">
      {{ $t('cookies_text') }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueCookies from 'vue-cookies';

const isCookie = ref(VueCookies.get('isCookie') === 'true'); // Convert string to boolean

const closeCookie = () => {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1);
  VueCookies.set('isCookie', 'true', expiryDate);
  isCookie.value = true;
};
</script>

<style>
.cookie_parent {
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(153, 153, 153, 0.2);
  display: flex;
  width: 370px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: absolute;
  bottom: 56px;
  left: 136px;
  z-index: 99;
  background: var(--white);
}

.cookie_heading {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.cookie_heading_text {
  color: var(--Text-500, #413663);

  /* Headers/H5 */
  font-family: Ubuntu-Medium, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
}
.cookie_content {
  color: var(--Text-300, #968fa9);

  /* Small/Description Regular */
  font-family: Open-Sans, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
}
</style>
