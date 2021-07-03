import TableSinglePartColumn from "./TableSinglePartColumn";
import TableMultiPartColumn from "./TableMultiPartColumn";

/* displayTableColumns( array of week days, current day), return arr of table columns */
export const displayTableColumns = (arr, currDay) =>
  arr.map(({ id, data, day }) => {
    const active = currDay === day ? true : false;

    return data.hasOwnProperty("meals") ? (
      <TableMultiPartColumn key={id} data={data} day={day} active={active} />
    ) : (
      <TableSinglePartColumn key={id} day={day} active={active} />
    );
  });
