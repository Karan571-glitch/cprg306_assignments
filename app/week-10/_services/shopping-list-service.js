import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// GET ITEMS
export async function getItems(userId) {
  const items = [];

  try {
    const itemsRef = collection(db, "users", userId, "items");

    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (err) {
    console.error("Error fetching items:", err);
    return [];
  }
}

// ADD ITEM
export async function addItem(userId, item) {
  try {

    const itemsRef = collection(db, "users", userId, "items");

    const docRef = await addDoc(itemsRef, item);

    return docRef.id;
  } catch (err) {
    console.error("Error adding item:", err);
    throw err;
  }
}
