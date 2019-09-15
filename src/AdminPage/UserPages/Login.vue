<template>
  <div class="full-height">
    <div class="h-100 bg-plum-plate bg-animation">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <b-col md="8" class="mx-auto app-login-box">
          <div class="app-logo-inverse mx-auto mb-3" />
          <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
              <div class="modal-body">
                <div class="h5 modal-title text-center">
                  <h4 class="mt-2">
                    <div>Welcome back,</div>
                    <span>Please sign in to your account below.</span>
                  </h4>
                </div>
                <v-form
                  ref="form"
                  :action="loginURL"
                  method="post"
                  v-model="form"
                  class="pa-3 pt-4"
                >
                  <v-text-field
                    v-model="email"
                    :rules="[rules.email]"
                    color="deep-purple"
                    label="Email"
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="[rules.passwordCheck]"
                    color="deep-purple"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-checkbox v-model="agreement" color="deep-purple">
                    <template v-slot:label>Keep me logged in</template>
                  </v-checkbox>
                  <div class="divider" />
                  <h6 class="mb-0">
                    No account?
                    <a @click="gotoSignup();" class="text-primary signup-btn-type">Sign up now</a>
                  </h6>
                </v-form>
              </div>
              <div class="modal-footer clearfix">
                <div class="float-right">
                  <v-btn
                    :disabled="!form"
                    :loading="isLoading"
                    class="white--text"
                    color="deep-purple accent-4"
                    depressed
                    @click="gotoLogin()"
                  >Login</v-btn>
                </div>
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
    form: false,
    isLoading: false,
    email: undefined,
    password: undefined,
    loginURL: "#/dashboard",
    signupURL: "#/signup",
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      passwordCheck: v =>
        (v || "").length >= 6 || `Invalid character length, required 6`,
      length: len => v =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      required: v => !!v || "This field is required"
    },
  }),

  methods: {
    gotoLogin() {
      this.$router.push('/dashboard');
    },
    gotoSignup() {
      this.$router.push('/signup');
    }
  }
};
</script>

<style scoped>
.full-height {
  height: 100vh !important;
}

.signup-btn-type {
  cursor: pointer;
}
</style>