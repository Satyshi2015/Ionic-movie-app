import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonSearchbar, IonPopover, IonButton, IonItem, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

import './Home.css';
import axios from 'axios';

const Nextpage: React.FC = () => {

  const [Poster, setPoster] = useState('')
  const [Title, setTitle] = useState('')
  const [Type, setType] = useState('')
  const [Year, setYear] = useState('')
  const [Actors, setActors] = useState('')
  const [Runtime, setRuntime] = useState('')
  const [Genre, setGenre] = useState('')
  const [Director, setDirector] = useState('')
  const [Plot, setPlot] = useState('')

  const movieFunction = async () => {

    const params = new URLSearchParams(window.location.search);
    const code = params.get('Id');
    const url = String('http://www.omdbapi.com/?i=' + code + '&apikey=6bd5d2e7');
    const data = await axios.get(url)
      .then((response) => {
        //console.log(response.data.Title);
        console.log(response.data);
        setTitle(response.data.Title);
        setPoster(response.data.Poster);
        setType(response.data.Type);
        setYear(response.data.Year);
        setActors(response.data.Actors);
        setRuntime(response.data.Runtime);
        setGenre(response.data.Genre);
        setDirector(response.data.Director);
        setPlot(response.data.Plot);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    movieFunction();
  }, []);


  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle class="header">Movie Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="main" fullscreen>

        <IonCard>
          <img src={Poster} />
          <IonCardHeader>
            <IonCardSubtitle>{Genre} * {Type} * {Year} * {Runtime}</IonCardSubtitle>
            <IonCardTitle>{Title}</IonCardTitle>
            <IonCardSubtitle>Actors: {Actors}</IonCardSubtitle>
            <IonCardSubtitle>Director: {Director}</IonCardSubtitle>
            <IonCardSubtitle>{Plot}</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Nextpage;