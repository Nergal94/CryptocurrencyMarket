export default {
  money(value: string) {
    return Number(value).toFixed(2);
  },
  bilion(value: string) {
    return (Number(value) / 1000000000).toFixed(2);
  }
}
