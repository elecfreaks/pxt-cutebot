
basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
basic.forever(function () {
    cuteBot.motors(30, 90)
    basic.pause(1500)
    cuteBot.motors(90, 30)
    basic.pause(1500)
})
