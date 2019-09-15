<template>
  <v-container>
    <v-card>
      <v-toolbar color="deep-purple accent-4" cards dark flat>
        <v-card-title class="title font-weight-regular">Jobs</v-card-title>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="item.title" avatar ripple @click="showDetail();">
            <v-list-tile-action>
              <v-icon color="indigo">desktop_windows</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: "$750",
          title: "Build me a web site",
          subtitle:
            "We require a React JS expert who is fast and has availability to work on a small project within the next 2 weeks. Project is to copy an existing app UI in React JS by copying an existing web..."
        },
        {
          action: "$500",
          title: "Health insurance evaluators",
          subtitle:
            "$50 mystery shop assignments in Syracuse NY for the health insurance industry. "
        },
        {
          action: "$1750",
          title: "Dating Website & Compatible Mobile App",
          subtitle:
            "Need a dating website and mobile app designed and developed."
        },
        {
          action: "$5500",
          title: "Patient Management Software",
          subtitle:
            "I need you to develop some software for me. I would like this software to be developed for Windows using Java."
        },
        {
          action: "$2000",
          title: "Sell Online Courses",
          subtitle:
            "We need people who can sell online courses for us. Visit our website www.easyscholars.com for the courses and other details."
        }
      ]
    };
  },

  methods: {
    showDetail() {
      alert("You select one job!");
    }
  }
};
</script>

<style>
</style>f