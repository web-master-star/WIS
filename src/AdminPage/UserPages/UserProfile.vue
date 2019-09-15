<template>
  <v-card class="mx-auto">
    <v-toolbar color="deep-purple accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>edit</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular">My Profile</v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-3 pt-4">
      <v-text-field
        v-model="fullName"
        :rules="[rules.fullNameCheck(1)]"
        color="deep-purple"
        label="Full Name"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="[rules.email]"
        color="deep-purple"
        label="Email"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[rules.length(6)]"
        color="deep-purple"
        label="Password"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="position"
        :rules="[rules.positionCheck(1)]"
        color="deep-purple"
        label="Position/Title"
        type="text"
      ></v-text-field>
      <v-select
        v-model="department"
        :items="departmentItems"
        color="deep-purple"
        chips
        label="Department"
      ></v-select>
      <v-text-field v-model="phone" color="deep-purple" label="Phone number" mask="phone"></v-text-field>
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
export default {
  data: () => ({
    form: false,
    isLoading: false,
    fullName: undefined,
    email: undefined,
    password: undefined,
    position: undefined,
    department: 'Department1',
    departmentItems: [
      "Department1",
      "Department2",
      "Department3",
      "Department4"
    ],
    phone: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      fullNameCheck: len => v =>
        (v || "").length >= len || `Please enter a full name`,
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