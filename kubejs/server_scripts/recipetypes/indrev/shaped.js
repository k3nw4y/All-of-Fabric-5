////////////////////////
/// Made by Team AOF ///
////////////////////////

onEvent('recipes', (event) => {

  const recipes = [
    {
      output: 'indrev:machine_block',
      pattern: ['BAB', 'BCB', 'BAB'],
      key: {
        A: 'indrev:nikolite_dust',
        B: '#c:iron_plates',
        C: 'indrev:battery',
    },
      id: 'indrev:shaped/machine_block'
    },

    {
      output: '8x indrev:item_pipe_mk1',
      pattern: ['BAB'],
      key: {
        A: 'goldenhoppers:golden_hopper',
        B: '#c:iron_plates',
    },
      id: 'indrev:shaped/item_pipe_mk1'
    },

     {
      output: '8x indrev:fluid_pipe_mk1',
      pattern: ['BAB'],
      key: {
        A: 'kibe:fluid_hopper',
        B: '#c:iron_plates',
    },
      id: 'indrev:shaped/fluid_pipe_mk1'
    },

    {
      output: 'indrev:lazuli_flux_container_mk4',
      pattern: ['BCB', 'CAC', 'BCB'],
      key: {
        A: 'indrev:circuit_mk4',
        B: '#c:electrum_plates',
        C: 'indrev:lazuli_flux_container_mk3',
    },
      id: 'indrev:shaped/lazuli_flux_container_mk4'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
