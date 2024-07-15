import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Groceries</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Home page" />
        <IonList>
          <IonItem>
            <IonLabel>Apples</IonLabel>
            <h2>Quantity: 10</h2>
          </IonItem>
          <IonItem>
            <IonLabel>Milk</IonLabel>
            <h2>Quantity: 14</h2>
          </IonItem>
          <IonItem>
            <IonLabel>Cucumbers</IonLabel>
            <h2>Quantity: 5</h2>
          </IonItem>
          <IonItem>
            <IonLabel>Chips and Salsa</IonLabel>
            <h2>Quantity: 1</h2>
          </IonItem>
          <IonItem>
            <IonLabel>Ice Cream</IonLabel>
            <h2>Quantity: 1</h2>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
