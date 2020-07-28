const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const options = {
  includeNodeLocations: true,
};

const getDogsTrustDogs = async (filterId, page) => {
  const dom = await JSDOM.fromURL(
    `https://www.dogstrust.org.uk/rehoming/dogs/filters/~${filterId}~~~~n~~/page/${page}`,
    options,
  );
  const dogs = [...dom.window.document.querySelectorAll("a[id*='lnkDog']")].map(
    (node) => {
      return {
        link: node.href,
        name: node.querySelector('h3').textContent.replace('\n', '').trim(),
      };
    },
  );

  return dogs;
};

const getDogs = async () => {
  let dogs = await Promise.all([
    getDogsTrustDogs(269, 1),
    getDogsTrustDogs(269, 2),
  ]);
  dogs = dogs.flat();
  console.log(dogs, dogs.length);
};

getDogs();
