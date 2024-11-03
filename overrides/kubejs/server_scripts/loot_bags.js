const lootTables = {
  loot_bag_common: [
    // 50% chances d'obtenir entre 1 et 12 sticks
    {
      item: "minecraft:stick",
      chance: 0.5,
      maxQuantity: 12,
    },

    // 5% chance d'obtenir 1 seau d'axolotl
    {
      item: "minecraft:axolotl_bucket",
      chance: 0.05,
      maxQuantity: 1,
      customName: "§e§lGippsy The Axolotl",
    },

    // 20% chances d'obtenir 1 à 64 cobblestones
    {
      item: "minecraft:cobblestone",
      chance: 0.2,
      maxQuantity: 64,
    },

    // 10% chances d'obtenir 1 à 64 raw copper
    {
      item: "minecraft:raw_copper",
      chance: 0.1,
      maxQuantity: 64,
    },

    // 5% chances d'obtenir 1 à 64 raw iron
    {
      item: "minecraft:raw_iron",
      chance: 0.05,
      maxQuantity: 64,
    },

    // 2% chances d'obtenir 1 seau d'eau
    {
      item: "minecraft:water_bucket",
      chance: 0.02,
      maxQuantity: 1,
      customName: "§b§lThirsty ?",
    },

    // 1% chances d'obtenir 1 seau de lave
    {
      item: "minecraft:lava_bucket",
      chance: 0.01,
      maxQuantity: 1,
      customName: "§c§lHot Bath ?",
    },

    // 1% chances d'obtenir entre 1 et 2 ender pearls
    {
      item: "minecraft:ender_pearl",
      chance: 0.01,
      maxQuantity: 2,
    },

    // 6% chances d'obtenir un os
    {
      item: "minecraft:bone",
      chance: 0.06,
      maxQuantity: 1,
      customName: "§e§lDoggy Snack",
    },
  ],
  loot_bag_rare: [
    {
      item: "minecraft:diamond",
      maxQuantity: 1,
      chance: 0.01,
    },
    {
      item: "minecraft:emerald",
      maxQuantity: 2,
      chance: 0.05,
    },
    {
      item: "minecraft:iron_pickaxe",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§7§lMiner's Pick",
    },
    {
      item: "minecraft:flint_and_steel",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§6§lSpark Igniter",
    },
    {
      item: "minecraft:spyglass",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§e§lEagle Eye",
    },
    {
      item: "minecraft:clock",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§f§lTimekeeper",
    },
    {
      item: "minecraft:redstone",
      maxQuantity: 16,
      chance: 0.25,
    },
    {
      item: "naturescompass:naturescompass",
      maxQuantity: 1,
      chance: 0.25,
      customName: "§2§lNature's Navigator",
    },
    {
      item: "minecraft:compass",
      maxQuantity: 1,
      chance: 0.44,
      customName: "§b§lWanderer's Guide",
    },
  ],
  loot_bag_epic: [
    {
      item: "mekanism:alloy_reinforced",
      maxQuantity: 4,
      chance: 0.05,
    },
    {
      item: "minecraft:ender_pearl",
      maxQuantity: 16,
      chance: 0.65,
    },
    {
      item: "enderstorage:ender_pouch",
      maxQuantity: 1,
      chance: 0.01,
      customName: "§d§lDimensional Pouch",
    },
    {
      item: "tbouncepad:bounce_pad",
      maxQuantity: 4,
      chance: 0.05,
      customName: "§a§lBounce Pad",
    },
    {
      item: "ae2:chipped_budding_quartz",
      maxQuantity: 4,
      chance: 0.08,
      customName: "§b§lChipped Quartz Bud",
    },
    {
      item: "ae2:quartz_block",
      maxQuantity: 10,
      chance: 0.06,
      customName: "§f§lQuartz Foundation",
    },
    {
      item: "ironchest:iron_to_gold_chest_upgrade",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§6§lIron to Gold Chest Upgrade",
    },
    {
      item: "ironchest:gold_to_diamond_chest_upgrade",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§b§lGold to Diamond Chest Upgrade",
    },
  ],
  loot_bag_legendary: [
    {
      item: "sophisticatedbackpacks:gold_backpack",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§6§lGolden Explorer's Pack",
    },
    {
      item: "sophisticatedbackpacks:diamond_backpack",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§b§lDiamond Adventurer's Pack",
    },
    {
      item: "bhc:blue_heart_canister",
      maxQuantity: 10,
      chance: 0.1,
      customName: "§9§lBlue Heart Canister",
    },
    {
      item: "bhc:green_heart_canister",
      maxQuantity: 10,
      chance: 0.1,
      customName: "§2§lGreen Heart Canister",
    },
    {
      item: "bhc:yellow_heart_canister",
      maxQuantity: 10,
      chance: 0.1,
      customName: "§e§lYellow Heart Canister",
    },
    {
      item: "bhc:red_heart_canister",
      maxQuantity: 10,
      chance: 0.1,
      customName: "§c§lRed Heart Canister",
    },
    {
      item: "bhc:soul_heart_canister",
      maxQuantity: 10,
      chance: 0.1,
      customName: "§5§lSoul Heart Canister",
    },
    {
      item: "minecraft:obsidian",
      maxQuantity: 16,
      chance: 0.1,
      customName: "§8§lDarkstone Block",
    },
    {
      item: "mekanism:alloy_atomic",
      maxQuantity: 2,
      chance: 0.01,
      customName: "§d§lAtomic Alloy",
    },
    {
      item: "croptopia:beer",
      maxQuantity: 64,
      chance: 0.09,
      customName: "§6§lBrewer's Delight",
    },
  ],
  loot_bag_mythic: [
    {
      item: "minecraft:diamond_block",
      maxQuantity: 16,
      chance: 0.1,
    },
    {
      item: "minecraft:diamond_ore",
      maxQuantity: 24,
      chance: 0.5,
    },
    {
      item: "minecraft:glowstone",
      maxQuantity: 64,
      chance: 0.1,
    },
    {
      item: "mekanism:atomic_disassembler",
      maxQuantity: 1,
      chance: 0.01,
      customName: "§6§lUltimate Tool",
    },
    {
      item: "ae2:cell_component_64k",
      maxQuantity: 1,
      chance: 0.05,
      customName: "§3§l64k Storage Cell",
    },
    {
      item: "ae2:cell_component_256k",
      maxQuantity: 1,
      chance: 0.02,
      customName: "§5§l256k Storage Cell",
    },
  ],
};

const lootBagNames = {
  loot_bag_common: "§b§lCommon Loot Bag",
  loot_bag_rare: "§1§lRare Loot Bag",
  loot_bag_epic: "§5§lEpic Loot Bag",
  loot_bag_legendary: "§e§lLegendary Loot Bag",
  loot_bag_mythic: "§v§lMythic Loot Bag",
};

// Fonction pour obtenir un loot aléatoire
function getRandomLoot(lootBag, lootBagType) {
  let loot;

  // Si le loot bag est épique, légendaire ou mythique, on s'assure qu'il ne soit jamais vide
  const requiresLoot = [
    "loot_bag_epic",
    "loot_bag_legendary",
    "loot_bag_mythic",
  ].includes(lootBagType);

  do {
    loot = [];
    lootBag.forEach((entry) => {
      if (Math.random() < entry.chance) {
        let itemQuantity;

        // Déterminer la quantité en fonction de maxQuantity
        if (entry.maxQuantity > 1) {
          itemQuantity = Math.floor(Math.random() * entry.maxQuantity) + 1; // Entre 1 et maxQuantity
        } else {
          itemQuantity = entry.maxQuantity; // Toujours 1 pour maxQuantity de 1
        }

        const lootItem = { item: entry.item, quantity: itemQuantity };

        // Si un nom personnalisé est défini, l'ajouter
        if (entry.customName) {
          lootItem.customName = entry.customName;
        }

        loot.push(lootItem);
      }
    });
  } while (requiresLoot && loot.length === 0); // Répéter si le sac est épique et que le loot est vide

  return loot;
}

// Right click events for opening loot bags
ItemEvents.rightClicked((event) => {
  const item = event.getItem();
  const player = event.getPlayer();

  // Extraire le type de loot bag à partir de l'ID de l'item
  const lootBagType = item.id.replace("kubejs:", "");

  if (lootTables[lootBagType]) {
    // Obtenir le loot aléatoire
    let loot_loot_bags = getRandomLoot(lootTables[lootBagType], lootBagType);

    // Vérifier s'il y a du loot et préparer le message
    let message_loot_bags = "";
    let lootBagName =
      lootBagNames[lootBagType] ||
      lootBagType.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    if (loot_loot_bags.length > 0) {
      message_loot_bags = `You opened a ${lootBagName}!§r`;

      // Ajouter les détails du loot au message
      loot_loot_bags.forEach((lootItem) => {
        message_loot_bags += `\n- ${lootItem.quantity} x ${lootItem.item
          .replace("minecraft:", "")
          .replace(/_/g, " ")}`;

        // Donner l'item au joueur
        let lootItemToGive = Item.of(lootItem.item, lootItem.quantity);
        if (lootItem.customName) {
          lootItemToGive = lootItemToGive.withName(lootItem.customName);
        }
        event.player.give(lootItemToGive);
      });
    } else {
      message_loot_bags = `You opened a ${lootBagName}!§r But nothing of value was found.`;
    }

    // Envoyer le message au joueur comme un message système
    player.sendSystemMessage(message_loot_bags);

    // Réduire le nombre d'items dans l'inventaire
    item.setCount(item.getCount() - 1);
  }
});
