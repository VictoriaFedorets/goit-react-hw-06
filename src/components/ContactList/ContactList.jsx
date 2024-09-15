import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  // 2. Отримуємо масив завдань із стану Redux
  const contacts = useSelector(selectContacts);

  // 3. Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(selectNameFilter);

  // 4. Обчислюємо масив завдань, які необхідно відображати в інтерфейсі

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(statusFilter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
