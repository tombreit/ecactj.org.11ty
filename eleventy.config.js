const EleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {EleventyHtmlBasePlugin} = require("@11ty/eleventy");
const EleventyRssPlugin = require("@11ty/eleventy-plugin-rss");

const markdownIt = require("markdown-it");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRssPlugin);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy('assets');

  const markdownItRenderer = new markdownIt();    
  eleventyConfig.addFilter('markdownify', (str) => {
      if (str) {
        return markdownItRenderer.renderInline(str);
      }
  });

  eleventyConfig.addShortcode("createAbbrLinkShortcode", function(text, url, abbr) {
    if (text && url && abbr) {
      return `<a href="${url}"><abbr title="${text}">${abbr}</abbr></a>`
    } else if (text && url) {
      return `<a href="${url}">${text}</a>`
    } else if (text && abbr) {
      return `<abbr title="${text}">${abbr}</abbr>`
    } else if (text) {
      return `${text}`
    } else {
      return "";
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
  }
}
