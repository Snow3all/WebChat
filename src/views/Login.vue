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
                    />
                    <v-text-field
                            prepend-icon="lock"
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer-center />
                  <v-btn color="primary" @click="login">Login</v-btn>
                </v-card-actions>
                  <v-card-actions>
                      <v-spacer-center />
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
  export default {
  methods:{
    login() {
      // eslint-disable-next-line no-console
      console.log('Login test get');
    let uri = "http://localhost:5000/users/testget/";
    this.axios.get(uri, this.username).then(response => {
      // eslint-disable-next-line no-console
      console.log(response);
    });
  }
  }
  }
</script>

<style scoped></style>
