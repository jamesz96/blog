export function pathToSlug(path: string) {
  const splits = path.split('/');
  const filename = splits[splits.length - 1];
  return filename.split('.')[0];
}
