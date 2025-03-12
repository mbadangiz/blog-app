import { In_ProfileMenuItems } from "src/core/types/interfaces";

function routesLeveling(
  arrayOfObject: In_ProfileMenuItems[],
  level = 1,
  parentId = 0,
): In_ProfileMenuItems[] {
  return arrayOfObject.map((item: In_ProfileMenuItems) => {
    const newNode: In_ProfileMenuItems =
      level > 1 ? { ...item, level, parentId } : { ...item, level };

    if (newNode.children) {
      newNode.children = routesLeveling(
        newNode.children,
        level + 1,
        newNode.id,
      );
    }

    return newNode;
  });
}

export default routesLeveling;
