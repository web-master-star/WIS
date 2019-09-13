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
                <v-form ref="form" v-model="form" class="pa-3 pt-4">
                  <v-text-field
                    v-model="email"
                    :rules="[rules.email]"
                    color="deep-purple"
                    label="Email"
                    style="min-height: 96px"
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
                  <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
                    <template v-slot:label>Keep me logged in</template>
                  </v-checkbox>
                </v-form>
                <div class="divider" />
                <h6 class="mb-0">
                  No account?
                  <a href="#/admin/signup" class="text-primary">Sign up now</a>
                </h6>
              </div>
              <div class="modal-footer clearfix">
                <div class="float-left">
                  <a href="javascript:void(0);" class="btn-lg btn btn-link">
                    Recover
                    Password
                  </a>
                </div>
                <div class="float-right">
                  <v-btn
                    :disabled="!form"
                    :loading="isLoading"
                    class="white--text"
                    color="deep-purple accent-4"
                    depressed
                    href="#/admin/dashboard"
                  >Login</v-btn>
                </div>
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
    form: false,
    isLoading: false,
    email: undefined,
    password: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      length: len => v =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
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