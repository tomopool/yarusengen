<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <div id="not-email-verified" v-show="showNotEmailVerifiedMessage">
      <p>メール認証が行われていません。</p>
      <a href="#" @click="reSendVerifyMail">もう一度認証メールを送信する</a>
    </div>
    <p>You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebaseUI from '@/firebase/firebaseUI.js'

export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      showNotEmailVerifiedMessage: false
    }
  },
  methods: {
    async signIn() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      const result = await firebaseUI.signInWithEmailAndPassword(this.email, this.password)

      loading.close();
      if (result.error) {
        this.$message({
          message: result.message,
          showClose: true,
          type: 'error',
          duration: 10000,
          center: true
        });
      } else {
        this.$router.push('/sengen')
      }
    },
    reSendVerifyMail() {
      firebaseUI.reSendVerifyMail()
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.query.emailVerified === undefined) {
        // パラメータがそもそもない場合
        this.showNotEmailVerifiedMessage = false
      } else {
        if (to.query.emailVerified === 'true') {
          this.showNotEmailVerifiedMessage =  false
        } else {
          this.showNotEmailVerifiedMessage =  true
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
#not-email-verified {
  color: red;
  font-weight: bold;
}
</style>
