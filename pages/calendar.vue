<template>
  <section class="container">
    <div>
      <p>calendar page</p>
      <div class="links">
        <nuxt-link
          class="button--green"
          to="/"
        > home </nuxt-link>
        <nuxt-link
          to="/calendar"
          class="button--grey"
        > calendar </nuxt-link>
      </div>

      <client-only>
        <vue-cal
          :selected-date="selectedDate"
          :disable-views="['years', 'year', 'month']"
          :events="events"
          @ready="selectedDate = $event.startDate"
          @view-change="viewChange($event)"
        ></vue-cal>
      </client-only>

    </div>
  </section>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

const now = new Date();

export default {
  components: { VueCal },
  data: () => ({
    events: [
      {
        startDate: new Date(new Date(now).setHours(1, 0, 0)),
        endDate: new Date(new Date(now).setHours(3, 0, 0)),
        title: "Event"
      }
    ]
  }),

  computed: {
    selectedDate: {
      get() {
        return this.$store.getters["calendar/selectedDate"];
      },
      set(value) {
        this.$store.commit("calendar/setSelectedDate", value);
      }
    }
  },
  methods: {
    viewChange(event) {
      // the code below cause the infinite loop
      // this.selectedDate = event.startDate;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>