// total=61646 new=94.83% cached=0.00% other=5.17%
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
    r0 = undefined;
    globals.strip___447 = (null);
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
    globals.strip___447 = (r0);
    s.tmp_0 = neopixel_Strip_showRainbow__P402_mk(s);
    s.tmp_0.arg0 = globals.strip___447;
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
    r0 = pxsim.basic.forever(inline__P464);
    r0 = pxsim.basic.forever(inline__P473);
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





function inline__P464(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = cuteBot_motors__P436_mk(s);
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
    s.tmp_0 = cuteBot_motors__P436_mk(s);
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
inline__P464.info = {"start":272,"length":118,"line":11,"column":14,"endLine":16,"endColumn":1,"fileName":"tests.ts","functionName":"inline","argumentNames":[]}

function inline__P464_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P464, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P473(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = neopixel_Strip_rotate__P415_mk(s);
    s.tmp_0.arg0 = globals.strip___447;
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
    s.tmp_0.arg0 = globals.strip___447;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P473.info = {"start":407,"length":77,"line":17,"column":14,"endLine":21,"endColumn":1,"fileName":"tests.ts","functionName":"inline","argumentNames":[]}

function inline__P473_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P473, depth: s.depth + 1,
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

    s.stride___493 = undefined;
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
    s.stride___493 = (s.tmp_2);
    r0 = s.arg0.fields["buf"];
    s.tmp_0 = r0;
    r0 = (0 - s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 * s.stride___493);
    s.tmp_1 = r0;
    r0 = s.arg0.fields["start"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 * s.stride___493);
    s.tmp_3 = r0;
    r0 = s.arg0.fields["_length"];
    s.tmp_6 = r0;
    r0 = (s.tmp_6 * s.stride___493);
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
  stride___493: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function cuteBot_motors__P436(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___516 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pins.createBuffer(4);
    s.buf___516 = (r0);
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
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 0, 1);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 1, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 2, s.arg0);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___516, 0);
    { step = 10; continue; }
  case 9:
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 0, 1);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 1, 1);
    s.tmp_0 = r0 = s.buf___516;
    r0 = (s.arg0 * -1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___516, 0);
  case 10:
    r0 = (s.arg1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 0, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 1, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 2, s.arg1);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___516, 0);
    { step = 12; continue; }
  case 11:
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 0, 2);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 1, 1);
    s.tmp_0 = r0 = s.buf___516;
    r0 = (s.arg1 * -1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.buf___516, 3, 0);
    r0 = pxsim.pins.i2cWriteBuffer(16, s.buf___516, 0);
  case 12:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
cuteBot_motors__P436.info = {"start":1777,"length":1296,"line":74,"column":4,"endLine":115,"endColumn":5,"fileName":"cutebot.ts","functionName":"motors","argumentNames":["lspeed","rspeed"]}

function cuteBot_motors__P436_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: cuteBot_motors__P436, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___516: undefined,
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

    s.res___593 = undefined;
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
    s.res___593 = (r0);
    setupResume(s, 2);
    pxsim_ImageMethods.showImage(s.res___593, 0, s.arg1);
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
  res___593: undefined,
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

    s.saturation___774 = undefined;
    s.luminance___775 = undefined;
    s.steps___776 = undefined;
    s.direction___779 = undefined;
    s.h1___782 = undefined;
    s.h2___784 = undefined;
    s.hDistCW___786 = undefined;
    s.hStepCW___790 = undefined;
    s.hDistCCW___795 = undefined;
    s.hStepCCW___799 = undefined;
    s.hStep___805 = undefined;
    s.h1_100___820 = undefined;
    s.s1___822 = undefined;
    s.s2___824 = undefined;
    s.sDist___826 = undefined;
    s.sStep___829 = undefined;
    s.s1_100___834 = undefined;
    s.l1___836 = undefined;
    s.l2___838 = undefined;
    s.lDist___840 = undefined;
    s.lStep___843 = undefined;
    s.l1_100___848 = undefined;
    s.i___864 = undefined;
    s.h___868 = undefined;
    s.s___876 = undefined;
    s.l___883 = undefined;
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
    s.saturation___774 = (100);
    s.luminance___775 = (50);
    r0 = s.arg0.fields["_length"];
    s.steps___776 = (r0);
    s.direction___779 = (0);
    s.h1___782 = (s.arg1);
    s.h2___784 = (s.arg2);
    r0 = (s.h2___784 + 360);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.h1___782);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 % 360);
    s.hDistCW___786 = (r0);
    r0 = (s.hDistCW___786 * 100);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, s.steps___776);
    s.hStepCW___790 = (r0);
    r0 = (s.h1___782 + 360);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.h2___784);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 % 360);
    s.hDistCCW___795 = (r0);
    r0 = (s.hDistCCW___795 * 100);
    s.tmp_1 = r0;
    r0 = (0 - s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, s.steps___776);
    s.hStepCCW___799 = (r0);
    r0 = (s.direction___779 === 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.hStep___805 = (s.hStepCW___790);
    { step = 8; continue; }
  case 3:
    r0 = (s.direction___779 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.hStep___805 = (s.hStepCCW___799);
    { step = 7; continue; }
  case 4:
    r0 = (s.hDistCW___786 < s.hDistCCW___795);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.hStepCW___790;
    { step = 6; continue; }
  case 5:
    r0 = s.hStepCCW___799;
  case 6:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.hStep___805 = (s.tmp_1);
  case 7:
  case 8:
    r0 = (s.h1___782 * 100);
    s.h1_100___820 = (r0);
    s.s1___822 = (s.saturation___774);
    s.s2___824 = (s.saturation___774);
    r0 = (s.s2___824 - s.s1___822);
    s.sDist___826 = (r0);
    r0 = pxsim.Math_.idiv(s.sDist___826, s.steps___776);
    s.sStep___829 = (r0);
    r0 = (s.s1___822 * 100);
    s.s1_100___834 = (r0);
    s.l1___836 = (s.luminance___775);
    s.l2___838 = (s.luminance___775);
    r0 = (s.l2___838 - s.l1___836);
    s.lDist___840 = (r0);
    r0 = pxsim.Math_.idiv(s.lDist___840, s.steps___776);
    s.lStep___843 = (r0);
    r0 = (s.l1___836 * 100);
    s.l1_100___848 = (r0);
    r0 = (s.steps___776 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tmp_1 = neopixel_Strip_setPixelColor__P404_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = 0;
    s.tmp_2 = neopixel_hsl__P430_mk(s);
    r0 = (s.h1___782 + s.hStep___805);
    s.tmp_2.arg0 = r0;
    r0 = (s.s1___822 + s.sStep___829);
    s.tmp_2.arg1 = r0;
    r0 = (s.l1___836 + s.lStep___843);
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
    s.tmp_1.arg1 = s.saturation___774;
    s.tmp_1.arg2 = s.luminance___775;
    s.pc = 17; return s.tmp_1;
  case 17:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.i___864 = (1);
  case 10:
    s.tmp_1 = r0 = s.i___864;
    r0 = (s.steps___776 - 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.tmp_5 = r0 = s.h1_100___820;
    r0 = (s.i___864 * s.hStep___805);
    s.tmp_6 = r0;
    r0 = (s.tmp_5 + s.tmp_6);
    s.tmp_4 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_4, 100);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 + 360);
    s.h___868 = (r0);
    s.tmp_1 = r0 = s.s1_100___834;
    r0 = (s.i___864 * s.sStep___829);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 + s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 100);
    s.s___876 = (r0);
    s.tmp_1 = r0 = s.l1_100___848;
    r0 = (s.i___864 * s.lStep___843);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 + s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 100);
    s.l___883 = (r0);
    s.tmp_0 = neopixel_Strip_setPixelColor__P404_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.i___864;
    s.tmp_1 = neopixel_hsl__P430_mk(s);
    s.tmp_1.arg0 = s.h___868;
    s.tmp_1.arg1 = s.s___876;
    s.tmp_1.arg2 = s.l___883;
    s.pc = 19; return s.tmp_1;
  case 19:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    r0 = (s.i___864 + 1);
    s.i___864 = (r0);
    { step = 10; continue; }
  case 11:
    s.tmp_0 = neopixel_Strip_setPixelColor__P404_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = (s.steps___776 - 1);
    s.tmp_0.arg1 = r0;
    s.tmp_1 = neopixel_hsl__P430_mk(s);
    s.tmp_1.arg0 = s.arg2;
    s.tmp_1.arg1 = s.saturation___774;
    s.tmp_1.arg2 = s.luminance___775;
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
  saturation___774: undefined,
  luminance___775: undefined,
  steps___776: undefined,
  direction___779: undefined,
  h1___782: undefined,
  h2___784: undefined,
  hDistCW___786: undefined,
  hStepCW___790: undefined,
  hDistCCW___795: undefined,
  hStepCCW___799: undefined,
  hStep___805: undefined,
  h1_100___820: undefined,
  s1___822: undefined,
  s2___824: undefined,
  sDist___826: undefined,
  sStep___829: undefined,
  s1_100___834: undefined,
  l1___836: undefined,
  l2___838: undefined,
  lDist___840: undefined,
  lStep___843: undefined,
  l1_100___848: undefined,
  i___864: undefined,
  h___868: undefined,
  s___876: undefined,
  l___883: undefined,
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

    s.c___928 = undefined;
    s.h1___934 = undefined;
    s.h2___938 = undefined;
    s.temp___943 = undefined;
    s.x___948 = undefined;
    s.r____951 = undefined;
    s.g____952 = undefined;
    s.b____953 = undefined;
    s.m___990 = undefined;
    s.r___997 = undefined;
    s.g___1000 = undefined;
    s.b___1003 = undefined;
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
    s.c___928 = (r0);
    r0 = pxsim.Math_.idiv(s.arg0, 60);
    s.h1___934 = (r0);
    s.tmp_2 = r0 = s.arg0;
    r0 = (s.h1___934 * 60);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 - s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 * 256);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 60);
    s.h2___938 = (r0);
    s.tmp_0 = Math_abs__P156_mk(s);
    r0 = (s.h1___934 % 2);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 << 8);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + s.h2___938);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - 256);
    s.tmp_0.arg0 = r0;
    s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.temp___943 = (r0);
    s.tmp_1 = r0 = s.c___928;
    r0 = (256 - s.temp___943);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 * s.tmp_2);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.x___948 = (r0);
    r0 = (s.h1___934 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.r____951 = (s.c___928);
    s.g____952 = (s.x___948);
    s.b____953 = (0);
    { step = 12; continue; }
  case 1:
    r0 = (s.h1___934 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.r____951 = (s.x___948);
    s.g____952 = (s.c___928);
    s.b____953 = (0);
    { step = 11; continue; }
  case 2:
    r0 = (s.h1___934 == 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.r____951 = (0);
    s.g____952 = (s.c___928);
    s.b____953 = (s.x___948);
    { step = 10; continue; }
  case 3:
    r0 = (s.h1___934 == 3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.r____951 = (0);
    s.g____952 = (s.x___948);
    s.b____953 = (s.c___928);
    { step = 9; continue; }
  case 4:
    r0 = (s.h1___934 == 4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.r____951 = (s.x___948);
    s.g____952 = (0);
    s.b____953 = (s.c___928);
    { step = 8; continue; }
  case 5:
    r0 = (s.h1___934 == 5);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.r____951 = (s.c___928);
    s.g____952 = (0);
    s.b____953 = (s.x___948);
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
    r0 = (s.tmp_1 - s.c___928);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.tmp_0, 2);
    s.m___990 = (r0);
    r0 = (s.r____951 + s.m___990);
    s.r___997 = (r0);
    r0 = (s.g____952 + s.m___990);
    s.g___1000 = (r0);
    r0 = (s.b____953 + s.m___990);
    s.b___1003 = (r0);
    s.tmp_0 = neopixel_packRGB__P426_mk(s);
    s.tmp_0.arg0 = s.r___997;
    s.tmp_0.arg1 = s.g___1000;
    s.tmp_0.arg2 = s.b___1003;
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
  c___928: undefined,
  h1___934: undefined,
  h2___938: undefined,
  temp___943: undefined,
  x___948: undefined,
  r____951: undefined,
  g____952: undefined,
  b____953: undefined,
  m___990: undefined,
  r___997: undefined,
  g___1000: undefined,
  b___1003: undefined,
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

    s.stride___1054 = undefined;
    s.red___1063 = undefined;
    s.green___1066 = undefined;
    s.blue___1069 = undefined;
    s.br___1072 = undefined;
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
    s.stride___1054 = (s.tmp_5);
    r0 = s.arg0.fields["start"];
    s.tmp_1 = r0;
    r0 = (s.arg1 + s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 * s.stride___1054);
    s.arg1 = (r0);
    s.tmp_0 = neopixel_unpackR__P427_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    s.red___1063 = (r0);
    s.tmp_0 = neopixel_unpackG__P428_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
    s.green___1066 = (r0);
    s.tmp_0 = neopixel_unpackB__P429_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.blue___1069 = (r0);
    r0 = s.arg0.fields["brightness"];
    s.br___1072 = (r0);
    r0 = (s.br___1072 < 255);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = (s.red___1063 * s.br___1072);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 8);
    s.red___1063 = (r0);
    r0 = (s.green___1066 * s.br___1072);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.green___1066 = (r0);
    r0 = (s.blue___1069 * s.br___1072);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    s.blue___1069 = (r0);
  case 7:
  case 8:
    s.tmp_0 = neopixel_Strip_setBufferRGB__P418_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.red___1063;
    s.tmp_0.arg3 = s.green___1066;
    s.tmp_0.arg4 = s.blue___1069;
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
  stride___1054: undefined,
  red___1063: undefined,
  green___1066: undefined,
  blue___1069: undefined,
  br___1072: undefined,
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

    s.b___1136 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 & 255);
    s.b___1136 = (r0);
    r0 = s.b___1136;
    return leave(s, r0)
  default: oops()
} } }
neopixel_unpackB__P429.info = {"start":18860,"length":93,"line":523,"column":4,"endLine":526,"endColumn":5,"fileName":"pxt_modules/neopixel/neopixel.ts","functionName":"unpackB","argumentNames":["rgb"]}

function neopixel_unpackB__P429_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: neopixel_unpackB__P429, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  b___1136: undefined,
  arg0: undefined,
} }





function neopixel_unpackG__P428(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.g___1140 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >> 8);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 255);
    s.g___1140 = (r0);
    r0 = s.g___1140;
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
  g___1140: undefined,
  arg0: undefined,
} }





function neopixel_unpackR__P427(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.r___1144 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >> 16);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 255);
    s.r___1144 = (r0);
    r0 = s.r___1144;
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
  r___1144: undefined,
  arg0: undefined,
} }





function neopixel_create__P423(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.strip___1150 = undefined;
    s.stride___1153 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(neopixel_Strip__C400_VT);
    s.strip___1150 = (r0);
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
    s.stride___1153 = (s.tmp_1);
    s.tmp_0 = r0 = s.strip___1150;
    r0 = (s.arg1 * s.stride___1153);
    s.tmp_2 = r0;
    r0 = pxsim.pins.createBuffer(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["buf"] = (s.tmp_1);
    r0 = (s.strip___1150).fields["start"] = (0);
    r0 = (s.strip___1150).fields["_length"] = (s.arg1);
    r0 = (s.strip___1150).fields["_mode"] = (s.arg2);
    r0 = (s.strip___1150).fields["_matrixWidth"] = (0);
    s.tmp_0 = neopixel_Strip_setBrightness__P411_mk(s);
    s.tmp_0.arg0 = s.strip___1150;
    s.tmp_0.arg1 = 128;
    s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = neopixel_Strip_setPin__P416_mk(s);
    s.tmp_0.arg0 = s.strip___1150;
    s.tmp_0.arg1 = s.arg0;
    s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = s.strip___1150;
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
  strip___1150: undefined,
  stride___1153: undefined,
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





function cuteBot_init__P433(s) {
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
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
cuteBot_init__P433.info = {"start":9118,"length":56,"line":306,"column":2,"endLine":308,"endColumn":3,"fileName":"cutebot.ts","functionName":"init","argumentNames":["pin"]}

function cuteBot_init__P433_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: cuteBot_init__P433, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
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

const breakpoints = setupDebugger(1, ["strip___447","STM8_ADDRESSS___431"])

return _main___P1
})
