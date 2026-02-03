export const chunkText = (input: string, size = 800): string[] => {
  if (!input) {
    return [];
  }

  const chunks: string[] = [];
  let start = 0;

  while (start < input.length) {
    chunks.push(input.slice(start, start + size));
    start += size;
  }

  return chunks;
};
