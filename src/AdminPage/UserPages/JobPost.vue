<template>
  <v-card class="mx-auto">
    <v-toolbar color="deep-purple accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>edit</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular">Post a Job</v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-3 pt-4">
      <v-container fluid>
        <v-text-field
          v-model="jobTitle"
          :rules="[rules.jobTitleCheck(1)]"
          color="deep-purple"
          label="Title"
          type="text"
        ></v-text-field>
        <v-layout row wrap>
          <v-flex md6>
            <v-select
              v-model="province"
              :items="provinceItems"
              color="deep-purple"
              chips
              label="Province"
            ></v-select>
          </v-flex>
          <v-flex md6>
            <v-select
              v-model="city"
              :items="cityItems"
              color="deep-purple"
              chips
              label="City"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-text-field
          v-model="responsibilities"
          :rules="[rules.responsibilitiesCheck(1)]"
          color="deep-purple"
          label="Responsibilities"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="qualitifications"
          :rules="[rules.qualitificationsCheck(1)]"
          color="deep-purple"
          label="Qualitifications"
          type="text"
        ></v-text-field>
        <v-textarea
          v-model="jobDetails"
          :rules="[rules.jobDetailsCheck(1)]"
          color="deep-purple"
          label="Job Details"
          auto-grow
          rows="15"
        ></v-textarea>
        <v-text-field
          v-model="seniorityLevel"
          :rules="[rules.seniorityLevelCheck(1)]"
          color="deep-purple"
          label="Seniority Level"
          type="text"
        ></v-text-field>
        <v-layout row wrap>
          <v-flex md6>
            <v-select
              v-model="jobFunction"
              :items="jobFunctionItems"
              :rules="[rules.jobFunctionCheck(jobFunction)]"
              color="deep-purple"
              chips
              label="Job Function"
              multiple
            ></v-select>
          </v-flex>
          <v-flex md6>
            <v-select
              v-model="employeementType"
              :items="employeementTypeItems"
              :rules="[rules.employeementTypeCheck(employeementType)]"
              color="deep-purple"
              chips
              label="Employeement Type"
              multiple
            ></v-select>
          </v-flex>
        </v-layout>
        <v-text-field
          v-model="jobFunctions"
          :rules="[rules.jobFunctionsCheck(1)]"
          color="deep-purple"
          label="Job Functions"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="applicationLink"
          color="deep-purple"
          label="Application Link"
          type="text"
        ></v-text-field>
        <v-layout row wrap>
          <v-flex md6>
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateFormatted"
                  label="Expiration Date"
                  hint="YYYY/MM/DD format"
                  persistent-hint
                  prepend-icon="event"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex md6>
            <v-select
              v-model="degree"
              :items="degreeItems"
              :rules="[rules.degreeCheck(degree)]"
              color="deep-purple"
              chips
              label="Degree"
            ></v-select>
          </v-flex>
        </v-layout>
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
        @click="jobPost()"
      >Job Post</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: vm => ({
    form: false,
    isLoading: false,
    jobTitle: undefined,
    province: "Province1",
    provinceItems: [
      "Province1",
      "Province2",
      "Province3",
      "Province4"
    ],
    city: "City1",
    cityItems: [
      "City1",
      "City2",
      "City3",
      "City4"
    ],
    responsibilities: undefined,
    qualitifications: undefined,
    jobDetails: undefined,
    seniorityLevel: undefined,
    department: "Department1",
    departmentItems: [
      "Department1",
      "Department2",
      "Department3",
      "Department4"
    ],
    jobFunction: "",
    jobFunctionItems: ["Job1", "Job2", "Job3", "Job4"],
    employeementType: "",
    employeementTypeItems: [
      "Employeement Type 1",
      "Employeement Type 2",
      "Employeement Type 3",
      "Employeement Type 4"
    ],
    jobFunctions: undefined,
    applicationLink: undefined,
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    degree: "Degree1",
    degreeItems: ["Degree1", "Degree2", "Degree3", "Degree4"],
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      jobTitleCheck: len => v =>
        (v || "").length >= len || `Please enter a title`,
      provinceCheck: len => v =>
        (v || "").length >= len || `Please enter a province name`,
      cityCheck: len => v =>
        (v || "").length >= len || `Please enter a city name`,
      responsibilitiesCheck: len => v =>
        (v || "").length >= len || `Please enter responsibilites`,
      qualitificationsCheck: len => v =>
        (v || "").length >= len || `Please enter qualitifications`,
      jobDetailsCheck: len => v =>
        (v || "").length >= len || `Please enter job details`,
      seniorityLevelCheck: len => v =>
        (v || "").length >= len || `Please enter a seniority level`,
      jobFunctionCheck: arr => v =>
        (v || "").length > 0 || `Please select job functions`,
      employeementTypeCheck: arr => v =>
        (v || "").length > 0 || `Please select employeement types`,
      jobFunctionsCheck: len => v =>
        (v || "").length >= len || `Please enter job functions`,
      degreeCheck: arr => v => (v || "").length > 0 || `Please select a degree`
    }
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${year}/${month}/${day}`;
    },

    parseDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    jobPost() {
      alert("Job post has been posted successfully!");
    }
  }
};
</script>