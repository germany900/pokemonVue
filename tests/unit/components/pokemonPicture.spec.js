import { shallowMount } from "@vue/test-utils";
import pokemonPicture from "@/components/pokemonPicture";

describe("pokemonPicture", () => {
  test("deberia de hacer match con el snapshot", () => {
    const wrapper = shallowMount(pokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("deberia mostrar la imagen oculta y el pokemon 100", () => {
    const wrapper = shallowMount(pokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });

    const [img1, img2] = wrapper.findAll("img");
    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    expect(img1.classes("hidden-pokemon")).toBeTruthy();
    expect(img1.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
    );
  });

  test("deberia mostrar la imagen si showPokemon esta en true", () => {
    const wrapper = shallowMount(pokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBeTruthy();
    expect(img.classes("hidden-pokemon")).toBe(false);
    expect(img.classes("fade-in")).toBe(true);
  });
});
