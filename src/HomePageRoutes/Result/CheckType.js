import scoredata from "./scoredata.json";

let type = "";

export function showResults() {
  if (type.length > 3) {
    return type;
  }
  type += scoredata.score.e >= scoredata.score.i ? "E" : "I";
  type += scoredata.score.s >= scoredata.score.n ? "S" : "N";
  type += scoredata.score.t >= scoredata.score.f ? "T" : "F";
  type += scoredata.score.j >= scoredata.score.p ? "J" : "P";
  console.log(type);
}
