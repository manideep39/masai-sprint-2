


var p1_ship = []
var p2_ship = []
var p1_hit_miss = {"Hit":[], "Miss": []}
var p2_hit_miss = {"Hit":[], "Miss": []}



window.addEventListener("load", function() {


    var play_btn = document.querySelector("h1")
    console.log(play_btn)

    play_btn.addEventListener("click", select_player)


})


function select_player() {

    var player_one_btn = document.createElement("h6")
    var player_two_btn = document.createElement("h6")
    var player_btn_cont = document.createElement("div")
    var play_arena = document.getElementById("play_arena")

    player_one_btn.textContent = "PLAYER 1"

    player_two_btn.textContent = "PLAYER 2"

    player_one_btn.style.backgroundColor = "red"
    player_two_btn.style.backgroundColor = "blue"

    play_arena.append(player_btn_cont)
    player_btn_cont.append(player_one_btn, player_two_btn)

    player_one_btn.addEventListener("click", player_one)
    player_two_btn.addEventListener("click", player_two)

    var play_btn = document.querySelector("h1")

    play_btn.removeEventListener("click", select_player)

}




function show_grid(take_post, hit_miss){

    // console.log(arr)


    var table = document.createElement("table")
    var play_arena = document.getElementById("play_arena")

    play_arena.append(table)


    for ( var i = 1; i <= 5; i++ ) {

        var tr = document.createElement("tr")
        table.appendChild(tr)

        for ( var j = 1; j <= 5; j++ ) {

            var td = document.createElement("td")
            td.setAttribute("id", `${i}` + "," +`${j}` )


            td.addEventListener("click", take_post)

            tr.appendChild(td)

        }

    }

    if ( hit_miss ) {
        var hit = hit_miss["Hit"]
        var miss = hit_miss["Miss"]

        if ( hit ) {
            for ( var i = 0; i < hit.length; i++ ) {
            document.getElementById(hit[i]).textContent = "H"
            }
        }


        if ( miss ) {
            for ( var i = 0; i < miss.length; i++ ) {
            document.getElementById(miss[i]).textContent = "M"
            }
        }
    }

}

function player_two() {

    var player_btn_cont = document.getElementById("play_arena").children[0]
    player_btn_cont.remove()

    var h2 = document.createElement("h4")
    h2.textContent = "PLAYER 2 : PLACE YOUR SHIPS"

    var play_arena = document.getElementById("play_arena")

    play_arena.append(h2)

    show_grid(take_p2_ship_post)

}

function player_one() {

    var player_btn_cont = document.getElementById("play_arena").children[0]
    player_btn_cont.remove()

    var h2 = document.createElement("h4")
    h2.textContent = "PLAYER 1 : PLACE YOUR SHIPS"

    var play_arena = document.getElementById("play_arena")

    play_arena.append(h2)

    show_grid(take_p1_ship_post)


}





function take_p1_ship_post() {

    if ( p1_ship.length < 3 ) {

        p1_ship.push(event.target.id)

    }  else {

        for ( var i = 0; i < 2; i++ ) {
            var h4_table = document.getElementById("play_arena").children[0]
            h4_table.remove()
        }


        console.log("return")
        return select_player()

    }

}


function take_p2_ship_post() {

    if ( p2_ship.length < 3 ) {


        p2_ship.push(event.target.id)

    } else {

        for ( var i = 0; i < 2; i++ ) {
            var h4_table = document.getElementById("play_arena").children[0]
            h4_table.remove()
        }


        console.log("return")
        return start_fight()
    }

}


function start_fight() {

    var start_fight = document.createElement("h6")

    // var fight_cont = document.createElement("div")

    var play_arena = document.getElementById("play_arena")

    start_fight.textContent = "FIGHT"

    start_fight.style.backgroundColor = "green"

    // play_arena.append(player_btn_cont)
    play_arena.append(start_fight)

    start_fight.addEventListener("click", player_one_fire)


}







function player_one_fire() {

    for ( var i = 0; i < 2; i++ ) {

        if ( document.getElementById("play_arena").children[0] ) {

            document.getElementById("play_arena").children[0].remove()

        }
    }


    var h3 = document.createElement("h3")
    h3.textContent = "PLAYER 1 : FIRE "

    var play_arena = document.getElementById("play_arena")

    play_arena.append(h3)

    show_grid(check_p1_hit_miss, p1_hit_miss)


}

function player_two_fire() {

    for ( var i = 0; i < 2; i++ ) {
        document.getElementById("play_arena").children[0].remove()
    }


    var h3 = document.createElement("h3")

    h3.textContent = "PLAYER 2 : FIRE"

    var play_arena = document.getElementById("play_arena")

    play_arena.append(h3)

    show_grid(check_p2_hit_miss, p2_hit_miss)


}

function display_winner(arr, player_num) {

    
    var h2 = document.createElement("h2")

    for ( var i = 0; i < document.body.children.length; i++ ) {
        document.body.children[0].remove()
    }

    h2.textContent =  `PLAYER ${player_num} WON THE BATTLE`
    h2.setAttribute("id", "dis_win")

    document.body.append(h2)
    

}


function check_p1_hit_miss() {

    // console.log(event.target)


    if ( p2_ship.includes( event.target.id ) ) {

        event.target.textContent = "H"

        p1_hit_miss["Hit"].push(event.target.id)

        if ( p1_hit_miss["Hit"].length == 3 ) {

            return display_winner(p1_hit_miss, 1)

        }

        return player_two_fire()


    } else {

        event.target.textContent = "M"

        p1_hit_miss["Miss"].push(event.target.id);

        return player_two_fire()
    }




}

function check_p2_hit_miss() {

    // console.log(event.target)




    if ( p1_ship.includes( event.target.id ) ) {

        event.target.textContent = "H"

        p2_hit_miss["Hit"].push(event.target.id)

        if ( p2_hit_miss["Hit"].length == 3 ) {

            return display_winner(p2_hit_miss, 2)

        }

        return player_one_fire()


    } else {

        event.target.textContent = "M"

        p2_hit_miss["Miss"].push(event.target.id)

        return player_one_fire()
    }

    // p1_hit_miss["Hit"]


}





