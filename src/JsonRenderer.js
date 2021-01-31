
function traverseJson(target) {
  counter++;

  if (typeof target === "object") {
    for (const key in target) {
      traverseJson(target[key]);
    }
  } else {
    console.log(target);
  }
}


export default function JsonRenderer(){

}