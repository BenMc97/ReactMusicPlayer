import {v4 as uuidv4} from "uuid";

function chillHop(){
    return [
        {
            name: "Sleepover",
            artist: "Nymano, JK the Sage",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#715E87','#181413'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10130'
        },
        {
            name: "Soil",
            artist: "Philanthrope, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg",
            id: uuidv4(),
            active: false,
            color: ['#583631','#984A44'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10254'
        },
        {
            name: "Tumbling",
            artist: "Swørn",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#C14979','#361750'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9225'
        },
        {
            name: "Aerials",
            artist: "No Spirit, dryhope",
            cover: "https://chillhop.com/wp-content/uploads/2020/04/478079cd16fca3ef62a4667dff1673e96e2b635f-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#C15448','#477E61'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9423'
        },
        {
            name: "Harbor",
            artist: "Stan Forebee, The Field Tapes, azula, Francis",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#DDE9DE','#222641'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11245'
        },
        {
            name: "Melancholy",
            artist: "Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#FDDC67','#5065a1'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11778'
        },
        {
            name: "Flushing the Stairs",
            artist: "Leavv",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#033540','#879974'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9917'
        },
        {
            name: "Hibiscus",
            artist: "G Mills, Felty",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#1872B1','#E2B240'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8971'
        },


    ]

}

export default chillHop;