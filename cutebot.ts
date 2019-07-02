/**
 * Functions to Cutebot by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#0fbc11  icon="\uf207" 
namespace cuteBot {
    const STM8_ADDRESSS = 0x10
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
}
