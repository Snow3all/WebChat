<template>

  <div class="text-center">

    <v-app id="inspire">
      <v-content>



        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-icon>cloud</v-icon>
                    <v-toolbar-title>CloudChat</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                            prepend-icon="person"
                            label="Email or username"
                            name="login"
                            type="text"
                            v-model="email"
                    />
                    <v-text-field
                            prepend-icon="lock"
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            v-model="password"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="login" type="submit">Login</v-btn>
                </v-card-actions>
                  <v-card-actions>
                      <router-link to="Register"><v-btn color="primary">Register</v-btn></router-link>
                  </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login() {
                // eslint-disable-next-line no-console
                console.log("email :",this.email)

                axios.post('http://localhost:5000/users/login', {
                    email: this.email,
                    password: this.password
                }).then(res => {
                    // eslint-disable-next-line no-console
                    console.log(res,"ss")
                    if(res.data.error){
                        // eslint-disable-next-line no-console
                        console.log(res)
                        alert("wrong email or password")

                    }else{
                        localStorage.setItem("usertoken", res.data)
                        this.email = "email"
                        this.password = "password"
                        // eslint-disable-next-line no-console
                        console.log(localStorage.getItem("usertoken"))
                        this.$router.replace({name: 'ChatFeed'})
                      let user = JSON.stringify(res.data);
                      // eslint-disable-next-line no-console
                      console.log("user>>>>>>>>>", user);
                      localStorage.setItem("userLog", user);
                      // eslint-disable-next-line no-console
                      console.log(res.data,user,"==>")
                    }
                }).catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                })
            }
        }

    }
</script>

<style scoped></style>

