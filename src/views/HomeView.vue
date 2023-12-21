<template>
  <div class="home-parent">

    <form action="#" class="mt-4">
      <div class="mb-3">
        <label for="fullName" class="form-label input-title"
        >Ism-familiyangiz</label
        >
        <input
            type="text"
            class="login-input form-control"
            id="fullName"
            @input="preventNumber"
            placeholder=""
            v-model="form.fullName"
            required
        />
        <span class="err-msg" v-if="name_err"> {{ name_err }}</span>
      </div>
      <div class="col-12 mt-sm-4 mt-2">
        <label for="phone" class="form-label input-title"
        >Telefon raqamingiz</label
        >
        <div class="login-input d-flex align-items-center form-control">
          <span>+998</span>
          <input
              v-model="form.phone"
              class="inside-input"
              type="text"
              v-maska
              data-maska="## ### ## ##"
              required
          />
        </div>
        <span class="err-msg" v-if="phone_err"> {{ phone_err }}</span>
      </div>
      <label for="plan" class="form-label mt-4 input-title"
      >Tarif tanlash</label
      >

      <button
          type="submit"
          @click.prevent="sendData"
          class="btn w-100 p-3 my-btn mt-4"
          style="background: red !important"
      >
        davom etish
      </button>
    </form>
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
</script>
