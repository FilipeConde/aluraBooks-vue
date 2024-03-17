<template>
  <section class="contact">
    <div class="container">
      <h2 class="contact__main-text">Fique por dentro das novidades!</h2>
      <h3 class="contact__description">Atualizações de e-books, novos livros, promoções e outros.</h3>
      <input type="email" name="email-input" id="email-input" placeholder="Cadastre seu e-mail">
    </div>
  </section>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.contact {
  background: var(--branco-fundo);
  font-family: var(--main-font);
  padding: 2em 1.5em;
}

.container {
  width: 90%;
}

.contact__main-text {
  color: var(--dark-blue);
  font-size: 18px;
  font-weight: 500;
}

.contact__description {
  color: var(--dark-blue);
  font-weight: 300;
  font-size: 16px;
  margin: .5em 0 1em 0;
  line-height: 1.5em;
}

#email-input {
  background-color: transparent;
  border-radius: 25px;
  border-color: var(--dark-blue);
  border-width: 1px;
  width: 100%;
  padding: 1em;
}

#email-input::placeholder {
  font-family: var(--main-font);
  color: var(--dark-blue);
  text-align: center;
  background: url('../icons/Email.svg') no-repeat;
  background-position: 6em;
}

</style>