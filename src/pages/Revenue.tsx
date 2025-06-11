import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, calendarClearOutline, calendarNumberOutline, calendarOutline, checkmarkCircleOutline, chevronBackOutline, chevronForwardOutline, closeOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, optionsOutline, personOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
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
import moment from 'moment';
const Revenue: React.FC = () => {
    const history = useHistory();
    const [isModalOpenSearchMonth, setIsModalOpenSearchMonth] = useState(false);
    const [isModalOpenSearchDate, setIsModalOpenSearchDate] = useState(false);
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


    const [selectedMonth, setSelectedMonth] = useState<number>(moment().month()); // 0 - 11
    const [selectedYear, setSelectedYear] = useState<number>(moment().year());

    const [searchMonth, setSearchMonth] = useState<number>(moment().month()); // 0 - 11
    const [searchYear, setSearchYear] = useState<number>(moment().year());
    function handleSearchMonth() {

        setSearchMonth(selectedMonth);
        setSearchYear(selectedYear)
        const baseDate = moment().year(selectedYear).month(selectedMonth);

        const startOfMonth = baseDate.clone().startOf("month");
        const endOfMonth = baseDate.clone().endOf("month");

        const startOfCalendar = startOfMonth.clone().startOf("isoWeek");
        const endOfCalendar = endOfMonth.clone().endOf("isoWeek");

        const days: moment.Moment[] = [];
        const current = startOfCalendar.clone();

        while (current.isSameOrBefore(endOfCalendar, "day")) {
            days.push(current.clone());
            current.add(1, "day");
        }

        // setCalendarDays(days);
    }

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
                <IonGrid className='p-2 pt-4'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("lich-su")}</div>
                    </IonRow>
                    <div className="card-header mt-3 px-3">
                        <ul
                            className="nav nav-pills row d-flex justify-content-around"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item col-4 px-0" role="presentation">
                                <button
                                    className="nav-link active fs-13 d-flex align-items-center justify-content-center"
                                    id="pills-date-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#nav-date"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-date"
                                    aria-selected="true"
                                >
                                    <IonIcon icon={calendarClearOutline} className='me-2' style={{ fontSize: "17px" }}></IonIcon>
                                    {t("ngay")}
                                </button>
                            </li>
                            <li className="nav-item col-4 px-0" role="presentation">
                                <button
                                    className="nav-link fs-13  d-flex align-items-center justify-content-center"
                                    id="pills-week-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#nav-week"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-week"
                                    aria-selected="false"
                                >
                                    <IonIcon icon={calendarOutline} className='me-2' style={{ fontSize: "17px" }}></IonIcon>
                                    {t("tuan")}
                                </button>
                            </li>
                            <li className="nav-item col-4 px-0" role="presentation">
                                <button
                                    className="nav-link fs-13  d-flex align-items-center justify-content-center"
                                    id="pills-month-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#nav-month"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-month"
                                    aria-selected="false"
                                >
                                    <IonIcon icon={calendarNumberOutline} className='me-2' style={{ fontSize: "17px" }}></IonIcon>
                                    {t("thang")}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <form className=" tab-content overflowY pt-2 px-2">
                        <div className="tab-pane active" id="nav-date">
                            <IonRow className='d-flex align-items-center'>
                                <IonCol size='3' >
                                    <button className='bg-input-search rounded-circle p-1 shadow-sm' style={{ width: "30px", height: "30px" }}>
                                        <IonIcon icon={chevronBackOutline} ></IonIcon>
                                    </button>
                                </IonCol>
                                <IonCol size='6'>
                                    <div onClick={() => setIsModalOpenSearchDate(true)} className="d-flex align-items-center p-2 bg-input-search rounded-pill  w-100 fs-13" style={{ height: '45px' }}>
                                        <input
                                            type="text"
                                            className="form-control bg-input-search border-0 shadow-none fs-13 fw-bold"
                                            placeholder={t("tim-kiem")}
                                            style={{
                                                flex: 1,
                                                borderRadius: '50px',
                                            }}
                                            value="T3 - 06/05/2025"
                                        />
                                        <div id="open-modal-search-date-home"
                                            className=" d-flex justify-content-center align-items-center me-0"
                                            style={{
                                                backgroundColor: 'white',
                                                borderRadius: '50%',
                                                width: '35px',
                                                height: '35px',
                                            }}
                                        >
                                            <IonIcon icon={optionsOutline} color="dark" style={{ fontSize: "20px" }} />
                                        </div>
                                    </div>
                                </IonCol>
                                <IonCol size='3' className='text-end'>
                                    <button className='bg-input-search rounded-circle p-2  shadow-sm' style={{ width: "30px", height: "30px" }}>
                                        <IonIcon icon={chevronForwardOutline}></IonIcon>
                                    </button>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-pink text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("tong-booking")}</div>
                                    </IonCard>
                                </IonCol>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-success text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("da-thanh-toan")}</div>
                                    </IonCard>
                                </IonCol>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-secondary text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("da-huy")}</div>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <div className="d-flex justify-content-between align-items-center gap-3 mt-3 flex-wrap">
                                <div className="d-flex align-items-center gap-1">
                                    <span className="badge bg-primary mb-1" style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Nhật khách</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-success mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Thanh toán</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-warning mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Đợi khách</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-3 mt-2 flex-wrap">
                                <div className="d-flex align-items-center gap-1">
                                    <span className="badge bg-info mb-1" style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Chờ duyệt</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-danger mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Không duyệt</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-secondary mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Đã hủy</span>
                                </div>
                            </div>

                            <IonCard className="m-0 p-3 rounded-4 shadow-sm mt-3">
                                <div className="row d-flex align-items-center">
                                    <div className="badge bg-primary col-2 ms-2" style={{ width: "30px", height: "30px" }}> </div>
                                    <div className='ms-2 fs-13 col-10 px-0'>
                                        <div className='d-flex justify-content-between fw-bold '>
                                            <div className=''>Mr Wong</div>
                                            <div className='fs-15'>12.000.000 đ</div>
                                        </div>
                                        <div style={{ fontSize: "12px" }}>18:23 29/04/2025</div>
                                    </div>
                                </div>
                            </IonCard>
                            <IonCard className="m-0 p-3 rounded-4 shadow-sm mt-3">
                                <div className="row d-flex align-items-center ">
                                    <div className="badge bg-primary col-2 ms-2" style={{ width: "30px", height: "30px" }}> </div>
                                    <div className='ms-2 fs-13 col-10 px-0'>
                                        <div className='d-flex justify-content-between fw-bold '>
                                            <div className=''>Mr Wong</div>
                                            <div className='fs-15'>12.000.000 đ</div>
                                        </div>
                                        <div style={{ fontSize: "12px" }}>18:23 29/04/2025</div>
                                    </div>
                                </div>
                            </IonCard>
                        </div>
                        <div className="tab-pane " id="nav-week">
                            <IonRow className='d-flex align-items-center'>
                                <IonCol size='2' >
                                    <button className='bg-input-search rounded-circle p-1 shadow-sm' style={{ width: "30px", height: "30px" }}>
                                        <IonIcon icon={chevronBackOutline} ></IonIcon>
                                    </button>
                                </IonCol>
                                <IonCol size='8'>
                                    <div className="d-flex align-items-center p-2 bg-input-search rounded-pill  w-100 fs-13" style={{ height: '45px' }}>
                                        <input
                                            type="text"
                                            className="form-control bg-input-search border-0 shadow-none fs-13 fw-bold"
                                            placeholder={t("tim-kiem")}
                                            style={{
                                                flex: 1,
                                                borderRadius: '50px',
                                            }}
                                            value="05/05/2025 - 11/05/2025"
                                        />
                                        <button id="open-modal-search-date-home"
                                            className=" d-flex justify-content-center align-items-center me-0"
                                            style={{
                                                backgroundColor: 'white',
                                                borderRadius: '50%',
                                                width: '35px',
                                                height: '35px',
                                            }}
                                        >
                                            <IonIcon icon={optionsOutline} color="dark" style={{ fontSize: "20px" }} />
                                        </button>
                                    </div>
                                </IonCol>
                                <IonCol size='2' className='text-end'>
                                    <button className='bg-input-search rounded-circle p-2  shadow-sm' style={{ width: "30px", height: "30px" }}>
                                        <IonIcon icon={chevronForwardOutline}></IonIcon>
                                    </button>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-pink text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("tong-booking")}</div>
                                    </IonCard>
                                </IonCol>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-success text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("da-thanh-toan")}</div>
                                    </IonCard>
                                </IonCol>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-secondary text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("da-huy")}</div>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                           

                            <div className="d-flex justify-content-between align-items-center gap-3 mt-3 flex-wrap">
                                <div className="d-flex align-items-center gap-1">
                                    <span className="badge bg-primary mb-1" style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Nhật khách</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-success mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Thanh toán</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-warning mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Đợi khách</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-3 mt-2 flex-wrap">
                                <div className="d-flex align-items-center gap-1">
                                    <span className="badge bg-info mb-1" style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Chờ duyệt</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-danger mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Không duyệt</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-secondary mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Đã hủy</span>
                                </div>
                            </div>

                            <IonCard className="m-0 p-3 rounded-4 shadow-sm mt-3">
                                <div className="row d-flex align-items-center ">
                                    <div className="badge bg-primary col-2 ms-2" style={{ width: "30px", height: "30px" }}> </div>
                                    <div className='ms-2 fs-13 col-10 px-0'>
                                        <div className='d-flex justify-content-between fw-bold '>
                                            <div className=''>Mr Wong</div>
                                            <div className='fs-15'>12.000.000 đ</div>
                                        </div>
                                        <div style={{ fontSize: "12px" }}>18:23 29/04/2025</div>
                                    </div>
                                </div>
                            </IonCard>
                            <IonCard className="m-0 p-3 rounded-4 shadow-sm mt-3">
                                <div className="row d-flex align-items-center">
                                    <div className="badge bg-primary col-2 ms-2" style={{ width: "30px", height: "30px" }}> </div>
                                    <div className='ms-2 fs-13 col-10 px-0'>
                                        <div className='d-flex justify-content-between fw-bold '>
                                            <div className=''>Mr Wong</div>
                                            <div className='fs-15'>12.000.000 đ</div>
                                        </div>
                                        <div style={{ fontSize: "12px" }}>18:23 29/04/2025</div>
                                    </div>
                                </div>
                            </IonCard>
                        </div>
                        <div className="tab-pane " id="nav-month">
                            <IonRow className='d-flex align-items-center'>
                                <IonCol size='3' >
                                    <button className='bg-input-search rounded-circle p-1 shadow-sm' style={{ width: "30px", height: "30px" }}>
                                        <IonIcon icon={chevronBackOutline} ></IonIcon>
                                    </button>
                                </IonCol>
                                <IonCol size='6'>
                                    <div onClick={() => setIsModalOpenSearchMonth(true)} className="d-flex align-items-center p-2 bg-input-search rounded-pill  w-100 fs-13" style={{ height: '45px' }}>
                                        <input
                                            type="text"
                                            className="form-control bg-input-search border-0 shadow-none fs-13 fw-bold"
                                            placeholder={t("tim-kiem")}
                                            style={{
                                                flex: 1,
                                                borderRadius: '50px',
                                            }}
                                            value={`Tháng ${searchMonth + 1} - ${searchYear}`}
                                        />
                                        <div id="open-modal-search-date-home"
                                            className=" d-flex justify-content-center align-items-center me-0"
                                            style={{
                                                backgroundColor: 'white',
                                                borderRadius: '50%',
                                                width: '35px',
                                                height: '35px',
                                            }}
                                        >
                                            <IonIcon icon={optionsOutline} color="dark" style={{ fontSize: "20px" }} />
                                        </div>
                                    </div>
                                </IonCol>
                                <IonCol size='3' className='text-end'>
                                    <button className='bg-input-search rounded-circle p-2  shadow-sm' style={{ width: "30px", height: "30px" }}>
                                        <IonIcon icon={chevronForwardOutline}></IonIcon>
                                    </button>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-pink text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("tong-booking")}</div>
                                    </IonCard>
                                </IonCol>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-success text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("da-thanh-toan")}</div>
                                    </IonCard>
                                </IonCol>
                                <IonCol size='4'>
                                    <IonCard className='shadow-sm rounded-4 p-2 m-0 text-secondary text-center'>
                                        <div className='fs-1 fw-bold'>5</div>
                                        <div className='fs-13'>{t("da-huy")}</div>
                                    </IonCard>
                                </IonCol>
                            </IonRow>

                            <div className="calendar p-2 rounded-4 my-2 shadow-sm" style={{ backgroundColor: '#fff' }}>
                               

                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-3 mt-3 flex-wrap">
                                <div className="d-flex align-items-center gap-1">
                                    <span className="badge bg-primary mb-1" style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Nhật khách</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-success mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Thanh toán</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-warning mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Đợi khách</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-3 mt-2 flex-wrap">
                                <div className="d-flex align-items-center gap-1">
                                    <span className="badge bg-info mb-1" style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Chờ duyệt</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-danger mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Không duyệt</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`badge bg-secondary mb-1`} style={{ fontSize: "10px" }}> </span>
                                    <span className='fs-13'><span className='fw-bold'>1</span> Đã hủy</span>
                                </div>
                            </div>

                            <IonCard className="m-0 p-3 rounded-4 shadow-sm mt-3">
                                <div className="row d-flex align-items-center ">
                                    <div className="badge bg-primary col-2 ms-2" style={{ width: "30px", height: "30px" }}> </div>
                                    <div className='ms-2 fs-13 col-10 px-0'>
                                        <div className='d-flex justify-content-between fw-bold '>
                                            <div className=''>Mr Wong</div>
                                            <div className='fs-15'>12.000.000 đ</div>
                                        </div>
                                        <div style={{ fontSize: "12px" }}>18:23 29/04/2025</div>
                                    </div>
                                </div>
                            </IonCard>
                            <IonCard className="m-0 p-3 rounded-4 shadow-sm mt-3">
                                <div className="row d-flex align-items-center">
                                    <div className="badge bg-primary col-2 ms-2" style={{ width: "30px", height: "30px" }}> </div>
                                    <div className='ms-2 fs-13 col-10 px-0'>
                                        <div className='d-flex justify-content-between fw-bold '>
                                            <div className=''>Mr Wong</div>
                                            <div className='fs-15'>12.000.000 đ</div>
                                        </div>
                                        <div style={{ fontSize: "12px" }}>18:23 29/04/2025</div>
                                    </div>
                                </div>
                            </IonCard>
                        </div>
                    </form>

                </IonGrid>
            </IonContent>
            {/* Modal search month */}
            <IonModal isOpen={isModalOpenSearchMonth} onDidDismiss={() => setIsModalOpenSearchMonth(false)} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className='d-flex justify-content-between mx-3 mt-3' >
                    <div className='fs-15 '>{t("tim-lich")}</div>
                    <IonIcon onClick={() => dismiss()} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                </div>
                <IonGrid className='p-3 m-0'>
                    <IonRow>
                        <IonCol size='6'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' value={selectedMonth}
                                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
                                {moment.months().map((month, idx) => (
                                    <option key={idx} value={idx}>{month}</option>
                                ))}
                            </select>

                        </IonCol>
                        <IonCol size='6'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100' value={selectedYear}
                                onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                                {Array.from({ length: 10 }, (_, i) => {
                                    const year = moment().year() - 5 + i;
                                    return <option key={year} value={year}>{year}</option>;
                                })}
                            </select>
                        </IonCol>
                    </IonRow>
                    <IonRow className='my-3'>
                        <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100' onClick={() => { handleSearchMonth(); setIsModalOpenSearchMonth(false) }} >Xem</button>
                    </IonRow>
                </IonGrid>
            </IonModal>
            {/* Modal search date */}
            <IonModal isOpen={isModalOpenSearchDate} onDidDismiss={() => { setIsModalOpenSearchDate(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className='d-flex justify-content-between mx-3 mt-3' >
                    <div className='fs-15 '>{t("tim-lich")}</div>
                    <IonIcon onClick={() => dismiss()} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                </div>
                <IonGrid className='p-3 m-0'>
                    <IonRow>
                        <IonCol size='4'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                            </select>

                        </IonCol>
                        <IonCol size='4'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' >
                                <option value={1}>January</option>
                                <option value={2}>February</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>Jury</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>Octoder</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                            </select>

                        </IonCol>
                        <IonCol size='4'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100' >
                                <option value={2020}>2020</option>
                                <option value={2021}>2021</option>
                                <option value={2022}>2022</option>
                                <option value={2023}>2023</option>
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                                <option value={2026}>2026</option>
                                <option value={2027}>2027</option>
                                <option value={2028}>2028</option>
                                <option value={2029}>2029</option>
                                <option value={2030}>2030</option>
                            </select>
                        </IonCol>
                    </IonRow>
                    <IonRow className='my-3'>
                        <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100' onClick={() => setIsModalOpenSearchDate(false)}>{t("xem")}</button>
                    </IonRow>
                </IonGrid>
            </IonModal>

        </IonPage>
    );
};

export default Revenue;
