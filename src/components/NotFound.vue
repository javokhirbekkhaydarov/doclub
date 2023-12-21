<template>
  <div style="min-height: 100vh" class="home d-flex justify-content-center align-items-center">
    <h1
      class="my-5 text-3xl font-semibold text-center text-green-900"
      style="
        background: -webkit-linear-gradient(#ffd87b, #f6b703);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      "
    >
      Sahifa topilmadi!
    </h1>
    <router-link
      to="/"
      class="text-decoration-none text-white border p-2 rounded-5"
    >
      Asosiy sahifa</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped></style>
