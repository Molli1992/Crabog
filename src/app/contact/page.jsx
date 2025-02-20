"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import contactImg from "../../../public/contactUs-img.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import FormContact from "@/components/formContact/formContact";
import { ClipLoader } from "react-spinners";

export default function Contact() {
  const { language } = useLanguageStore();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const markerLocation = {
    lat: -34.593451,
    lng: -58.376474,
  };

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={contactImg}
        title={language === "spanish" ? "Contacto" : "Contacts"}
      />
      <div className={styles.container}>
        <div className={styles.item}>
          <SlLocationPin className={styles.icons} />
          <h1 className={styles.itemTitle}>
            {language === "spanish" ? "Dirección" : "Address"}
          </h1>
          <p className={styles.itemText}>
            {language === "spanish"
              ? "Maipú 1252, Piso 8º, C.A.B.A."
              : "Maipú 1252, 8th Floor, C.A.B.A."}
          </p>
        </div>

        <div className={styles.item}>
          <BiPhoneCall className={styles.icons} />
          <h1 className={styles.itemTitle}>
            {" "}
            {language === "spanish" ? "Telefono" : "Phone"}
          </h1>
          <p className={styles.itemText}>+54 911 4021-7000</p>
        </div>

        <div className={styles.item}>
          <HiOutlineMailOpen className={styles.icons} />
          <h1 className={styles.itemTitle}>
            {language === "spanish" ? "Mail" : "Email"}
          </h1>
          <p className={styles.itemText}>secretarias@crabog.com</p>
        </div>

        <div className={styles.item}>
          <LuAlarmClock className={styles.icons} />
          <h1 className={styles.itemTitle}>
            {language === "spanish" ? "Horas de trabajo" : "Working Hours"}
          </h1>
          <p className={styles.itemText}>
            {language === "spanish"
              ? "Lun a vie: 9hs a 18hs"
              : "Mon-Fri: 9am - 6pm"}
          </p>
        </div>
      </div>

      <div className={styles.containerMap}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={markerLocation}
            zoom={12}
          >
            <Marker
              position={markerLocation}
              onClick={() => setIsInfoWindowOpen(true)}
              onMouseOver={() => setIsInfoWindowOpen(true)}
            >
              {isInfoWindowOpen && (
                <InfoWindow
                  position={markerLocation}
                  onCloseClick={() => setIsInfoWindowOpen(false)}
                >
                  <div className={styles.containerInforWindow}>
                    <p className={styles.infoWindowTitle}>
                      {language === "spanish" ? "Ubicación" : "Location"}
                    </p>
                    <p className={styles.textInfoWindow}>
                      {language === "spanish"
                        ? "Maipú 1252, Piso 8º, C.A.B.A."
                        : "Maipú 1252, 8th Floor, C.A.B.A."}
                    </p>
                    <p className={styles.textInfoWindow}>
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          </GoogleMap>
        ) : (
          <ClipLoader color="#192d2f" size={100} />
        )}
      </div>

      <div className={styles.containerForm}>
        <FormContact />
      </div>
    </div>
  );
}
