<template>
  <div class="home-parent">
    <div>{{$t('greeting')}}</div>
    <LocaleSwitcher />
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        fullName: "",
        phone: "",
        plan: "standard_plus",
      },
      name_err: null,
      phone_err: null,
      message: "",
    };
  },

  methods: {
    preventNumber() {
      const inputValue = event.target.value;
      this.form.fullName = inputValue.replace(/[^A-Za-z\s]/g, "");
    },
    sendData() {
      let phone = this.form.phone.replace(/ /g, "");
      if (this.form.fullName) {
        this.name_err = null;
      }
      if (this.form.fullName.trim() && phone.length === 9) {
        this.form.phone.replace(/ /g, "");
        this.$store.commit("setForm", this.form);
        VueCookies.set("formData", JSON.stringify(this.form), {
          expires: "1d",
        });

        const { fullName, plan } = this.form;

        this.$router.push({
          name: "pay",
          params: {
            fullName: fullName.replace(/\s+/g, "-"),
            phone: String(phone),
            plan: plan.toLowerCase(),
          },
        });
        this.message =
          `FullName: ${this.form.fullName} \n\n` +
          `Phone: +998 ${phone} \n\n` +
          `Plan: ${this.form.plan} \n\n`;
        axios.get(
          `https://api.telegram.org/bot6398208454:AAGZSM4bQkwoOXiH5YTAsIiY7HEQIZ7rt_I/sendmessage?chat_id=-4065150265&text=${encodeURIComponent(
            this.message
          )}`
        );
        axios.get(
          `https://api.telegram.org/bot6398208454:AAGZSM4bQkwoOXiH5YTAsIiY7HEQIZ7rt_I/sendmessage?chat_id=-1002060350134&text=${encodeURIComponent(
            this.message
          )}`
        );
      } else {
        if (!this.form.fullName.trim()) {
          this.name_err = "Ism va Familiya yozing!";
        }
        if (phone.length !== 9) {
          this.phone_err = "Telefon raqam 9 xonali bo'lishi kerak.";
        }
      }
    },
    limitInput(event) {
      const inputValue = event.target.value;
      if (inputValue.length > 9) {
        event.preventDefault();
        this.form.phone = inputValue.slice(0, 9);
        return;
      }
      this.form.phone = inputValue;
    },
    preventE(event) {
      if (
        !/^[0-9]*$/.test(event.key) &&
        event.key !== "Backspace" &&
        event.key !== "Delete" &&
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowUp" &&
        event.key !== "ArrowDown" &&
        event.key !== "."
      ) {
        event.preventDefault();
      }
    },
  },
};
</script>

<script setup>
import { vMaska } from "maska";
import LocaleSwitcher from "@/components/lang/LocaleSwitcher.vue";
</script>
