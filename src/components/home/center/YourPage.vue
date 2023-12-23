<template>
  <div class="your_page_parent">
    <div class="center_title">{{ $t("your_page") }}</div>
    <div class="your_page_content">
      <div class="your_page_cards">
        <div class="your_page_card">
          <div class="your_page_card_heading">
            <img class="ava" src="@/assets/icons/avatar.svg" alt="" />
            <div class="user_data">
              <div class="user_full_name">Giselle Saint Claire</div>
              <div class="user_location">Uzbekistan, Tashkent</div>
            </div>
            <img class="page_edit" src="@/assets/icons/edit.svg" alt="" />
          </div>
          <div class="your_page_card_body">
            <div class="card_btn_primary">{{ $t("open") }}</div>
            <div class="card_btn_white">{{ $t("unpublish_profile") }}</div>
          </div>
          <div class="your_page_card_link">Link to your profile</div>
          <div class="your_page_card_footer">
            <div class="page_input_parent">
              <input
                type="text"
                class="your_page_card_input"
                value="docmed.space/mikheeva_..."
              />
              <img class="page_edit" src="@/assets/icons/edit.svg" alt="" />
            </div>
            <div class="card_btn_white">{{ $t("copy_link") }}</div>
          </div>
        </div>
        <div class="your_page_card">
          <div class="your_page_card_heading">
            <div class="center_title">{{$t('referral_link')}}</div>
          </div>

          <div class="your_page_card_link">
            {{$t('referral_text')}}
          </div>
          <div class="your_page_card_footer">
            <div class="page_input_parent">
              <input
                type="text"
                class="your_page_card_input"
                value="docmed.space/doc/Giselle#ref_8s7"
              />
              <img class="page_edit" src="@/assets/icons/edit.svg" alt="" />
            </div>
            <div class="card_btn_primary">{{ $t("copy_link") }}</div>
          </div>
        </div>
      </div>
      <div class="your_page_cards">
        <div class="your_page_card">
          <div class="your_page_card_heading">
            <div class="center_title">Rating</div>
          </div>
          <div class="your_page_card_buttons">
            <button class="card_btn_white selected_your_card">{{ $t("overall") }}</button>
            <button class="card_btn_white">{{ $t("region") }}</button>
            <button class="card_btn_white">{{ $t("special") }}</button>
          </div>

          <div class="your_page_card_users">
            <div class="card_user" v-for="user in users" :key="user">
              <div class="user_id">
                {{ user.id }}
              </div>
              <img :src="user.profile_image" :alt="user.full_name" />
              <div
                class="card_full_name d-flex flex-column"
                :class="user.isActive ? 'is_active_card_name' : null"
              >
                {{ user.full_name }}
                <span class="user_region"> {{ user.region }}</span>
              </div>
            </div>
          </div>
          <div class="your_page_card_footer">

            <div class="card_btn_white">{{ $t("open_rating") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const users = ref([
  {
    id: "#122",
    profile_image: "/images/ava1.png",
    full_name: "Dmitry Yuryevich Ovsyannikov",
  },
  {
    id: "#123",
    profile_image: "/images/ava2.png",
    full_name: "Tatiana Mikhailovna Ryabova",
  },
  {
    id: "#124",
    profile_image: "/images/ava3.png",
    full_name: "Giselle Saint Claire",
    isActive: true,
  },
  {
    id: "#125",
    profile_image: "/images/ava4.png",
    full_name: "Аширматов Бахрам Маджидович",
  },
  {
    id: "#126",
    profile_image: "/images/ava5.png",
    full_name: "Умурзакова Дилором Хашимовна",
    region: " Region / Specialty",
  },
]);
</script>

<style scoped></style>
