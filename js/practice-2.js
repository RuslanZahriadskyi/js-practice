// Task
// You will be given a list of objects.Each object has type, material, and possibly secondMaterial.
// The existing materials are: paper, glass, organic, and plastic.

// Your job is to sort these objects across the 4 recycling bins according
// to their material(and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in both of the respective bins
// The order of the type's in each bin should be the same as the order of their respective objects was in the input list

// Вам будет предоставлен список объектов.Каждый объект имеет type, materialи, возможно secondMaterial.
// Существующие материалы: paper, glass, organic, и plastic.

// Ваша задача - отсортировать эти объекты по 4 корзинам для переработки в соответствии
// с их material(и secondMaterialесли они есть), перечислив typeобъекты, которые должны попасть в эти корзины.

// Примечания
// Контейнеры должны быть в том же порядке, что и материалы, перечисленные выше.
// Все ячейки должны быть перечислены в выводе, даже если некоторые из них пусты.
// Если объект сделан из двух материалов, он typeдолжен быть указан в обеих соответствующих ячейках.
// Порядок элементов typeв каждом бункере должен быть таким же, как порядок их соответствующих объектов в списке ввода.

function recycle(array) {
  class Array {
    constructor(getNewArray, material) {
      this.array = getNewArray;
      this.material = material;
    }

    findByMaterial() {
      const findMaterial = this.array
        .filter((el) => {
          return (
            el.material === this.material || el.secondMaterial === this.material
          );
        })
        .map((el) => {
          return el.type;
        });

      return findMaterial;
    }
  }

  let output = [];

  const paper = new Array(array, "paper");
  const glass = new Array(array, "glass");
  const organic = new Array(array, "organic");
  const plastic = new Array(array, "plastic");

  output.push(
    paper.findByMaterial(),
    glass.findByMaterial(),
    organic.findByMaterial(),
    plastic.findByMaterial()
  );

  return output;
}

const input = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

console.log(recycle(input));

// function recycle(array) {
//   const PAPER = "paper";
//   const GLASS = "glass";
//   const ORGANIC = "organic";
//   const PLASTIC = "plastic";

//   let output = [];

//   const findPaper = array
//     .filter((el) => {
//       return el.material === PAPER || el.secondMaterial === PAPER;
//     })
//     .map((el) => {
//       return el.type;
//     });

//   const findGlass = array
//     .filter((el) => {
//       return el.material === GLASS || el.secondMaterial === GLASS;
//     })
//     .map((el) => {
//       return el.type;
//     });

//   const findOrganic = array
//     .filter((el) => {
//       return el.material === ORGANIC || el.secondMaterial === ORGANIC;
//     })
//     .map((el) => {
//       return el.type;
//     });

//   const findPlastic = array
//     .filter((el) => {
//       return el.material === PLASTIC || el.secondMaterial === PLASTIC;
//     })
//     .map((el) => {
//       return el.type;
//     });

//   output.push(findPaper);
//   output.push(findGlass);
//   output.push(findOrganic);
//   output.push(findPlastic);

//   return output;
// }

// ================================================================
// Best Practices

const recyclerMaterials = ["paper", "glass", "organic", "plastic"];

function tet(objects) {
  return recyclerMaterials.map((m) =>
    objects
      .filter((o) => o.material == m || o.secondMaterial == m)
      .map((o) => o.type)
  );
}

const objects = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

console.log(tet(objects));
