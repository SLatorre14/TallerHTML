"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.series = void 0;
class Serie {
    constructor(id, name, channel, seasons, synapsis, link, img) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.synapsis = synapsis;
        this.link = link;
        this.img = img;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getChannel() {
        return this.channel;
    }
    getSeasons() {
        return this.seasons;
    }
    getDescription() {
        return this.synapsis;
    }
    getUrl() {
        return this.link;
    }
    getImg() {
        return this.img;
    }
}


let serie1 = new Serie (1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fseries%2F000%2F002%2F236%2Fbadposterjpg-4570-5.jpg&nuevoancho=690&medio=abc");
let serie2 = new Serie (2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://upload.wikimedia.org/wikipedia/en/1/1f/Orange_is_the_new_black_season_6.jpg");
let serie3 = new Serie (3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg");
let serie4 = new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://fotografias.lasexta.com/clipping/cmsimages01/2019/05/16/9A071CE0-3244-4BC8-B157-41B7C647FD8D/69.jpg?crop=1:1,smart&width=1200&height=1200&optimize=low&format=webply");
let serie5 = new Serie (5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://pics.filmaffinity.com/sherlock-635342236-large.jpg");
let serie6 = new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://m.media-amazon.com/images/M/MV5BNTQ5NDI0MTQ0MV5BMl5BanBnXkFtZTgwNDEzNTc1NTM@._V1_.jpg");


let arraySeries = [serie1, serie2, serie3, serie4, serie5, serie6];

function tabla(arraySeries)
{
    console.log(`${arraySeries}`);
}
for (const element of arraySeries){
    tabla(element.getName());
}

let cant = 0;
for (let i = 0; i < arraySeries.length; i++) 
{

    
    document.getElementById("nombre"+i.toString()).innerHTML = arraySeries[i].getName();
    document.getElementById("channel"+i.toString()).innerHTML = arraySeries[i].getChannel();
    document.getElementById("seasons"+i.toString()).innerHTML = arraySeries[i].getSeasons();
    const botton = document.querySelector("#nombre"+i.toString());
    botton.addEventListener('click', function(){ applyFilterByName(arraySeries[i].getDescription(), arraySeries[i].getImg(), arraySeries[i].getUrl());});
    cant += arraySeries[i].getSeasons();
    
    
   
} 

cant = cant/arraySeries.length;
console.log(cant);
document.getElementById("cant").innerHTML = "Seasons average: " + cant.toString();


document.getElementById("table").style.border = "thin solid #000000";

function applyFilterByName(description, img, url) { 
    document.getElementById("description").innerHTML = description;
    document.getElementById("img").src = img;
    document.getElementById("url").href = url;
    document.getElementById("url").innerHTML = url;
    event.preventDefault();
  }


exports.series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
];