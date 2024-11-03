// priority: 0

// Register items
StartupEvents.registry("item", (event) => {
  event
    .create("loot_bag_common")
    .displayName("§b§lCommon Loot Bag")
    .tooltip("§b§lA basic bag with common rewards")
    .maxStackSize(16)
    .texture("kubejs:item/loot_bag_common");

  event
    .create("loot_bag_rare")
    .displayName("§1§lRare Loot Bag")
    .tooltip("§1§lA rare bag with better rewards")
    .maxStackSize(16)
    .texture("kubejs:item/loot_bag_rare");

  event
    .create("loot_bag_epic")
    .displayName("§5§lEpic Loot Bag")
    .tooltip("§5§lAn epic bag with great rewards")
    .maxStackSize(16)
    .texture("kubejs:item/loot_bag_epic");

  event
    .create("loot_bag_legendary")
    .displayName("§e§lLegendary Loot Bag")
    .tooltip("§e§lA legendary bag with exceptional rewards")
    .maxStackSize(16)
    .texture("kubejs:item/loot_bag_legendary");

  event
    .create("loot_bag_mythic")
    .displayName("§v§lMythic Loot Bag")
    .tooltip("§v§lA mysterious bag with mythic treasures")
    .maxStackSize(16)
    .texture("kubejs:item/loot_bag_mythic");
});
