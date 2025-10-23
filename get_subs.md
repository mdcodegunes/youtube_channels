(() => {
  const base = 'https://www.youtube.com';
  const urlPattern = /^\/(?:@|channel\/)/;
  const seen = new Set();
  const rows = [];

  document
    .querySelectorAll('ytd-shelf-renderer #dismissible ytd-channel-renderer')
    .forEach((channel) => {
      const anchor = channel.querySelector('a.channel-link[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !urlPattern.test(href)) return;

      const url = new URL(href, base).href;
      if (seen.has(url)) return;
      seen.add(url);

      const name =
        channel.querySelector('#channel-title #text')?.textContent.trim() ||
        anchor.textContent.trim() ||
        null;

      rows.push({ name, url });
    });

  console.table(rows);
  const plain = rows.map(({ url }) => url).join('\n');
  try {
    copy(plain);
    console.info('Copied channel URLs to clipboard.');
  } catch {
    console.warn('Clipboard copy failed; URLs are listed above.');
  }
  return rows;
})();