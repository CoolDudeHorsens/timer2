let mySprite: Sprite = null
let seconds = 0
let hours = 0
let minutes = 0
forever(function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.sayText("" + convertToText(hours) + ":" + convertToText(minutes) + ":" + convertToText(seconds))
    pause(1000)
    if (seconds < 60) {
        seconds = seconds + 1
    } else {
        seconds = 0
        if (minutes < 60) {
            minutes = minutes + 1
        } else {
            minutes = 0
            hours = hours + 1
            if (hours == 24) {
                hours = 0
            }
        }
    }
})
