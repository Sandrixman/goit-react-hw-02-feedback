import NewComponent from 'components/NewComponent/NewComponent';
import collection from 'collection.json';

export default function App() {
  return (
    <>
      <NewComponent props={collection} />
    </>
  );
}
