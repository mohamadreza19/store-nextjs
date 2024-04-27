export default function isPathInArray(
  pathToCheck: string,
  pathsArray: string[]
) {
  for (const path of pathsArray) {
    if (path.includes(pathToCheck)) return false;
  }
  return true;
}
