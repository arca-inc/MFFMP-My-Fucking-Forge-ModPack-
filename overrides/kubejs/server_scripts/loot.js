// priority: 0

LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("minecraft:zombie")
    .addLoot("kubejs:loot_bag_common", (loot) => loot.randomChance(0.05)); // 5% de chance

  event
    .addEntityLootModifier("minecraft:skeleton")
    .addLoot("kubejs:loot_bag_common", (loot) => loot.randomChance(0.05)); // 5% de chance

  event
    .addEntityLootModifier("minecraft:enderman")
    .addLoot("kubejs:loot_bag_common", (loot) => loot.randomChance(0.05)) // 5% de chance
    .addLoot("kubejs:loot_bag_rare", (loot) => loot.randomChance(0.01)); // 1% de chance

  event
    .addEntityLootModifier("minecraft:creeper")
    .addLoot("kubejs:loot_bag_common", (loot) => loot.randomChance(0.05)); // 5% de chance

  event
    .addEntityLootModifier("minecraft:slime")
    .addLoot("kubejs:loot_bag_common", (loot) => loot.randomChance(0.05)); // 5% de chance

  event
    .addEntityLootModifier("minecraft:spider")
    .addLoot("kubejs:loot_bag_common", (loot) => loot.randomChance(0.05)); // 5% de chance

  event
    .addEntityLootModifier("minecraft:cave_spider")
    .addLoot("kubejs:loot_bag_common", (loot) => loot.randomChance(0.05)); // 5% de chancem

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .addLoot("kubejs:loot_bag_legendary", (loot) => loot.randomChance(0.8)) // 80% de chance
    .addLoot("kubejs:loot_bag_mythic", (loot) => loot.randomChance(0.5)); // 50% de chance

  event
    .addEntityLootModifier("minecraft:wither")
    .addLoot("kubejs:loot_bag_legendary", (loot) => loot.randomChance(0.8)) // 80% de chance
    .addLoot("kubejs:loot_bag_mythic", (loot) => loot.randomChance(0.5)); // 50% de chance

  event
    .addEntityLootModifier("botania:doppelganger")
    .addLoot("kubejs:loot_bag_legendary", (loot) => loot.randomChance(0.8)) // 80% de chance
    .addLoot("kubejs:loot_bag_mythic", (loot) => loot.randomChance(0.5)); // 50% de chance

  event
    .addEntityLootModifier("bosses_of_mass_destruction:gauntlet")
    .addLoot("kubejs:loot_bag_legendary", (loot) => loot.randomChance(1.0)) // 100% de chance
    .addLoot("kubejs:loot_bag_mythic", (loot) => loot.randomChance(1.0)); // 100% de chance

  event
    .addEntityLootModifier("bosses_of_mass_destruction:lich")
    .addLoot("kubejs:loot_bag_legendary", (loot) => loot.randomChance(1.0)) // 100% de chance
    .addLoot("kubejs:loot_bag_mythic", (loot) => loot.randomChance(1.0)); // 100% de chance

  event
    .addEntityLootModifier("bosses_of_mass_destruction:obsidilith")
    .addLoot("kubejs:loot_bag_legendary", (loot) => loot.randomChance(1.0)) // 100% de chance
    .addLoot("kubejs:loot_bag_mythic", (loot) => loot.randomChance(1.0)); // 100% de chance
});

// player drop his head
EntityEvents.death("player", (event) => {
  const { player } = event;

  player.block.popItem(Item.playerHead(player.username));
});
