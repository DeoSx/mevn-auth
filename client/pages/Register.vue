<template>
  <div class="form-control-group">
    <text-input
      placeholder="Write your name"
      type="text"
      v-model="form.name"
      :value="form.name"
      label="Your name"
      name="name"
      :error="errors.first('name')"
      v-validate="'required'"
    />
    <text-input
      placeholder="Write your Email"
      type="email"
      v-model="form.email"
      :value="form.email"
      label="Your Email"
      name="email"
      :error="errors.first('email')"
      v-validate="'required|email'"
    />
    <text-input
      placeholder="Write your password"
      type="password"
      v-model="form.password"
      :value="form.password"
      label="Your Password"
      name="password"
      :error="errors.first('password')"
      v-validate="'required|min:6'"
    />
    <Button 
      :className="'primary'" 
      :text="'Register'" 
      @click="register"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    register() {
      this.$validator.validate().then(isValid => {
        if (!isValid) {
          return
        }
        this.$store.dispatch('registerUser', {...this.form})
        this.form.name = this.form.email = this.form.password = ''
      })
    }
  }
};
</script>

<style scoped>
.form-control-group {
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 700px;
}
</style>
