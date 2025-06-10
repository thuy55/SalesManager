import { IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonTab, IonTabButton, IonTabs, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { businessOutline, calendarClearOutline, calendarNumberOutline, calendarOutline, chevronBackOutline, chevronForwardOutline, closeOutline, cloudDoneOutline, notificationsOutline, optionsOutline, shareSocialOutline } from 'ionicons/icons';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { useHistory } from 'react-router';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BranchModal from '../components/ModalBrand';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
const Invoices: React.FC = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const modal = useRef<HTMLIonModalElement>(null);


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
        let current = startOfCalendar.clone();

        while (current.isSameOrBefore(endOfCalendar, "day")) {
            days.push(current.clone());
            current.add(1, "day");
        }

    }
    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("hoa-don")}</div>
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
                                    <div id='open-modal-search-date' className="d-flex align-items-center p-2 bg-input-search rounded-pill  w-100 fs-13" style={{ height: '45px' }}>
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
                            <IonCard className='rounded-4 p-4 m-0 text-center mt-3 shadow-sm'>
                                <div className='text-pink fw-bold fs-1'>90.000.000đ</div>
                                <div className='fs-13 '>{t("tong-doanh-so")}</div>
                            </IonCard>
                            <IonCard className='rounded-4 p-3 m-0 fs-13 mt-3 shadow-sm' onClick={() => setIsModalOpenDetail(true)}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className=' fw-bold'>
                                        #002 - Mr Lee
                                    </div>
                                    <div className=' fw-bold'>35.000.000 đ</div>
                                </div>
                                <div className='fs-13 '>18:00 29/04/2025 - 23:30 29/04/2025</div>
                            </IonCard>
                            <IonCard className='rounded-4 p-3 m-0 fs-13 mt-3 shadow-sm' onClick={() => setIsModalOpenDetail(true)}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className=' fw-bold'>
                                        #002 - Mr Lee
                                    </div>
                                    <div className=' fw-bold'>35.000.000 đ</div>
                                </div>
                                <div className='fs-13 '>18:00 29/04/2025 - 23:30 29/04/2025</div>
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
                            <IonCard className='rounded-4 p-4 m-0 text-center mt-3 shadow-sm'>
                                <div className='text-pink fw-bold fs-1'>90.000.000đ</div>
                                <div className='fs-13 '>{t("tong-doanh-so")}</div>
                            </IonCard>
                            <IonCard className='rounded-4 p-3 m-0 fs-13 mt-3 shadow-sm'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className=' fw-bold'>
                                        #002 - Mr Lee
                                    </div>
                                    <div className=' fw-bold'>35.000.000 đ</div>
                                </div>
                                <div className='fs-13 '>18:00 29/04/2025 - 23:30 29/04/2025</div>
                            </IonCard>
                            <IonCard className='rounded-4 p-3 m-0 fs-13 mt-3 shadow-sm'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className=' fw-bold'>
                                        #002 - Mr Lee
                                    </div>
                                    <div className=' fw-bold'>35.000.000 đ</div>
                                </div>
                                <div className='fs-13 '>18:00 29/04/2025 - 23:30 29/04/2025</div>
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
                                    <div className="d-flex align-items-center p-2 bg-input-search rounded-pill  w-100 fs-13" id="open-modal-search-month" style={{ height: '45px' }}>
                                        <input
                                            type="text"
                                            className="form-control bg-input-search border-0 shadow-none fs-13 fw-bold"
                                            placeholder={t("tim-kiem")}
                                            style={{
                                                flex: 1,
                                                borderRadius: '50px',
                                            }}
                                            value="Tháng 05 / 2025"
                                        />
                                        <div
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
                            <IonCard className='rounded-4 p-4 m-0 text-center mt-3 shadow-sm'>
                                <div className='text-pink fw-bold fs-1'>90.000.000đ</div>
                                <div className='fs-13 '>{t("tong-doanh-so")}</div>
                            </IonCard>
                            <IonCard className='rounded-4 p-3 m-0 fs-13 mt-3 shadow-sm'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className=' fw-bold'>
                                        #002 - Mr Lee
                                    </div>
                                    <div className=' fw-bold'>35.000.000 đ</div>
                                </div>
                                <div className='fs-13 '>18:00 29/04/2025 - 23:30 29/04/2025</div>
                            </IonCard>
                            <IonCard className='rounded-4 p-3 m-0 fs-13 mt-3 shadow-sm'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className=' fw-bold'>
                                        #002 - Mr Lee
                                    </div>
                                    <div className=' fw-bold'>35.000.000 đ</div>
                                </div>
                                <div className='fs-13 '>18:00 29/04/2025 - 23:30 29/04/2025</div>
                            </IonCard>
                        </div>
                    </form>

                </IonGrid>
            </IonContent>
            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 pb-3' >

                    <div className='text-end me-3 mt-3 fixed-header' ><IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></div>
                    <IonGrid className='p-3 pb-5 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <IonRow className='fw-bold'>{t("thong-tin-khach-hang")}</IonRow>
                        <IonCard className='rounded-4 m-0 border border-1 shadow-none fs-13 text-dark mt-3'>
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
                        <IonCard className='rounded-4 m-0 border border-1 shadow-none fs-13 text-dark mt-3'>
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
                                {t("khu-vuc")} / {t("phong")} <div className='fw-bold'>Happy</div>
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
                        <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13  text-dark'>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>
                                    <div>Combo1 <span className='fw-bold text-pink'>x 1</span></div>
                                    <div>4.500.000đ</div>
                                </div>
                                <div className='fw-bold'>4.500.000đ</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>
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
                        <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13  text-dark'>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>{t("phuong-thuc-thanh-toan")}</div>
                                <div className='fw-bold'>{t("tien-mat")}</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>{t("ngay-thanh-toan")}</div>
                                <div className='fw-bold'>17:00 05/05/2025</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>{t("le-tan")}</div>
                                <div className='fw-bold'>Ms Xinh</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>{t("nguoi-dat")}</div>
                                <div className='fw-bold'>Mr Lee</div>
                            </IonRow>
                        </IonCard>
                        <IonRow className='mt-3'>
                            <IonCol size='6'>
                                <button className='bg-warning text-dark fw-bold fs-13 p-3 rounded-pill w-100'>
                                    <IonIcon icon={cloudDoneOutline} className='me-2'></IonIcon> {t("tai-hoa-don")}
                                </button>
                            </IonCol>
                            <IonCol size='6'>
                                <button className='bg-light text-dark fw-bold fs-13 p-3 rounded-pill w-100'>
                                    <IonIcon icon={shareSocialOutline} className='me-2'></IonIcon> {t("chia-se")}
                                </button>
                            </IonCol>
                        </IonRow>


                    </IonGrid>
                    <IonFooter className='fixed-bottom bg-white'>
                        <IonRow className='d-flex justify-content-between align-items-center px-3 py-2'>
                            <div className='text-pink fw-bold fs-4'>50.000.000đ</div>
                            <button className='rounded-pill p-3 text-white bg-pink fw-bold fs-13'>{t("thanh-toan")}</button>
                        </IonRow>
                    </IonFooter>
                </div>
            </IonModal>
            {/* Modal search month */}
            <IonModal ref={modal} trigger="open-modal-search-month" initialBreakpoint={1} breakpoints={[0, 1]}>
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
                        <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100'>{t("xem")}</button>
                    </IonRow>
                </IonGrid>
            </IonModal>
            {/* Modal search date */}
            <IonModal ref={modal} trigger="open-modal-search-date" initialBreakpoint={1} breakpoints={[0, 1]}>
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
                        <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100'>{t("xem")}</button>
                    </IonRow>
                </IonGrid>
            </IonModal>
        </IonPage>
    );
};

export default Invoices;
