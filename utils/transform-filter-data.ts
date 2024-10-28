interface Item {
  name: string;
  id: number;
}

export function transformFilterData(items: Item[]): { text: string; value: string }[] {
  return items.map((item: Item) => ({
    text: item.name,
    value: String(item.id),
  }));
}
