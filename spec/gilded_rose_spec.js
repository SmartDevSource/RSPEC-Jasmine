var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose RSpec tests", function() {

  it("Doit incrémenter de 1 la qualité du Aged Brie", ()=>{
    const rose = new Shop([new Item("Aged Brie", 2, 0)]);
    const item = rose.updateQuality();
    expect(item[0].quality).toBe(1);
  })

  it("Ne doit jamais excéder une qualité supérieure à 50", ()=>{
    const rose = new Shop([new Item("Aged Brie", 4, 50)]);
    const item = rose.updateQuality();
    expect(item[0].quality).toBe(50);
  })

  it("Ne doit pas incrémenter la qualité du Sulfuras", ()=>{
    const rose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const item = rose.updateQuality();
    expect(item[0].quality).toBe(80);
  })

  it("Ne doit jamais avoir une qualité négative", ()=>{
    const rose = new Shop([new Item("+5 Dexterity Vest", 8, 0)]);
    const item = rose.updateQuality();
    expect(item[0].quality).toBe(0);
  })

  it("La valeur de la qualité doit être mise à zéro après un concert", ()=>{
    const rose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const item = rose.updateQuality();
    expect(item[0].quality).toBe(0);
  })

  it("La qualité doit baisser deux fois plus rapidement pour la variété Conjured", function () {
    const rose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const item = rose.updateQuality();
    expect(item[0].quality).toBe(4);
  });

  it("Doit incrémenter la qualité de 2 lorsque l'on est entre 6 à 11 jours du concert", function () {
    const rose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
    ]);
    const item = rose.updateQuality();
    expect(item[0].quality).toBe(12);
  });

  it("Doit incrémenter la qualité de 3 lorsque la date est inférieure ou égale à 5 jours du concert", function () {
    const rose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
    ]);
    const item = rose.updateQuality();
    expect(item[0].quality).toBe(13);
  });


});