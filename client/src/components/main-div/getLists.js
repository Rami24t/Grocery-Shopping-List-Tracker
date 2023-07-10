export function getLists(items) {
  const needs = [];
  const haves = [];
  items.forEach((element) => {
    element.need ? needs.push(element) : haves.push(element);
  });
  return { needs, haves };
}
