const fs = require('fs');
const Cite = require('citation-js');
const { plugins } = require('@citation-js/core');


module.exports = function() {
    const bibtexFilePath = `src/_data/bibliography.bib`;
    const bibtexFile = fs.readFileSync(bibtexFilePath, {encoding:'utf8', flag:'r'});
    const bibtexEntries = plugins.input.chainLink(bibtexFile);

    let bibtexDicts = [];
    for (const bibtexEntry of bibtexEntries) {
        const cite = new Cite(bibtexEntry);
        bibtexDicts.push({
            "bibtexLabel": cite.data[0].id,
            "bibtexItem": cite.format('bibtex'),
        })
    }
    return bibtexDicts;
};
