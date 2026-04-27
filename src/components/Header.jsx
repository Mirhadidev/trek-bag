
import { useItemsStore } from "../stores/itemsStore.js";
import Counter from "./Counter.jsx";
import Logo from "./Logo.jsx";


export default function Header() {
 const items= useItemsStore((state)=> state.items)
  return (
    <header>
      <Logo />
      <Counter 
      numberOfItemsPacked={items.filter((item)=> item.packed).length}
      totalNumberOfItems={items.length}
      />
    </header>
  );
}
