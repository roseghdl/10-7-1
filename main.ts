let 가변저항 = 0
basic.forever(function () {
    basic.showNumber(가변저항)
})
basic.forever(function () {
    가변저항 = pins.analogReadPin(AnalogPin.P0)
    if (가변저항 < 400) {
        pins.analogWritePin(AnalogPin.P8, 가변저항)
    } else if (가변저항 >= 400 && 가변저항 < 800) {
        pins.analogWritePin(AnalogPin.P8, 가변저항)
    } else {
        pins.analogWritePin(AnalogPin.P8, 가변저항)
    }
})
