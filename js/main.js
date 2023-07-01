var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        list: ['りんご', 'ばなな', 'いちご'],
        count: 10,
        show: false,
    },
    methods: {
        handleClick: function(event) {
            //alert(event.target)
            app.show = !app.show
        }
    }
})

console.log(app.message)
app.list.push('みかん')
