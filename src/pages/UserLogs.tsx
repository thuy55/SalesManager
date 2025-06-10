import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
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
const UserLogs: React.FC = () => {
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
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13 mt-3'>
                        <IonAccordionGroup>
                            <IonAccordion value='1' className='rounded-4'>
                                <IonItem className='fs-13 rounded-4' slot="header">
                                    <IonLabel>
                                        <div ><span className='fw-bold text-pink'>Login </span>- IP:104.28.122.127</div>
                                        <div className='mt-2 '>Ngày: 14:00 05/05/2025</div>
                                    </IonLabel>

                                </IonItem>
                                <div className="ion-padding  rounded-bottom-3" slot="content">
                                    <IonRow className='d-flex justify-content-between align-items-center'>
                                        <div className='fw-bold'>Patch : </div> accounts
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-1'>
                                        <div className='fw-bold'>Hành động : </div> login
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-1'>
                                        <div className='fw-bold'>IP : </div> 104.28.122.127
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-1'>
                                        <div className='fw-bold'>URL : </div> https://happy-booking.eclo.io/users/logs
                                    </IonRow>
                                </div>
                            </IonAccordion>
                        </IonAccordionGroup>
                    </IonCard>

                    <IonRow className='fs-13 fw-bold mt-3'>Tài khoản</IonRow>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13 mt-3'>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon> Thông tin
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={notificationsOutline} className='me-2'></IonIcon> Thông báo
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={listOutline} className='me-2'></IonIcon> Nhật ký
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={settingsOutline} className='me-2'></IonIcon> Cài đặt
                        </IonRow>
                    </IonCard>
                </IonGrid>

            </IonContent>

        </IonPage>
    );
};

export default UserLogs;
