<template>
  <VueDatePicker
    v-model="date"
    inline
    auto-apply
    month-name-format="long"
    class="custom-calendar"
  />
</template>

<script setup>
import { ref } from "vue";

const date = ref(new Date());
</script>

<style>
.dp__menu_inner {
  border: 0;
  padding: 0;
}
.dp__month_year_row {
  margin-bottom: 32px;
}
.dp__outer_menu_wrap {
  width: 100% !important;
  background: none !important;
}
.dp__theme_light {
  background: none !important;
  border: 0;
  color: var(--Neutral-500, #9d9dbb);
  text-align: center;
}
.custom-calendar .dp__calendar {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--Neutral-300, #e5e5f8);
}
.dp__calendar .dp__calendar {
  border: 0;

}

.dp__calendar_row {
  display: flex;
  /*flex-direction: column;*/
  /*align-items: flex-start;*/
  flex: 1 0 0;
  margin: 0;

}
.dp__calendar_item {
  border-right: 1px solid var(--Neutral-300, #e5e5f8);
  border-top: 1px solid var(--Neutral-300, #e5e5f8);
  width: 58px;
  height: 72px;

}
.dp__range_end,
.dp__range_start,
.dp__active_date {
  background: var(--Primary-100, #f9f8ff) !important;
  color: var(--primary);
}



.dp__active_date::after {
  content: " ";
  position: absolute;
  right: 7.719px;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
}

.dp__calendar_header {
  display: flex;

  /*justify-content: center;*/
  align-items: center;
  /*gap: 10px;*/
  flex: 1 0 0;
  color: var(--Neutral-500, #9d9dbb);
  text-align: center;

  /* Captions/Cap1 - Regular */
  font-family: Open-Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
}
.dp__calendar_header_item {
  color: var(--Neutral-500, #9D9DBB);
  text-align: center;

  /* Captions/Cap1 - Regular */
  font-family: Open-Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  /*border-top: 1px solid var(--Neutral-300, #E5E5F8);*/
  border-right: 1px solid var(--Neutral-300, #E5E5F8);
  line-height: 24px; /* 133.333% */
  padding: 24px 0px;
  height: 72px;
  width: 58px !important;

}
.dp__cell_inner {
  /* Captions/Cap1 - Regular */
  font-family: Open-Sans, sans-serif !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  padding: 24px 0px;
  gap: 12px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
}
.dp__overlay_cell {
  font-family: Open-Sans, sans-serif !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
}
.dp__button_bottom {
  display: none !important;
}
.dp__date_hover_end:hover {
  background: var(--primary) !important;
  color: var(--white) !important;
  border-radius: 0px 24px 24px 0px !important;
}
.dp__month_year_wrap {
  display: flex !important;
  justify-content: space-between !important;
  width: 100% !important;
  margin-left: 20px;
}
.dp__month_year_select {
  color: var(--Text-500, #413663);

  /* Headers/H4 */
  font-family: Ubuntu-Bold, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
}

.dp__month_year_wrap .dp__month_year_select:first-child {
  display: flex;
  justify-content: flex-end;
}
.dp__month_year_wrap .dp__month_year_select:first-child:after {
  content: ",";
}
.dp__month_year_wrap .dp__month_year_select:nth-child(2) {
  display: flex;
  justify-content: flex-start;
}

</style>
