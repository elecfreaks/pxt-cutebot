/**
 * Functions to Cutebot by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#0fbc11  icon="\uf207" 
namespace cuteBot {
    let tempHandler: Action
    let irLed = AnalogPin.P16;
    let rec_init = false;
    let arr: number[] = []
    let received = false
    let first = true
    let rec_Type = ""
    let rec_Typevalue = ""
    let messageStr = ""
    let messagevalue = ""
    let recPin = DigitalPin.P16
    let thereIsHandler = false
    const STM8_ADDRESSS = 0x10
    const pwmPeriod = 26;
    pins.analogWritePin(irLed, 0);
    pins.analogSetPeriod(irLed, pwmPeriod);
    arr = [];
    pins.setEvents(recPin, PinEventType.Pulse);
    pins.setPull(recPin, PinPullMode.PullUp);
    pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
    pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
    pins.onPulsed(recPin, PulseValue.Low, function () {
        arr.push(input.runningTimeMicros())
    })
    pins.onPulsed(recPin, PulseValue.High, function () {
        arr.push(input.runningTimeMicros())
    })
    control.onEvent(recPin, DAL.MICROBIT_PIN_EVENT_ON_TOUCH, tempHandler);
    rec_init = true;
	/**
	* Unit of Ultrasound Module
	*/
    export enum SonarUnit{
        //% block="cm"
        Centimeters,
        //% block="inches"
        Inches
    }
	/**
	* Select the motor on the left or right
	*/
    export enum Motors {
        //% blockId="M1" block="M1"
        M1 = 0,
        //% blockId="M2" block="M2"
        M2 = 1
    }
	/**
	* Select the RGBLights on the left or right
	*/
    export enum RGBLights {
        //% blockId="Right_RGB" block="Right_RGB"
        RGB_L = 1,
        //% blockId="Left_RGB" block="Left_RGB"
        RGB_R = 0
    }
	/**
	* Status List of Tracking Modules
	*/
    export enum TrackingState {
        //% block="● ●" enumval=0
        L_R_line,

        //% block="◌ ●" enumval=1
        L_unline_R_line,

        //% block="● ◌" enumval=2
        L_line_R_unline,

        //% block="◌ ◌" enumval=3
        L_R_unline
    }
	/**
	* Button List of Infrared Remote Controller
	* Controller like this https://www.elecfreaks.com/estore/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/i/r/ir7135533.jpg
	*/
    export enum ButtonList {
        //% block="Power" enumval=0
        Button_power,
        //% block="Any" enumval=99
        Button_Any,
        //% block="MENU" enumval=1
        Button_menu,
        //% block="+" enumval=2
        Button_add,
        //% block="▲" enumval=3
        Button_up,
        //% block="return" enumval=4
        Button_return,
        //% block="◄" enumval=5
        Button_left,
        //% block="OK" enumval=6
        Button_OK,
        //% block="►" enumval=7
        Button_right,
        //% block="-" enumval=8
        Button_minus,
        //% block="▼" enumval=9
        Button_down,
        //% block="0" enumval=10
        Button_0,
        //% block="1" enumval=11
        Button_1,
        //% block="2" enumval=12
        Button_2,
        //% block="3" enumval=13
        Button_3,
        //% block="4" enumval=14
        Button_4,
        //% block="5" enumval=15
        Button_5,
        //% block="6" enumval=16
        Button_6,
        //% block="7" enumval=17
        Button_7,
        //% block="8" enumval=18
        Button_8,
        //% block="9" enumval=19
        Button_9
    }
    /**
     * TODO: Set the speed of left and right wheels. 
     * @param lspeed Left wheel speed , eg: 100
     * @param rspeed Right wheel speed, eg: -100
     */
    //% weight=80
    //% blockId=MotorRun block="set left wheel speed %lspeed| right wheel speed %rspeed"
    //% lspeed.min=-100 lspeed.max=100
    //% rspeed.min=-100 rspeed.max=100
    export function motors(lspeed: number = 50, rspeed: number = 50): void {
        let buf = pins.createBuffer(4);
        if (lspeed > 100) {
            lspeed = 100;
        } else if (lspeed < -100) {
            lspeed = -100;
        }
        if (rspeed > 100) {
            rspeed = 100;
        } else if (rspeed < -100) {
            rspeed = -100;
        }
        if (lspeed > 0) {
            buf[0] = 0x01;    //左右轮 0x01左轮  0x02右轮
            buf[1] = 0x02;		//正反转0x02前进  0x01后退
            buf[2] = lspeed;	//速度
            buf[3] = 0;			//补位
            pins.i2cWriteBuffer(STM8_ADDRESSS, buf);  //写入左轮
        }
        else {
            buf[0] = 0x01;
            buf[1] = 0x01;
            buf[2] = lspeed * -1;
            buf[3] = 0;			//补位
            pins.i2cWriteBuffer(STM8_ADDRESSS, buf);  //写入左轮
        }
        if (rspeed > 0) {
            buf[0] = 0x02;
            buf[1] = 0x02;
            buf[2] = rspeed;
            buf[3] = 0;			//补位
            pins.i2cWriteBuffer(STM8_ADDRESSS, buf);  //写入左轮
        }
        else {
            buf[0] = 0x02;
            buf[1] = 0x01;
            buf[2] = rspeed * -1;
            buf[3] = 0;			//补位
            pins.i2cWriteBuffer(STM8_ADDRESSS, buf);  //写入左轮
        }

    }
    /**
    * TODO: full speed move forward,speed is 100.
    */
    //% weight=76
    //% blockId=cutebot_forward block="go straight at full speed"
    export function forward(): void {
        // Add code here
        let buf = pins.createBuffer(4);
        buf[0] = 0x01;
        buf[1] = 0x02;
        buf[2] = 80;
        buf[3] = 0;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);
        buf[0] = 0x02;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);
    }


    /**
    * TODO: full speed move back,speed is -100.
    */
    //% weight=75
    //% blockId=cutebot_back block="reverse at full speed"
    export function back(): void {
        // Add code here
        let buf = pins.createBuffer(4);
        buf[0] = 0x01;
        buf[1] = 0x01;
        buf[2] = 80;
        buf[3] = 0;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);
        buf[0] = 0x02;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);

    }
	/**
    * TODO: full speed turnleft.
    */
    //% weight=70
    //% blockId=cutebot_left block="turn left at full speed"
    export function turnleft(): void {
        // Add code here
        let buf = pins.createBuffer(4);
        buf[0] = 0x02;
        buf[1] = 0x02;
        buf[2] = 80;
        buf[3] = 0;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);
        buf[0] = 0x01;
        buf[2] = 0;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);
    }
	/**
    * TODO: full speed turnright.
    */
    //% weight=65
    //% blockId=cutebot_right block="turn right at full speed"
    export function turnright(): void {
        // Add code here
        let buf = pins.createBuffer(4);
        buf[0] = 0x01;
        buf[1] = 0x02;
        buf[2] = 80;
        buf[3] = 0;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);
        buf[0] = 0x02;
        buf[2] = 0;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);
    }

	/**
	* Select a lamp and set the RGB color. 
	* @param R R color value of RGB color, eg: 0
	* @param G G color value of RGB color, eg: 128
	* @param B B color value of RGB color, eg: 255
	*/
    //% weight=60
    //% inlineInputMode=inline
    //% blockId=RGB block="LED %light R:%r G:%g B:%b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    export function rgblight(light: RGBLights, r: number, g: number, b: number): void {
        let buf = pins.createBuffer(4);
        if (light == 0) {
            buf[0] = 0x04;
        }
        if (light == 1) {
            buf[0] = 0x08;
        }
        buf[1] = r;
        buf[2] = g;
        buf[3] = b;
        pins.i2cWriteBuffer(STM8_ADDRESSS, buf);
    }
    /**
	* Judging the Current Status of Tracking Module. 
	* @param state Four states of tracking module, eg: L_R_line
    */
    //% weight=10
    //% blockId=ringbitcar_tracking block="tracking state is %state"
    export function tracking(state: TrackingState): boolean {
        let left_tracking = pins.digitalReadPin(DigitalPin.P13);
        let right_tracking = pins.digitalReadPin(DigitalPin.P14);
        if (left_tracking == 0 && right_tracking == 0 && state == 0) {
            return true;
        }
        else if (left_tracking == 1 && right_tracking == 0 && state == 1) {
            return true;
        }
        else if (left_tracking == 0 && right_tracking == 1 && state == 2) {
            return true;
        }
        else if (left_tracking == 1 && right_tracking == 1 && state == 3) {
            return true;
        }
        else {
            return false;
        }
    }
	/**
	* Cars can extend the ultrasonic function to prevent collisions and other functions.. 
	* @param Sonarunit two states of ultrasonic module, eg: Centimeters
    */
    //% blockId=ultrasonic block="HC-SR04 Sonar unit %unit"
    export function ultrasonic(unit: SonarUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(DigitalPin.P8, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P8, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P8, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P8, 0);

        // read pulse
        const d = pins.pulseIn(DigitalPin.P12, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case SonarUnit.Centimeters:
                return Math.idiv(d, 58);
            case SonarUnit.Inches:
                return Math.idiv(d, 148);
            default:
                return d;
        }
    }

    function resetReceiver() {
        arr = []
        received = false
    }

    control.inBackground(function () {
        basic.forever(function () {
            if ((!received) && (rec_init)) {
                if (arr.length > 20) {
                    if ((input.runningTimeMicros() - arr[arr.length - 1]) > 120000) {
                        if (first) {
                            resetReceiver()
                            first = false
                        }
                        else {
                            received = true
                            decodeIR();
                        }
                    }
                }
            }
        })
    })

    function decodeIR() {
        let addr = 0
        let command = 0
        messageStr = ""
        rec_Type = ""
        for (let i = 0; i <= arr.length - 1 - 1; i++) {
            arr[i] = arr[i + 1] - arr[i]
        }
        if (((arr[0] + arr[1]) > 13000) && ((arr[0] + arr[1]) < 14000)) {
            rec_Type = "NEC"
            arr.removeAt(1)
            arr.removeAt(0)
            addr = pulseToDigit(0, 15, 1600)
            command = pulseToDigit(16, 31, 1600)
            messageStr = convertNumToHexStr(addr, 4) + convertNumToHexStr(command, 4)
            arr = [];
            if (thereIsHandler) {
                tempHandler();
            }
        }
        else if (((arr[0] + arr[1]) > 2600) && ((arr[0] + arr[1]) < 3200)) {
            rec_Type = "SONY"
            arr.removeAt(1)
            arr.removeAt(0)
            command = pulseToDigit(0, 11, 1300)
            messageStr = convertNumToHexStr(command, 3)
            arr = [];
            if (thereIsHandler) {
                tempHandler();
            }
        }
        resetReceiver();
    }

    function pulseToDigit(beginBit: number, endBit: number, duration: number): number {
        let myNum = 0
        for (let i = beginBit; i <= endBit; i++) {
            myNum <<= 1
            if ((arr[i * 2] + arr[i * 2 + 1]) < duration) {
                myNum += 0
            }
            else {
                myNum += 1
            }
        }
        return myNum
    }

    function convertNumToHexStr(myNum: number, digits: number): string {
        let tempDiv = 0
        let tempMod = 0
        let myStr = ""
        tempDiv = myNum
        while (tempDiv > 0) {
            tempMod = tempDiv % 16
            if (tempMod > 9) {
                myStr = String.fromCharCode(tempMod - 10 + 97) + myStr
            }
            else {
                myStr = tempMod + myStr
            }
            tempDiv = Math.idiv(tempDiv, 16)
        }
        while (myStr.length != digits) {
            myStr = "0" + myStr
        }
        return myStr
    }

    /**
     * Do something when a receive IR
     */
    //% blockId=onReceivedIR block="on IR message received" blockInlineInputs=true
    //% advanced=true
    export function onReceivedIR(handler: Action): void {
        tempHandler = handler
        thereIsHandler = true
    }

    /**
     * return the encoding type of the received IR
     */
    //% blockId=getRecType block="the received IR encoding type"
    //% advanced=true
    export function irRecType(): string {
        rec_Typevalue = rec_Type
        rec_Type = ""
        return rec_Typevalue
    }

    /**
     * return the message of the received IR
     */
    //% blockId=getMessage block="the received IR message"
    //% advanced=true
    export function irMessage(): string {
        messagevalue = messageStr
        messageStr = ""
        return messagevalue
    }

    /**
     * Determine which button of infrared remote control is pressed. 
     * @param buttonlist Remote Control Button List, eg: 100
     */
    //% blockId=control_key block="IR button:%LYbutton pressed"
    //% LYbutton.fieldEditor="gridpicker"
    //% LYbutton.fieldOptions.columns=3
    //% advanced=true
    //% weight=99
    export function controlbutton(LYbutton: ButtonList): boolean {
        messagevalue = messageStr
        messageStr = ""
        if (messagevalue == "00fd00ff" && LYbutton == 0) {
            return true;
        } else if (messagevalue == "00fd40bf" && LYbutton == 1) {
            return true;
        } else if (messagevalue == "00fd20df" && LYbutton == 2) {
            return true;
        } else if (messagevalue == "00fda05f" && LYbutton == 3) {
            return true;
        } else if (messagevalue == "00fd609f" && LYbutton == 4) {
            return true;
        } else if (messagevalue == "00fd10ef" && LYbutton == 5) {
            return true;
        } else if (messagevalue == "00fd906f" && LYbutton == 6) {
            return true;
        } else if (messagevalue == "00fd50af" && LYbutton == 7) {
            return true;
        } else if (messagevalue == "00fd30cf" && LYbutton == 8) {
            return true;
        } else if (messagevalue == "00fdb04f" && LYbutton == 9) {
            return true;
        } else if (messagevalue == "00fd708f" && LYbutton == 10) {
            return true;
        } else if (messagevalue == "00fd08f7" && LYbutton == 11) {
            return true;
        } else if (messagevalue == "00fd8877" && LYbutton == 12) {
            return true;
        } else if (messagevalue == "00fd48b7" && LYbutton == 13) {
            return true;
        } else if (messagevalue == "00fd28d7" && LYbutton == 14) {
            return true;
        } else if (messagevalue == "00fda857" && LYbutton == 15) {
            return true;
        } else if (messagevalue == "00fd6897" && LYbutton == 16) {
            return true;
        } else if (messagevalue == "00fd18e7" && LYbutton == 17) {
            return true;
        } else if (messagevalue == "00fd9867" && LYbutton == 18) {
            return true;
        } else if (messagevalue == "00fd58a7" && LYbutton == 19) {
            return true;
        } else if (LYbutton == 99) {
            if (messagevalue != "") {
                return true;
                messagevalue = ""
            } else {
                return false;
                messagevalue = ""
            }
        } else {
            return false;
        }
    }
}
