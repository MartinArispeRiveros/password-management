<template>
  <v-container fluid pa-4 class="password-card">
    <v-row>
      <v-col class="pa-0">
        <v-form id="password-card-form-body">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field solo label="Name" v-model="passwordCard.name" :error-messages="passwordCard.errors.name ? passwordCard.errors.name : []"/>
                <v-text-field solo label="URL" v-model="passwordCard.url" :error-messages="passwordCard.errors.url"/>
                <v-text-field solo label="User Name" v-model="passwordCard.userName" :error-messages="passwordCard.errors.userName"/>
                <v-text-field solo label="Password" v-model="passwordCard.password" :error-messages="passwordCard.errors.password"/>
              </v-col>
            </v-row>
          </v-container>
          <v-footer >
            <v-row>
              <v-col>
                <v-btn color="primary" @click="save()" block> SAVE </v-btn>
              </v-col>
              <v-col>
                <v-btn @click="cancel()" depressed block> CANCEL </v-btn>
              </v-col>
            </v-row>
          </v-footer>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'PasswordcardForm',
  props: {
    passwordCard: {
      type: Object,
      required: false,
    },
  },
  methods: { 
    save() {
      this.passwordCard.validate();
      if(this.passwordCard !== null && Object.keys(this.passwordCard.errors).length === 0) {
        return this.$store.dispatch('callPutPasswordCard', this.passwordCard).then(() => {
          this.$emit('close');
        }).catch(() => { 
          this.notifyModalDialog('Cannot update password cards', 'danger', 'mdi-alert-circle');
        });
      } else {
        this.passwordCard.save().then(() => {
          this.$emit('close');
        }).catch((error) => {
          this.notifyModalDialog('Cannot create password cards', 'danger', 'mdi-alert-circle');
        });
      }
    },
    cancel() {
      this.$emit('close');  
    }
  },
};
</script>

<style scoped>
  .password-card {
    background-color: white;
  }
</style>
