import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, checkmarkCircleOutline, chevronBackOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, personOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
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
const BookingCompleted: React.FC = () => {
    const history = useHistory();

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    const { t, i18n } = useTranslation();
    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex align-items-center justify-content-between'>
                        <div  className='d-flex align-items-center'>
                            <IonIcon icon={checkmarkCircleOutline} color='success' style={{ fontSize: "25px" }} />
                            <div className=' fw-bold ms-2' style={{ fontSize: "17px" }}>Hóa đơn</div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button className='p-2 px-4 text-white rounded-3 bg-primary fs-13 fw-bold'>IN</button>
                            <button className='p-2 text-white rounded-3 bg-info fs-13 fw-bold ms-3'>Xuất HD</button>
                        </div>

                    </IonRow>
                    <IonList className='px-3 pt-4'>

                        <IonRow className='d-flex justify-content-center fs-13 fw-bold' style={{ fontSize: "20px" }}>
                            CÔNG TY TNHH ECLO
                        </IonRow>
                        <IonRow className='d-flex justify-content-center fs-13 fw-bold mt-1'>
                            71 Phú Thọ Hòa, P.Phú Thọ Hòa, Q.Tân Phú, TP.HCM
                        </IonRow>
                        <IonRow className='d-flex justify-content-center fs-13 fw-bold mt-1'>
                            Mã số thuế: 0123456789-011
                        </IonRow>
                        <IonRow className='d-flex justify-content-center fs-13 fw-bold mt-1'>
                            Số điện thoại: 0123456789
                        </IonRow>
                        <IonRow className='d-flex justify-content-center fs-13 fw-bold mt-3' style={{ fontSize: "20px" }}>
                            PHIẾU TÍNH TIỀN
                        </IonRow>
                        <div className='fs-13 py-2 border-bottom'>
                            <div>Cơm chiên dương châu</div>
                            <div className='d-flex justify-content-between align-items-center ms-2'>
                                <div>1 món x 120.000</div><div>120.000</div>
                            </div>
                        </div>
                        <div className='fs-13 py-2 border-bottom'>
                            <div>Cơm chiên dương châu</div>
                            <div className='d-flex justify-content-between align-items-center ms-2'>
                                <div>1 món x 120.000</div><div>120.000</div>
                            </div>
                        </div>
                        <div className='fs-13 py-2 border-bottom'>
                            <div>Cơm chiên dương châu</div>
                            <div className='d-flex justify-content-between align-items-center ms-2'>
                                <div>1 món x 120.000</div><div>120.000</div>
                            </div>
                        </div>
                        <IonRow className='d-flex justify-content-between border-bottom py-3 fw-bold' style={{ fontSize: "15px" }}>
                            <div>TỔNG CỘNG (6)</div>
                            <div>251.000 VND</div>
                        </IonRow>
                        <IonRow className='d-flex justify-content-between fs-13 mt-3'>
                            Phương thức thanh toán: <span>Tiền mặt</span>
                        </IonRow>
                        <IonRow className='d-flex justify-content-between fs-13 mt-2'>
                            VAT: <span>22.000</span>
                        </IonRow>
                        <IonRow className='border-bottom mt-2'></IonRow>
                        <IonRow className='fs-13 mt-2'>Mã hóa đơn: 524534</IonRow>
                        <IonRow className='fs-13 mt-2'>Ngày giờ: 07/06/2025 20:00:00</IonRow>

                        <IonRow className='d-flex justify-content-center mt-4'>
                            <img src='https://quickchart.io/qr?text=akjshdiasjhdiauhsdiuasdi&ecLevel=Q&margin=0&size=500' className=' w-25'></img>

                        </IonRow>
                        <div className='d-flex justify-content-center mt-2 fs-13 fw-bold'>#0000111</div>
                        <IonRow class='justify-content-center fs-13 mt-3'>
                            Cảm ơn quý khách !
                        </IonRow>
                        <IonRow class='justify-content-center fs-13'>
                            Hẹn gặp lại !
                        </IonRow>
                    </IonList>
                </IonGrid>

            </IonContent>

        </IonPage>
    );
};

export default BookingCompleted;
