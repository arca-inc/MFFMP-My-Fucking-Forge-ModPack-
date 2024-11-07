// Define the Certus Quartz Ore block with relevant tags and properties
StartupEvents.registry("block", (event) => {
  // Certus Quartz Ore Block
  event
    .create("ore_certus_quartz")
    .textureAll("kubejs:block/quartz_ore")
    .hardness(3) // Set the block hardness
    .tag("forge:ores") // Makes this block a generic ore
    .tag("forge:ores/certus_quartz") // Makes this block an ore for Certus Quartz
    .tagBlock("forge:ores/certus_quartz") // Applies the Certus Quartz ore tag to the block itself
    .tagBlock("minecraft:mineable/pickaxe") // Specifies that the block is mineable with a pickaxe
    .tagBlock("minecraft:needs_iron_tool") // Requires at least an iron tool to break
    .tagBlock("forge:ores_in_ground/stone") // Specifies that the ore generates in stone
    .tag("forge:ore_rates/regular"); // Defines the ore rate category

  // Charged Certus Quartz Ore Block
  event
    .create("ore_charged_certus_quartz")
    .textureAll("kubejs:block/charged_quartz_ore")
    .hardness(3) // Set the block hardness
    .tag("forge:ores") // Makes this block a generic ore
    .tag("forge:ores/charged_certus_quartz") // Makes this block an ore for Charged Certus Quartz
    .tagBlock("forge:ores/charged_certus_quartz") // Applies the Charged Certus Quartz ore tag to the block itself
    .tagBlock("minecraft:mineable/pickaxe") // Specifies that the block is mineable with a pickaxe
    .tagBlock("minecraft:needs_iron_tool") // Requires at least an iron tool to break
    .tagBlock("forge:ores_in_ground/stone") // Specifies that the ore generates in stone
    .tag("forge:ore_rates/rare"); // Defines the ore rate category
});

WorldgenEvents.add((event) => {
  let anchors = event.getAnchors();

  event.addOre((ore) => {
    ore.id = "kubejs:ore_certus_quartz";
    ore.biomes = /^minecraft:.*/;

    ore.addTarget(
      "#minecraft:stone_ore_replaceables",
      "kubejs:ore_certus_quartz"
    );
    ore.addTarget("minecraft:deepslate", "kubejs:ore_certus_quartz");
    ore
      .count([1, 8]) // generate between 1 and 8 veins
      .squared() // randomly spreads the ores out across the chunk, instead of generating them in a column
      .triangleHeight(
        // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
        anchors.aboveBottom(-64), // the lower bound should be -64 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
        anchors.absolute(32) // the upper bound, meanwhile is set to be just exactly at Y = 32
      );

    ore.size = 9;
    ore.noSurface = 0.5;
    ore.worldgenLayer = "underground_ores";
    ore.chance = 0;
  });

  event.addOre((ore) => {
    ore.id = "kubejs:ore_charged_certus_quartz";
    ore.biomes = /^minecraft:.*/;

    ore.addTarget(
      "#minecraft:stone_ore_replaceables",
      "kubejs:ore_charged_certus_quartz"
    );
    ore.addTarget("minecraft:deepslate", "kubejs:ore_charged_certus_quartz");
    ore
      .count([1, 8]) // generate between 1 and 8 veins
      .squared() // randomly spreads the ores out across the chunk, instead of generating them in a column
      .triangleHeight(
        // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
        anchors.aboveBottom(-64), // the lower bound should be -64 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
        anchors.absolute(32) // the upper bound, meanwhile is set to be just exactly at Y = 32
      );

    ore.size = 9;
    ore.noSurface = 0.5;
    ore.worldgenLayer = "underground_ores";
    ore.chance = 0;
  });
});
