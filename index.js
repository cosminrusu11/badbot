const Discord = require('discord.js');
const bot = new Discord.Client();
const responseObject = {
    "Ola": "ola amigos invatatus spaniolos estus bun capsunari prosti",
    "Di ci": "Di ci pula mia vorbesti ca o moldovianca di aia proasta",
    "Bine": "Bine sa taci si sa imi sugi pula ua",
    "MOR": "DA UA SI EU MOR WOOOO CE FUNNY DA IN PULA MEA FITILU ALA SA IMI DAU FOC",
    "ua": "Ua sa ii zici lu mata",
    "MA PIS PE MINE": "DA STIU CA A FACUT MAMA UN BAIAT SPLENDID DE FRUMOS",
    "pup":"PUPAMIAI COAELE HAHAHA",
    "Bn":"BN SA II ZICI LU MA_TA",
    "sawcon": "SAWK ON DEEZ NUTS GOT'EM",
    "ba nu": "ba da",
    "ba da": "ba nu ",
    "lol": "hahaha",
    "ce":"ce e vitamina si se suge la fel ca pula mea trage slitul ala odata",
    "=]]": "ce cu rasu asta we tio spart taica-tu fatau cand a vazut ce prost esti",
    "xd": "xd sa ii zici lu mata",
    "/report": "taci ca iti dau ban",
    "mor": "da si eu vreau",
    "help": "da ua fix tu ai nevoie, eu sunt hostat pe un calculator plin de hentai",
    "esti prost": "taci rapandulo",
    "/banc": "viata ta",
    "/gras": "esti",
    "uratule": "tu esti",
    "tu": "nu tu ",
    "yasuo": "viata mea <3",
    "gay": "/isgay",
    "roast": "nu e nevoie la cat de prajit esti",
    "ce faci": "laba laba laba laba",
    "raul": "se uita la gayporn lasa-l in pace",
    "/cur": "()()",
    "/tate": "(o)(o)",
    "taci": "tu sa taci handicapatule",
    "/smashorpass": "pass nu vezi cat de urata esti ",
    "coaie": "n-ai",
    "retardat": "esti",
    "/gayporn": "hai we mai inteleg si eu un cur o tata, we da nici pule porn ",
    "/dicksize": "cosmin are 20 si restul 8, muie ",
    "OwO": "ai de pula me cat de distrus esti bai anime handicapat",
    "anime": "altu care vrea sa futa personaje din desene mai usor ua ce dracu",
    "hentai": "ce fatishuri aveti in plm, chiar asa ati ajuns",
    "bdsm": "cand iti da taicatu o curea peste spate ti se scoala ciudatule",
    "ahri": "fetisuri ciudate cu cozi wtf",
    "/cosmin": "cel mai smecher baiat ever ",
    "adv": "adevarat sa moara familia mea de nu ",
    "adevarat": "adevarat sa moara familia mea de nu ",
    "da": "nu",
    "soon":"adica niciodata vrea sa zica",
    "plang":"da si eu",
    "wow":"wow ce prost sunt ",
    "nu":"da",
    "no":"yes",
    "yes":"no",
    "yae":"nae",
    "nae":"yae",
    "smash":"distrugi oglinzi asta distrgugi la ce fatau ai",
    "pass":"na ua ce sa faci nu toti au evoluat din maimute",
    "@noodle bot":"dute ua asta se cheama buget bot ca altceva nu e ",
    "hai sa jucam ceva":"joaca-te cu pula, a stai, nu ai",
    "ce faceti":"facem orgie pe ma-ta asta facem",
    "/markov":"care mai scrie markov imi datoreaza o muie",
    "/iarna":"afara ninge ca-n povesti muie steaua bucuresti forza dinamo ",
    "so me":"da so ma-ta la fel",
    "omg":"nu mai esti in 2013 coaie ce cacat",
    "brb":"da fix pula mai vine asta, exact cum vin tatii negri inapoi la copii lor",
    "sugi pula":"ca ma-ta we ",
    "distrus":"ca pizda ma-tii dupa ce am fututo"
  };
var M = ['ariana grande','imagine dragons','k.d.a','kda','blackpink','clc','kpop','k-pop','ari sweetener','5gang']; 
var G = ['Raul','Serban','Padu','Paduret','your mum'];
bot.on('message', function(message){
    var mesaj = message.content;
    var sender = message.author;
    var k;
    if(responseObject[message.content]&&!sender.bot) {
      message.channel.send(responseObject[message.content]);
    }
    var x=0;
    if (x=0)
    {
        message.react("ðŸ‡¬")
        message.react("ðŸ‡¦")
        message.react("ðŸ‡¾")
        x=1;

    };
    if (message.content.includes('/isgay')&&!sender.bot)
        {
        var i;
        var gasit=false;
        for(i=0;i<=G.length-1;i++)
            {
                if(message.content.includes(G[i]))
                    {
                    message.channel.send('yes '+G[i]+' is gay ');
                    gasit=true;
                    }
            }
        if(gasit==false)  message.channel.send('no');
        }
    if(message.content.includes('/play')||message.content.includes('!!!play')&&!sender.bot)
    {
        var j;
        for(j=0;j<=M.length-1;j++)
            {
            if(message.content.toLowerCase().includes(M[j]))
            {
            message.channel.send('Distrusule, ce cacat asculti');
            }
        }
        if(message.content.toLowerCase().includes("manele"))
        {
            message.channel.send('eeeeeeeeee asa mai merge bo$$')
        }
    }
    if(message.content.toLowerCase()=='/daddy')
    message.channel.send('https://img.jupanu.ro/2016/10/sorin-golda.jpg');
    if(message.content.toLocaleLowerCase().includes('ma-ta')&&!sender.bot)
    message.channel.send('Mamica ta');
    if(message.content.toLocaleLowerCase().includes('mata')&&!sender.bot)
    message.channel.send('Mamica ta');
    if(message.content.toLowerCase().includes('pe cine')&&!sender.bot)
    message.channel.send('pe ma-ta');
    if(message.content.toLowerCase().includes('@everyone')&&!sender.bot)
    message.channel.send('sa iti fut familia ca dadeam laba');
});
