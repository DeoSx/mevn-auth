<template>
  <div class="form-control-group">
    <text-input 
      :placeholder="'Write your name'" 
      :type="'text'" 
      v-model="form.name"
      :value="form.name"
      :label="'Your name'"
    />
    <text-input 
      :placeholder="'Write your Email'" 
      :type="'email'" 
      v-model="form.email"
      :value="form.email"
      :label="'Your Email'"
    />
    <text-input 
      :placeholder="'Write your password'" 
      :type="'password'" 
      v-model="form.password"
      :value="form.password"
      :label="'Your Password'"
    />
    <Button 
      :className="'primary'"
      :text="'Register'"
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
  })
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
