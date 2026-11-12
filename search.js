function normalizeShopSearch(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function isOneEditAway(first, second) {
  if (Math.abs(first.length - second.length) > 1) return false;

  let firstIndex = 0;
  let secondIndex = 0;
  let edits = 0;

  while (firstIndex < first.length && secondIndex < second.length) {
    if (first[firstIndex] === second[secondIndex]) {
      firstIndex += 1;
      secondIndex += 1;
      continue;
    }

    edits += 1;
    if (edits > 1) return false;

    if (first.length > second.length) {
      firstIndex += 1;
    } else if (second.length > first.length) {
      secondIndex += 1;
    } else {
      firstIndex += 1;
      secondIndex += 1;
    }
  }

  return edits + (first.length - firstIndex) + (second.length - secondIndex) <= 1;
}

window.shopSearchMatches = function (query, searchableContent) {
  const queryTerms = normalizeShopSearch(query).split(/\s+/).filter(Boolean);
  if (!queryTerms.length) return true;

  const searchableText = normalizeShopSearch(searchableContent);
  const searchableWords = searchableText.split(/\s+/);
  const joinedWords = searchableWords.join('');

  return queryTerms.every((term) => (
    searchableWords.some((word) => (
      word.includes(term) || (term.length >= 4 && isOneEditAway(word, term))
    )) || joinedWords.includes(term)
  ));
};
