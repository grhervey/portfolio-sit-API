const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const faceicon =require(  __dirname + '/Images/facepage.png');
// const wordAffinity =require( __dirname + '/Images/wordaffinity.png');
// const w2e =require( __dirname + '/Images/w2e.png');

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
        git:'github.com',
        text: 'Users can register and login and are presented with an interface where they can insert a JPG image url and the image will be displayed and if a face is detected then it will be highlighted. A total count of submitted Images by users are tracked.',
        tools: ['React','JavaScript', 'ES6','Node','Express', 'PostgreSQL','Face detection API',],
    }, {
        projectName:'Word Affinity',
        image:wordAffinity,
        link:'wordaffinity.fun',
        git:'github.com',
        text: 'A website that shows visual representations of physical word similarity algorithms, and semantic word similarity algorithms. A body of text is analyzed and then mapped to a weighted network graph.',
        tools: ['Django','Postgres','Python', 'Sentiment', 'Word2vec', 'GloVe'],
    }, {
        projectName:'Where to Eat (Work in Progress',
        image:w2e,
        link:'https://grhervey.github.io/',
        git:'github.com',
        text: ' Sign up for Updates! Restaurant recommendation system that finds and displays local restaurants and provides an interface to decide on where to eat. Restaurants over time will be rated by social media presence.',
        tools: ['React','Node','express','JavaScript', 'React native', 'Python'],
    }, {
        projectName:'Robot Friends',
        image:wordAffinity,
        link:'wordaffinity.fun',
        git:'github.com',
        text: 'Intro to React component structure with a searchable list of dynamic data.',
        tools: ['React','Node','JavaScript'],
    }, {
        projectName:'Shopping List',
        image:w2e,
        link:'wordaffinity.fun',
        git:'github.com',
        text: '',
        tools: ['React','JavaScript', 'JSX'],
    }, {
        projectName:'Flask Mega Tutorial',
        image:faceicon,
        link:'wordaffinity.fun',
        git:'github.com',
        text: 'I am following the updated version of the famous FLask Mega Tutorial. New Lessons are released every week.',
        tools: ['Flask','Node','JavaScript', 'Python'],
    }, {
        projectName:'Background Generator',
        image:w2e,
        link:'wordaffinity.fun',
        git:'github.com',
        text: 'User can generate a live updating linear gradiant background',
        tools: ['CSS','HTML','JavaScript'],
    }]
app.get('/projects',(req, res) => {
    res.send(projects);
})


app.listen(3000);

