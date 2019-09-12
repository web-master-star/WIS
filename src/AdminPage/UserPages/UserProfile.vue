<template>
  <v-card class="mx-auto">
    <v-system-bar color="deep-purple darken-4" dark>
      <v-spacer></v-spacer>
      <v-icon small>mdi-square</v-icon>
      <v-icon class="ml-1" small>mdi-circle</v-icon>
      <v-icon class="ml-1" small>mdi-triangle</v-icon>
    </v-system-bar>
    <v-toolbar color="deep-purple accent-4" cards dark flat>
      <v-btn icon>
        <!-- <v-icon>mdi-arrow-left</v-icon> -->
        <v-icon>edit</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular">User Profile</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-3 pt-4">
      <v-text-field
        v-model="userName"
        :rules="[rules.userNameCheck(1)]"
        box
        color="deep-purple"
        label="User Name"
        style="min-height: 96px"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="[rules.email]"
        box
        color="deep-purple"
        label="Email address"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[rules.password, rules.length(6)]"
        box
        color="deep-purple"
        counter="6"
        label="Password"
        style="min-height: 96px"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="position"
        :rules="[rules.positionCheck(1)]"
        box
        color="deep-purple"
        label="Position/Title"
        style="min-height: 96px"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="department"
        :rules="[rules.departmentCheck(1)]"
        box
        color="deep-purple"
        label="Department"
        style="min-height: 96px"
        type="text"
      ></v-text-field>
      <v-text-field v-model="phone" box color="deep-purple" label="Phone number" mask="phone"></v-text-field>
    </v-form>
    <v-divider></v-divider>
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
export default {
  data: () => ({
    agreement: false,
    dialog: false,
    form: false,
    isLoading: false,
    userName: undefined,
    email: undefined,
    password: undefined,
    position: undefined,
    department: undefined,
    phone: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      userNameCheck: len => v =>
        (v || "").length >= len || `Please enter a user name`,
      positionCheck: len => v =>
        (v || "").length >= len || `Please enter a position/title`,
      departmentCheck: len => v =>
        (v || "").length >= len || `Please enter a department`,
      length: len => v =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: v =>
        (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: v => !!v || "This field is required"
    }
  }),

  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      alert("Data was saved successfully!");
    }
  }
};
</script>


