/**
 * Word-count helpers for the Cactus theme.
 *
 * Chinese characters count individually; words and numbers in other scripts
 * count as one each. Code blocks are deliberately excluded so a pasted code
 * listing does not inflate an article's reading length.
 */
function textFromContent(content) {
  return String(content || '')
    .replace(/<(pre|code|figure)\b[^>]*(?:class=["'][^"']*highlight[^"']*["'])?[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:#\d+|#x[\da-f]+|[a-z]+);/gi, ' ');
}

function countWords(content) {
  const text = textFromContent(content);
  const han = (text.match(/\p{Script=Han}/gu) || []).length;
  const remaining = text.replace(/\p{Script=Han}/gu, ' ');
  const words = (remaining.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) || []).length;
  return han + words;
}

function formatCount(content) {
  return countWords(content).toLocaleString('zh-CN');
}

hexo.extend.helper.register('wordcount', function (post) {
  return formatCount(post && post.content);
});

hexo.extend.helper.register('reading_time', function (post) {
  return Math.max(1, Math.ceil(countWords(post && post.content) / 300));
});

hexo.extend.helper.register('site_wordcount', function (posts) {
  let total = 0;
  if (posts && typeof posts.each === 'function') {
    posts.each(post => { total += countWords(post.content); });
  }
  return total.toLocaleString('zh-CN');
});
