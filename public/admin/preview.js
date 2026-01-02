CMS.registerPreviewTemplate("blog", ({ entry }) => {
  const seo = entry.getIn(["data", "seo"]) || {};
  const title = seo.get("title") || entry.getIn(["data", "title"]);
  const desc = seo.get("description") || entry.getIn(["data", "description"]) || "";

  return `
    <div style="font-family:Arial;padding:12px">
      <div style="color:#1a0dab;font-size:18px">${title}</div>
      <div style="color:#006621;font-size:14px">
        https://bitdoze-astro-theme.pages.dev/your-post
      </div>
      <div style="color:#4d5156;font-size:14px">${desc}</div>
    </div>
  `;
});
