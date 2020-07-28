const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const options = {
  includeNodeLocations: true,
};

JSDOM.fromURL(
  'https://www.dogstrust.org.uk/rehoming/dogs/filters/~269~~~~n~~/page/2',

  options,
).then((dom) => {
  console.log(dom.serialize());
});
