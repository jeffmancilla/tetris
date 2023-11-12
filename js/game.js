import { grid } from "./grid.js";

let game 
let next
let score


export const init = (level=1, field=grid.build(),) => {
    return {
        level,
        field,
        gameId: 0,

    }
}

game = init()
console.log(game)
// <3
// ohh. commonjs stuff?
// do i need to add stuff if i wanna use EJS? rip. is using CJS still legit? i learned EJS export/import so my mind kinda defaults to it. i'm just learning that  


// idk why it cares. why are you using nodemon? just to 