<template>
        <v-dialog  persistent v-model="SigninDialog" width="">
        <v-btn class="button" dark large accent slot="activator">프로젝트 보기</v-btn>
        <v-card class="mainbox" width="">
           <v-container class="v-container">
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>logo</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>코워커의 일원이 되어보세요!</v-card-text>
                    </v-flex>

                     <v-container fluid>
                       <v-flex x5 sm10 md8 lg10>
                            <form @submit.prevent="onSignIn"> <!--제출 이벤트가 페이지를 다시 로드 X -->
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field name="email" label="Email" id="email" type="email" v-model="email" required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field name="password" label="Password" id="password" type="password" v-model="password" required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-btn type="submit" round outline color="indigo">login</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                       </v-flex>
                        </v-container>
                </v-layout>
                 <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn class="red--text darken-1" flat @click="SigninDialog=false">취소</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      SigninDialog: false
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },

  methods: {
    onSignIn () {
      const object = {
        user_id: this.email, // 서버에 있는 user_id에 this.email저장
        user_pw: this.password // 서버에 있는 user_pw
      }
      this.$store.dispatch('signIn', object)
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}

</script>

<style>
  .mainbox{
    width: 80%;
  }
.button {
  margin-right: 50px;
  color: #212121;
  border :white 2px solid;
  opacity: 0.8;
}

</style>
