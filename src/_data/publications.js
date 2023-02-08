const fs = require('fs');
const slugify = require('@sindresorhus/slugify');
const Cite = require('citation-js');
const { plugins } = require('@citation-js/core');
// const config = plugins.config.get('@bibtex');
// const pluginBibtex = require("@citation-js/plugin-bibtex")


module.exports = function() {
    const bibtexFilePath = `src/_data/bibliography.bib`;
    const bibtexFile = fs.readFileSync(bibtexFilePath, {encoding:'utf8', flag:'r'});
    const bibtexEntries = plugins.input.chainLink(bibtexFile);

    // helpers
    function authorAsString(authorDict) {
        return `${authorDict.given} ${authorDict.family}`;
    }

    let publicationDicts = [];
    for (const bibtexEntry of bibtexEntries) {
      const cite = new Cite(bibtexEntry);
      const title = cite.data[0].title
      const bibtexLabel = cite.data[0].id
      const authors = cite.data[0].author.map(authorAsString)

      const citationSnippet = cite.format('bibliography', {
        format: 'html',
        template: 'apa',
        lang: 'en-US',
      });
     
      const publicationDict = {
        "citationSnippet": citationSnippet,
        "title": title,
        "slug": slugify(title),
        "bibtexLabel": bibtexLabel,
        "authors": authors.join(", "),
      }
      publicationDicts.push(publicationDict);
    }
    return publicationDicts;
};
