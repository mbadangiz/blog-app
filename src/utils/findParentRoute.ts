import { In_ProfileMenuItems } from "@core/types/interfaces";

const findParent = (
  items: In_ProfileMenuItems[],
  parentId: number | undefined,
): In_ProfileMenuItems | null => {
  if (parentId) {
    for (const item of items) {
      if (item.id === parentId) {
        return item;
      }
      if (item.children) {
        const parent = findParent(item.children, parentId);
        if (parent) {
          return parent;
        }
      }
    }
  }
  return null;
};
export { findParent };
