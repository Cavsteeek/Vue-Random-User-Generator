const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/portraits/men/1.jpg',
        }
    },

    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large

            // this.firstName = 'Daniella'
            // this.lastName = 'Sarr'
            // this.email = 'sarr@gmail.com'
            // this.gender = 'female'
            // this.picture = 'https://randomuser.me/portraits/women/3.jpg'
        },
    },
})

app.mount("#app")