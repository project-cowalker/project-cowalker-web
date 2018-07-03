<template>
    <v-dialog v-model="SignupDialog" max-width="480.77px">
        <v-btn flat accent slot="activator" >회원가입</v-btn>
        <v-card height="484.55px">
                                <v-container class="v-container" text-xs-center> <!--가운데 정렬-->
                <v-layout row wrap class="top">
                    <v-flex xs12>
                        <v-card-text><h2>코워커의 일원이 되어보세요!</h2></v-card-text>
                    </v-flex>
                     <v-container fluid>
                            <form @submit.prevent="onSignUp"> <!--제출 이벤트가 페이지를 다시 로드 X -->
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field class="input" name="name" id="name" type="name" v-model="name" required placeholder="성함"></v-text-field>
                                    </v-flex>
                                </v-layout>
                               <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field class="input" name="email" id="email" type="email" v-model="email" required placeholder="이메일" :rules="[rules.required, rules.email]"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field class="inputpw" :append-icon="show3 ? 'visibility_off' : 'visibility'" :type="show3 ? 'text' : 'password'" name="password" id="password" v-model="password" required placeholder="비밀번호" :rules="[rules.required, rules.min]" hint="적어도 8글자 이상"  value="wqfasds"  @click:append="show3 = !show3">></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                    <v-text-field class="inputpw" name="confirmPassword" id="confirmPassword" type="confirmPassword" v-model="confirmPassword" :rules="[checkPassword]" required placeholder="비밀번호 확인" :append-icon="show4 ? 'visibility_off' : 'visibility'"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap class="log_signup">
                                    <v-flex xs12>
                                        <v-btn class="signup" type="submit" round @click.native="dialog = false">가입완료</v-btn>
                                    </v-flex>
                                     <v-flex xs12>
                                     </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                </v-layout>
                 <v-layout row wrap>
                </v-layout>
            </v-container>

        </v-card>
    </v-dialog>
</template>

<script>
import Router from '@/router/index'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      show3: false,
      rules: {
        min: v => v.length >= 8 || 'Min 8 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  computed: {
    checkPassword () {
      return this.password !== this.confirmPassword ? '비밀번호 확인 틀립니다' : true
    },
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
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        Router.push('/')
      }
    }
  },

  methods: {
    onSignUp () {
      const object = {
        name: this.name,
        email: this.email, // 서버에 있는 user_id에 this.email저장
        password: this.password // 서버에 있는 user_pw
      }
      console.log(object)
      this.$store.dispatch('signUp', object)
    },
    onDismissed () {
      console.log('Dismissed Alert!')
      this.$store.dispatch('clearError')
    }
  }
}

</script>

<style scoped>
.input {
    width: 262.08px;
    height:  33px;
    padding: 12px 20px;
    margin: 0;
    display: inline-block;

}
.inputpw {
   width: 262.08px;
    height:  33px;
    padding: 12px 20px;
    margin: 0;
    display: inline-block;
}
.pw {
    margin-top: 15px;
}

.signup {
  margin-top: 10px;
  width: 116.86px;
  height: 40.64px;
  box-shadow: none;
  background: url("https://blogfiles.pstatic.net/MjAxODA3MDFfMzgg/MDAxNTMwNDUyNjQxNDM5.mKX989lzYykQU5ALcT3_SQP-J1VwLAmf29GEYo3bV2Yg.leHoFt4jmF-m96MXXCYj33BOMaMAEKs1HusK6LtD1mcg.PNG.rkdud410/sign_blue_btn.png");
}

</style>
