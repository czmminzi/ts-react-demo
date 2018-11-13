module.exports = {
  parserOpts : {
    // headerPattern: /^\[(\w*)\](\w*)&/,
    headerPattern: /^\[(feat|fix|docs|style|refactor|test|chore)\](.*)/,
    headerCorrespondence: ['type', 'subject']
  }
};