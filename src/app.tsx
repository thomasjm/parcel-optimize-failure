
console.log("Hello world!");

class Foo {
  constructor(public options: any) {
    console.log("Got options", options);
  }
}

const DataExplorer = import("@nteract/data-explorer");

console.log("Got DataExplorer", DataExplorer);

console.log("Foo", new Foo({42: "bar"}));
