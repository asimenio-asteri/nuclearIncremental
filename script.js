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
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _2: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _3: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _4: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _5: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _6: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _7: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _8: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _9: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _10: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _11: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _12: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _13: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _14: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _15: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _16: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _17: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _18: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _19: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _20: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _21: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _22: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _23: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _24: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _25: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _26: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _27: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _28: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _29: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _30: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _31: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _32: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _33: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _34: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _35: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _36: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _37: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _38: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _39: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _40: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _41: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _42: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _43: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _44: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _45: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _46: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _47: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _48: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _49: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _50: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _51: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _52: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _53: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _54: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _55: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _56: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _57: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _58: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _59: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _60: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _61: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _62: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _63: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _64: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _65: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _66: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _67: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _68: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _69: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _70: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _71: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _72: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _73: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _74: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _75: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _76: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _77: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _78: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _79: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _80: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _81: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _82: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _83: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _84: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _85: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _86: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _87: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _88: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _89: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _90: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _91: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _92: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _93: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _94: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _95: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _96: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _97: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _98: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _99: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _100: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _101: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _102: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _103: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _104: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _105: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _106: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _107: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _108: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _109: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _110: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _111: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _112: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _113: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _114: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _115: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _116: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _117: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _118: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _119: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _120: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _121: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _122: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _123: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _124: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _125: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _126: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _127: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _128: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _129: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _130: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _131: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _132: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _133: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _134: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _135: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _136: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _137: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _138: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _139: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _140: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _141: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _142: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _143: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _144: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _145: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _146: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _147: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _148: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _149: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _150: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _151: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _152: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _153: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _154: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _155: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _156: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _157: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _158: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _159: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _160: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _161: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _162: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _163: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _164: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _165: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _166: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _167: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _168: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _169: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _170: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _171: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _172: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _173: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _174: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _175: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _176: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _177: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _178: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _179: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _180: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _181: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _182: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _183: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _184: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _185: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _186: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _187: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _188: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _189: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _190: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _191: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _192: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _193: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _194: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _195: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _196: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _197: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _198: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _199: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _200: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _201: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _202: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _203: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _204: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _205: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _206: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _207: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _208: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _209: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _210: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _211: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _212: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _213: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _214: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _215: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _216: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _217: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _218: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _219: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _220: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _221: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _222: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _223: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _224: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _225: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _226: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _227: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _228: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _229: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _230: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _231: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _232: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _233: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _234: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _235: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _236: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _237: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _238: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _239: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _240: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _241: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _242: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _243: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _244: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _245: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _246: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _247: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _248: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _249: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _250: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _251: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _252: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _253: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _254: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _255: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
  _256: {
    comp: "",
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  }
};
setInterval(update, 10);
setInterval(updateMap, 1000);
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
      map[mapKey].power = 1;
      map[mapKey].heat = 2;
      map[mapKey].ticksLeft = 15;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "dual_hydrogen.png" && currentCash >= 20) {
      currentCash -= 20;
      powerSec += 2;
      heatSec += 4;
      map[mapKey].comp = "dH";
      map[mapKey].power = 2;
      map[mapKey].heat = 4;
      map[mapKey].ticksLeft = 25;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "quad_hydrogen.png" && currentCash >= 30) {
      currentCash -= 30;
      powerSec += 8;
      heatSec += 16;
      map[mapKey].comp = "qH";
      map[mapKey].power = 8;
      map[mapKey].heat = 16;
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
    powerSec -= map[mapKey].power;
    map[mapKey].power = 0;
    heatSec -= map[mapKey].heat;
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
  for (var cell in map) {
    let cellId = cell.replace(/_/g, "");
    let keyed = map[cell];
    if (keyed.ticksLeft > -1) {
      keyed.ticksLeft -= 1;
    }
    if (keyed.ticksLeft == -1) {
      keyed.comp = "";
      powerSec -= keyed.power;
      keyed.power = 0;
      heatSec -= keyed.heat;
      keyed.heat = 0;
      keyed.ticksLeft = -1;
      keyed.sellVal = 0;
      get(cellId).innerHTML = "";
    }
  }
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
    power: 0,
    heat: 0,
    ticksLeft: -1,
    sellVal: 0
  },
`;
    a = a.concat(b);
  }
  console.log(a);
}