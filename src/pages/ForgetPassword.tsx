import { IonButton, IonButtons, IonCard, IonCardContent, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonAlert, useIonLoading } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, closeOutline, key, locateOutline, locationSharp, notificationsOutline, remove, searchOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
const ForgetPassword: React.FC = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [presentAlert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [phone, setphone] = useState("");
    function next() {
        const data = {
            "phone": phone
        }
        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/forgot-password", data, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.data.status === "error") {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: res.data.content,
                    buttons: ["OK"],
                });

            } else if (res.data.status === "success") {
                console.log(res.data.data);
                localStorage.clear();
                localStorage.setItem("happy-corp-staff-phone-forgot", phone)
                history.push("/confirm-register");
            }
        })
            .catch((error) => {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: "Unable to connect to server",
                    buttons: ["OK"],
                });

            });
    }

    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonGrid className='p-3'>
                    <IonRow className='d-flex justify-content-center ' style={{ marginTop: "170px" }}>
                        <img src='../image/happy-corp-logo.png' className='w-50'></img>
                    </IonRow>
                    <IonCard className='shadow-sm p-4 py-5 rounded-5 m-3 mt-4'>
                        <IonRow className='d-flex justify-content-center fs-5 fw-bold'>{t("quen-mat-khau")}</IonRow>
                        <IonRow className=' fs-13 fw-bold mt-4'>Số điện thoại</IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' onChange={(e)=>{setphone(e.target.value)}} value={phone} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Số điện thoại"></input>
                        </IonRow>

                        <IonRow className='mt-4'>
                            <button className='bg-pink rounded-pill p-3 w-100 fs-13 text-white' onClick={()=>{next()}}>{t("quen-mat-khau")}</button>
                        </IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center mt-3'>
                            <div className='fs-13'>
                                {t("ban-da-co-tai-khoan")}?
                            </div>
                            <Link to="/login" className="text-decoration-none fs-13 fw-bold">{t("dang-nhap")}</Link>
                        </IonRow>
                    </IonCard>
                </IonGrid>

            </IonContent>



        </IonPage>
    );
};

export default ForgetPassword;
