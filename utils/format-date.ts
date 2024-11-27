export function formatDate(dateMilliseconds: number) {
  return new Date(dateMilliseconds).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });
}
