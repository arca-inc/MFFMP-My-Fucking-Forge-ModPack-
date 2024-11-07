ServerEvents.recipes((event) => {
  // Helper function to match specific item counts in a grid and output the correct loot bag type
  function lootBagMatcher(grid, item) {
    let total = grid.width * grid.height;
    let code = "";

    for (let i = 0; i < total; i++) {
      let slotItem = grid.get(i);
      if (!slotItem.isEmpty()) code += slotItem.count;
    }

    // Matching item counts for loot bags
    if (code === "16") return Item.of("kubejs:loot_bag_rare");
    if (code === "64") return Item.of("kubejs:loot_bag_epic");
  }

  // Define recipes for each level of loot bag combination
  event
    .shapeless("kubejs:loot_bag_rare", Array(16).fill("kubejs:loot_bag_common"))
    .modifyResult(lootBagMatcher);
  event
    .shapeless("kubejs:loot_bag_epic", Array(64).fill("kubejs:loot_bag_rare"))
    .modifyResult(lootBagMatcher);
});
