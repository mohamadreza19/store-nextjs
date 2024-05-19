export default function isPathInArray(
  pathToCheck: string,
  pathsArray: string[]
) {
  console.log(pathToCheck);
  console.log(pathsArray);
  for (const path of pathsArray) {
    console.log({ path });
    console.log(path.includes(pathToCheck));
    if (path.includes(pathToCheck)) return true;
  }
  return false;
}
