<template>
  <div class="success-page">
    <nord-icon name="success-circle" size="large" />
    <h2 class="success-message">Success!</h2>
    <p><router-link to="/">Back to Login</router-link></p>

  </div>
</template>

<style>
.success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
}

.success-message {
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.username {
  margin-top: 1rem;
  font-size: 1.5rem;
}
</style>
