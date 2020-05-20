
var p_grid = [1, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9, 0]
var p1_grid = [1, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9, 0]
var p2_grid = [1, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9, 0]

p1_ship = [1, 2]
p2_ship = [8, 9]

p1_strike = [8]

// check if the player, hit or miss other player's ship

function hit_miss(p2_ship, p1_strike) {
    

    for ( var i = 0; i < 1; i++ ) {
    
        for ( var j = 0; j < p2_ship.length; j++ ) {

            if ( p1_strike[i] == p2_ship[j] ) {

                return ["Hit", p1_strike[i]]
                break

            } 
        }

        return ["Miss", p1_strike[i]]
        break

    }

}

// var p1_strike_hit_miss = hit_miss(p2_ship, p1_strike)
// console.log(p1_strike_hit_miss)

var p1_strike_map = new Array(9).fill("-")
var p2_strike_map = new Array(9).fill("-")
// console.log(p1_strike_map)

// reference map for the players, where they hit and where they missed.

function update_players_grid (p_grid, hit_miss_arr) {

    var simp_num_arr = [1,2,3,4,5,6,7,8,9]

    var ind = simp_num_arr.indexOf(hit_miss_arr[1])
    
    if ( hit_miss_arr[0] == "Hit" ) {

        p_grid[ind] = "H"
    
    } else if ( hit_miss_arr[0] == "Miss" ) {

        p_grid[ind] = "M"

    }

    return p_grid


}

// console.log(update_players_grid(p1_strike_map, p1_strike_hit_miss))




p1_ship_one = [3]
p1_ship_two = [5, 6]
p1_ship_three = [5, 6, 7]

// players ship's placement possibility

function check_possible_ship_placements(p_ship_positions, p_grid) {

    var i;

    for ( i = 0; i < p_grid.length; i++ ) {
        
        if ( p_grid[i] == p_ship_positions[0] ) {

            // console.log(i)
            break
        }

    }


    for ( var j = 0; j < p_ship_positions.length; j++ ) {

       if ( p_grid[i] == p_ship_positions[j] ) {

           i++ 

       } else {

           return 0
           break
       }

    }

    return 1


}

// var p1_ship_placement = check_possible_ship_placements(p1_ship_three, p_grid)
// console.log(p1_ship_placement)


// Lets play 

// Step 1 : Choose positions : 

var p1_ship_posit = [2, 3]

if ( ! check_possible_ship_placements(p1_ship_posit, p_grid) ) {
    console.log("Please choose another set")
} else {
    console.log("given set accepted")
}

var p2_ship_posit = [5, 6]

if ( ! check_possible_ship_placements(p2_ship_posit, p_grid) ) {
    console.log("Please choose another set")
} else {
    console.log("given set accepted")
}

// Step 2 : Strike :

var p1_strike = [2]


var p1_strike_hit_miss = hit_miss(p2_ship_posit, p1_strike)

console.log(update_players_grid(p1_strike_map, p1_strike_hit_miss))

var p2_strike = [1]

var p2_strike_hit_miss = hit_miss(p1_ship_posit, p2_strike)

console.log(update_players_grid(p2_strike_map, p2_strike_hit_miss))

var p1_strike = [4]

var p1_strike_hit_miss = hit_miss(p2_ship_posit, p1_strike)

console.log(update_players_grid(p1_strike_map, p1_strike_hit_miss))

var p2_strike = [6]

var p2_strike_hit_miss = hit_miss(p1_ship_posit, p2_strike)

console.log(update_players_grid(p2_strike_map, p2_strike_hit_miss))

// ---------

var p1_strike = [5]


var p1_strike_hit_miss = hit_miss(p2_ship_posit, p1_strike)

console.log(update_players_grid(p1_strike_map, p1_strike_hit_miss))

var p2_strike = [8]

var p2_strike_hit_miss = hit_miss(p1_ship_posit, p2_strike)

console.log(update_players_grid(p2_strike_map, p2_strike_hit_miss))

var p1_strike = [6]

var p1_strike_hit_miss = hit_miss(p2_ship_posit, p1_strike)

console.log(update_players_grid(p1_strike_map, p1_strike_hit_miss))

var p2_strike = [4]

var p2_strike_hit_miss = hit_miss(p1_ship_posit, p2_strike)

console.log(update_players_grid(p2_strike_map, p2_strike_hit_miss))


// summary it should iteratively take inputs, stike postions should be replaced and with "X" and show to users.











function render() {

    var hit = p1_hit_miss["Hit"]
    var miss = p1_hit_miss["miss"]

    var table = document.createElement("table")
    var play_arena = document.getElementById("play_arena")

    play_arena.append(table)


    for ( var i = 1; i <= 10; i++ ) {

        var tr = document.createElement("tr")
        table.appendChild(tr)

        for ( var j = 1; j <= 10; j++ ) {

            var td = document.createElement("td")
            td.setAttribute("id", `${i}` + "," +`${j}` )
            td.addEventListener("click", take_post)

            tr.appendChild(td)

        }

    }

}

// function map_strikes() {

// }


// var p1_strike_map = new Array(9).fill("-")
// var p2_strike_map = new Array(9).fill("-")
// // console.log(p1_strike_map)

// // reference map for the players, where they hit and where they missed.

// function update_players_grid (p_grid, hit_miss_arr) {

//     var simp_num_arr = [1,2,3,4,5,6,7,8,9]

//     var ind = simp_num_arr.indexOf(hit_miss_arr[1])
    
//     if ( hit_miss_arr[0] == "Hit" ) {

//         p_grid[ind] = "H"
    
//     } else if ( hit_miss_arr[0] == "Miss" ) {

//         p_grid[ind] = "M"

//     }

//     return p_grid


// }