module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["njk", "html", "md", "css"]);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
