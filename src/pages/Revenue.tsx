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
    const [isModalOpenSearchWeek, setIsModalOpenSearchWeek] = useState(false);
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

    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);

    //search week
    const [selectedDaysearchweek, setSelectedDaysearchweek] = useState<number>(moment().date());
    const [selectedMonthsearchweek, setSelectedMonthsearchweek] = useState<number>(moment().month()); // 0 - 11
    const [selectedYearsearchweek, setSelectedYearsearchweek] = useState<number>(moment().year());
    const [startWeek, setStartWeek] = useState<string>(moment().startOf('isoWeek').format('DD/MM/YYYY'));
    const [endWeek, setEndWeek] = useState<string>(moment().endOf('isoWeek').format('DD/MM/YYYY'));
    function handleSearchWeek() {
        const searchDate = moment()
            .year(selectedYearsearchweek)
            .month(selectedMonthsearchweek)
            .date(selectedDaysearchweek);
        const startOfWeek = searchDate.clone().startOf('isoWeek'); // Thứ 2
        const endOfWeek = searchDate.clone().endOf('isoWeek');

        setStartWeek(startOfWeek.format('DD/MM/YYYY'));
        setEndWeek(endOfWeek.format('DD/MM/YYYY'))
    }

    //search date
    const [selectedDaysearchDate, setSelectedDaysearchDate] = useState<number>(moment().date());
    const [selectedMonthsearchDate, setSelectedMonthsearchDate] = useState<number>(moment().month()); // 0 - 11
    const [selectedYearsearchDate, setSelectedYearsearchDate] = useState<number>(moment().year());
    const [startDate, setStartDate] = useState<string>(moment().format('DD/MM/YYYY'));
    function handleSearchDate() {
        const searchDate = moment()
            .year(selectedYearsearchDate)
            .month(selectedMonthsearchDate)
            .date(selectedDaysearchDate);
        const startOfWeek = searchDate.clone().startOf('isoWeek'); // Thứ 2
        const endOfWeek = searchDate.clone().endOf('isoWeek');

        setStartWeek(startOfWeek.format('DD/MM/YYYY'));
        setEndWeek(endOfWeek.format('DD/MM/YYYY'))
    }





    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-2 pt-4'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>Doanh số</div>
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
                            <IonCard className='shadow-sm rounded-4 p-3 bg-danger bg-opacity-10 m-2 text-danger text-center'>
                                <div className='fs-13'>Tổng doanh thu</div>
                                <div className='fs-1 fw-bold'>5.000.000</div>
                            </IonCard>
                            <IonGrid className='p-2'>
                                <IonCard className='shadow-none rounded-4 border p-2 m-0' onClick={() => { setIsModalOpenDetail(true) }}>
                                    <IonRow className='d-flex justify-content-between align-items-center'>
                                        <span className='bg-success text-white p-1 py-0 rounded-pill px-2' style={{ fontSize: "11px" }}>Đã thanh toán</span>
                                        <div className='fs-13 text-muted'>Ngày: 12/06/2025 14:00:00</div>
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-2'>
                                        <div className='fs-13 '>5 món</div>
                                        <div className='fs-13 fw-bold'>Tổng: 25.000.000 vnd</div>
                                    </IonRow>
                                </IonCard>
                            </IonGrid>
                        </div>
                        <div className="tab-pane " id="nav-week">
                            <IonRow className='d-flex align-items-center'>
                                <IonCol size='2' >
                                    <button className='bg-input-search rounded-circle p-1 shadow-sm' style={{ width: "30px", height: "30px" }}>
                                        <IonIcon icon={chevronBackOutline} ></IonIcon>
                                    </button>
                                </IonCol>
                                <IonCol size='8'>
                                    <div onClick={() => setIsModalOpenSearchWeek (true)} className="d-flex align-items-center p-2 bg-input-search rounded-pill  w-100 fs-13" style={{ height: '45px' }}>
                                        <input
                                            type="text" readOnly
                                            className="form-control bg-input-search border-0 shadow-none fs-13 fw-bold"
                                            placeholder={t("tim-kiem")}
                                            style={{
                                                flex: 1,
                                                borderRadius: '50px',
                                            }}
                                            value={`${startWeek} - ${endWeek}`}
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
                            <IonCard className='shadow-sm rounded-4 p-3 bg-danger bg-opacity-10 m-2 text-danger text-center'>
                                <div className='fs-13'>Tổng doanh thu</div>
                                <div className='fs-1 fw-bold'>5.000.000</div>
                            </IonCard>
                            <IonGrid className='p-2'>
                                <IonCard className='shadow-none rounded-4 border p-2 m-0' onClick={() => { setIsModalOpenDetail(true) }}>
                                    <IonRow className='d-flex justify-content-between align-items-center'>
                                        <span className='bg-success text-white p-1 py-0 rounded-pill px-2' style={{ fontSize: "11px" }}>Đã thanh toán</span>
                                        <div className='fs-13 text-muted'>Ngày: 12/06/2025 14:00:00</div>
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-2'>
                                        <div className='fs-13 '>5 món</div>
                                        <div className='fs-13 fw-bold'>Tổng: 25.000.000 vnd</div>
                                    </IonRow>
                                </IonCard>
                            </IonGrid>
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
                            <IonCard className='shadow-sm rounded-4 p-3 bg-danger bg-opacity-10 m-2 text-danger text-center'>
                                <div className='fs-13'>Tổng doanh thu</div>
                                <div className='fs-1 fw-bold'>5.000.000</div>
                            </IonCard>
                            <IonGrid className='p-2'>
                                <IonCard className='shadow-none rounded-4 border p-2 m-0' onClick={() => { setIsModalOpenDetail(true) }}>
                                    <IonRow className='d-flex justify-content-between align-items-center'>
                                        <span className='bg-success text-white p-1 py-0 rounded-pill px-2' style={{ fontSize: "11px" }}>Đã thanh toán</span>
                                        <div className='fs-13 text-muted'>Ngày: 12/06/2025 14:00:00</div>
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-2'>
                                        <div className='fs-13 '>5 món</div>
                                        <div className='fs-13 fw-bold'>Tổng: 25.000.000 vnd</div>
                                    </IonRow>
                                </IonCard>
                            </IonGrid>
                        </div>
                    </form>

                </IonGrid>
            </IonContent>
            {/* Modal search month */}
            <IonModal isOpen={isModalOpenSearchMonth} onDidDismiss={() => setIsModalOpenSearchMonth(false)} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className='d-flex justify-content-between mx-3 mt-3' >
                    <div className='fs-15 '>{t("tim-lich")}</div>
                    <IonIcon onClick={() => setIsModalOpenSearchMonth(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
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
                    <IonIcon onClick={() => setIsModalOpenSearchDate(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                </div>
                <IonGrid className='p-3 m-0'>
                    <IonRow>
                        <IonCol size='4'>

                            <select
                                value={selectedDaysearchweek}
                                onChange={(e) => setSelectedDaysearchweek(parseInt(e.target.value))}
                                className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light'
                            >
                                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>

                        </IonCol>
                        <IonCol size='4'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' value={selectedMonthsearchweek}
                                onChange={(e) => setSelectedMonthsearchweek(parseInt(e.target.value))}>
                                {moment.months().map((month, idx) => (
                                    <option key={idx} value={idx}>{month}</option>
                                ))}
                            </select>

                        </IonCol>
                        <IonCol size='4'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100' value={selectedYearsearchweek}
                                onChange={(e) => setSelectedYearsearchweek(parseInt(e.target.value))}>
                                {Array.from({ length: 10 }, (_, i) => {
                                    const year = moment().year() - 5 + i;
                                    return <option key={year} value={year}>{year}</option>;
                                })}
                            </select>
                        </IonCol>
                    </IonRow>
                    <IonRow className='my-3'>
                        <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100' onClick={() => { setIsModalOpenSearchDate(false); handleSearchWeek() }}>{t("xem")}</button>
                    </IonRow>
                </IonGrid>
            </IonModal>
            {/* Modal search week */}
            <IonModal isOpen={isModalOpenSearchWeek} onDidDismiss={() => { setIsModalOpenSearchWeek(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className='d-flex justify-content-between mx-3 mt-3' >
                    <div className='fs-15 '>{t("tim-lich")}</div>
                    <IonIcon onClick={() => setIsModalOpenSearchWeek(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                </div>
                <IonGrid className='p-3 m-0'>
                    <IonRow>
                        <IonCol size='4'>

                            <select
                                value={selectedDaysearchweek}
                                onChange={(e) => setSelectedDaysearchweek(parseInt(e.target.value))}
                                className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light'
                            >
                                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>

                        </IonCol>
                        <IonCol size='4'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' value={selectedMonthsearchweek}
                                onChange={(e) => setSelectedMonthsearchweek(parseInt(e.target.value))}>
                                {moment.months().map((month, idx) => (
                                    <option key={idx} value={idx}>{month}</option>
                                ))}
                            </select>

                        </IonCol>
                        <IonCol size='4'>
                            <select className='p-2 rounded-4 fs-13 border border-1 w-100' value={selectedYearsearchweek}
                                onChange={(e) => setSelectedYearsearchweek(parseInt(e.target.value))}>
                                {Array.from({ length: 10 }, (_, i) => {
                                    const year = moment().year() - 5 + i;
                                    return <option key={year} value={year}>{year}</option>;
                                })}
                            </select>
                        </IonCol>
                    </IonRow>
                    <IonRow className='my-3'>
                        <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100' onClick={() => { setIsModalOpenSearchWeek(false); handleSearchWeek() }}>{t("xem")}</button>
                    </IonRow>
                </IonGrid>
            </IonModal>

            {/* xem Detail */}
            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 pb-3' >
                    <div className='d-flex justify-content-between mx-3 py-3 fixed-header' >
                        <div className='fs-15 fw-bold'>Hóa đơn: #24541414</div>
                        <IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                    </div>
                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "80vh"
                    }}>
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
                    </IonGrid>
                    <IonRow className='d-flex justify-content-end mb-2 mt-3 px-4 '>
                        <button className='bg-success p-3 rounded-3 text-white'>IN</button>
                    </IonRow>
                </div>
            </IonModal>

        </IonPage>
    );
};

export default Revenue;
