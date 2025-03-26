const express = require('express');
const app = express ();
const port = 3000;

app.use(express.static('public'))



app.get('/', (req, res) => {
    console.log('sei dentro la homepage')

    res.send('server del blog')
})

app.get('/bacheca', (req, res) => {
    console.log('sei dentro la bacheca')

    const list =[
        {
            titolo: 'ciambellone',
            contenuto: 'ricetta della nonna',
            img: './images/ciambellone.jpeg',
            tags : [
                '#cheBontà',
                '#ricettaFacile',
                '#ciambelloneDellaNonna'
            ]
        },
        {
            titolo: 'cracker di barbabietole',
            contenuto: 'ricettario di Gaetano',
            img: './images/cracker_barbabietola.jpeg',
            tags : [
                '#comeScrocchia',
                '#coloreVivace',
                '#ottimoAperitivo'
            ]
        },
        {
            titolo: 'pane fritto dolce',
            contenuto: 'ricetta di Stefano',
            img: './images/pane_fritto_dolce.jpeg',
            tags : [
                '#zucchero',
                '#pane',
                '#postPranzo'
            ]
        },
        {
            titolo: 'pasta barbabietola',
            contenuto: 'ricetta di Alessio',
            img: './images/pasta_barbabietola.jpeg',
            tags : [
                '#cheBonta',
                '#gourme',
                '#loveBarbabietola'
            ]
        },
        {
            titolo: 'torta paesana',
            contenuto: 'ricetta di Gianluca',
            img: './images/torta_paesana.jpeg',
            tags : [
                '#facileDaFare',
                '#pochiMinuti',
                '#grandiEPiccini'
            ]
        }
    ]

    res.json(list)
})

app.listen(port, () =>{
    console.log('il server ti ascolta')
})