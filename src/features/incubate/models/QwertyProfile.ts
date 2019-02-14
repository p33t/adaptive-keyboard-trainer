import {IKeyboardProfile} from "./IKeyboardProfile";
import {RatedKeystrokesBuilder} from "./RatedKeystrokesBuilder";

export class QwertyProfile implements IKeyboardProfile {
  keys = new RatedKeystrokesBuilder()
      .add(" ", 10)
      .add("asdfjkl;", 15)
      .add("ASDFJKL:", 20)
      .add("weruio", 23)
      .add("ghmc,xnv", 25)
      .add(".z/t", 26)
      .add("WERUIO", 28)
      .add("GHMCNV<X>T", 30)
      .add("Z?", 32)
      .add("b'qpy[", 35)
      .add("]B\"QPY{", 40)
      .add("}\\", 45)
      .add("|", 50)
      .add("2390", 53)
      .add("4578-", 55)
      .add("@#()", 58)
      .add("$%&*_`=16", 60)
      .add("~+!^", 65)
      .arr;
  name = "QWERTY";
}
