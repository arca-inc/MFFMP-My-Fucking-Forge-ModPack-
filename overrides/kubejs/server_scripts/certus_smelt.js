ServerEvents.recipes((event) => {
  event.smelting("ae2:certus_quartz_crystal", "kubejs:ore_certus_quartz");
  event.smelting(
    "ae2:charged_certus_quartz_crystal",
    "kubejs:ore_charged_certus_quartz"
  );
});
