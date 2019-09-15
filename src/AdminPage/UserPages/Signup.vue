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
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="companyWebSiteUrl"
                    color="deep-purple"
                    label="Company WebSite Url"
                    style="min-height: 46px"
                    type="text"
                  ></v-text-field>
                  <v-checkbox v-model="agreement" color="deep-purple">
                    <template v-slot:label>
                      I agree to the Terms of Service and Privacy Policy&nbsp;
                    </template>
                  </v-checkbox>
                  <h6 class="mb-0">
                    Already have an account?
                    <a @click="gotoSignin();" class="text-primary signin-btn-type">Sign in</a>
                  </h6>
                </v-form>
              </div>
              <div class="modal-footer d-block text-center">
                <v-btn
                  :disabled="!form"
                  :loading="isLoading"
                  class="white--text"
                  color="deep-purple accent-4"
                  depressed
                  @click="gotoLogin();"
                >Create Account</v-btn>
              </div>
            </div>
          </div>
          <div class="text-center text-white opacity-8 mt-3">Copyright &copy; Introbot 2019</div>
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
    loginURL: "#/login",
    signupURL: "#/signup",
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
  }),

  methods: {
    gotoSignin() {
      this.$router.push('/login');
    },
    gotoLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.full-height {
  height: 100vh !important;
}

.signin-btn-type {
  cursor: pointer;
}
</style>