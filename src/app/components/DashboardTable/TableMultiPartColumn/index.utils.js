import MultiPartColumnCell from "./MultiPartColumnCell";

export const displayMultiPartColumnCells = (arr, active) =>
  arr.map((item) => <MultiPartColumnCell key={item.id} data={item} active={active} />);
