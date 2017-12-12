const getFixtures = () => JSON.parse(require('fs').readFileSync('spec/books.json', 'utf-8'));
export {getFixtures}
