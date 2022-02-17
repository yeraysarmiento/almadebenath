function importAll(files) {
  let images = {};
  files.keys().map((item, index) => {
    images[item.replace("./", "")] = files(item);
  });
  return Object.values(images);
}

const data = {
  personal: {
    arch: {
      title: "arch",
      pictures: importAll(
        require.context("./img/personal/arch", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    copilot: {
      title: "copilot",
      pictures: importAll(
        require.context("./img/personal/copilot", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    desert: {
      title: "desert",
      pictures: importAll(
        require.context("./img/personal/desert", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    essential: {
      title: "essential",
      pictures: importAll(
        require.context("./img/personal/essential", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    facades: {
      title: "facades",
      pictures: importAll(
        require.context("./img/personal/facades", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    lafamilie: {
      title: "la familie",
      pictures: importAll(
        require.context("./img/personal/lafamilie", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    onarock: {
      title: "on a rock",
      pictures: importAll(
        require.context("./img/personal/onarock", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    places: {
      title: "places",
      pictures: importAll(
        require.context("./img/personal/places", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    polish: {
      title: "polish",
      pictures: importAll(
        require.context("./img/personal/polish", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    rouge: {
      title: "rouge",
      pictures: importAll(
        require.context("./img/personal/rouge", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    stairs: {
      title: "stairs",
      pictures: importAll(
        require.context("./img/personal/stairs", false, /\.(png|jpe?g|svg)$/)
      ),
    },
    wallpapers: {
      title: "wallpapers",
      pictures: importAll(
        require.context(
          "./img/personal/wallpapers",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
  },
  location: {},
};

console.log(data);

export default data;
