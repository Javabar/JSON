const yargs = require("yargs");

const {addFilm, listFilms} = require("./utils")

const app = (yargsObj) => {
    if (yargsObj.add) {
        addFilm({title: yargsObj.title, actor: yargsObj.actor});
    } else if (yargsObj.list) {
        listFilms();
    } else {
        console.log("Incorrect command")
    }
    }

app(yargs.argv);

