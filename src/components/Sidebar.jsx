
import { useItemsStore } from "../stores/itemsStore.js";
import AddItemForm from "./AddItemForm.jsx";
import ButtonGroup from "./ButtonGroup.jsx";

export default function Sidebar() {
  const addItem = useItemsStore((state)=>state.addItem)
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}

// handleAddItem={handleAddItem}
// handleRemoveAllItems={handleRemoveAllItems}
// handleResetToInitial={handleResetToInitial}
// handleMarkAllAsComplete={handleMarkAllAsComplete}
// handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
