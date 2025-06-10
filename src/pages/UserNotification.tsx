import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, personOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
import BranchModal from '../components/ModalBrand';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const UserNotification: React.FC = () => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    return (
        <IonPage>
            <IonHeader style={{ backdropFilter: "blur(50px)" }}>
                <IonToolbar className='shadow-none border border-0'>
                    <IonRow className='d-flex justify-content-between align-items-center p-1'>
                        <img src='../image/happy-corp-logo.png' alt='logo' className='' style={{ width: "70px" }}></img>
                        <div className='d-flex align-items-center'>
                            <button onClick={() => present()} className='rounded-circle p-2 bg-switch-box' style={{ width: "35px", height: "35px" }}> <IonIcon icon={businessOutline} size='15px'></IonIcon></button>
                            <Link to='/user-notification'>
                                <button className='rounded-circle p-2 bg-switch-box ms-2' style={{ width: "35px", height: "35px" }}> <IonIcon icon={notificationsOutline} size='15px'></IonIcon></button>
                            </Link>
                            <IonMenuToggle menu="end" autoHide={false}>
                                <img src='https://static-cse.canva.com/blob/1992462/1600w-vkBvE1d_xYA.jpg' alt='avatar' className='rounded-circle ms-2' style={{ width: "40px", height: "40px" }}></img>
                            </IonMenuToggle>
                        </div>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("thong-bao")}</div>
                    </IonRow>

                    <IonList className='bg-none p-2'>
                        <IonRow className='fs-13'>
                            <div>
                                <div className='fw-bold d-flex align-items-center'>
                                    <div className='bg-danger rounded-circle me-2' style={{ width: "10px", height: "10px" }}></div>
                                    Tin nhắn
                                </div>
                                <div className='text-muted my-1'>2025-05-02 15:00</div>
                                <div>Xin chào bạn</div>
                            </div>
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='fs-13'>
                            <div>
                                <div className='fw-bold d-flex align-items-center'>
                                    <div className='bg-danger rounded-circle me-2' style={{ width: "10px", height: "10px" }}></div>
                                    Tin nhắn
                                </div>
                                <div className='text-muted my-1'>2025-05-02 15:00</div>
                                <div>Xin chào bạn</div>
                            </div>
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                    </IonList>


                    <IonRow className='d-flex justify-content-center fixed-bottom my-2'>
                        <button className='rounded-pill p-2 fs-13 text-white bg-pink'>{t("danh-dau-da-doc")}</button>
                    </IonRow>
                </IonGrid>

            </IonContent>

        </IonPage>
    );
};

export default UserNotification;
