const mongoos = require('mongoose')
const BlogPosty = require('./BlogPost')
mongoos.connect("mongodb+srv://d9nich:pUXRiCBgds17mERJ@cluster0.9rrxu.mongodb.net/test",
    {useNewUrlParser: true, useUnifiedTopology: true})
/*BlogPosty.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to\n' +
        'dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money\n' +
        'topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery\n' +
        'opens up. You know those bullet-point lists. You start spotting them everything at this time of year.\n' +
        'They go like this:'
}, (error, blogpost) => {
    console.log(error, blogpost)
})*/

// BlogPosty.find({
//     title: /The/
// }, (error, blogspot) => {
//     console.log(error, blogspot)
// })

var id = "5f2da6f6ba4945b81991389d";
BlogPosty.findById(id, (error, blogspot) => {
    console.log(error, blogspot)
})
BlogPosty.findByIdAndUpdate(id, {
    title: 'Updated title'
}, (error, blogspot) => {
    console.log(error, blogspot)
})
BlogPosty.findByIdAndDelete(id, (error, blogspot) => {
    console.log(error, blogspot)
})