<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <p id="not-email-verified" v-show="showNotEmailVerifiedMessage">メール認証が行われていません。</p>
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
      username: '',
      password: '',
      showNotEmailVerifiedMessage: false
    }
  },
  methods: {
    signIn() {
      firebaseUI.signInWithEmailAndPassword(this.username, this.password)
      this.$router.push('/sengen')
    }
  },
  watch: {
    '$route' (to, from) {

      debugger
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
