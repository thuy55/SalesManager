import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, chevronForwardOutline, closeOutline, key, locateOutline, locationSharp, notificationsOutline, remove, searchOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
import BranchModal from '../components/ModalBrand';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
const Customers: React.FC = () => {
    const history = useHistory();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
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
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("khach-hang")}</div>
                    </IonRow>
                    <IonCard className='m-0 p-3 rounded-pill mt-3 shadow-sm' onClick={() => { setIsModalOpenDetail(true) }}>
                        <IonRow className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='rounded-circle fs-2 fw-bold d-flex justify-content-center text-white align-items-center' style={{ width: "50px", height: "50px", backgroundColor: "#ff8cc8" }}>
                                    {"Mr Kan".split(" ").pop()?.charAt(0)}
                                </div>
                                <div className='fs-13 ms-2'>
                                    <div className='fw-bold fs-15'>Mr Kan</div>
                                    <div>0123456789</div>
                                </div>
                            </div>
                            <IonIcon icon={chevronForwardOutline} style={{ fontSize: "24px" }}></IonIcon>
                        </IonRow>
                    </IonCard>
                    <IonCard className='m-0 p-3 rounded-pill mt-3 shadow-sm' onClick={() => { setIsModalOpenDetail(true) }}>
                        <IonRow className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='rounded-circle fs-2 fw-bold d-flex justify-content-center text-white align-items-center' style={{ width: "50px", height: "50px", backgroundColor: "#ff8cc8" }}>
                                    {"Mr Kan".split(" ").pop()?.charAt(0)}
                                </div>
                                <div className='fs-13 ms-2'>
                                    <div className='fw-bold fs-15'>Mr Kan</div>
                                    <div>0123456789</div>
                                </div>
                            </div>
                            <IonIcon icon={chevronForwardOutline} style={{ fontSize: "24px" }}></IonIcon>
                        </IonRow>
                    </IonCard>
                    <IonCard className='m-0 p-3 rounded-pill mt-3 shadow-sm' onClick={() => { setIsModalOpenDetail(true) }}>
                        <IonRow className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='rounded-circle fs-2 fw-bold d-flex justify-content-center text-white align-items-center' style={{ width: "50px", height: "50px", backgroundColor: "#ff8cc8" }}>
                                    {"Mr Kan".split(" ").pop()?.charAt(0)}
                                </div>
                                <div className='fs-13 ms-2'>
                                    <div className='fw-bold fs-15'>Mr Kan</div>
                                    <div>0123456789</div>
                                </div>
                            </div>
                            <IonIcon icon={chevronForwardOutline} style={{ fontSize: "24px" }}></IonIcon>
                        </IonRow>
                    </IonCard>

                </IonGrid>

            </IonContent>

            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 pb-3' >
                    <div className='text-end me-3 mt-3 fixed-header' ><IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></div>
                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>


                    </IonGrid>


                </div>
            </IonModal>

        </IonPage>
    );
};

export default Customers;
