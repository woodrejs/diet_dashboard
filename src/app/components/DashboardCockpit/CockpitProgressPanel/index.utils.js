import ProgressPanelItem from "./ProgressPanelItem";
import { v4 as uuidv4 } from "uuid";

/* displayProgressSpheres:
qnt - number of progress spheres to display
curr - current select sphere (progress) 
*/
export const displayProgressSpheres = (qnt, curr) => {
  const items = [];
  for (let index = 0; index < qnt; index++) {
    items.push(
      <ProgressPanelItem
        key={uuidv4()}
        title={index + 1}
        current={curr === index + 1 ? true : false}
        isCompleted={curr > index + 1 ? true : false}
      />
    );
  }
  return items;
};
export const progressToScale = (progress) => (progress ? (progress - 1) / 11 : 1);
