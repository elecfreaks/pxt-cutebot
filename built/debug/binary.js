// total=59388 new=94.53% cached=0.00% other=5.47%
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
const bind = ectx.bind;
const leaveAccessor = ectx.leaveAccessor;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
pxsim.setTitle("cutebot");
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
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals.strip___560 = (null);
    setupResume(s, 1);
    pxsim.basic.showLeds(new pxsim.Image(5, [0,0,0,255,0,255,0,255,0,255,255,0,255,0,255,255,0,255,0,255,0,255,0,0,0,0]), 400);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    s.tmp_0 = neopixel_create__P531_mk(s);
    s.tmp_0.arg0 = 115;
    s.tmp_0.arg1 = 24;
    s.tmp_0.arg2 = 0;
    s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    globals.strip___560 = (r0);
    s.tmp_0 = neopixel_Strip_showRainbow__P510_mk(s);
    s.tmp_0.arg0 = globals.strip___560;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = 360;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = basic_showIcon__P281_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = 600;
    s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = pxsim.basic.forever(inline__P577);
    r0 = pxsim.basic.forever(inline__P586);
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





function inline__P577(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = cuteBot_motors__P543_mk(s);
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
    s.tmp_0 = cuteBot_motors__P543_mk(s);
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
inline__P577.info = {"start":272,"length":118,"line":11,"column":14,"endLine":16,"endColumn":1,"fileName":"tests.ts","functionName":"inline","argumentNames":[]}

function inline__P577_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P577, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P586(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = neopixel_Strip_rotate__P523_mk(s);
    s.tmp_0.arg0 = globals.strip___560;
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
    s.tmp_0 = neopixel_Strip_show__P516_mk(s);
    s.tmp_0.arg0 = globals.strip___560;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P586.info = {"start":407,"length":77,"line":17,"column":14,"endLine":21,"endColumn":1,"fileName":"tests.ts","functionName":"inline","argumentNames":[]}

function inline__P586_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P586, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function neopixel_Strip_show__P516(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C508_VT)) failedCast(r0);
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = s.arg0.fields["pin"];
    s.tmp_1 = r0;
    r0 = pxsim.light.sendWS2812Buffer(s.tmp_0, s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_show__P516.info = {"start":8497,"length":70,"line":240,"column":8,"endLine":242,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"show","argumentNames":["this"]}

function neopixel_Strip_show__P516_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_show__P516, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function neopixel_Strip_rotate__P523(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.stride___607 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C508_VT)) failedCast(r0);
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
    s.stride___607 = (s.tmp_2);
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = (0 - s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 * s.stride___607);
    s.tmp_1 = r0;
    r0 = s.arg0.fields["start"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 * s.stride___607);
    s.tmp_3 = r0;
    r0 = s.arg0.fields["_length"];
    s.tmp_6 = r0;
    r0 = (s.tmp_6 * s.stride___607);
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.rotate(s.tmp_0, s.tmp_1, s.tmp_3, s.tmp_5);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_rotate__P523.info = {"start":12820,"length":237,"line":348,"column":8,"endLine":352,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"rotate","argumentNames":["this","offset"]}

function neopixel_Strip_rotate__P523_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_rotate__P523, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  stride___607: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function cuteBot_motors__P543(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___636 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pins.createBuffer(4);
    s.buf___636 = (r0);
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
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 0, 1);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 1, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 2, s.arg0);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___636, 0);
    { step = 10; continue; }
  case 9:
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 0, 1);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 1, 1);
    s.tmp_0 = r0 = s.buf___636;
    r0 = (s.arg0 * -1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___636, 0);
  case 10:
    r0 = (s.arg1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 0, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 1, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 2, s.arg1);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___636, 0);
    { step = 12; continue; }
  case 11:
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 0, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 1, 1);
    s.tmp_0 = r0 = s.buf___636;
    r0 = (s.arg1 * -1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.buf___636, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___636, 0);
  case 12:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
cuteBot_motors__P543.info = {"start":2324,"length":1255,"line":98,"column":4,"endLine":139,"endColumn":5,"fileName":"cutebot.ts","functionName":"motors","argumentNames":["lspeed","rspeed"]}

function cuteBot_motors__P543_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: cuteBot_motors__P543, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___636: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function basic_showIcon__P281(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___727 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = images_iconImage__P284_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.res___727 = (r0);
    setupResume(s, 2);
    pxsim_ImageMethods.showImage(s.res___727, 0, s.arg1);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
basic_showIcon__P281.info = {"start":4957,"length":141,"line":185,"column":4,"endLine":188,"endColumn":5,"fileName":"pxt_modules/core/icons.ts","functionName":"showIcon","argumentNames":["icon","interval"]}

function basic_showIcon__P281_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: basic_showIcon__P281, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  res___727: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function images_iconImage__P284(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
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
    { step = 42; continue; }
    r0 = undefined;
  case 42:
    return leave(s, r0)
  default: oops()
} } }
images_iconImage__P284.info = {"start":9049,"length":13275,"line":281,"column":4,"endLine":538,"endColumn":5,"fileName":"pxt_modules/core/icons.ts","functionName":"iconImage","argumentNames":["i"]}

function images_iconImage__P284_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: images_iconImage__P284, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function neopixel_Strip_showRainbow__P510(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.steps___915 = undefined;
    s.h1___921 = undefined;
    s.h2___923 = undefined;
    s.hDistCW___925 = undefined;
    s.hStepCW___934 = undefined;
    s.hDistCCW___940 = undefined;
    s.hStepCCW___949 = undefined;
    s.hStep___957 = undefined;
    s.h1_100___975 = undefined;
    s.sStep___986 = undefined;
    s.lStep___1003 = undefined;
    s.i___1030 = undefined;
    s.h___1036 = undefined;
    s.s___1046 = undefined;
    s.l___1054 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C508_VT)) failedCast(r0);
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
    r0 = s.arg0.fields["_length"];
    s.steps___915 = (r0);
    s.h1___921 = (s.arg1);
    s.h2___923 = (s.arg2);
    r0 = (s.h2___923 + 360);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.h1___921);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 % 360);
    s.hDistCW___925 = (r0);
    r0 = (s.hDistCW___925 * 100);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, s.steps___915);
    s.hStepCW___934 = (r0);
    r0 = (s.h1___921 + 360);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.h2___923);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 % 360);
    s.hDistCCW___940 = (r0);
    r0 = (s.hDistCCW___940 * 100);
    s.tmp_1 = r0;
    r0 = (0 - s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, s.steps___915);
    s.hStepCCW___949 = (r0);
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 3; continue; }
    s.hStep___957 = (s.hStepCW___934);
    { step = 8; continue; }
  case 3:
    r0 = pxsim_numops_toBoolDecr(false);
    if (!r0) { step = 4; continue; }
    s.hStep___957 = (s.hStepCCW___949);
    { step = 7; continue; }
  case 4:
    r0 = (s.hDistCW___925 < s.hDistCCW___940);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.hStepCW___934;
    { step = 6; continue; }
  case 5:
    r0 = s.hStepCCW___949;
  case 6:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.hStep___957 = (s.tmp_1);
  case 7:
  case 8:
    r0 = (s.h1___921 * 100);
    s.h1_100___975 = (r0);
    r0 = pxsim.Math_.idiv(0, s.steps___915);
    s.sStep___986 = (r0);
    r0 = pxsim.Math_.idiv(0, s.steps___915);
    s.lStep___1003 = (r0);
    r0 = (s.steps___915 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tmp_1 = neopixel_Strip_setPixelColor__P512_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = 0;
    s.tmp_2 = neopixel_hsl__P538_mk(s);
    r0 = (s.h1___921 + s.hStep___957);
    s.tmp_2.arg0 = r0;
    r0 = (100 + s.sStep___986);
    s.tmp_2.arg1 = r0;
    r0 = (50 + s.lStep___1003);
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
    s.tmp_0 = neopixel_Strip_setPixelColor__P512_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = 0;
    s.tmp_1 = neopixel_hsl__P538_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = 100;
    s.tmp_1.arg2 = 50;
    s.pc = 17; return s.tmp_1;
  case 17:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.i___1030 = (1);
  case 10:
    s.tmp_1 = r0 = s.i___1030;
    r0 = (s.steps___915 - 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.tmp_5 = r0 = s.h1_100___975;
    r0 = (s.i___1030 * s.hStep___957);
    s.tmp_6 = r0;
    r0 = (s.tmp_5 + s.tmp_6);
    s.tmp_4 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_4, 100);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 + 360);
    s.h___1036 = (r0);
    r0 = (s.i___1030 * s.sStep___986);
    s.tmp_1 = r0;
    r0 = (10000 + s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 100);
    s.s___1046 = (r0);
    r0 = (s.i___1030 * s.lStep___1003);
    s.tmp_1 = r0;
    r0 = (5000 + s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 100);
    s.l___1054 = (r0);
    s.tmp_0 = neopixel_Strip_setPixelColor__P512_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.i___1030;
    s.tmp_1 = neopixel_hsl__P538_mk(s);
    s.tmp_1.arg0 = s.h___1036;
    s.tmp_1.arg1 = s.s___1046;
    s.tmp_1.arg2 = s.l___1054;
    s.pc = 19; return s.tmp_1;
  case 19:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    r0 = (s.i___1030 + 1);
    s.i___1030 = (r0);
    { step = 10; continue; }
  case 11:
    s.tmp_0 = neopixel_Strip_setPixelColor__P512_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = (s.steps___915 - 1);
    s.tmp_0.arg1 = r0;
    s.tmp_1 = neopixel_hsl__P538_mk(s);
    s.tmp_1.arg0 = s.arg2;
    s.tmp_1.arg1 = 100;
    s.tmp_1.arg2 = 50;
    s.pc = 21; return s.tmp_1;
  case 21:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
  case 12:
    s.tmp_0 = neopixel_Strip_show__P516_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.pc = 22; return s.tmp_0;
  case 22:
    r0 = s.retval;
  case 13:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_showRainbow__P510.info = {"start":2016,"length":2263,"line":77,"column":8,"endLine":132,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"showRainbow","argumentNames":["this","startHue","endHue"]}

function neopixel_Strip_showRainbow__P510_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_showRainbow__P510, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  steps___915: undefined,
  h1___921: undefined,
  h2___923: undefined,
  hDistCW___925: undefined,
  hStepCW___934: undefined,
  hDistCCW___940: undefined,
  hStepCCW___949: undefined,
  hStep___957: undefined,
  h1_100___975: undefined,
  sStep___986: undefined,
  lStep___1003: undefined,
  i___1030: undefined,
  h___1036: undefined,
  s___1046: undefined,
  l___1054: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_hsl__P538(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.c___1102 = undefined;
    s.h1___1118 = undefined;
    s.h2___1122 = undefined;
    s.temp___1131 = undefined;
    s.x___1142 = undefined;
    s.r____1151 = undefined;
    s.g____1152 = undefined;
    s.b____1153 = undefined;
    s.m___1196 = undefined;
    s.r___1206 = undefined;
    s.g___1210 = undefined;
    s.b___1214 = undefined;
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
    s.tmp_0 = Math_clamp__P193_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = 99;
    s.tmp_0.arg2 = s.arg1;
    s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    s.arg1 = (r0);
    s.tmp_0 = Math_clamp__P193_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = 99;
    s.tmp_0.arg2 = s.arg2;
    s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    s.arg2 = (r0);
    s.tmp_4 = Math_abs__P194_mk(s);
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
    s.c___1102 = (r0);
    r0 = pxsim.Math_.idiv(s.arg0, 60);
    s.h1___1118 = (r0);
    s.tmp_2 = r0 = s.arg0;
    r0 = (s.h1___1118 * 60);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 - s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 * 256);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 60);
    s.h2___1122 = (r0);
    s.tmp_0 = Math_abs__P194_mk(s);
    r0 = (s.h1___1118 % 2);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 << 8);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + s.h2___1122);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - 256);
    s.tmp_0.arg0 = r0;
    s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.temp___1131 = (r0);
    s.tmp_1 = r0 = s.c___1102;
    r0 = (256 - s.temp___1131);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 * s.tmp_2);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.x___1142 = (r0);
    r0 = (s.h1___1118 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.r____1151 = (s.c___1102);
    s.g____1152 = (s.x___1142);
    s.b____1153 = (0);
    { step = 12; continue; }
  case 1:
    r0 = (s.h1___1118 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.r____1151 = (s.x___1142);
    s.g____1152 = (s.c___1102);
    s.b____1153 = (0);
    { step = 11; continue; }
  case 2:
    r0 = (s.h1___1118 == 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.r____1151 = (0);
    s.g____1152 = (s.c___1102);
    s.b____1153 = (s.x___1142);
    { step = 10; continue; }
  case 3:
    r0 = (s.h1___1118 == 3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.r____1151 = (0);
    s.g____1152 = (s.x___1142);
    s.b____1153 = (s.c___1102);
    { step = 9; continue; }
  case 4:
    r0 = (s.h1___1118 == 4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.r____1151 = (s.x___1142);
    s.g____1152 = (0);
    s.b____1153 = (s.c___1102);
    { step = 8; continue; }
  case 5:
    r0 = (s.h1___1118 == 5);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.r____1151 = (s.c___1102);
    s.g____1152 = (0);
    s.b____1153 = (s.x___1142);
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
    r0 = (s.tmp_1 - s.c___1102);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 2);
    s.m___1196 = (r0);
    r0 = (s.r____1151 + s.m___1196);
    s.r___1206 = (r0);
    r0 = (s.g____1152 + s.m___1196);
    s.g___1210 = (r0);
    r0 = (s.b____1153 + s.m___1196);
    s.b___1214 = (r0);
    s.tmp_0 = neopixel_packRGB__P534_mk(s);
    s.tmp_0.arg0 = s.r___1206;
    s.tmp_0.arg1 = s.g___1210;
    s.tmp_0.arg2 = s.b___1214;
    s.pc = 17; return s.tmp_0;
  case 17:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
neopixel_hsl__P538.info = {"start":19227,"length":1240,"line":535,"column":4,"endLine":569,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"hsl","argumentNames":["h","s","l"]}

function neopixel_hsl__P538_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_hsl__P538, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  c___1102: undefined,
  h1___1118: undefined,
  h2___1122: undefined,
  temp___1131: undefined,
  x___1142: undefined,
  r____1151: undefined,
  g____1152: undefined,
  b____1153: undefined,
  m___1196: undefined,
  r___1206: undefined,
  g___1210: undefined,
  b___1214: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_packRGB__P534(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
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
neopixel_packRGB__P534.info = {"start":18515,"length":133,"line":512,"column":4,"endLine":514,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"packRGB","argumentNames":["a","b","c"]}

function neopixel_packRGB__P534_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_packRGB__P534, depth: s.depth + 1,
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





function Math_abs__P194(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
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
Math_abs__P194.info = {"start":15106,"length":77,"line":511,"column":4,"endLine":513,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"abs","argumentNames":["x"]}

function Math_abs__P194_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_abs__P194, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function Math_clamp__P193(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Math_min__P197_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_1 = Math_max__P196_mk(s);
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
Math_clamp__P193.info = {"start":14654,"length":130,"line":501,"column":4,"endLine":503,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"clamp","argumentNames":["min","max","value"]}

function Math_clamp__P193_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_clamp__P193, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Math_max__P196(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
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
Math_max__P196.info = {"start":15575,"length":105,"line":529,"column":4,"endLine":532,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"max","argumentNames":["a","b"]}

function Math_max__P196_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_max__P196, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Math_min__P197(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
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
Math_min__P197.info = {"start":15790,"length":105,"line":538,"column":4,"endLine":541,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"min","argumentNames":["a","b"]}

function Math_min__P197_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_min__P197, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function neopixel_Strip_setPixelColor__P512(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C508_VT)) failedCast(r0);
    s.tmp_0 = neopixel_Strip_setPixelRGB__P529_mk(s);
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
neopixel_Strip_setPixelColor__P512.info = {"start":6138,"length":123,"line":182,"column":8,"endLine":184,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setPixelColor","argumentNames":["this","pixeloffset","rgb"]}

function neopixel_Strip_setPixelColor__P512_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setPixelColor__P512, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_Strip_setPixelRGB__P529(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.stride___1284 = undefined;
    s.red___1297 = undefined;
    s.green___1300 = undefined;
    s.blue___1303 = undefined;
    s.br___1306 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C508_VT)) failedCast(r0);
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
    s.stride___1284 = (s.tmp_5);
    r0 = s.arg0.fields["start"];
    s.tmp_1 = r0;
    r0 = (s.arg1 + s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 * s.stride___1284);
    s.arg1 = (r0);
    s.tmp_0 = neopixel_unpackR__P535_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    s.red___1297 = (r0);
    s.tmp_0 = neopixel_unpackG__P536_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
    s.green___1300 = (r0);
    s.tmp_0 = neopixel_unpackB__P537_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.blue___1303 = (r0);
    r0 = s.arg0.fields["brightness"];
    s.br___1306 = (r0);
    r0 = (s.br___1306 < 255);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = (s.red___1297 * s.br___1306);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 8);
    s.red___1297 = (r0);
    r0 = (s.green___1300 * s.br___1306);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.green___1300 = (r0);
    r0 = (s.blue___1303 * s.br___1306);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.blue___1303 = (r0);
  case 7:
  case 8:
    s.tmp_0 = neopixel_Strip_setBufferRGB__P526_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.red___1297;
    s.tmp_0.arg3 = s.green___1300;
    s.tmp_0.arg4 = s.blue___1303;
    s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
  case 9:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_setPixelRGB__P529.info = {"start":15692,"length":683,"line":427,"column":8,"endLine":446,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setPixelRGB","argumentNames":["this","pixeloffset","rgb"]}

function neopixel_Strip_setPixelRGB__P529_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setPixelRGB__P529, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  stride___1284: undefined,
  red___1297: undefined,
  green___1300: undefined,
  blue___1303: undefined,
  br___1306: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_Strip_setBufferRGB__P526(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
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
    if (!checkSubtype(r0, neopixel_Strip__C508_VT)) failedCast(r0);
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
neopixel_Strip_setBufferRGB__P526.info = {"start":14176,"length":407,"line":384,"column":8,"endLine":393,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setBufferRGB","argumentNames":["this","offset","red","green","blue"]}

function neopixel_Strip_setBufferRGB__P526_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setBufferRGB__P526, depth: s.depth + 1,
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





function neopixel_unpackB__P537(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.b___1381 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 & 255);
    s.b___1381 = (r0);
    r0 = s.b___1381;
    return leave(s, r0)
  default: oops()
} } }
neopixel_unpackB__P537.info = {"start":18860,"length":93,"line":523,"column":4,"endLine":526,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"unpackB","argumentNames":["rgb"]}

function neopixel_unpackB__P537_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_unpackB__P537, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  b___1381: undefined,
  arg0: undefined,
} }





function neopixel_unpackG__P536(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.g___1387 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >> 8);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 255);
    s.g___1387 = (r0);
    r0 = s.g___1387;
    return leave(s, r0)
  default: oops()
} } }
neopixel_unpackG__P536.info = {"start":18757,"length":98,"line":519,"column":4,"endLine":522,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"unpackG","argumentNames":["rgb"]}

function neopixel_unpackG__P536_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_unpackG__P536, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  g___1387: undefined,
  arg0: undefined,
} }





function neopixel_unpackR__P535(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___1394 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >> 16);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 255);
    s.r___1394 = (r0);
    r0 = s.r___1394;
    return leave(s, r0)
  default: oops()
} } }
neopixel_unpackR__P535.info = {"start":18653,"length":99,"line":515,"column":4,"endLine":518,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"unpackR","argumentNames":["rgb"]}

function neopixel_unpackR__P535_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_unpackR__P535, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  r___1394: undefined,
  arg0: undefined,
} }





function neopixel_create__P531(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.strip___1403 = undefined;
    s.stride___1406 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(neopixel_Strip__C508_VT);
    s.strip___1403 = (r0);
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
    s.stride___1406 = (s.tmp_1);
    s.tmp_0 = r0 = s.strip___1403;
    r0 = (s.arg1 * s.stride___1406);
    s.tmp_2 = r0;
    r0 = pxsim.pins.createBuffer(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["buf"] = (s.tmp_1);
    r0 = (s.strip___1403).fields["start"] = (0);
    r0 = (s.strip___1403).fields["_length"] = (s.arg1);
    r0 = (s.strip___1403).fields["_mode"] = (s.arg2);
    r0 = (s.strip___1403).fields["_matrixWidth"] = (0);
    s.tmp_0 = neopixel_Strip_setBrightness__P519_mk(s);
    s.tmp_0.arg0 = s.strip___1403;
    s.tmp_0.arg1 = 128;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = neopixel_Strip_setPin__P524_mk(s);
    s.tmp_0.arg0 = s.strip___1403;
    s.tmp_0.arg1 = s.arg0;
    s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = s.strip___1403;
    return leave(s, r0)
  default: oops()
} } }
neopixel_create__P531.info = {"start":17299,"length":437,"line":476,"column":4,"endLine":487,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"create","argumentNames":["pin","numleds","mode"]}

function neopixel_create__P531_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_create__P531, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  strip___1403: undefined,
  stride___1406: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function neopixel_Strip_setPin__P524(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C508_VT)) failedCast(r0);
    r0 = (s.arg0).fields["pin"] = (s.arg1);
    r0 = s.arg0.fields["pin"];
    s.tmp_0 = r0;
    r0 = pxsim.pins.digitalWritePin(s.tmp_0, 0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_setPin__P524.info = {"start":13228,"length":176,"line":359,"column":8,"endLine":363,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setPin","argumentNames":["this","pin"]}

function neopixel_Strip_setPin__P524_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setPin__P524, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function neopixel_Strip_setBrightness__P519(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, neopixel_Strip__C508_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = (s.arg1 & 255);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["brightness"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
neopixel_Strip_setBrightness__P519.info = {"start":9588,"length":100,"line":272,"column":8,"endLine":274,"endColumn":9,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"setBrightness","argumentNames":["this","brightness"]}

function neopixel_Strip_setBrightness__P519_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_Strip_setBrightness__P519, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }




const neopixel_Strip__C508_VT = mkVTable({
  name: "Strip",
  numFields: 7,
  classNo: 16,
  lastSubtypeNo: 16,
  maxBgInstances: null,
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
    "showRainbow": neopixel_Strip_showRainbow__P510,
    "setPixelColor": neopixel_Strip_setPixelColor__P512,
    "show": neopixel_Strip_show__P516,
    "setBrightness": neopixel_Strip_setBrightness__P519,
    "rotate": neopixel_Strip_rotate__P523,
    "setPin": neopixel_Strip_setPin__P524,
    "setBufferRGB": neopixel_Strip_setBufferRGB__P526,
    "setPixelRGB": neopixel_Strip_setPixelRGB__P529,
  },
});

const breakpoints = setupDebugger(1, ["strip___560"])

return _main___P1
})
