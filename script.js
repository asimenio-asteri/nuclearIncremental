var currentHeat = 0;
var currentCash = 0;
var currentRad = 0;
var currentPower = 0;
var maxHeat = 1000;
var maxPower = 1000;
var maxRad = 100;
var powerSec = 0;
var powerSell = 1;
var heatSec = -1;
var radSec = 0;
var mapCells = 256;
var cellLive = false;
var pctPower;
var pctHeat;
var pctRad;
var selectCell = "";
var map = {
  _1: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _2: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _3: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _4: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _5: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _6: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _7: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _8: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _9: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _10: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _11: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _12: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _13: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _14: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _15: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _16: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _17: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _18: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _19: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _20: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _21: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _22: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _23: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _24: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _25: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _26: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _27: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _28: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _29: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _30: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _31: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _32: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _33: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _34: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _35: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _36: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _37: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _38: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _39: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _40: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _41: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _42: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _43: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _44: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _45: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _46: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _47: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _48: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _49: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _50: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _51: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _52: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _53: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _54: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _55: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _56: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _57: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _58: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _59: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _60: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _61: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _62: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _63: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _64: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _65: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _66: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _67: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _68: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _69: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _70: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _71: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _72: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _73: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _74: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _75: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _76: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _77: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _78: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _79: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _80: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _81: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _82: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _83: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _84: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _85: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _86: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _87: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _88: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _89: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _90: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _91: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _92: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _93: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _94: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _95: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _96: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _97: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _98: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _99: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _100: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _101: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _102: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _103: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _104: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _105: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _106: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _107: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _108: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _109: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _110: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _111: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _112: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _113: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _114: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _115: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _116: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _117: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _118: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _119: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _120: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _121: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _122: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _123: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _124: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _125: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _126: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _127: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _128: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _129: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _130: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _131: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _132: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _133: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _134: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _135: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _136: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _137: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _138: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _139: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _140: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _141: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _142: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _143: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _144: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _145: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _146: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _147: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _148: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _149: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _150: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _151: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _152: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _153: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _154: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _155: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _156: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _157: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _158: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _159: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _160: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _161: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _162: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _163: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _164: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _165: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _166: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _167: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _168: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _169: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _170: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _171: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _172: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _173: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _174: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _175: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _176: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _177: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _178: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _179: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _180: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _181: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _182: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _183: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _184: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _185: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _186: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _187: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _188: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _189: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _190: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _191: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _192: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _193: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _194: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _195: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _196: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _197: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _198: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _199: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _200: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _201: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _202: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _203: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _204: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _205: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _206: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _207: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _208: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _209: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _210: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _211: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _212: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _213: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _214: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _215: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _216: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _217: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _218: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _219: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _220: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _221: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _222: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _223: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _224: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _225: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _226: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _227: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _228: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _229: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _230: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _231: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _232: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _233: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _234: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _235: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _236: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _237: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _238: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _239: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _240: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _241: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _242: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _243: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _244: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _245: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _246: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _247: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _248: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _249: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _250: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _251: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _252: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _253: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _254: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _255: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _256: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  }
};
setInterval(update, 10);
setInterval(updateMap, 100);
setInterval(updateSec, 1000);
function placeComp(id) {
  let mapKey = `_${id}`;
  let occ = (get(id).innerHTML ? true : false);
  if (!occ) {
    if (selectCell == "hydrogen.png" && currentCash >= 10) {
      currentCash -= 10;
      powerSec++;
      heatSec += 2;
      map[mapKey].comp = "sH";
      map[mapKey].ticksLeft = 10;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "dual_hydrogen.png" && currentCash >= 20) {
      currentCash -= 20;
      powerSec += 2;
      heatSec += 4;
      map[mapKey].comp = "dH";
      map[mapKey].ticksLeft = 250;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "quad_hydrogen.png" && currentCash >= 30) {
      currentCash -= 30;
      powerSec += 8;
      heatSec += 16;
      map[mapKey].comp = "qH";
      map[mapKey].ticksLeft = 100;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "fan.png" && currentCash >= 50) {
      currentCash -= 50;
      map[mapKey].comp = "bF";
      map[mapKey].ticksLeft = -1;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "outlet.png" && currentCash >= 75) {
      currentCash -= 75;
      map[mapKey].comp = "bO";
      map[mapKey].ticksLeft = -1;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    }
  cellLive = true;
  }
}
function sellComp(id) {
  let mapKey = `_${id}`;
  if (map[mapKey].comp != "") {
    currentCash += map[mapKey].sellVal;
    map[mapKey].comp = "";
    map[mapKey].heat = 0;
    map[mapKey].ticksLeft = -1;
    map[mapKey].sellVal = 0;
    get(id).innerHTML = "";
  }
}
function powerButton() {
  if (currentCash < 10 && !cellLive) {
    currentCash++;
    if (currentCash >= 10) {
      get("powerBtn").innerHTML = "Sell all power";
    } else {
      get("powerBtn").innerHTML = "Pick up some coins";
    }
  } else {
    currentCash += currentPower;
    currentPower = 0;
  }
}
function heatButton() {
  if (currentHeat > 0) {
    currentHeat--;
    if (currentHeat < 0) {
      currentHeat = 0;
    }
  }
}
function update() {
  pctPower = (currentPower/maxPower) * 100;
  pctHeat = (currentHeat/maxHeat) * 100;
  pctRad = (currentRad/maxRad) * 100;
  if (pctPower <= 100) {
    get("power").style.width = pctPower + "%";
  } else {
    get("power").style.width = "100%";
  }
  get("power").innerHTML = currentPower + "/" + maxPower;
  if (pctHeat <= 100) {
    get("heat").style.width = pctHeat + "%";
  } else {
    get("heat").style.width = "100%";
  }
  get("heat").innerHTML = currentHeat + "/" + maxHeat;
  get("money").innerHTML = currentCash + "$";
  if (selectCell) {
    get(selectCell).src = "select/green" + selectCell;
  }
}
function updateSec() {
  if (currentPower + powerSec - powerSell >= 0) {
    currentPower -= powerSell;
    currentCash += powerSell;
  }
  currentPower += powerSec;
  currentHeat += heatSec;
  currentRad += radSec;
  if (currentPower < 0) {
    currentPower = 0;
  }
  if (currentHeat < 0) {
    currentHeat = 0;
  }
  if (currentRad < 0) {
    currentRad = 0;
  }
}
function updateMap() {

}
function openTab(pageName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabShop");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
function get(id) {
  return document.getElementById(id);
}
function aaa() {
  let a = "";
  let b = "";
  for (i = 1; i <= 256; i++) {
    b = `  _${i}: {
    comp: "",
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
`;
    a = a.concat(b);
  }
  console.log(a);
}