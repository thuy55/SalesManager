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

                        <IonIcon icon={checkmarkCircleOutline} color='success' style={{ fontSize: "25px" }} />

                        <div className=' fw-bold ms-2' style={{ fontSize: "17px" }}>{t("dat-ban-thanh-cong")}</div>
                    </IonRow>
                    <IonRow className='d-flex justify-content-center mt-4'>
                        <div className='bg-white w-50 p-3 rounded-4 shadow-sm'>
                            <img src='https://quickchart.io/qr?text=akjshdiasjhdiauhsdiuasdi&ecLevel=Q&margin=0&size=500' className=' w-100'></img>
                        </div>
                    </IonRow>
                    <div className='d-flex justify-content-center mt-2 fs-13 fw-bold'>#0000111</div>
                    <IonRow className='fw-bold mt-4'>{t("thong-tin-khach-hang")}</IonRow>
                    <IonCard className='rounded-4 m-0 border border-1 shadow-none fs-13 mt-3'>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("khach-hang")} <div className='fw-bold'>Mr Nick</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("dien-thoai")} <div className='fw-bold'>0123456789</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("ghi-chu")} <div className='fw-bold'>Chọn ems xinh</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("xac-nhan")} <div className='fw-bold'>Đã xác nhận qua Zalo</div>
                        </IonRow>
                    </IonCard>

                    <IonRow className='fw-bold mt-3'>{t("thong-tin-dat-ban")}</IonRow>
                    <IonCard className='rounded-4 m-0 border border-1 shadow-none fs-13 mt-3'>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("nha-hang")} <div className='fw-bold'>90s House</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("ma-booking")} <div className='fw-bold'>#002</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("ngay")} <div className='fw-bold'>15:00 05/05/2025</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("so-nguoi")} <div className='fw-bold'>10</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("phu-vuc")} / {t("phong")} <div className='fw-bold'>Happy</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("trang-thai")} <div className='fw-bold text-success'>Đã chuẩn bị phòng</div>
                        </IonRow>
                        <IonRow className='border-50 '></IonRow>
                        <IonRow className='d-flex align-items-center justify-content-between p-3'>
                            {t("ghi-chu")} <div className='fw-bold'>Yêu cầu có DJ</div>
                        </IonRow>
                    </IonCard>
                    <IonRow className='fw-bold mt-3'>
                        {t("chi-tiet-dich-vu")} / {t("mon-an")}
                    </IonRow>
                    <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13 '>
                        <IonRow className='d-flex justify-content-between align-items-center p-3'>
                            <div className=''>
                                <div>Combo1 <span className='fw-bold text-pink'>x 1</span></div>
                                <div>4.500.000đ</div>
                            </div>
                            <div className='fw-bold'>4.500.000đ</div>
                        </IonRow>
                        <IonRow className='border-50'></IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center p-3'>
                            <div className=''>
                                <div>Combo1 <span className='fw-bold text-pink'>x 1</span></div>
                                <div>4.500.000đ</div>
                            </div>
                            <div className='fw-bold'>4.500.000đ</div>
                        </IonRow>

                    </IonCard>
                    <IonRow className='fs-13 fw-bold mt-3'>
                        {t("thanh-toan")}
                    </IonRow>
                    <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13 '>
                        <IonRow className='d-flex justify-content-between align-items-center text-success fw-bold p-3'>
                            <div>{t("tong-cong")} :</div>
                            <div>55.000.000đ</div>
                        </IonRow>
                        <IonRow className='border-50'></IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center text-warning fw-bold  p-3'>
                            <div>{t("da-coc")} :</div>
                            <div>5.000.000đ</div>
                        </IonRow>
                        <IonRow className='border-50'></IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center text-danger fw-bold  p-3'>
                            <div>{t("giam-gia")} :</div>
                            <div>5.000.000đ</div>
                        </IonRow>
                        <IonRow className='border-50'></IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center text-primary fw-bold  p-3'>
                            <div>VAT :</div>
                            <div>5.000.000đ</div>
                        </IonRow>
                        <IonRow className='border-50'></IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center text-pink fw-bold  p-3'>
                            <div>{t("thanh-toan")} :</div>
                            <div>50.000.000đ</div>
                        </IonRow>
                    </IonCard>
                    <IonRow className='fs-13 fw-bold mt-3'>
                        {t("thong-tin-thanh-toan")}
                    </IonRow>
                    <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13 '>
                        <IonRow className='d-flex justify-content-between align-items-center p-3'>
                            <div className=''>{t("phuong-thuc-thanh-toan")}</div>
                            <div className='fw-bold'>{t("tien-mat")}</div>
                        </IonRow>
                        <IonRow className='border-50'></IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center p-3'>
                            <div className=''>{t("ngay-thanh-toan")}</div>
                            <div className='fw-bold'>17:00 05/05/2025</div>
                        </IonRow>
                        <IonRow className='border-50'></IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center p-3'>
                            <div className=''>{t("le-tan")}</div>
                            <div className='fw-bold'>Ms Xinh</div>
                        </IonRow>
                        <IonRow className='border-50'></IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center p-3'>
                            <div className=''>{t("nguoi-dat")}</div>
                            <div className='fw-bold'>Mr Lee</div>
                        </IonRow>
                    </IonCard>
                </IonGrid>

            </IonContent>

        </IonPage>
    );
};

export default BookingCompleted;
