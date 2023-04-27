import Module from "../lib/module.mjs";
import Viz from "./viz.mjs";
import { decode } from "../lib/encoded.mjs";

export function instance() {
  return Module({ wasm: decode() }).then(m => new Viz(m));
}
