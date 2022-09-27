<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field append-icon="mdi-magnify" label="Search..." v-model="params.filterName" solo></v-text-field>
      </v-col>
      <v-col class="mt-2">
        <v-btn icon @click="createPasswordCard()">
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="card in passwordCards" :key="card.id">
        <v-card>
          <v-card-title v-text="card.name"></v-card-title>
          <v-card-text>
            <div>{{card.url}}</div>
            <p>{{card.userName}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon @click="copyPassword(card)" v-bind="attrs" v-on="on">
                  <v-icon>mdi-clipboard</v-icon>
                </v-btn>
              </template>
              <span>Copy Password</span>
            </v-tooltip>
            <v-btn icon @click="editPasswordCard(card)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deletePasswordCard(card)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="600" >
      <password-card-form :passwordCard.sync="passwordCardModel" @close="closeModal"></password-card-form>
    </v-dialog>
  </v-container>
</template>

<script>
import PasswordCardForm from '@/components/forms/PasswordCardForm';
import PasswordCardModel from '@/models/PasswordCardModel';

export default {
  name: 'Passwords',
  components: {
    PasswordCardForm
  },
  data() {
    return {
      passwordCardModel: new PasswordCardModel(),
      passwordCards: [],
      dialog: false,    
      params: {
        filterName: null
      }
    };
  },
  watch: {
    'params.filterName': function change() {
      this.getPasswordCards();
    },
  },
  methods: {
    getPasswordCards() {
      const payload = { filterName: this.params.filterName };
      return this.$store.dispatch('callGetPasswordCards', payload).then((response) => {
        this.passwordCards = response.data;
      }).catch(() => {
        this.notifyModalDialog('Cannot get password cards', 'danger', 'mdi-alert-circle');
      });
    },
    createPasswordCard() {
      this.passwordCardModel = new PasswordCardModel();
      this.dialog = true;
    },
    deletePasswordCard(card) {
      return this.$store.dispatch('callDeletePasswordCard', card).then(() => {
        this.getPasswordCards();
      }).catch(() => {
        this.notifyModalDialog('Fail to detele password card', 'danger', 'mdi-alert-circle');
      });
    },
    editPasswordCard(card) {
      this.passwordCardModel = new PasswordCardModel(card);
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
      this.getPasswordCards();
      this.passwordCardModel = null;
      console.log('this.passwordCardModel', this.passwordCardModel)
    },
    async copyPassword(card) {
      try {
        await navigator.clipboard.writeText(card.password);
      } catch($e) {
        this.notifyModalDialog('Cannot copy', 'danger', 'mdi-alert-circle'); 
      }
    },
  },

  mounted() {
    this.getPasswordCards();
  },
};
</script>

<style scoped>
 .names {
    color: #D68765;
    font-weight: bold;
    font-family: 'nickainley';
    font-size: 50px;
 }
 .parent-names {
   font-size: 16px;
   font-family: 'Parisienne';
 }
 .content-text{
   font-size: 12px;
 }
 .subtitle-text {
   font-size: 12px;
 }
 .text {
   font-size: 12px;
 }
 .image  {
    display: inline-block;
 }
 .title-img {
    width: 150px; 
    height: 150px;
 }
</style>
