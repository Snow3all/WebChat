<template>
    <v-app id="inspire">

        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>

                <v-list-item>
                    <v-avatar>
                    <v-list-item-action>
                        <v-icon>👈🏼</v-icon>
                    </v-list-item-action>
                    </v-avatar>
                    <v-list-item-content>
                        <router-link to="/"><v-banner color="light">Logout</v-banner></router-link>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item  v-for="users in userx" :key="users._id" >
                    <v-icon>🟢</v-icon><v-card-text>{{users}}</v-card-text>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="primary"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-icon>☁️</v-icon>
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



                    <form class="messages" v-for="(msg, index) in messages" :key="index._id">
                            <v-card-text >
                               {{msg.username}} : {{msg.msg }}


                            </v-card-text>
                    </form>


                    </v-col>
                </v-row>




                <v-footer>
                    <form @submit.prevent="sendMessage">
                        <v-text-field label="Type Here" type="text" v-model="message"></v-text-field>
                        <v-btn v-on:click="sendMessage" type="submit" class="btn btn-success">Send</v-btn>
                    </form>
                </v-footer>





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
    import jwtDecode from 'jwt-decode';
    export default {
        props: {
            source: String,
        },
        data: function () {
            const token = localStorage.userLog
            const decoded = jwtDecode(token)
            return {
                drawer: null,
                userlog: localStorage.getItem("userLog"),
                username:decoded.username,
                socket: io('localhost:5050'),
                message: '',
                a: '',
                messages: [],
                userx:[],
                mes:[],
            }

        },
            // created(){
            // this.a()
            // // eslint-disable-next-line no-console
            //     console.log(this.users)
            //     // eslint-disable-next-line no-console
            //     console.log('name',this.username)
            // },
        methods: {
            join: function () {

                this.socket.emit('newuser', this.username);
            },
            sendMessage(e) {
                // eslint-disable-next-line no-console
                e.preventDefault();
                // eslint-disable-next-line no-console
                    console.log({ username: this.username, message: this.message,})
                this.socket.emit('a111',
                    {
                        username: this.username,
                        message: this.message

                });

                // this.message = ''

            }
        },
        mounted: function () {
            this.socket.on('resend', (data) => {
                // eslint-disable-next-line
                console.log('resend', data)
                this.messages = [...this.messages, data];

                // eslint-disable-next-line
                console.log('mess ', this.messages)
                this.userx = [...data.users]
                // this.mes = [...data.username]
                // you can also do this.messages.push(data)
            });
            this.join();
            this.socket.on('userOnline', useOn => {
                // eslint-disable-next-line
                console.log('userOnline')
                this.userx.push(useOn);
            });
        }
    }
</script>

