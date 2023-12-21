<template>
  <select v-model="$i18n.locale">
    <option
      v-for="(locale, code) in localeNames"
      :key="`locale-${code}`"
      :value="code"
    >
      {{ locale }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      localeNames: {
        en: "English",
        es: "Spain",
        de: "German",
      },
    };
  },
};
</script>
