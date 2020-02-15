<template>
    <v-app id="inspire">

        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>

                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>👈🏼</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                       <router-link to="/"><v-list-item-title>Logout</v-list-item-title></router-link>
                    </v-list-item-content>
                </v-list-item>



                <v-list-item  v-for="item in onlines" :key="item" >
                    <v-icon>🟢</v-icon> <v-banner>{{users.username}}</v-banner>
                </v-list-item>



            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="primary"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>CloudChat</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="text-center">

<!--                        <template>-->
<!--                            <div class="card mt-3">-->
<!--                                <div class="card-body">-->
<!--                                    <div class="card-title">-->
<!--                                        <h3>Chat Group</h3>-->
<!--                                        <hr>-->
<!--                                    </div>-->
<!--                                    <div class="card-body">-->
<!--                                        <div class="messages" v-for="(msg, index) in messages" :key="index">-->
<!--                                            <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="card-footer">-->
<!--                                    <form @submit.prevent="sendMessage">-->
<!--                                        <div class="gorm-group">-->
<!--                                            <label for="user">User:</label>-->
<!--                                            <input type="text" v-model="user" class="form-control">-->
<!--                                        </div>-->
<!--                                        <div class="gorm-group pb-3">-->
<!--                                            <label for="message">Message:</label>-->
<!--                                            <input type="text" v-model="message" class="form-control">-->
<!--                                        </div>-->
<!--                                        <button type="submit" class="btn btn-success">Send</button>-->
<!--                                    </form>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </template>-->


<!--                        <v-tooltip left>-->
<!--                            <template>-->
<!--                                <v-btn-->
<!--                                        :href="source"-->
<!--                                        icon-->
<!--                                        large-->
<!--                                        target="_blank"-->
<!--                                        v-on="on"-->
<!--                                >-->
<!--                                    <v-icon large>mdi-code-tags</v-icon>-->
<!--                                </v-btn>-->
<!--                            </template>-->
<!--                            <span>Source</span>-->
<!--                        </v-tooltip>-->

<!--                        <v-tooltip right>-->
<!--                            <template v-slot:activator="{ on }">-->
<!--                                <v-btn-->
<!--                                        icon-->
<!--                                        large-->
<!--                                        href="https://codepen.io/johnjleider/pen/zgxeLQ"-->
<!--                                        target="_blank"-->
<!--                                        v-on="on"-->
<!--                                >-->
<!--                                    <v-icon large>mdi-codepen</v-icon>-->
<!--                                </v-btn>-->
<!--                            </template>-->
<!--                            <span>Codepen</span>-->
<!--                        </v-tooltip>-->
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer
                color="primary"
                app
        >
            <span class="white--text">&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            users: JSON.parse(localStorage.getItem("userLog")),
            onlines: [
                {
                    id :1,
                    username:" "
                }
            ],
            nextonlinesId: 2


        }),
    created() {
        // eslint-disable-next-line no-console
        console.log('1111s ', this.users)
        // eslint-disable-next-line no-console
        console.log('2222 ', this.users.username)
    }
    }
</script>

