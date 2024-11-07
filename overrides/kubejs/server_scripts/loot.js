// priority: 0

LootJS.modifiers((event) => {
  [
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:enderman",
    "minecraft:creeper",
    "minecraft:slime",
    "minecraft:spider",
    "minecraft:cave_spider",
    "minecraft:drowned",
    "minecraft:guardian",
    "minecraft:elder_guardian",
    "minecraft:piglin_brute",
    "minecraft:piglin",
    "minecraft:zombified_piglin",
    "minecraft:blaze",
    "minecraft:wither_skeleton",
    "minecraft:stray",
    "mekanismadditions:baby_stray",
    "mekanismadditions:baby_enderman",
    "mekanismadditions:baby_skeleton",
    "mekanismadditions:baby_creeper",
    "mekanismadditions:baby_wither_skeleton",
    "minecraft:witch",
    "minecraft:zoglin",
    "minecraft:zombie_villager",
    "minecraft:ghast",
  ].forEach((entity) => {
    event
      .addEntityLootModifier(entity)
      .randomChance(0.15)
      .addWeightedLoot([0, 4], [Item.of("kubejs:loot_bag_common")]);
  });

  [
    "minecraft:enderman",
    "minecraft:guardian",
    "minecraft:elder_guardian",
    "minecraft:piglin_brute",
    "minecraft:piglin",
    "minecraft:zombified_piglin",
    "minecraft:blaze",
    "minecraft:wither_skeleton",
    "mekanismadditions:baby_wither_skeleton",
    "minecraft:ghast",
  ].forEach((entity) => {
    event
      .addEntityLootModifier(entity)
      .randomChance(0.1)
      .addWeightedLoot([0, 4], [Item.of("kubejs:loot_bag_rare")]);
  });

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .randomChance(0.5)
    .addWeightedLoot([0, 4], [Item.of("kubejs:loot_bag_mythic")]);

  event
    .addEntityLootModifier("minecraft:wither")
    .randomChance(0.5)
    .addWeightedLoot([0, 2], [Item.of("kubejs:loot_bag_mythic")]);

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .randomChance(0.8)
    .addWeightedLoot([0, 4], [Item.of("kubejs:loot_bag_legendary")]);

  event
    .addEntityLootModifier("minecraft:wither")
    .randomChance(0.8)
    .addWeightedLoot([0, 2], [Item.of("kubejs:loot_bag_legendary")]);

  [
    "bosses_of_mass_destruction:gauntlet",
    "bosses_of_mass_destruction:lich",
    "bosses_of_mass_destruction:obsidilith",
  ].forEach((boss) => {
    event
      .addEntityLootModifier(boss)
      .addWeightedLoot([0, 4], [Item.of("kubejs:loot_bag_legendary")])
      .addWeightedLoot([0, 4], [Item.of("kubejs:loot_bag_mythic")]);
  });
});

// player drop his head
EntityEvents.death("player", (event) => {
  const { player } = event;

  player.block.popItem(Item.playerHead(player.username));
});
