<template>
  <div class="full-height">
    <div class="h-100 bg-premium-dark">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <b-col md="8" class="mx-auto app-login-box">
          <div class="app-logo-inverse mx-auto mb-3" />

          <div class="modal-dialog w-100">
            <div class="modal-content">
              <div class="modal-body">
                <h5 class="modal-title">
                  <h4 class="mt-2">
                    <div>Welcome,</div>
                    <span>
                      It only takes a
                      <span class="text-success">few seconds</span> to create your account
                    </span>
                  </h4>
                </h5>
                <div class="divider" />
                <v-form ref="form" v-model="form" class="pa-3 pt-4">
                  <v-text-field
                    v-model="fullName"
                    :rules="[rules.fullNameCheck(1)]"
                    color="deep-purple"
                    label="Full Name"
                    style="min-height: 96px"
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
                    counter="6"
                    label="Password"
                    style="min-height: 96px"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    v-model="phone"
                    color="deep-purple"
                    label="Phone"
                    mask="phone"
                  ></v-text-field>
                  <v-text-field
                    v-model="companyName"
                    :rules="[rules.companyNameCheck(1)]"
                    color="deep-purple"
                    label="Company Name"
                    style="min-height: 96px"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="companyWebSiteUrl"
                    color="deep-purple"
                    label="Company WebSite Url"
                    style="min-height: 46px"
                    type="text"
                  ></v-text-field>
                  <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
                    <template v-slot:label>
                      I agree to the&nbsp;
                      <a
                        href="#"
                        @click.stop.prevent="dialog = true"
                      >Terms of Service</a>
                      &nbsp;and&nbsp;
                      <a
                        href="#"
                        @click.stop.prevent="dialog = true"
                      >Privacy Policy</a>*
                    </template>
                  </v-checkbox>
                  <h6 class="mb-0">
                    Already have an account?
                    <a href="#/admin/login" class="text-primary">Sign in</a>
                    |
                    <a href="javascript:void(0);" class="text-primary">
                      Recover
                      Password
                    </a>
                  </h6>
                </v-form>
              </div>
              <!-- <div class="divider" /> -->
              <div class="modal-footer d-block text-center">
                <v-btn
                  :disabled="!form"
                  :loading="isLoading"
                  class="white--text"
                  color="deep-purple accent-4"
                  depressed
                  href="#/admin/login"
                >Create Account</v-btn>
              </div>
            </div>
          </div>
          <div class="text-center text-white opacity-8 mt-3">Copyright &copy; ArchitectUI 2019</div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    companyWebSiteUrl: "",
    dialog: false,
    form: false,
    isLoading: false,
    fullName: undefined,
    email: undefined,
    password: undefined,
    phone: undefined,
    companyName: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      fullNameCheck: len => v =>
        (v || "").length >= len || `Please enter a full name`,
      companyNameCheck: len => v =>
        (v || "").length >= len || `Please enter a company name`,
      length: len => v =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: v =>
        (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: v => !!v || "This field is required"
    }
  })
};
</script>

<style scoped>
.full-height {
  height: 100vh !important;
}
</style>