let strip: neopixel.Strip = null
basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    cuteBot.motors(30, 90)
    basic.pause(1500)
    cuteBot.motors(90, 30)
    basic.pause(1500)
})
basic.forever(function () {
    strip.rotate(1)
    basic.pause(100)
    strip.show()
})