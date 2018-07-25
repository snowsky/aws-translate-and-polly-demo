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
                ref="inputText"
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
                ref="outputText"
                class="textarea is-medium"
                rows="3" 
                cols="33" 
                maxlength="200"
                wrap="hard">
              </textarea>
            </div>
          </div>
          <div class="container has-text-centered">
            <button id="convert" @click="handleInput">Convert</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AWS from 'aws-sdk';

// set up aws
AWS.config.region = process.env.AWS_REGION;
AWS.config.credentials = new AWS.Credentials(process.env.AWS_ACCESS_KEY, process.env.AWS_SECRET);

const translate = new AWS.Translate({region: AWS.config.region});
const polly = new AWS.Polly();
const INPUT_LANG = 'en';
const OUTPUT_LANG = 'ru';
const translateParams = {
    Text: '',
    SourceLanguageCode: INPUT_LANG,
    TargetLanguageCode: OUTPUT_LANG
};

export default {
  components: {},
  mounted() {

  },
  computed: {
    inputText() {
      return this.$store.state.inputText; 
    },
    outputText() {
      return this.$store.state.outputText; 
    }
  },
  methods: {
    handleInput(e) {
      // 0) translate the text to russian
      // 1) run AWS polly on the russian text
      // 2) somehow let the user preview the audio
      //
      // error handling: 
      //  - how do we ensure the user puts in english?
      //  - create constraints like cut off user text after X amount of characters 
      //    to ensure users cant put thousands of words in
      const inputText = this.$refs.inputText;
      const outputText = this.$refs.outputText;
      translateParams.Text = inputText.value;

      translate.translateText(translateParams, function(err, data) {
        if (err) {
          console.log(err, err.stack);
          alert("Error calling Amazon Translate. " + err.message);
          return;
        }
        if (data) {
          outputText.value = data.TranslatedText;
        }
      });
    }
  }
}
</script>

<style>
.section {
  padding: 0;
  margin: 0;
  background: blue;
}

#convert {
  background: white;
  color: blue;
  height: 50px;
  width: 100px;
  border-radius: 2px;
  font-size: 20px;
}
</style>
