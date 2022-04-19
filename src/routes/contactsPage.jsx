import Contacts from '../components/contacts';
import '../css/cover.css';

export default function ContactsPage() {

    return (
      <main className="inner cover">
        <h2 className="cover-heading">Contacts</h2>
        <Contacts/>
      </main>
    );
  }