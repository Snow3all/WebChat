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
                  <v-toolbar-title>Register</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                            label="Username"
                            name="user"
                            type="text"
                    />
                      <v-text-field
                              label="Email"
                              name="email"
                              type="text"
                      />
                      <v-text-field
                      auth="password"
                      label="Password"
                      name="password"
                      type="password"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer-center />
                  <v-btn color="primary">Sigh Up </v-btn>
                </v-card-actions>
                <v-card-actions>
                <v-spacer-center />
                <router-link to="/"><v-btn color="primary">Back</v-btn></router-link>
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
  // import axios from 'axios'
  // import router from '../router'
  // export default {
  //   data () {
  //     return {
  //       first_name: '',
  //       last_name: '',
  //       email: '',
  //       password: ''
  //     }
  //   },
  //   methods: {
  //     register () {
  //       axios.post('users/register', {
  //         first_name: this.first_name,
  //         last_name: this.last_name,
  //         email: this.email,
  //         password: this.password
  //       }).then(res => {
  //         router.push({ name: 'Login' })
  //       }).catch(err => {
  //         console.log(err)
  //       })
  //     }
  //   }
  // }
</script>
<style scoped></style>
