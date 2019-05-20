basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
qutebot.forward()
qutebot.RGBRun(qutebot.aRGB.RGB_L, 255, 0, 0)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
qutebot.back()
qutebot.RGBRun(qutebot.aRGB.RGB_R, 0, 255, 0)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
qutebot.turnleft()
qutebot.RGBRun(qutebot.aRGB.RGB_L, 0, 0, 255)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
qutebot.turnright()
qutebot.RGBRun(qutebot.aRGB.RGB_R, 255, 255, 255)
basic.pause(1000)
basic.forever(function () {
    if (qutebot.tracking(qutebot.TrackingStateType.Tracking_State_0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
    } else if (qutebot.tracking(qutebot.TrackingStateType.Tracking_State_1)) {
        basic.showLeds(`
            . . . . .
            # # # . .
            # . # . #
            # # # . .
            . . . . .
            `)
    } else if (qutebot.tracking(qutebot.TrackingStateType.Tracking_State_2)) {
        basic.showLeds(`
            . . . . .
            . . # # #
            # . # . #
            . . # # #
            . . . . .
            `)
    } else if (qutebot.tracking(qutebot.TrackingStateType.Tracking_State_3)) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # . # . #
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    serial.writeNumber(qutebot.ping(PingUnit.Centimeters))
})
