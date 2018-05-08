const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const faceicon = 'http://localhost:3000/Images/facepage.png';
const wordAffinity =__dirname + '/Images/wordaffinity.png';
const w2e =__dirname + '/Images/w2e.png';

const projects = [{
        projectName:'Face Finder',
        image:faceicon,
        link:'http://face-finder.herokuapp.com/',
        git:'https://github.com/grhervey/face_finder',
        text: 'Users can register and login and are presented with an interface where they can insert a JPG image url and the image will be displayed and if a face is detected then it will be highlighted. A total count of submitted Images by users are tracked.',
        tools: 'React, JavaScript, ES6, Node, Express, Postgres, Face Detection API',
    }, {
        projectName:'Word Affinity',
        image:wordAffinity,
        link:'http://wordaffinity.fun/home/',
        git:'not yet',
        text: 'A website that shows visual representations of physical word similarity algorithms, and semantic word similarity algorithms. A body of text is analyzed and then mapped to a weighted network graph.',
        tools: 'Django, Postgres, Python, Sentiment, Word2vec, GloVe',
    }, {
        projectName:'Where to Eat (Work in Progress)',
        image:w2e,
        link:'https://grhervey.github.io/',
        git:'https://github.com/grhervey/grhervey.github.io',
        text: ' Sign up for Updates! Restaurant recommendation system that finds and displays local restaurants and provides an interface to decide on where to eat. Restaurants over time will be rated by social media presence.',
        tools: 'React, Node, express, JavaScript, React native, Python',
    }, {
        projectName:'Robot Friends',
        image:wordAffinity,
        link:'https://github.com/grhervey/Complete_web_dev_Udemy/tree/master/robofriends',
        git:'https://github.com/grhervey/Complete_web_dev_Udemy/tree/master/robofriends',
        text: 'Intro to React component structure with a searchable list of dynamic data.',
        tools: 'React, Node, JavaScript',
    }, {
        projectName:'CRUD Shopping List',
        image:w2e,
        link:'https://github.com/grhervey/shopping_list_CRUD',
        git:'https://github.com/grhervey/shopping_list_CRUD',
        text: 'A simple shopping list with CRUD(create, read, update, and delete) functionality.',
        tools: 'React, JavaScript, JSX',
    }, {
        projectName:'Image Gallery',
        image:faceicon,
        link:'https://github.com/grhervey/Complete_web_dev_Udemy/tree/master/image_gallery',
        git:'https://github.com/grhervey/Complete_web_dev_Udemy/tree/master/image_gallery',
        text: 'Reactive image gallery to what ever screen it is displayed on.',
        tools: 'Flask, Node, JavaScript, Python',
    }, {
        projectName:'Background Generator',
        image:w2e,
        link:'https://github.com/grhervey/Complete_web_dev_Udemy/tree/master/background_generator',
        git:'https://github.com/grhervey/Complete_web_dev_Udemy/tree/master/background_generator',
        text: 'User can generate a live updating linear gradiant background',
        tools: 'CSS, HTML, JavaScript',
    }]

app.get('/',(req, res) => {
    res.send('It is working!')
})
app.get('/projects',(req, res) => {
    res.send(projects);
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`)
});

