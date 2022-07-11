function createPair<S, T>(v1: S, v3: T): { v1: S; v3: T } {
  return { v1, v3 };
}
console.log(createPair<number, string>(12, "yoyo"));
console.log(createPair("hello", 42));
