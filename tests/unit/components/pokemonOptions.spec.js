import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("debe hacer match con el snapshots", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe mostrar las 4 opciones correctamente", () => {
    const liAll = wrapper.findAll("li");
    expect(liAll.length).toBe(4);

    expect(liAll[0].text()).toBe("bulbasaur");
    expect(liAll[1].text()).toBe("eevee");
    expect(liAll[2].text()).toBe("magicar");
    expect(liAll[3].text()).toBe("ditto");
  });

  test('debe emitir "selection" con sus respectivos parametros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");

    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");

    expect(wrapper.emitted("selectionPokemon").length).toBe(1);
    expect(wrapper.emitted("selectionPokemon")[0]).toEqual([1]);
  });
});
