<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Applicant List</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <template v-for="(item, index) in applicants">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

            <v-list-tile v-else :key="item.title" avatar @click>
              <v-list-tile-avatar>
                <img :src="item.avatar" />
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.phoneNumber"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="item.education"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      applicants: [
        { header: "" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          name: "John Smith",
          phoneNumber: "(123) 456 - 7890",
          education:
            "Zaporizhzhya Institute of Economics and Information Technologies 2011~2014"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          name: "Roman Mihailovic",
          phoneNumber: "(123) 456 - 7890",
          education:
            "Zaporizhzhya Institute of Economics and Information Technologies 2011~2014"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Andrey Ivanov",
          phoneNumber: "(123) 456 - 7890",
          education:
            "Zaporizhzhya Institute of Economics and Information Technologies 2011~2014"
        }
      ]
    };
  }
};
</script>