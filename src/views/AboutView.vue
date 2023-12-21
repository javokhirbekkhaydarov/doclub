<template>
  <div class="pay d-flex flex-column justify-content-center mt-3 mb-4">
    <div class="pay-header w-500 mb-3">
      <div class="pay-fullName d-flex justify-content-end">
        <div
          class="pay-texts d-flex flex-column justify-content-end align-items-end"
        >
          <div class="pay-name float-end">{{ $route.params.fullName }}</div>
          <div class="pay-name float-end">+998 {{ $route.params.phone }}</div>
        </div>
        <div class="pay-ava ml-2">
          <img src="@/assets/img/ava.webp" alt="" />
        </div>
      </div>
    </div>
    <div
      class="pay-info d-flex flex-column justify-content-center align-items-center position-relative"
    >
      <div class="svg-image">
        <div class="svg-inside-img">
          <svg
            width="612"
            height="219"
            viewBox="0 0 612 219"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
            style="
              position: absolute;
              right: 0;
              bottom: -40px;
              pointer-events: none;
            "
            data-v-bada894b=""
          >
            <path
              d="M727.941 292.092C752.231 384.13 627.096 548.806 521.374 613.18C415.652 677.555 180.316 720.182 93.6076 678.339C6.89947 636.497 5.71034 471.457 1.12523 362.125C-3.45988 252.792 3.67926 72.5416 66.0969 22.3462C128.515 -27.8491 265.324 15.9949 375.631 60.9525C485.939 105.91 703.651 200.054 727.941 292.092C752.231 384.13 627.096 548.806 521.374 613.18L727.941 292.092Z"
              fill="url(#paint0_linear_375_263)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_375_263"
                x1="32.5"
                y1="75.5"
                x2="602.5"
                y2="393"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D7EAFF"></stop>
                <stop offset="1" stop-color="#EAF5FF"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="538"
            height="135"
            style="
              position: absolute;
              right: 30px;
              bottom: -40px;
              pointer-events: none;
            "
            viewBox="0 0 538 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
            data-v-bada894b=""
          >
            <path
              d="M585.539 234.934C605.078 308.962 504.422 441.414 419.381 493.191C334.341 544.969 145.042 579.254 75.2958 545.599C5.54978 511.945 4.59327 379.2 0.905112 291.263C-2.78305 203.325 2.95951 58.3464 53.1669 17.9735C103.374 -22.3995 213.421 12.865 302.149 49.0251C390.878 85.1853 566.001 160.907 585.539 234.934C605.078 308.962 504.422 441.414 419.381 493.191L585.539 234.934Z"
              fill="url(#paint0_linear_375_264)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_375_264"
                x1="26.1423"
                y1="60.7259"
                x2="484.621"
                y2="316.126"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E2EEFC"></stop>
                <stop
                  offset="0.963542"
                  stop-color="#D8EBFF"
                  stop-opacity="0.315885"
                ></stop>
                <stop
                  offset="1"
                  stop-color="#D8EBFF"
                  stop-opacity="0.29"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div class="payment-info z-3">
        <div class="payment-title">My Life Planner</div>
        <div class="plan mb-2"><b>Tarif:</b> {{ $route.params.plan }}</div>
        <div class="plan-paid" v-if="$route.params.plan === 'business_plus'">
          {{ plans.business_plus }}
        </div>
        <div class="plan-paid" v-if="$route.params.plan === 'business'">
          {{ plans.business }}
        </div>
        <div class="plan-paid" v-if="$route.params.plan === 'standard_plus'">
          {{ plans.standard_plus }}
        </div>
        <div class="plan-paid" v-if="$route.params.plan === 'standard'">
          {{ plans.standard }}
        </div>
        <div
          class="price-in-usd d-flex"
          style="position: absolute; bottom: 60px"
        >
          <div class="dollor" v-if="$route.params.plan === 'standard' && USD">
            {{ Math.floor(2990000 / USD) }} $
          </div>
          <div
            class="dollor"
            v-if="$route.params.plan === 'standard_plus' && USD"
          >
            {{ Math.floor(3490000 / USD) }} $
          </div>
          <div class="dollor" v-if="$route.params.plan === 'business' && USD">
            {{ Math.floor(10490000 / USD) }} $
          </div>
          <div
            class="dollor"
            v-if="$route.params.plan === 'business_plus' && USD"
          >
            {{ Math.floor(12990000 / USD) }} $
          </div>
        </div>

        <div class="payments-bottom d-flex justify-content-between">
          <div class="payments-bottom-text w-100">
            To'lov qilish havolasi <br />
            muddati tugashiga qoldi:
          </div>
          <CountDown :deadline-time="15" />
        </div>
      </div>
    </div>

    <div v-if="finish" class="time-over mt-4 w-500">
      <img src="@/assets/img/time-over.webp" alt="" />
      <div class="time-over-texts" style="margin-left: 20px">
        <div class="time-over-text text-bold">VAQT TUGAGANGA O'XSHAYDI.</div>
        <div class="time-over-desc mt-1">
          Lekin biz allaqachon siz uchun yangi to’lov havolasini yaratdik:
        </div>
        <button class="btn my-btn reset-btn mt-3" @click="restartTimer">
          Takrorlash
        </button>
      </div>
    </div>
    <div v-else class="time-over w-500 payments-cards mt-4">
      <div class="step-name text-bold text-center">
        Quyidagi to'lov usullari bilan to`lovni amalga oshiring:
      </div>

      <a
        class="plastic-card mt-2 d-flex justify-content-center align-items-center flex-column"
        href="https://payme.uz/fallback/merchant/?id=6577197f7aff6eaacc086cbf"
        ><img
          alt="payme"
          class="img-fluid uzum-link"
          src="@/assets/img/payme.png"
      /></a>

      <a
        class="plastic-card mt-2 d-flex justify-content-center align-items-center flex-column"
        href="https://www.apelsin.uz/open-service?serviceId=498612616"
        ><img
          alt="uzum"
          class="img-fluid uzum-link"
          src="@/assets/img/uzum.png"
      /></a>

      <!-- <a
        href="https://indoor.click.uz/pay?id=54864&t=0"
        class="plastic-card mt-2 d-flex justify-content-center align-items-center flex-column"
      >
   
        <img
          alt="uzum"
          class="img-fluid uzum-link"
          src="@/assets/img/click.png"
        />
      </a> -->
      <!--      <div class="plastic-card mt-2 d-flex flex-column">-->
      <!--        <div-->
      <!--          class="plastic-card-header pt-2 pb-2 d-flex justify-content-between"-->
      <!--        >-->
      <!--    -->
      <!--          <div>PLASTIK KARTA</div>-->
      <!--          <div v-if="$route.params.plan === 'standart'">-->
      <!--            {{ plans.standart }}-->
      <!--          </div>-->
      <!--          <div v-if="$route.params.plan === 'vip'">{{ plans.vip }}</div>-->
      <!--          <div v-if="$route.params.plan === 'premium'">{{ plans.premium }}</div>-->
      <!--        </div>-->
      <!--        <div class="line"></div>-->
      <!--        <div class="plastic-card-body mt-3 d-flex flex-column">-->
      <!--          <div class="plastic-card-inside d-flex justify-content-between">-->
      <!--            <div class="card-information">-->
      <!--              <div class="body-number">5477 3300 2018 4168</div>-->
      <!--              <div class="card-number">Mamasaidov Khusan</div>-->
      <!--            </div>-->
      <!--            <div class="copy" @click="copyCard('5477330020184168', 'humo')">-->
      <!--              <svg-->
      <!--                width="14"-->
      <!--                height="14"-->
      <!--                viewBox="0 0 14 14"-->
      <!--                fill="none"-->
      <!--                xmlns="http://www.w3.org/2000/svg"-->
      <!--              >-->
      <!--                <g clip-path="url(#clip0_1807_3116)">-->
      <!--                  <path-->
      <!--                    d="M8.50391 14H3.28125C2.07503 14 1.09375 13.0187 1.09375 11.8125V4.40234C1.09375 3.19612 2.07503 2.21484 3.28125 2.21484H8.50391C9.71013 2.21484 10.6914 3.19612 10.6914 4.40234V11.8125C10.6914 13.0187 9.71013 14 8.50391 14ZM3.28125 3.30859C2.67819 3.30859 2.1875 3.79929 2.1875 4.40234V11.8125C2.1875 12.4156 2.67819 12.9062 3.28125 12.9062H8.50391C9.10696 12.9062 9.59766 12.4156 9.59766 11.8125V4.40234C9.59766 3.79929 9.10696 3.30859 8.50391 3.30859H3.28125ZM12.8789 10.4453V2.1875C12.8789 0.981277 11.8976 0 10.6914 0H4.62109C4.31903 0 4.07422 0.244812 4.07422 0.546875C4.07422 0.848938 4.31903 1.09375 4.62109 1.09375H10.6914C11.2945 1.09375 11.7852 1.58444 11.7852 2.1875V10.4453C11.7852 10.7474 12.03 10.9922 12.332 10.9922C12.6341 10.9922 12.8789 10.7474 12.8789 10.4453Z"-->
      <!--                    fill="#2F80EC"-->
      <!--                  ></path>-->
      <!--                </g>-->
      <!--                <defs>-->
      <!--                  <clipPath id="clip0_1807_3116">-->
      <!--                    <rect width="14" height="14" fill="white"></rect>-->
      <!--                  </clipPath>-->
      <!--                </defs>-->
      <!--              </svg>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="copied-msg text-bold mt-3 mb-3" v-if="humo">-->
      <!--            {{ copied }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <!--      <div class="plastic-card d-flex flex-column mt-2">-->
      <!--        <div-->
      <!--          class="plastic-card-header pt-2 pb-2 d-flex justify-content-between"-->
      <!--        >-->
      <!--          <div>-->
      <!--            <img-->
      <!--              src="@/assets/img/mastercard.webp"-->
      <!--              alt=""-->
      <!--              style="width: 40px"-->
      <!--            />-->
      <!--            MASTER CARD-->
      <!--          </div>-->

      <!--          <div class="dollor" v-if="$route.params.plan === 'standart' && USD">-->
      <!--            {{ Math.floor(2797000 / USD) }} $-->
      <!--          </div>-->
      <!--          <div class="dollor" v-if="$route.params.plan === 'vip' && USD">-->
      <!--            {{ Math.floor(9997000 / USD) }} $-->
      <!--          </div>-->
      <!--          <div class="dollor" v-if="$route.params.plan === 'premium' && USD">-->
      <!--            {{ Math.floor(2997000 / USD) }} $-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="line"></div>-->
      <!--        <div class="plastic-card-body mt-3 d-flex flex-column">-->
      <!--          <div class="plastic-card-inside d-flex justify-content-between">-->
      <!--            <div class="card-information">-->
      <!--              <div class="body-number">5477 3300 2018 4168</div>-->
      <!--              <div class="card-number">Mamasaidov Khusan</div>-->
      <!--            </div>-->
      <!--            <div-->
      <!--              class="copy"-->
      <!--              @click="copyCard('5477330020184168', 'mastercard')"-->
      <!--            >-->
      <!--              <svg-->
      <!--                width="14"-->
      <!--                height="14"-->
      <!--                viewBox="0 0 14 14"-->
      <!--                fill="none"-->
      <!--                xmlns="http://www.w3.org/2000/svg"-->
      <!--              >-->
      <!--                <g clip-path="url(#clip0_1807_3116)">-->
      <!--                  <path-->
      <!--                    d="M8.50391 14H3.28125C2.07503 14 1.09375 13.0187 1.09375 11.8125V4.40234C1.09375 3.19612 2.07503 2.21484 3.28125 2.21484H8.50391C9.71013 2.21484 10.6914 3.19612 10.6914 4.40234V11.8125C10.6914 13.0187 9.71013 14 8.50391 14ZM3.28125 3.30859C2.67819 3.30859 2.1875 3.79929 2.1875 4.40234V11.8125C2.1875 12.4156 2.67819 12.9062 3.28125 12.9062H8.50391C9.10696 12.9062 9.59766 12.4156 9.59766 11.8125V4.40234C9.59766 3.79929 9.10696 3.30859 8.50391 3.30859H3.28125ZM12.8789 10.4453V2.1875C12.8789 0.981277 11.8976 0 10.6914 0H4.62109C4.31903 0 4.07422 0.244812 4.07422 0.546875C4.07422 0.848938 4.31903 1.09375 4.62109 1.09375H10.6914C11.2945 1.09375 11.7852 1.58444 11.7852 2.1875V10.4453C11.7852 10.7474 12.03 10.9922 12.332 10.9922C12.6341 10.9922 12.8789 10.7474 12.8789 10.4453Z"-->
      <!--                    fill="#2F80EC"-->
      <!--                  ></path>-->
      <!--                </g>-->
      <!--                <defs>-->
      <!--                  <clipPath id="clip0_1807_3116">-->
      <!--                    <rect width="14" height="14" fill="white"></rect>-->
      <!--                  </clipPath>-->
      <!--                </defs>-->
      <!--              </svg>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="copied-msg text-bold mt-3 mb-3" v-if="master">-->
      <!--            {{ copied }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="step-name mt-4 text-bold text-center">
        To'lovingiz muvaffaqiyatli amalga oshganini tasdiqlovchi rasmni bizga
        yuboring
      </div>
      <!--      <div class="step-name mt-4">To'lovingiz rasmini yuklang.</div>-->

      <!--      <div class="for_payment d-grid mt-4">
        <div class="full position-relative">
          <label
            for="full"
            class="login-input"
            @click="selectForPay('To\'liq to\'ladim')"
            >To'liq to'ladim</label
          >
          <input
            type="radio"
            id="full"
            v-model="selectedOption"
            value="To'liq to'ladim"
            class="position-absolute"
            style="left: 10px; top: 37%"
          />
        </div>
        <div class="stay position-relative">
          <label
            for="stay"
            class="login-input"
            @click="selectForPay('Joy band qildim')"
            >Joy band qildim</label
          >
          <input
            type="radio"
            id="stay"
            v-model="selectedOption"
            value="Joy band qildim"
            class="position-absolute"
            style="left: 10px; top: 37%"
          />
        </div>
      </div>
      <label for="img" class="upload-image mt-4 text-center">
        <svg
          style="margin-right: 10px"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="inline transform -translate-y-[2px]"
        >
          <path
            d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
          ></path>
          <polyline points="13 2 13 9 20 9"></polyline>
        </svg>
        <span v-if="!imageUrl"
          >Chek rasmini yuklash uchun bu yerga bosing.</span
        >
        <span v-else>{{ uploadedFileName }}</span>
      </label>
      <input
        class="d-none"
        type="file"
        id="img"
        ref="imgFile"
        accept="image/*"
        @change="handleImageUpload"
      />
      <div class="err-msg" v-if="err_img">
        {{ err_img }}
      </div>
      <img
        class="uploaded-img"
        v-if="imageUrl"
        :src="imageUrl"
        alt="Uploaded Image"
      />-->
      <div class="d-flex justify-content-center text-center flex-column">
        <a
          href="https://t.me/Mlp_HusanMamasaidov"
          target="_blank"
          class="mb-4 btn d-flex my-btn reset-btn mt-4 pt-2 pb-2 text-center justify-content-center align-items-center"
          style="text-decoration: none"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-839e409c=""
            style="margin-right: 10px"
          >
            <path
              d="M9.41718 15.1853L9.02018 20.7693C9.58818 20.7693 9.83418 20.5253 10.1292 20.2323L12.7922 17.6873L18.3102 21.7283C19.3222 22.2923 20.0352 21.9953 20.3082 20.7973L23.9302 3.82531L23.9312 3.82431C24.2522 2.32831 23.3902 1.74331 22.4042 2.11031L1.11418 10.2613C-0.338822 10.8253 -0.316822 11.6353 0.867178 12.0023L6.31018 13.6953L18.9532 5.78431C19.5482 5.39031 20.0892 5.60831 19.6442 6.00231L9.41718 15.1853Z"
              fill="white"
            ></path>
          </svg>

          Chekni yuboring
        </a>
      </div>
      <button
        class="send-btn reset-btn mt-3 w-100 pt-2 pb-2"
        @click="sendData"
        :disabled="isDisabled"
      >
        Davom etish
      </button>
    </div>

    <div
      class="help mt-4 w-500 time-over d-flex justify-content-center text-center flex-column"
    >
      <div class="help-text mt-4">
        Yordam kerakmi? <br />
        Yordamchimiz bilan bog'laning
      </div>
      <a
        href="https://t.me/Mlp_HusanMamasaidov"
        target="_blank"
        class="help-btn mt-4"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-839e409c=""
        >
          <path
            d="M9.41718 15.1853L9.02018 20.7693C9.58818 20.7693 9.83418 20.5253 10.1292 20.2323L12.7922 17.6873L18.3102 21.7283C19.3222 22.2923 20.0352 21.9953 20.3082 20.7973L23.9302 3.82531L23.9312 3.82431C24.2522 2.32831 23.3902 1.74331 22.4042 2.11031L1.11418 10.2613C-0.338822 10.8253 -0.316822 11.6353 0.867178 12.0023L6.31018 13.6953L18.9532 5.78431C19.5482 5.39031 20.0892 5.60831 19.6442 6.00231L9.41718 15.1853Z"
            fill="white"
          ></path>
        </svg>

        Yordamchi bilan bog'lanish
      </a>
    </div>
  </div>
</template>

<script>
import CountDown from "@/components/CountDown.vue";
import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  components: { CountDown },
  data() {
    return {
      master: false,
      humo: false,
      copied: null,
      for_pay: null,
      selectedOption: "To'liq to'ladim",
      imageUrl: "",
      uploadedFileName: "",
      uploadedFile: "",
      deadlineTime: 15,
      message: "",
      isDisabled: false,
      err_img: "",
      currency: [],
      isCurrencyLoaded: false,
      USD: 0,
    };
  },
  watch: {
    finish(newVal) {
      console.log(newVal);
    },
  },
  computed: {
    finish() {
      return this.$store.getters["finish"];
    },
    plans() {
      return this.$store.getters["plans"];
    },
    form() {
      return this.$store.getters["form"];
    },
  },

  updated() {
    if (sessionStorage.getItem("finish")) {
      this.finish = true;
    }
  },

  methods: {
    restartTimer() {
      sessionStorage.removeItem("finish");
      sessionStorage.removeItem("endTime");
      sessionStorage.removeItem("expire");
      const currentTime = new Date().getTime();
      const endTime = new Date(
        currentTime + this.deadlineTime * 60 * 1000
      ).getTime();
      sessionStorage.setItem("endTime", endTime.toString());
      window.location.reload();
      this.$store.commit("setForm", false);
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.err_img = null;
        this.uploadedFileName = file.name;
        this.uploadedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    copyCard(cardNumber, name) {
      navigator.clipboard
        .writeText(cardNumber)
        .then(() => {
          if (name === "mastercard") {
            this.master = true;
            this.copied = `${cardNumber} Nusxalandi. `;
          } else if (name === "humo") {
            this.humo = true;
            this.copied = `${cardNumber} Nusxalandi. `;
          }

          setTimeout(() => {
            this.copied = null;
          }, 3000);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    selectForPay(text) {
      this.selectedOption = text;
    },
    sendData() {
      // if (this.uploadedFile && this.selectedOption) {

      // } else {
      //   if (!this.uploadedFile) {
      // this.err_img = "Chek rasmni yuklang.";
      // }
      // }
      const form = VueCookies.get("formData");
      const formData = new FormData();
      let phone = form.phone.replace(/ /g, "");
      if (form) {
        this.message =
          `FullName: ${form.fullName} \n\n` +
          `Phone: +998 ${phone} \n\n` +
          `Plan: ${form.plan} \n\n` +
          `Payment_about: ${this.selectedOption}`;
      } else {
        let phone = this.form.phone.replace(/ /g, "");
        this.message =
          `FullName: ${this.form.fullName} \n\n` +
          `Phone: +998 ${phone} \n\n` +
          `Plan: ${this.form.plan} \n\n`;
      }
      // formData.append("photo", this.uploadedFile);
      formData.append("caption", this.message);
      // formData.append("chat_id", "-1002060350134");
      formData.append("chat_id", "-4065150265");
      this.isDisabled = true;
      this.$router.push("/thank-you");
      this.isDisabled = false;
      this.isCurrencyLoaded = true;
      // axios
      //   .post(
      //     "https://api.telegram.org/bot6398208454:AAGZSM4bQkwoOXiH5YTAsIiY7HEQIZ7rt_I/sendPhoto",
      //     formData
      //   )
      //   .then(() => {
      //     this.$router.push("/thank-you");
      //     this.isDisabled = false;
      //     this.isCurrencyLoaded = true;
      //   })
      //   .catch((error) => {
      //     this.isDisabled = false;
      //     console.error(error);
      //   });
    },
    getCurrency() {
      axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/").then((res) => {
        this.currency = res.data;
        const usdRate = this.currency.find((item) => item.id === 69);
        let rate = parseFloat(usdRate.Rate.replace(",", "."));
        this.USD = Math.floor(rate);
      });
    },
    async calculateToUsd(price) {
      if (!this.isCurrencyLoaded) {
        await this.getCurrency();
      }

      const usdRate = this.currency.find((item) => item.id === 69);

      if (usdRate) {
        let rate = parseFloat(usdRate.Rate.replace(",", "."));
        rate = Math.floor(rate);

        const convertedAmount = price / rate;
        const truncatedAmount = Math.floor(convertedAmount);

        return truncatedAmount;
      } else {
        console.error("USD rate not available");
        return null;
      }
    },
  },

  async mounted() {
    await this.getCurrency();
    if (sessionStorage.getItem("finish")) {
      this.finish = true;
    }
    document.title = "To'lov sahifasi";
  },
};
</script>
