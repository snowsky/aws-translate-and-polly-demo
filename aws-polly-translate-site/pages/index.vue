<template>
  <section class="section">
    <div class="hero is-fullheight">
      <div class="hero-head">
        <div class="container">
          <br>
          <h1 class="title has-text-centered has-text-white">Text-to-Speech Synthesis - English to Russian</h1>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <label class="subtitle has-text-white">English</label>
              <textarea 
                class="textarea is-medium"
                rows="3" 
                cols="33" 
                maxlength="200"
                wrap="hard">
              </textarea>
            </div>
            <div class="column">
              <label class="subtitle has-text-white">Russian</label>
              <textarea 
                class="textarea is-medium"
                rows="3" 
                cols="33" 
                maxlength="200"
                wrap="hard">
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  mounted() {
    console.log(process.env.AWS_ACCESS_KEY);
  }
}
</script>

<style>
.section {
  padding: 0;
  margin: 0;
  background: blue;
}
</style>
