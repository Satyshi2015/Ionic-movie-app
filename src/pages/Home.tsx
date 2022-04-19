import React, { useState } from 'react';
import { IonContent, IonHeader, IonSearchbar, IonPopover, IonButton, IonItem, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './Home.css';
import axios from 'axios';



const Home: React.FC = () => {
  const [text, setText] = useState<string>();
  const [movie, setMovie] = useState([])
  const [imdbID, setimdbID] = useState([])

  const getMovie = (e: any) => {
    
    axios.get('https://www.omdbapi.com/?s=Kids&apikey=6bd5d2e7')
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search)
      })
      .catch(error => {
        console.log(error);
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="header">Welcome you to Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="main" fullscreen>
      <IonCard>
          <IonCardHeader>
            <IonCardTitle>Movie Names</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonItem>
          <IonButton class="button" color="primary" onClick={getMovie}>Fetch Movies</IonButton>
        </IonItem>
        {
          movie.map((value: any, index) => {
            return (
              <IonCard onClick={e => { window.location.href='/nextpage/text/?Id='+  value.imdbID} }>
                <img src={value.Poster} />
                <IonCardHeader>
                  <IonCardSubtitle>{value.Type} * {value.Year}</IonCardSubtitle>
                  <IonCardTitle>{value.Title}</IonCardTitle>
                </IonCardHeader>
              </IonCard>

            )

          })
        }

      </IonContent>
    </IonPage>
  );
};

export default Home;
