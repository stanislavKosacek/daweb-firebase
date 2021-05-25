import React, { useState, useEffect } from 'react';
import { db } from './../db';
import firebase from 'firebase/app';

export const NakupniSeznam = (props) => {
  const [polozky, setPolozky] = useState([]);
  const [nazev, setNazev] = useState('');

  useEffect(() => {
    const vypni = db
      .collection('seznam')
      .orderBy('datumVytvoreni')
      .onSnapshot((querySnapshot) => {
        setPolozky(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });

    return vypni;
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('seznam').add({
      nazev: nazev,
      datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
      koupeno: false,
    });
    setNazev('');
  };

  return (
    <>
      <h2>Nákupní seznam</h2>
      <ul>
        {polozky.map((polozka) => (
          <li key={polozka.id}>
            <input
              type="checkbox"
              checked={polozka.koupeno}
              onChange={(event) => {
                db.collection('seznam').doc(polozka.id).update({
                  koupeno: event.target.checked,
                });
              }}
            />
            {polozka.nazev}
            <button
              onClick={() => {
                db.collection('seznam').doc(polozka.id).delete();
              }}
            >
              smazat
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Název:{' '}
          <input
            value={nazev}
            onChange={(event) => setNazev(event.target.value)}
          />
        </label>
        <button>Přidat</button>
      </form>
    </>
  );
};
