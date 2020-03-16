// total=60865 new=94.77% cached=0.00% other=5.23%
(function (ectx) {
'use strict';
const runtime = ectx.runtime;
const oops = ectx.oops;
const doNothing = ectx.doNothing;
const pxsim = ectx.pxsim;
const globals = ectx.globals;
const maybeYield = ectx.maybeYield;
const setupDebugger = ectx.setupDebugger;
const isBreakFrame = ectx.isBreakFrame;
const breakpoint = ectx.breakpoint;
const trace = ectx.trace;
const checkStack = ectx.checkStack;
const leave = ectx.leave;
const checkResumeConsumed = ectx.checkResumeConsumed;
const setupResume = ectx.setupResume;
const setupLambda = ectx.setupLambda;
const checkSubtype = ectx.checkSubtype;
const failedCast = ectx.failedCast;
const buildResume = ectx.buildResume;
const mkVTable = ectx.mkVTable;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
pxsim.setTitle("Cutebot");
pxsim.setConfigData({}, {});
pxtrt.mapKeyNames = [
 "",
 "_length",
 "_matrixWidth",
 "_mode",
 "brightness",
 "buf",
 "pin",
 "rotate",
 "setBrightness",
 "setBufferRGB",
 "setPin",
 "setPixelColor",
 "setPixelRGB",
 "show",
 "showRainbow",
 "start"
];
__this.setupPerfCounters([]);
const pxsim_Array__getAt = pxsim.Array_.getAt;
const pxsim_Array__length = pxsim.Array_.length;
const pxsim_Array__mk = pxsim.Array_.mk;
const pxsim_Array__push = pxsim.Array_.push;
const pxsim_Boolean__bang = pxsim.Boolean_.bang;
const pxsim_String__concat = pxsim.String_.concat;
const pxsim_String__stringConv = pxsim.String_.stringConv;
const pxsim_numops_toBool = pxsim.numops.toBool;
const pxsim_numops_toBoolDecr = pxsim.numops.toBoolDecr;
const pxsim_pxtcore_mkAction = pxsim.pxtcore.mkAction;
const pxsim_pxtcore_mkClassInstance = pxsim.pxtcore.mkClassInstance;
const pxsim_pxtrt_ldlocRef = pxsim.pxtrt.ldlocRef;
const pxsim_pxtrt_mapGetByString = pxsim.pxtrt.mapGetByString;
const pxsim_pxtrt_stclo = pxsim.pxtrt.stclo;
const pxsim_pxtrt_stlocRef = pxsim.pxtrt.stlocRef;
const pxsim_Boolean_ = pxsim.Boolean_;
const pxsim_pxtcore = pxsim.pxtcore;
const pxsim_String_ = pxsim.String_;
const pxsim_ImageMethods = pxsim.ImageMethods;
const pxsim_Array_ = pxsim.Array_;
const pxsim_pxtrt = pxsim.pxtrt;
const pxsim_numops = pxsim.numops;


function _main___P1(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    globals.zeroFx8___377 = (0);
    r0 = (0.5 * 256);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 | 0);
    globals.oneHalfFx8___378 = (r0);
    globals.oneFx8___380 = (1);
    globals.twoFx8___381 = (2);
    globals.strip___451 = (null);
    setupResume(s, 1);
    pxsim.basic.showLeds(new pxsim.Image(5, [0,0,0,255,0,255,0,255,0,255,255,0,255,0,255,255,0,255,0,255,0,255,0,0,0,0]), 400);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    s.tmp_0 = neopixel_create__P423_mk(s);
    s.tmp_0.arg0 = 22;
    s.tmp_0.arg1 = 24;
    s.tmp_0.arg2 = 0;
    s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    globals.strip___451 = (r0);
    s.tmp_0 = neopixel_Strip_showRainbow__P402_mk(s);
    s.tmp_0.arg0 = globals.strip___451;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = 360;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = basic_showIcon__P221_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = 600;
    s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = pxsim.basic.forever(inline__P468);
    r0 = pxsim.basic.forever(inline__P477);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"tests.ts","functionName":"<main>","argumentNames":[]}
_main___P1.continuations = [ 1 ]

function _main___P1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P1, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P468(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = cuteBot_motors__P433_mk(s);
    s.tmp_0.arg0 = 30;
    s.tmp_0.arg1 = 90;
    s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    setupResume(s, 2);
    pxsim.basic.pause(1500);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    s.tmp_0 = cuteBot_motors__P433_mk(s);
    s.tmp_0.arg0 = 90;
    s.tmp_0.arg1 = 30;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    setupResume(s, 4);
    pxsim.basic.pause(1500);
    checkResumeConsumed();
    return;
  case 4:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P468.info = {"start":272,"length":118,"line":11,"column":14,"endLine":16,"endColumn":1,"fileName":"tests.ts","functionName":"inline","argumentNames":[]}

function inline__P468_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P468, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P477(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = neopixel_Strip_rotate__P415_mk(s);
    s.tmp_0.arg0 = globals.strip___451;
    s.tmp_0.arg1 = 1;
    s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    setupResume(s, 2);
    pxsim.basic.pause(100);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    s.tmp_0 = neopixel_Strip_show__P408_mk(s);
    s.tmp_0.arg0 = globals.strip___451;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P477.info = {"start":407,"length":77,"line":17,"column":14,"endLine":21,"endColumn":1,"fileName":"tests.ts","functionName":"inline","argumentNames":[]}

function inline__P477_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P477, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function neopixel_Strip_show__P408(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C400_VT)) failedCast(r0);
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = s.arg0.fields["pin"];
    s.tmp_1 = r0;
    r0 = pxsim.sendBufferAsm(s.tmp_0, s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_show__P408.info = {"start":8497,"length":70,"line":240,"column":8,"endLine":242,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"show","argumentNames":["this"]}

function neopixel_Strip_show__P408_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_show__P408, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function neopixel_Strip_rotate__P415(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.stride___497 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C400_VT)) failedCast(r0);
    r0 = (s.arg1 >> 0);
    s.arg1 = (r0);
    r0 = s.arg0.fields["_mode"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = 4;
    { step = 2; continue; }
  case 1:
    r0 = 3;
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    s.stride___497 = (s.tmp_2);
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = (0 - s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 * s.stride___497);
    s.tmp_1 = r0;
    r0 = s.arg0.fields["start"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 * s.stride___497);
    s.tmp_3 = r0;
    r0 = s.arg0.fields["_length"];
    s.tmp_6 = r0;
    r0 = (s.tmp_6 * s.stride___497);
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.rotate(s.tmp_0, s.tmp_1, s.tmp_3, s.tmp_5);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_rotate__P415.info = {"start":12820,"length":237,"line":348,"column":8,"endLine":352,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"rotate","argumentNames":["this","offset"]}

function neopixel_Strip_rotate__P415_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_rotate__P415, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  stride___497: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function cuteBot_motors__P433(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___520 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pins.createBuffer(4);
    s.buf___520 = (r0);
    r0 = (s.arg0 > 100);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg0 = (100);
    { step = 4; continue; }
  case 1:
    r0 = (s.arg0 < -100);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.arg0 = (-100);
  case 2:
  case 3:
  case 4:
    r0 = (s.arg1 > 100);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.arg1 = (100);
    { step = 8; continue; }
  case 5:
    r0 = (s.arg1 < -100);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.arg1 = (-100);
  case 6:
  case 7:
  case 8:
    r0 = (s.arg0 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 0, 1);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 1, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 2, s.arg0);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___520, 0);
    { step = 10; continue; }
  case 9:
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 0, 1);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 1, 1);
    s.tmp_0 = r0 = s.buf___520;
    r0 = (s.arg0 * -1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___520, 0);
  case 10:
    r0 = (s.arg1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 0, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 1, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 2, s.arg1);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___520, 0);
    { step = 12; continue; }
  case 11:
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 0, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 1, 1);
    s.tmp_0 = r0 = s.buf___520;
    r0 = (s.arg1 * -1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.buf___520, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___520, 0);
  case 12:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
cuteBot_motors__P433.info = {"start":2402,"length":1296,"line":97,"column":4,"endLine":138,"endColumn":5,"fileName":"cutebot.ts","functionName":"motors","argumentNames":["lspeed","rspeed"]}

function cuteBot_motors__P433_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: cuteBot_motors__P433, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___520: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function basic_showIcon__P221(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.res___597 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = images_iconImage__P224_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.res___597 = (r0);
    setupResume(s, 2);
    pxsim_ImageMethods.showImage(s.res___597, 0, s.arg1);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
basic_showIcon__P221.info = {"start":4957,"length":141,"line":185,"column":4,"endLine":188,"endColumn":5,"fileName":"pxt_modules/core/icons.ts","functionName":"showIcon","argumentNames":["icon","interval"]}

function basic_showIcon__P221_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: basic_showIcon__P221, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  res___597: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function images_iconImage__P224(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(0, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(32, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq(33, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq(34, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = pxsim_pxtcore.switch_eq(35, s.tmp_0);
    if (r0) { step = 17; continue; }
    r0 = pxsim_pxtcore.switch_eq(36, s.tmp_0);
    if (r0) { step = 18; continue; }
    r0 = pxsim_pxtcore.switch_eq(37, s.tmp_0);
    if (r0) { step = 19; continue; }
    r0 = pxsim_pxtcore.switch_eq(38, s.tmp_0);
    if (r0) { step = 20; continue; }
    r0 = pxsim_pxtcore.switch_eq(39, s.tmp_0);
    if (r0) { step = 21; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 22; continue; }
    r0 = pxsim_pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 23; continue; }
    r0 = pxsim_pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 24; continue; }
    r0 = pxsim_pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 25; continue; }
    r0 = pxsim_pxtcore.switch_eq(17, s.tmp_0);
    if (r0) { step = 26; continue; }
    r0 = pxsim_pxtcore.switch_eq(18, s.tmp_0);
    if (r0) { step = 27; continue; }
    r0 = pxsim_pxtcore.switch_eq(19, s.tmp_0);
    if (r0) { step = 28; continue; }
    r0 = pxsim_pxtcore.switch_eq(20, s.tmp_0);
    if (r0) { step = 29; continue; }
    r0 = pxsim_pxtcore.switch_eq(21, s.tmp_0);
    if (r0) { step = 30; continue; }
    r0 = pxsim_pxtcore.switch_eq(22, s.tmp_0);
    if (r0) { step = 31; continue; }
    r0 = pxsim_pxtcore.switch_eq(23, s.tmp_0);
    if (r0) { step = 32; continue; }
    r0 = pxsim_pxtcore.switch_eq(24, s.tmp_0);
    if (r0) { step = 33; continue; }
    r0 = pxsim_pxtcore.switch_eq(25, s.tmp_0);
    if (r0) { step = 34; continue; }
    r0 = pxsim_pxtcore.switch_eq(26, s.tmp_0);
    if (r0) { step = 35; continue; }
    r0 = pxsim_pxtcore.switch_eq(27, s.tmp_0);
    if (r0) { step = 36; continue; }
    r0 = pxsim_pxtcore.switch_eq(28, s.tmp_0);
    if (r0) { step = 37; continue; }
    r0 = pxsim_pxtcore.switch_eq(29, s.tmp_0);
    if (r0) { step = 38; continue; }
    r0 = pxsim_pxtcore.switch_eq(30, s.tmp_0);
    if (r0) { step = 39; continue; }
    r0 = pxsim_pxtcore.switch_eq(31, s.tmp_0);
    if (r0) { step = 40; continue; }
    r0 = s.tmp_0;
    { step = 41; continue; }
  case 1:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,255,255,255,255,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 2:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,255,255,255,0,0,0,255,0,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 3:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,255,0,0,0,255,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 4:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,0,255,255,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 5:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,0,255,0,255,0,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 6:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,255,0,255,0,0,0,0,0,0,255,255,255,255,255,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 7:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,255,255,0,255,255,0,0,0,0,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 8:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 9:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,0,0,0,0,255,255,255,255,255,0,0,0,255,255,0,0,0,255,255,0]));
    { step = 42; continue; }
  case 10:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,255,255,255,255,255,0,255,255,0,0,0,0,0,0,255,0,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 11:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,0,0,0,0,0,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,0]));
    { step = 42; continue; }
  case 12:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0,0]));
    { step = 42; continue; }
  case 13:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 14:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,255,255,255,255,255,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 15:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,0,255,255,0,0,0,255,0,255,0,0,255,0,0,255,0,255,255,255,255,255,0]));
    { step = 42; continue; }
  case 16:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 17:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 18:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,0,0,255,0,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 19:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,255,255,255,255,0,0,0,255,255,0,0,0,255,255,0,0,0,255,255,255,255,255,255,0]));
    { step = 42; continue; }
  case 20:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,255,255,0,0,255,0,255,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 21:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,255,255,255,0,255,0,0,0,255,0,0,255,255,0,255,0,255,255,0,0,255,0]));
    { step = 42; continue; }
  case 22:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,255,255,255,255,255,0,255,255,255,0,0,255,255,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 23:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,255,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 24:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,0,0,255,255,255,0,0,0,255,255,255,255,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 25:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,255,255,0,255,255,255,255,255,0,255,255,255,0,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 26:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,255,255,0,255,255,255,255,255,0,255,0,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 27:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,255,255,255,255,255,0,0,255,0,0,255,255,255,255,255,255,255,0,255,255,0]));
    { step = 42; continue; }
  case 28:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,255,255,255,255,255,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 29:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,0,255,0,255,255,255,255,255,255,255,255,255,255,255,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 30:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 31:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,0,0,255,0,0,0,0,255,0,0,0,0,255,255,255,0,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 32:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,0,255,0,255,255,255,255,255,255,0,255,255,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 33:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,255,255,255,255,0,0,255,0,0,255,0,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 34:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,0,255,255,0,255,255,0,255,0,255,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 35:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,255,0,0,255,0,255,0,0,255,255,255,255,0,255,255,0,255,0,255,255,255,255,0,0]));
    { step = 42; continue; }
  case 36:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,255,0,0,0,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 37:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,255,255,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 38:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,255,0,0,0,255,0,255,255,255,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 39:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,255,0,255,255,0,255,0,255,255,255,255,255,255,0,0,255,0,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 40:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,255,255,0,255,255,0,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 41:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
  case 42:
    return leave(s, r0)
  default: oops()
} } }
images_iconImage__P224.info = {"start":9062,"length":13275,"line":281,"column":4,"endLine":538,"endColumn":5,"fileName":"pxt_modules/core/icons.ts","functionName":"iconImage","argumentNames":["i"]}

function images_iconImage__P224_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: images_iconImage__P224, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function neopixel_Strip_showRainbow__P402(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.saturation___778 = undefined;
    s.luminance___779 = undefined;
    s.steps___780 = undefined;
    s.direction___783 = undefined;
    s.h1___786 = undefined;
    s.h2___788 = undefined;
    s.hDistCW___790 = undefined;
    s.hStepCW___794 = undefined;
    s.hDistCCW___799 = undefined;
    s.hStepCCW___803 = undefined;
    s.hStep___809 = undefined;
    s.h1_100___824 = undefined;
    s.s1___826 = undefined;
    s.s2___828 = undefined;
    s.sDist___830 = undefined;
    s.sStep___833 = undefined;
    s.s1_100___838 = undefined;
    s.l1___840 = undefined;
    s.l2___842 = undefined;
    s.lDist___844 = undefined;
    s.lStep___847 = undefined;
    s.l1_100___852 = undefined;
    s.i___868 = undefined;
    s.h___872 = undefined;
    s.s___880 = undefined;
    s.l___887 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C400_VT)) failedCast(r0);
    r0 = s.arg0.fields["_length"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 13; continue; }
  case 1:
  case 2:
    r0 = (s.arg1 >> 0);
    s.arg1 = (r0);
    r0 = (s.arg2 >> 0);
    s.arg2 = (r0);
    s.saturation___778 = (100);
    s.luminance___779 = (50);
    r0 = s.arg0.fields["_length"];
    s.steps___780 = (r0);
    s.direction___783 = (0);
    s.h1___786 = (s.arg1);
    s.h2___788 = (s.arg2);
    r0 = (s.h2___788 + 360);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.h1___786);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 % 360);
    s.hDistCW___790 = (r0);
    r0 = (s.hDistCW___790 * 100);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, s.steps___780);
    s.hStepCW___794 = (r0);
    r0 = (s.h1___786 + 360);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.h2___788);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 % 360);
    s.hDistCCW___799 = (r0);
    r0 = (s.hDistCCW___799 * 100);
    s.tmp_1 = r0;
    r0 = (0 - s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, s.steps___780);
    s.hStepCCW___803 = (r0);
    r0 = (s.direction___783 === 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.hStep___809 = (s.hStepCW___794);
    { step = 8; continue; }
  case 3:
    r0 = (s.direction___783 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.hStep___809 = (s.hStepCCW___803);
    { step = 7; continue; }
  case 4:
    r0 = (s.hDistCW___790 < s.hDistCCW___799);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.hStepCW___794;
    { step = 6; continue; }
  case 5:
    r0 = s.hStepCCW___803;
  case 6:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.hStep___809 = (s.tmp_1);
  case 7:
  case 8:
    r0 = (s.h1___786 * 100);
    s.h1_100___824 = (r0);
    s.s1___826 = (s.saturation___778);
    s.s2___828 = (s.saturation___778);
    r0 = (s.s2___828 - s.s1___826);
    s.sDist___830 = (r0);
    r0 = pxsim.Math_.idiv(s.sDist___830, s.steps___780);
    s.sStep___833 = (r0);
    r0 = (s.s1___826 * 100);
    s.s1_100___838 = (r0);
    s.l1___840 = (s.luminance___779);
    s.l2___842 = (s.luminance___779);
    r0 = (s.l2___842 - s.l1___840);
    s.lDist___844 = (r0);
    r0 = pxsim.Math_.idiv(s.lDist___844, s.steps___780);
    s.lStep___847 = (r0);
    r0 = (s.l1___840 * 100);
    s.l1_100___852 = (r0);
    r0 = (s.steps___780 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tmp_1 = neopixel_Strip_setPixelColor__P404_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = 0;
    s.tmp_2 = neopixel_hsl__P430_mk(s);
    r0 = (s.h1___786 + s.hStep___809);
    s.tmp_2.arg0 = r0;
    r0 = (s.s1___826 + s.sStep___833);
    s.tmp_2.arg1 = r0;
    r0 = (s.l1___840 + s.lStep___847);
    s.tmp_2.arg2 = r0;
    s.pc = 15; return s.tmp_2;
  case 15:
    r0 = s.retval;
    s.tmp_1.arg2 = r0;
    s.pc = 14; return s.tmp_1;
  case 14:
    r0 = s.retval;
    { step = 12; continue; }
  case 9:
    s.tmp_0 = neopixel_Strip_setPixelColor__P404_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = 0;
    s.tmp_1 = neopixel_hsl__P430_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = s.saturation___778;
    s.tmp_1.arg2 = s.luminance___779;
    s.pc = 17; return s.tmp_1;
  case 17:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.i___868 = (1);
  case 10:
    s.tmp_1 = r0 = s.i___868;
    r0 = (s.steps___780 - 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.tmp_5 = r0 = s.h1_100___824;
    r0 = (s.i___868 * s.hStep___809);
    s.tmp_6 = r0;
    r0 = (s.tmp_5 + s.tmp_6);
    s.tmp_4 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_4, 100);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 + 360);
    s.h___872 = (r0);
    s.tmp_1 = r0 = s.s1_100___838;
    r0 = (s.i___868 * s.sStep___833);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 + s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 100);
    s.s___880 = (r0);
    s.tmp_1 = r0 = s.l1_100___852;
    r0 = (s.i___868 * s.lStep___847);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 + s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 100);
    s.l___887 = (r0);
    s.tmp_0 = neopixel_Strip_setPixelColor__P404_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.i___868;
    s.tmp_1 = neopixel_hsl__P430_mk(s);
    s.tmp_1.arg0 = s.h___872;
    s.tmp_1.arg1 = s.s___880;
    s.tmp_1.arg2 = s.l___887;
    s.pc = 19; return s.tmp_1;
  case 19:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    r0 = (s.i___868 + 1);
    s.i___868 = (r0);
    { step = 10; continue; }
  case 11:
    s.tmp_0 = neopixel_Strip_setPixelColor__P404_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = (s.steps___780 - 1);
    s.tmp_0.arg1 = r0;
    s.tmp_1 = neopixel_hsl__P430_mk(s);
    s.tmp_1.arg0 = s.arg2;
    s.tmp_1.arg1 = s.saturation___778;
    s.tmp_1.arg2 = s.luminance___779;
    s.pc = 21; return s.tmp_1;
  case 21:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
  case 12:
    s.tmp_0 = neopixel_Strip_show__P408_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.pc = 22; return s.tmp_0;
  case 22:
    r0 = s.retval;
  case 13:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_showRainbow__P402.info = {"start":2016,"length":2263,"line":77,"column":8,"endLine":132,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"showRainbow","argumentNames":["this","startHue","endHue"]}

function neopixel_Strip_showRainbow__P402_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_showRainbow__P402, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  saturation___778: undefined,
  luminance___779: undefined,
  steps___780: undefined,
  direction___783: undefined,
  h1___786: undefined,
  h2___788: undefined,
  hDistCW___790: undefined,
  hStepCW___794: undefined,
  hDistCCW___799: undefined,
  hStepCCW___803: undefined,
  hStep___809: undefined,
  h1_100___824: undefined,
  s1___826: undefined,
  s2___828: undefined,
  sDist___830: undefined,
  sStep___833: undefined,
  s1_100___838: undefined,
  l1___840: undefined,
  l2___842: undefined,
  lDist___844: undefined,
  lStep___847: undefined,
  l1_100___852: undefined,
  i___868: undefined,
  h___872: undefined,
  s___880: undefined,
  l___887: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_hsl__P430(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.c___932 = undefined;
    s.h1___938 = undefined;
    s.h2___942 = undefined;
    s.temp___947 = undefined;
    s.x___952 = undefined;
    s.r____955 = undefined;
    s.g____956 = undefined;
    s.b____957 = undefined;
    s.m___994 = undefined;
    s.r___1001 = undefined;
    s.g___1004 = undefined;
    s.b___1007 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.Math_.round(s.arg0);
    s.arg0 = (r0);
    r0 = pxsim.Math_.round(s.arg1);
    s.arg1 = (r0);
    r0 = pxsim.Math_.round(s.arg2);
    s.arg2 = (r0);
    r0 = (s.arg0 % 360);
    s.arg0 = (r0);
    s.tmp_0 = Math_clamp__P155_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = 99;
    s.tmp_0.arg2 = s.arg1;
    s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    s.arg1 = (r0);
    s.tmp_0 = Math_clamp__P155_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = 99;
    s.tmp_0.arg2 = s.arg2;
    s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    s.arg2 = (r0);
    s.tmp_4 = Math_abs__P156_mk(s);
    r0 = (2 * s.arg2);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 - 100);
    s.tmp_4.arg0 = r0;
    s.pc = 15; return s.tmp_4;
  case 15:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (100 - s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 * s.arg1);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 << 8);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 10000);
    s.c___932 = (r0);
    r0 = pxsim.Math_.idiv(s.arg0, 60);
    s.h1___938 = (r0);
    s.tmp_2 = r0 = s.arg0;
    r0 = (s.h1___938 * 60);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 - s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 * 256);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 60);
    s.h2___942 = (r0);
    s.tmp_0 = Math_abs__P156_mk(s);
    r0 = (s.h1___938 % 2);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 << 8);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + s.h2___942);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - 256);
    s.tmp_0.arg0 = r0;
    s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.temp___947 = (r0);
    s.tmp_1 = r0 = s.c___932;
    r0 = (256 - s.temp___947);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 * s.tmp_2);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.x___952 = (r0);
    r0 = (s.h1___938 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.r____955 = (s.c___932);
    s.g____956 = (s.x___952);
    s.b____957 = (0);
    { step = 12; continue; }
  case 1:
    r0 = (s.h1___938 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.r____955 = (s.x___952);
    s.g____956 = (s.c___932);
    s.b____957 = (0);
    { step = 11; continue; }
  case 2:
    r0 = (s.h1___938 == 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.r____955 = (0);
    s.g____956 = (s.c___932);
    s.b____957 = (s.x___952);
    { step = 10; continue; }
  case 3:
    r0 = (s.h1___938 == 3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.r____955 = (0);
    s.g____956 = (s.x___952);
    s.b____957 = (s.c___932);
    { step = 9; continue; }
  case 4:
    r0 = (s.h1___938 == 4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.r____955 = (s.x___952);
    s.g____956 = (0);
    s.b____957 = (s.c___932);
    { step = 8; continue; }
  case 5:
    r0 = (s.h1___938 == 5);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.r____955 = (s.c___932);
    s.g____956 = (0);
    s.b____957 = (s.x___952);
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    r0 = (s.arg2 * 2);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 << 8);
    s.tmp_2 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_2, 100);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.c___932);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 2);
    s.m___994 = (r0);
    r0 = (s.r____955 + s.m___994);
    s.r___1001 = (r0);
    r0 = (s.g____956 + s.m___994);
    s.g___1004 = (r0);
    r0 = (s.b____957 + s.m___994);
    s.b___1007 = (r0);
    s.tmp_0 = neopixel_packRGB__P426_mk(s);
    s.tmp_0.arg0 = s.r___1001;
    s.tmp_0.arg1 = s.g___1004;
    s.tmp_0.arg2 = s.b___1007;
    s.pc = 17; return s.tmp_0;
  case 17:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
neopixel_hsl__P430.info = {"start":19227,"length":1240,"line":535,"column":4,"endLine":569,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"hsl","argumentNames":["h","s","l"]}

function neopixel_hsl__P430_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_hsl__P430, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  c___932: undefined,
  h1___938: undefined,
  h2___942: undefined,
  temp___947: undefined,
  x___952: undefined,
  r____955: undefined,
  g____956: undefined,
  b____957: undefined,
  m___994: undefined,
  r___1001: undefined,
  g___1004: undefined,
  b___1007: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_packRGB__P426(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 & 255);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 << 16);
    s.tmp_1 = r0;
    r0 = (s.arg1 & 255);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 << 8);
    s.tmp_3 = r0;
    r0 = (s.tmp_1 | s.tmp_3);
    s.tmp_0 = r0;
    r0 = (s.arg2 & 255);
    s.tmp_5 = r0;
    r0 = (s.tmp_0 | s.tmp_5);
    return leave(s, r0)
  default: oops()
} } }
neopixel_packRGB__P426.info = {"start":18515,"length":133,"line":512,"column":4,"endLine":514,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"packRGB","argumentNames":["a","b","c"]}

function neopixel_packRGB__P426_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_packRGB__P426, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Math_abs__P156(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (0 - s.arg0);
    { step = 2; continue; }
  case 1:
    r0 = s.arg0;
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = s.tmp_1;
    return leave(s, r0)
  default: oops()
} } }
Math_abs__P156.info = {"start":9884,"length":77,"line":336,"column":4,"endLine":338,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"abs","argumentNames":["x"]}

function Math_abs__P156_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_abs__P156, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function Math_clamp__P155(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Math_min__P159_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_1 = Math_max__P158_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.arg2;
    s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
Math_clamp__P155.info = {"start":9454,"length":130,"line":327,"column":4,"endLine":329,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"clamp","argumentNames":["min","max","value"]}

function Math_clamp__P155_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_clamp__P155, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Math_max__P158(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg1;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
Math_max__P158.info = {"start":10331,"length":105,"line":353,"column":4,"endLine":356,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"max","argumentNames":["a","b"]}

function Math_max__P158_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_max__P158, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Math_min__P159(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 <= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg1;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
Math_min__P159.info = {"start":10524,"length":105,"line":361,"column":4,"endLine":364,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"min","argumentNames":["a","b"]}

function Math_min__P159_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_min__P159, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function neopixel_Strip_setPixelColor__P404(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C400_VT)) failedCast(r0);
    s.tmp_0 = neopixel_Strip_setPixelRGB__P421_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = (s.arg1 >> 0);
    s.tmp_0.arg1 = r0;
    r0 = (s.arg2 >> 0);
    s.tmp_0.arg2 = r0;
    s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_setPixelColor__P404.info = {"start":6138,"length":123,"line":182,"column":8,"endLine":184,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setPixelColor","argumentNames":["this","pixeloffset","rgb"]}

function neopixel_Strip_setPixelColor__P404_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setPixelColor__P404, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_Strip_setPixelRGB__P421(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.stride___1058 = undefined;
    s.red___1067 = undefined;
    s.green___1070 = undefined;
    s.blue___1073 = undefined;
    s.br___1076 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C400_VT)) failedCast(r0);
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["_length"];
    s.tmp_1 = r0;
    r0 = (s.arg1 >= s.tmp_1);
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 3; continue; }
    { step = 9; continue; }
  case 3:
  case 4:
    r0 = s.arg0.fields["_mode"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 === 1);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 5; continue; }
    r0 = 4;
    { step = 6; continue; }
  case 5:
    r0 = 3;
  case 6:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    s.stride___1058 = (s.tmp_5);
    r0 = s.arg0.fields["start"];
    s.tmp_1 = r0;
    r0 = (s.arg1 + s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 * s.stride___1058);
    s.arg1 = (r0);
    s.tmp_0 = neopixel_unpackR__P427_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    s.red___1067 = (r0);
    s.tmp_0 = neopixel_unpackG__P428_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
    s.green___1070 = (r0);
    s.tmp_0 = neopixel_unpackB__P429_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.blue___1073 = (r0);
    r0 = s.arg0.fields["brightness"];
    s.br___1076 = (r0);
    r0 = (s.br___1076 < 255);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = (s.red___1067 * s.br___1076);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 8);
    s.red___1067 = (r0);
    r0 = (s.green___1070 * s.br___1076);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.green___1070 = (r0);
    r0 = (s.blue___1073 * s.br___1076);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.blue___1073 = (r0);
  case 7:
  case 8:
    s.tmp_0 = neopixel_Strip_setBufferRGB__P418_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.red___1067;
    s.tmp_0.arg3 = s.green___1070;
    s.tmp_0.arg4 = s.blue___1073;
    s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
  case 9:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_setPixelRGB__P421.info = {"start":15692,"length":683,"line":427,"column":8,"endLine":446,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setPixelRGB","argumentNames":["this","pixeloffset","rgb"]}

function neopixel_Strip_setPixelRGB__P421_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setPixelRGB__P421, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  stride___1058: undefined,
  red___1067: undefined,
  green___1070: undefined,
  blue___1073: undefined,
  br___1076: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_Strip_setBufferRGB__P418(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C400_VT)) failedCast(r0);
    r0 = s.arg0.fields["_mode"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["buf"];
    s.tmp_2 = r0;
    r0 = (s.arg1 + 0);
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_2, s.tmp_3, s.arg2);
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = (s.arg1 + 1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, s.tmp_1, s.arg3);
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = (s.arg1 + 0);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, s.tmp_1, s.arg3);
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = (s.arg1 + 1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, s.tmp_1, s.arg2);
  case 2:
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = (s.arg1 + 2);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, s.tmp_1, s.arg4);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_setBufferRGB__P418.info = {"start":14176,"length":407,"line":384,"column":8,"endLine":393,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setBufferRGB","argumentNames":["this","offset","red","green","blue"]}

function neopixel_Strip_setBufferRGB__P418_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setBufferRGB__P418, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function neopixel_unpackB__P429(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.b___1140 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 & 255);
    s.b___1140 = (r0);
    r0 = s.b___1140;
    return leave(s, r0)
  default: oops()
} } }
neopixel_unpackB__P429.info = {"start":18860,"length":93,"line":523,"column":4,"endLine":526,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"unpackB","argumentNames":["rgb"]}

function neopixel_unpackB__P429_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_unpackB__P429, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  b___1140: undefined,
  arg0: undefined,
} }





function neopixel_unpackG__P428(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.g___1144 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >> 8);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 255);
    s.g___1144 = (r0);
    r0 = s.g___1144;
    return leave(s, r0)
  default: oops()
} } }
neopixel_unpackG__P428.info = {"start":18757,"length":98,"line":519,"column":4,"endLine":522,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"unpackG","argumentNames":["rgb"]}

function neopixel_unpackG__P428_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_unpackG__P428, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  g___1144: undefined,
  arg0: undefined,
} }





function neopixel_unpackR__P427(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.r___1148 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >> 16);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 255);
    s.r___1148 = (r0);
    r0 = s.r___1148;
    return leave(s, r0)
  default: oops()
} } }
neopixel_unpackR__P427.info = {"start":18653,"length":99,"line":515,"column":4,"endLine":518,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"unpackR","argumentNames":["rgb"]}

function neopixel_unpackR__P427_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_unpackR__P427, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  r___1148: undefined,
  arg0: undefined,
} }





function neopixel_create__P423(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.strip___1154 = undefined;
    s.stride___1157 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(neopixel_Strip__C400_VT);
    s.strip___1154 = (r0);
    r0 = (s.arg2 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = 4;
    { step = 2; continue; }
  case 1:
    r0 = 3;
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.stride___1157 = (s.tmp_1);
    s.tmp_0 = r0 = s.strip___1154;
    r0 = (s.arg1 * s.stride___1157);
    s.tmp_2 = r0;
    r0 = pxsim.pins.createBuffer(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["buf"] = (s.tmp_1);
    r0 = (s.strip___1154).fields["start"] = (0);
    r0 = (s.strip___1154).fields["_length"] = (s.arg1);
    r0 = (s.strip___1154).fields["_mode"] = (s.arg2);
    r0 = (s.strip___1154).fields["_matrixWidth"] = (0);
    s.tmp_0 = neopixel_Strip_setBrightness__P411_mk(s);
    s.tmp_0.arg0 = s.strip___1154;
    s.tmp_0.arg1 = 128;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = neopixel_Strip_setPin__P416_mk(s);
    s.tmp_0.arg0 = s.strip___1154;
    s.tmp_0.arg1 = s.arg0;
    s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = s.strip___1154;
    return leave(s, r0)
  default: oops()
} } }
neopixel_create__P423.info = {"start":17299,"length":437,"line":476,"column":4,"endLine":487,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"create","argumentNames":["pin","numleds","mode"]}

function neopixel_create__P423_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_create__P423, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  strip___1154: undefined,
  stride___1157: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_Strip_setPin__P416(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C400_VT)) failedCast(r0);
    r0 = (s.arg0).fields["pin"] = (s.arg1);
    r0 = s.arg0.fields["pin"];
    s.tmp_0 = r0;
    r0 = pxsim.pins.digitalWritePin(s.tmp_0, 0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_setPin__P416.info = {"start":13228,"length":176,"line":359,"column":8,"endLine":363,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setPin","argumentNames":["this","pin"]}

function neopixel_Strip_setPin__P416_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setPin__P416, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function neopixel_Strip_setBrightness__P411(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C400_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = (s.arg1 & 255);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["brightness"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_setBrightness__P411.info = {"start":9588,"length":100,"line":272,"column":8,"endLine":274,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setBrightness","argumentNames":["this","brightness"]}

function neopixel_Strip_setBrightness__P411_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setBrightness__P411, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Fx8__P376(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 * 256);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 | 0);
    return leave(s, r0)
  default: oops()
} } }
Fx8__P376.info = {"start":42,"length":68,"line":4,"column":0,"endLine":6,"endColumn":1,"fileName":"pxt_modules/core/fixed.ts","functionName":"Fx8","argumentNames":["v"]}

function Fx8__P376_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Fx8__P376, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




const neopixel_Strip__C400_VT = mkVTable({
  name: "Strip",
  numFields: 7,
  classNo: 16,
  lastSubtypeNo: 16,
  methods: {
  },
  iface: {
    "buf": null,
    "set/buf": null,
    "pin": null,
    "set/pin": null,
    "brightness": null,
    "set/brightness": null,
    "start": null,
    "set/start": null,
    "_length": null,
    "set/_length": null,
    "_mode": null,
    "set/_mode": null,
    "_matrixWidth": null,
    "set/_matrixWidth": null,
    "showRainbow": neopixel_Strip_showRainbow__P402,
    "setPixelColor": neopixel_Strip_setPixelColor__P404,
    "show": neopixel_Strip_show__P408,
    "setBrightness": neopixel_Strip_setBrightness__P411,
    "rotate": neopixel_Strip_rotate__P415,
    "setPin": neopixel_Strip_setPin__P416,
    "setBufferRGB": neopixel_Strip_setBufferRGB__P418,
    "setPixelRGB": neopixel_Strip_setPixelRGB__P421,
  },
});

const breakpoints = setupDebugger(1, ["strip___451","STM8_ADDRESSS___431"])

return _main___P1
})
