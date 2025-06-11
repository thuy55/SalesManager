import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonTitle, IonToggle, IonToolbar, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { accessibilityOutline, appsOutline, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, calendarClearOutline, carOutline, closeOutline, fastFoodOutline, gridOutline, notificationsOutline, optionsOutline, peopleOutline, qrCodeOutline, searchOutline, ticketOutline, womanOutline } from 'ionicons/icons';
// import Calendar from 'react-calendar';
import { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import moment from 'moment';
import { toggleDarkMode } from '../theme/theme';
import { menuController, RefresherEventDetail } from '@ionic/core';

import BranchModal from '../components/ModalBrand';

import { useTranslation } from 'react-i18next';
const Home: React.FC = () => {
    const { t, i18n } = useTranslation();
    const week = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    const [calendarDays, setCalendarDays] = useState<moment.Moment[]>([]);

    useEffect(() => {
        const startOfMonth = moment().startOf("month");
        const endOfMonth = moment().endOf("month");

        const startOfCalendar = startOfMonth.clone().startOf("isoWeek"); // Bắt đầu từ thứ 2 tuần đầu tiên
        const endOfCalendar = endOfMonth.clone().endOf("isoWeek");       // Kết thúc ở Chủ nhật cuối cùng

        const days: moment.Moment[] = [];
        const current = startOfCalendar.clone();

        while (current.isSameOrBefore(endOfCalendar, "day")) {
            days.push(current.clone());
            current.add(1, "day");
        }

        setCalendarDays(days);
    }, []);

    const datamonth = [
        {
            time: "05/05/2025",
            booking: [2, 1, 0]
        },
        {
            time: "08/05/2025",
            booking: [2, 0, 4]
        }
    ];
    const modal = useRef<HTMLIonModalElement>(null);

    const [isModalOpenSearchMonth, setIsModalOpenSearchMonth] = useState(false);
    const [isModalOpenSee, setIsModalOpenSee] = useState(false);

    //search month

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

        setCalendarDays(days);
    }
    const history = useHistory();
    const handleClick = (e: string) => {
        setIsModalOpenSee(false);
        history.push(e);
        console.log(e);

    };

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
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>

                    <IonRow className='fs-13 '>
                        {t("xin-chao")}
                    </IonRow>
                    <IonRow className='fs-5 fw-bold'>
                        Nguyễn Thị Thanh Thúy
                    </IonRow>
                    <div className="d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm w-100 mt-3" style={{ height: '50px' }}>
                        <IonIcon icon={searchOutline} className="ms-3 me-2 " style={{ fontSize: '20px' }} />
                        <input
                            type="text"
                            className="form-control border-0 shadow-none bg-switch-box"
                            placeholder={t("tim-kiem")}
                            style={{
                                flex: 1,
                                borderRadius: '50px',
                            }}
                        />
                        <button
                            className=" d-flex justify-content-center align-items-center me-2"
                            style={{
                                backgroundColor: '#f07',
                                borderRadius: '50%',
                                width: '35px',
                                height: '35px',
                            }}
                        >
                            <IonIcon icon={optionsOutline} color="light" style={{ fontSize: "20px" }} />
                        </button>
                    </div>
                    <IonRow className='mt-4'>
                        <IonCol size='3' className='d-flex justify-content-center'>
                            <div onClick={() => { handleClick("/booking") }}>
                                <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                    <IonIcon icon={calendarClearOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                                </div>
                                <div className='fs-13 mt-1 text-center'>Bán hàng</div>
                            </div>
                        </IonCol>
                        <IonCol size='3' className='d-flex justify-content-center'>
                            <div onClick={() => { handleClick("/menu") }}>
                                <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                    <IonIcon icon={fastFoodOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                                </div>
                                <div className='fs-13 mt-1 text-center'>Sản phẩm</div>
                            </div>
                        </IonCol>
                        <IonCol size='3' className='d-flex justify-content-center'>
                            <div onClick={() => { handleClick("/diagram") }}>
                                <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                    <IonIcon icon={businessOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                                </div>
                                <div className='fs-13 mt-1 text-center'>Sơ đồ</div>
                            </div>
                        </IonCol>
                        <IonCol size='3' className='d-flex justify-content-center'>
                             <div onClick={() => { handleClick("/revenue") }}>
                                <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                    <IonIcon icon={businessOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                                </div>
                                <div className='fs-13 mt-1 text-center'>Hóa đơn</div>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='mt-2'>
                        <IonCol size='6' className='d-flex align-items-center'>
                            <div className='bg-pink rounded-circle' style={{ width: "20px", height: "20px" }}></div>
                            <div className='fs-13 fw-bold ms-2'>{t("lich-dat-ban")}</div>
                        </IonCol>
                        <IonCol size='6'>
                            <div onClick={() => { setIsModalOpenSearchMonth(true) }} className="d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm w-100 fs-13" style={{ height: '50px' }}>
                                <input
                                    type="text"
                                    className="form-control border-0 shadow-none fs-13 fw-bold bg-switch-box"
                                    placeholder={t("tim-kiem")}
                                    style={{
                                        flex: 1,
                                        borderRadius: '50px',
                                    }}
                                    value={`${t("thang")} ${searchMonth + 1} / ${searchYear}`}
                                />
                                <div
                                    className=" d-flex justify-content-center align-items-center me-0"
                                    style={{
                                        backgroundColor: '#f07',
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                    }}
                                >
                                    <IonIcon icon={optionsOutline} color="light" style={{ fontSize: "20px" }} />
                                </div>
                            </div>
                        </IonCol>
                    </IonRow>

                    <div className="calendar p-2 rounded-4 my-2 shadow-sm " style={{ backdropFilter: "blur(50px)" }}>
                        <div className="d-flex justify-content-between text-center mb-2">
                            {week.map((day, idx) => (
                                <div key={idx} className="flex-fill fw-bold bg-pink mx-1 py-2 rounded-3 p-1" style={{ fontSize: "13px" }}>{day}</div>
                            ))}
                        </div>
                        <div className="d-flex flex-wrap text-center">
                            {calendarDays.map((date, idx) => {
                                const isCurrentMonth = date.month() === searchMonth && date.year() === searchYear;
                                return (
                                    <div
                                        key={idx}
                                        className={`row  rounded-3 m-1 p-1 ${isCurrentMonth ? 'border' : ''} `}
                                        style={{
                                            width: "12%",
                                            // backgroundColor: isCurrentMonth ? "#fff" : "transparent",
                                            color: isCurrentMonth ? undefined : 'transparent',
                                            fontSize: "10px",
                                            minHeight: "45px"
                                        }}
                                    >

                                        <div className='col-6 p-0 pe-1'>
                                            {date.format("DD")}
                                        </div>
                                        {datamonth && datamonth.map((book, key) => {
                                            if (book.time === date.format("DD/MM/YYYY")) {
                                                return (
                                                    <>
                                                        <div className='col-6 p-0 ps-1' key={key}>
                                                            <div className='bg-pink text-white rounded-2'>
                                                                {book.booking[0]}
                                                            </div>
                                                        </div>
                                                        <div className='col-6 p-0 mt-1 pe-1'>
                                                            <div className='bg-success text-white rounded-2'>
                                                                {book.booking[1]}
                                                            </div>
                                                        </div>
                                                        <div className='col-6 p-0 mt-1 ps-1'>
                                                            <div className='bg-warning text-white rounded-2'>
                                                                {book.booking[2]}
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="d-flex justify-content-between align-items-center gap-3 mt-3 flex-wrap">
                            <div className="d-flex align-items-center gap-1">
                                <span className="badge bg-pink mb-1" style={{ fontSize: "10px" }}> </span>
                                <span className='fs-13'> Tổng booking</span>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <span className={`badge bg-success mb-1`} style={{ fontSize: "10px" }}> </span>
                                <span className='fs-13'> Đã thanh toán</span>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <span className={`badge bg-warning mb-1`} style={{ fontSize: "10px" }}> </span>
                                <span className='fs-13'> Còn chờ</span>
                            </div>
                        </div>
                    </div>

                    <IonRow className='fw-bold fs-13 mt-4'>{t("danh-sach-booking")} hôm nay 26/05/2025</IonRow>
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
                    <IonRow className='p-3'>
                        <img src='../image/not-booking.svg' className='w-100'></img>
                        <div className='mt-3 fs-13 fw-bold d-flex justify-content-center'>
                            <div>Không tìm thấy lịch sử</div>
                        </div>
                    </IonRow>
                    {/* <IonCard className="m-0 p-3 rounded-4 shadow-sm mt-3">
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
                            <div className="badge bg-warning col-2 ms-2" style={{ width: "30px", height: "30px" }}> </div>
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
                            <div className="badge bg-success col-2 ms-2" style={{ width: "30px", height: "30px" }}> </div>
                            <div className='ms-2 fs-13 col-10 px-0'>
                                <div className='d-flex justify-content-between fw-bold '>
                                    <div className=''>Mr Wong</div>
                                    <div className='fs-15'>12.000.000 đ</div>
                                </div>
                                <div style={{ fontSize: "12px" }}>18:23 29/04/2025</div>
                            </div>
                        </div>
                    </IonCard> */}
                </IonGrid>
            </IonContent>

            {/* Modal menu */}
            <IonModal isOpen={isModalOpenSee} onDidDismiss={() => { setIsModalOpenSee(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className='text-end me-3 mt-3' ><IonIcon onClick={() => setIsModalOpenSee(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></div>
                <IonRow className='mt-2 pb-4'>
                    {/* <IonCol size='3' className='d-flex justify-content-center'>
                        <div onClick={() => { handleClick("/booking-table") }}>
                            <div className='rounded-circle bg-switch-box dark:bg-secondary shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={calendarClearOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center'>{t("dat-ban")}</div>
                        </div>
                    </IonCol>
                    <IonCol size='3' className='d-flex justify-content-center'>
                        <Link to="/menu" onClick={() => setIsModalOpenSee(false)}>
                            <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={fastFoodOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center'>{t("thuc-don")}</div>
                        </Link>
                    </IonCol>
                    <IonCol size='3' className='d-flex justify-content-center'>
                        <Link to='/event' onClick={() => setIsModalOpenSee(false)}>
                            <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={ticketOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center '>{t("su-kien")}</div>
                        </Link>
                    </IonCol> */}
                    <IonCol size='3' className='d-flex justify-content-center'>
                        <Link to='/assistant' onClick={() => setIsModalOpenSee(false)}>
                            <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={womanOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center'>{t("tro-li")}</div>
                        </Link>
                    </IonCol>
                    <IonCol size='3' className='d-flex justify-content-center'>
                        <div>
                            <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={carOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center'>{t("dat-xe")}</div>
                        </div>
                    </IonCol>
                    <IonCol size='3' className='d-flex justify-content-center'>
                        <Link to='/brand' onClick={() => setIsModalOpenSee(false)}>
                            <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={businessOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center'>{t("nha-hang")}</div>
                        </Link>
                    </IonCol>
                    <IonCol size='3' className='d-flex justify-content-center'>
                        <Link to='/customers' onClick={() => setIsModalOpenSee(false)}>
                            <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={peopleOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center'>{t("khach-hang")}</div>
                        </Link>
                    </IonCol>
                    {/* <IonCol size='3' className='d-flex justify-content-center'>
                        <div>
                            <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={qrCodeOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center'>Thanh toán</div>
                        </div>
                    </IonCol> */}
                    {/* <IonCol size='3' className='d-flex justify-content-center'>
                        <Link to='/room-diagram' onClick={() => setIsModalOpenSee(false)}>
                            <div className='rounded-circle bg-switch-box shadow-sm d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                                <IonIcon icon={appsOutline} style={{ fontSize: "20px" }} className='text-pink'></IonIcon>
                            </div>
                            <div className='fs-13 mt-1 text-center'>{t("so-do-phong")}</div>
                        </Link>
                    </IonCol> */}
                </IonRow>

            </IonModal>

            {/* Modal search date */}
            <IonModal isOpen={isModalOpenSearchMonth} onDidDismiss={() => setIsModalOpenSearchMonth(false)} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className='d-flex justify-content-between mx-3 mt-3' >
                    <div className='fs-15 '>{t("tim-phong")}</div>
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
                        <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100' onClick={() => { handleSearchMonth(); setIsModalOpenSearchMonth(false) }} >{t("xem")}</button>
                    </IonRow>
                </IonGrid>


            </IonModal>
        </IonPage>
    );
};

export default Home;
