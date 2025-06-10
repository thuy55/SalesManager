import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
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
import BranchModal from '../components/ModalBrand';
import { useTranslation } from 'react-i18next';

const Chat: React.FC = () => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    function detail() {
        history.push("/chat-detail");
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <div className="card-header mt-3 px-3">
                    <ul
                        className="nav nav-pills row d-flex justify-content-around"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item col-4 px-0" role="presentation">
                            <button
                                className="nav-link active fs-13 d-flex align-items-center justify-content-center"
                                id="pills-chat-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#nav-chat"
                                type="button"
                                role="tab"
                                aria-controls="pills-chat"
                                aria-selected="true"
                            >
                                Tin nhắn
                            </button>
                        </li>
                        <li className="nav-item col-4 px-0" role="presentation">
                            <button
                                className="nav-link fs-13  d-flex align-items-center justify-content-center"
                                id="pills-friend-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#nav-friend"
                                type="button"
                                role="tab"
                                aria-controls="pills-friend"
                                aria-selected="false"
                            >
                                Bạn bè
                            </button>
                        </li>
                    </ul>
                </div>
                <form className=" tab-content overflowY pt-2 px-2">
                    <div className="tab-pane active" id="nav-chat">
                        <IonGrid className='p-3'>
                            <IonRow className='d-flex align-items-center '>
                                <IonCol size='5' className=' fw-bold ' style={{ fontSize: "17px" }}>Tin nhắn</IonCol>
                                <IonCol size='7' className=" d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm" style={{ height: '45px' }}>

                                    <input
                                        type="text"
                                        className="form-control border-0 shadow-none bg-input-search"
                                        placeholder={t("tim-kiem")}
                                        style={{
                                            flex: 1,
                                            borderRadius: '50px',
                                        }}
                                    />
                                    <IonIcon icon={searchOutline} className="ms-3 me-2 " style={{ fontSize: '20px' }} />
                                </IonCol>
                            </IonRow>
                            <IonGrid>
                                <IonRow className='d-flex align-items-center fs-13 mt-3' onClick={() => { detail() }}>
                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='rounded-circle col-2' style={{ width: "45px", height: "45px" }}></img>
                                    <div className='col-10 ms-2'>
                                        <div className='d-flex align-items-center justify-content-between mb-1'>
                                            <div className='fw-bold fs-15'>Mia</div>
                                            <div>3 phút</div>
                                        </div>
                                        <div style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>
                                            Hiện tại, tôi không biết bạn là ai. Bạn có thể giới thiệu về bản thân mình được không?
                                        </div>
                                    </div>
                                </IonRow>
                                <IonRow className='border-50 my-3'></IonRow>
                                <IonRow className='d-flex align-items-center fs-13 mt-3' onClick={() => { detail() }}>
                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='rounded-circle col-2' style={{ width: "45px", height: "45px" }}></img>
                                    <div className='col-10 ms-2'>
                                        <div className='d-flex align-items-center justify-content-between mb-1'>
                                            <div className='fw-bold fs-15'>Mia</div>
                                            <div>3 phút</div>
                                        </div>
                                        <div style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>
                                            Hiện tại, tôi không biết bạn là ai. Bạn có thể giới thiệu về bản thân mình được không?
                                        </div>
                                    </div>
                                </IonRow>
                                <IonRow className='border-50 my-3'></IonRow>
                                <IonRow className='d-flex align-items-center fs-13 mt-3' onClick={() => { detail() }}>
                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='rounded-circle col-2' style={{ width: "45px", height: "45px" }}></img>
                                    <div className='col-10 ms-2'>
                                        <div className='d-flex align-items-center justify-content-between mb-1'>
                                            <div className='fw-bold fs-15'>Mia</div>
                                            <div>3 phút</div>
                                        </div>
                                        <div style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>
                                            Hiện tại, tôi không biết bạn là ai. Bạn có thể giới thiệu về bản thân mình được không?
                                        </div>
                                    </div>
                                </IonRow>
                                <IonRow className='border-50 my-3'></IonRow>
                            </IonGrid>

                        </IonGrid>

                    </div>
                    <div className="tab-pane" id="nav-friend">
                        <IonGrid className='p-3 '>
                            <IonRow className='d-flex align-items-center '>
                                <IonCol size='5' className=' fw-bold ' style={{ fontSize: "17px" }}>Bạn bè</IonCol>
                                <IonCol size='7' className=" d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm" style={{ height: '45px' }}>

                                    <input
                                        type="text"
                                        className="form-control border-0 shadow-none bg-input-search"
                                        placeholder={t("tim-kiem")}
                                        style={{
                                            flex: 1,
                                            borderRadius: '50px',
                                        }}
                                    />
                                    <IonIcon icon={searchOutline} className="ms-3 me-2 " style={{ fontSize: '20px' }} />
                                </IonCol>
                            </IonRow>
                            <IonGrid>
                                <IonRow className='d-flex align-items-center fs-13 mt-3' onClick={() => { detail() }}>
                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='rounded-circle col-2' style={{ width: "45px", height: "45px" }}></img>
                                    <div className='col-10 ms-3'>
                                        <div className='fs-15 fw-bold mb-1'>
                                            Mia
                                        </div>
                                    </div>
                                </IonRow>
                                <IonRow className='border-50 my-3'></IonRow>
                            </IonGrid>

                        </IonGrid>

                    </div>
                </form>


            </IonContent>



        </IonPage>
    );
};

export default Chat;
