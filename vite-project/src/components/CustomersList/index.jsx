import React from "react";
import styles from "./customersList.module.scss";
import detective from "../../assets/images/detective.png";
import farmer from "../../assets/images/farmer.png";
import hurt from "../../assets/images/hurt.png";
import cool from "../../assets/images/cool.png";
import evrey from "../../assets/images/evrey.png";
import arist from "../../assets/images/artist.png";
import rock from "../../assets/images/rock.png";
import scared from "../../assets/images/scared.png";
import sailor from "../../assets/images/sailor.png";

const customersList = [
    {
        name: "Andrea Bocelli",
        userPhoto: hurt,
    },
    {
        name: "Carlos Lu",
        userPhoto: farmer,
    },
    {
        name: "Roman Dziuba",
        userPhoto: detective,
    },
    {
        name: "Lora Fauna",
        userPhoto: cool,
    },
    {
        name: "Diego Maradonna",
        userPhoto: evrey,
    },
    {
        name: "Chi Chang",
        userPhoto: arist,
    },
    {
        name: "Lu Kain",
        userPhoto: rock,
    },
    {
        name: "Nato M",
        userPhoto: scared,
    },
    {
        name: "Oleg Kakao",
        userPhoto: sailor,
    },
];

function CustomersList() {
    return (
        <div className={styles["customers-list"]}>
            <div className={styles["customers-list__body"]}>
                {customersList.map((item, index) => (
                    <div className={styles['customers-cards']} key={item.name}>
                        <img className={styles['customers-list__img']} src={item.userPhoto} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomersList;
