<template>
  <div class="text-center">
    <form>
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-icon>cloud</v-icon>
                  <v-toolbar-title>Register</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                            label="Username"
                            name="username"
                            v-model="username"
                            id="username"
                            type="text"
                    />
                      <v-text-field
                              label="Email"
                              name="email"
                              v-model="email"
                              id="email"
                              type="email"
                      />
                      <v-text-field
                      auth="password"
                      label="Password"
                      name="password"
                      v-model="password"
                      id="password"
                      type="password"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>

                  <v-btn color="primary" type="submit" @click="register">Sigh Up </v-btn>
                </v-card-actions>
                <v-card-actions>

                <router-link to="/"><v-btn color="primary"  >Back</v-btn></router-link>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  // import router from '../router'

  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {

      register() {
        // eslint-disable-next-line no-console
        console.log (this.username)
        axios.post('http://localhost:5000/users/register', {
          username: this.username,
          email: this.email,
          password: this.password
          // eslint-disable-next-line no-unused-vars

        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
      }
    }
  }

</script>
<style scoped></style>
