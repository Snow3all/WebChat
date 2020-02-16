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


                        <div>
                            <v-row justify="center" align="center"></v-row>
                            <v-container

                                    id="scroll-target"
                                    style="max-height: 300px"
                                    class="overflow-y-auto"
                            >
                                <div class="messages" v-for="(msg, index) in messages" :key="index">
                                    <p><span class="font-weight-bold">{{users.username}}: </span>{{ msg.message }}</p>
                                </div>
                                <v-row
                                        v-scroll:#scroll-target="onScroll"
                                        align="center"
                                        justify="center"
                                        style="height: 1000px"
                                >
                                </v-row>
                            </v-container>
                        </div>

                    </v-col>
                </v-row>
                <v-banner>
                    <v-footer>
                        <form @submit.prevent="sendMessage">
                            <div class="gorm-group pb-3">
                                <label for="message">Message:</label>
                                <input type="text" v-model="message" class="form-control">
                            </div>
                            <v-btn type="submit" >Send</v-btn>
                        </form>
                    </v-footer>
                </v-banner>
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
    import io from 'socket.io-client';
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
                },

            ],
            nextOnlineId :2,

            message: '',
            messages: [],
            socket : io('localhost:5050'),
        }),
    created() {
        // eslint-disable-next-line no-console
        console.log('1111s ', this.users)
        // eslint-disable-next-line no-console
        console.log('2222 ', this.users.username)
    },
        methods: {
            sendMessage(e) {
                e.preventDefault();

                this.socket.emit('SEND_MESSAGE', {
                    user: this.user,
                    message: this.message
                });
                this.message = ''
            },
        },
        mounted() {
            this.socket.on('MESSAGE', (data) => {
                this.messages = [...this.messages, data];
                // you can also do this.messages.push(data)
            });
        }
    }
</script>

