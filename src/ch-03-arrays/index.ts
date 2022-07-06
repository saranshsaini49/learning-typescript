//readonly keyword prevents from changing arrays

const arr: readonly number[] = [22];
arr.push(11);

// TypeScript can infer the type of an array if it has values
