function right () {
    basic.showString("R")
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    60,
    0
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    60,
    0
    )
    basic.pause(500)
    go()
}
function left () {
    basic.showString("L")
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    60,
    1
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    60,
    1
    )
    basic.pause(500)
    go()
}
function stop () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    0
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    0,
    0
    )
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
    ONOFF = 0
})
input.onButtonPressed(Button.B, function () {
    ONOFF = 0
    stop()
    Check = 0
})
function go () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    60,
    1
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    60,
    0
    )
}
let L = 0
let R = 0
let Ultrasonic = 0
let Check = 0
let ONOFF = 0
pins.servoWritePin(AnalogPin.P0, 90)
ONOFF = 0
Check = 0
basic.forever(function () {
    if (ONOFF == 1 && Check == 0) {
        go()
        Ultrasonic = RoboticsWorkshop.ping(
        DigitalPin.P16,
        DigitalPin.P0,
        PingUnit.Centimeters
        ) * 1.5
        if (Ultrasonic == 2 && Check < 30) {
            stop()
            pins.servoWritePin(AnalogPin.P1, 10)
            basic.pause(700)
            R = RoboticsWorkshop.ping(
            DigitalPin.P16,
            DigitalPin.P0,
            PingUnit.Centimeters
            ) * 1.5
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P1, 170)
            basic.pause(700)
            L = RoboticsWorkshop.ping(
            DigitalPin.P16,
            DigitalPin.P0,
            PingUnit.Centimeters
            ) * 1.5
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P1, 170)
            basic.pause(700)
            Check = 1
            if (L > R && Check == 1) {
                left()
                Check = 0
            } else if (R > L && Check == 1) {
                right()
                Check = 0
            }
        }
    }
})
