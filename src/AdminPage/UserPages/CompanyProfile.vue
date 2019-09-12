<template>
  <v-card class="mx-auto">
    <v-toolbar color="deep-purple accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>edit</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular">Company Profile</v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-3 pt-4">
      <v-container fluid>
        <v-text-field
          v-model="companyName"
          :rules="[rules.companyNameCheck(1)]"
          color="deep-purple"
          label="Company Name"
          style="min-height: 96px"
          type="text"
        ></v-text-field>
        <v-layout row wrap>
          <v-flex md4>
            <vue-dropzone
              ref="myVueDropzone"
              id="dropzone"
              :options="dropzoneOptions"
              style="height: 275px;"
            ></vue-dropzone>
          </v-flex>
          <v-flex md8>
            <v-select
              v-model="province"
              :items="provinceItems"
              color="deep-purple"
              style="min-height: 96px"
              chips
              label="Province"
            ></v-select>
            <v-select
              v-model="city"
              :items="cityItems"
              color="deep-purple"
              style="min-height: 96px"
              chips
              label="City"
            ></v-select>
            <v-select
              v-model="size"
              :items="sizeItems"
              color="deep-purple"
              style="min-height: 96px"
              chips
              label="Size"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-text-field
          v-model="companyWebSiteUrl"
          color="deep-purple"
          label="Company WebSite Url"
          style="min-height: 46px"
          type="text"
        ></v-text-field>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
        @click="save"
      >Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    form: false,
    isLoading: false,
    fullName: undefined,
    email: undefined,
    companyName: undefined,
    dropzoneOptions: {
      url: "https://httpbin.org/post",
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      headers: { "My-Awesome-Header": "header value" }
    },
    position: undefined,
    province: "Province1",
    provinceItems: ["Province1", "Province2", "Province3", "Province4"],
    city: "City1",
    cityItems: ["City1", "City2", "City3", "City4"],
    size: "Size1",
    sizeItems: ["Size1", "Size2", "Size3", "Size4"],
    companyWebSiteUrl: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      fullNameCheck: len => v =>
        (v || "").length >= len || `Please enter a full name`,
      companyNameCheck: len => v =>
        (v || "").length >= len || `Please enter a company name`,
      positionCheck: len => v =>
        (v || "").length >= len || `Please enter a position/title`,
      length: len => v =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: v =>
        (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: v => !!v || "This field is required"
    }
  }),

  methods: {
    save() {
      alert("User profile has been saved successfully!");
    }
  }
};
</script>