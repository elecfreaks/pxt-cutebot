/**
 * Functions to Cutebot by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#0fbc11  icon="\uf207" 
namespace cuteBot {
    const STM8_ADDRESSS = 0x10
    let tempHandler: Action;
    const pwmPeriod = 26;
    let rec_init = false;
    let arr: number[] = []
    let received = false
    let first = true
    let rec_Type = ""
    let messageStr = ""
    let recPin = DigitalPin.P8
    let thereIsHandler = false
    arr = []
	/**
	* Unit of Ultrasound Module
	*/
    export enum SonarUnit {
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

        pins.setPull(DigitalPin.P13, PinPullMode.PullUp)


        pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
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
    export function setREC_pin(myPin: DigitalPin) {
        recPin = myPin;
        pins.setEvents(recPin, PinEventType.Pulse)
        pins.setPull(recPin, PinPullMode.PullUp)
        pins.onPulsed(recPin, PulseValue.Low, function () {
            arr.push(input.runningTimeMicros())
        })
        pins.onPulsed(recPin, PulseValue.High, function () {
            arr.push(input.runningTimeMicros())
        })
        control.onEvent(recPin, DAL.MICROBIT_PIN_EVENT_ON_TOUCH, tempHandler);
        rec_init = true;
    }
    //------------------receiver-------------

    function resetReceiver() {
        arr = []
        received = false
    }

    control.inBackground(function () {
        setREC_pin(DigitalPin.P16)
        basic.forever(function () {
            if ((!received) && (rec_init)) {
                if (arr.length > 20) {
                    if ((input.runningTimeMicros() - arr[arr.length - 1]) > 120000) {
                        if (first) {
                            resetReceiver()
                            first = false
                        } else {
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
        } else if (((arr[0] + arr[1]) > 2600) && ((arr[0] + arr[1]) < 3200)) {
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
            } else {
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
            } else {
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
    //% weight=70 blockGap=10
    //% advanced=true
    export function onReceivedIR(handler: Action): void {
        tempHandler = handler
        thereIsHandler = true
    }

    /**
     * return the encoding type of the received IR 
     */
    //% blockId=getRecType block="the received IR encoding type"
    //% weight=60 blockGap=10
    //% advanced=true
    export function getRecType(): string {
        return rec_Type
    }

    /**
     * return the message of the received IR 
     */
    //% blockId=getMessage block="the received IR message"
    //% weight=60 blockGap=10
    //% advanced=true
    export function getMessage(): string {
        return messageStr
    }
}
