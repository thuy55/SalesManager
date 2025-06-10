import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, chevronForwardOutline, closeOutline, cloudDoneOutline, key, locateOutline, locationSharp, notificationsOutline, optionsOutline, remove, searchOutline, shareSocialOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
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
const RoomDiagram: React.FC = () => {
    const { t, i18n } = useTranslation();
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

    //search
    const [selectedMonth, setSelectedMonth] = useState<number>(moment().month()); // 0 - 11
    const [selectedYear, setSelectedYear] = useState<number>(moment().year());
    const [selectedDate, setSelectedDate] = useState<number>(moment().date());

    const listDate = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

    const [searchDate, setSearchDate] = useState<number>(moment().date());
    const [searchMonth, setSearchMonth] = useState<number>(moment().month()); // 0 - 11
    const [searchYear, setSearchYear] = useState<number>(moment().year());
    const [date, setdate] = useState("");
    useEffect(() => {
        const selectedMoment = moment({
            year: searchYear,
            month: searchMonth,
            day: searchDate
        });

        const weekdayNumber = selectedMoment.day();
        const weekday = listDate[weekdayNumber];
        setdate(weekday)
    }, [])



    function handleSearchMonth() {

        setSearchMonth(selectedMonth);
        setSearchYear(selectedYear)
        setSearchDate(selectedDate);
        const selectedMoment = moment({
            year: selectedYear,
            month: selectedMonth,
            day: selectedDate
        });

        const weekdayNumber = selectedMoment.day();
        const weekday = listDate[weekdayNumber];
        setdate(weekday)
    }

     const handleClick = (e: any) => {
        history.push(e);
        console.log(e);

    };
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
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("so-do-phong")}</div>
                    </IonRow>

                    <IonRow className='d-flex align-items-center'>
                        <IonCol size='3' >
                            <button className='bg-input-search rounded-circle p-1 shadow-sm' style={{ width: "30px", height: "30px" }}>
                                <IonIcon icon={chevronBackOutline} ></IonIcon>
                            </button>
                        </IonCol>

                        <IonCol size='6'>
                            <div data-bs-toggle="collapse" data-bs-target="#collapseSearch" aria-expanded="true" aria-controls="collapseSearch" className="d-flex align-items-center p-2 bg-input-search rounded-pill  w-100 fs-13" style={{ height: '45px' }}>
                                <input
                                    type="text"
                                    className="form-control bg-input-search border-0 shadow-none fs-13 fw-bold"
                                    placeholder={t("tim-kiem")}
                                    style={{
                                        flex: 1,
                                        borderRadius: '50px',
                                    }}
                                    value={`${date} - ${searchDate}/${searchMonth + 1}/${searchYear}`}
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
                    <div className="collapse show" id="collapseSearch">
                        <IonRow className='mt-3'>
                            <IonCol size='4'>

                                <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' value={searchDate} onChange={(e) => setSelectedDate(parseInt(e.target.value))}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>

                            </IonCol>
                            <IonCol size='4'>
                                <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
                                    {moment.months().map((month, idx) => (
                                        <option key={idx} value={idx}>{month}</option>
                                    ))}
                                </select>

                            </IonCol>
                            <IonCol size='4'>
                                <select className='p-2 rounded-4 fs-13 border border-1 w-100' value={selectedYear}
                                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                                    {Array.from({ length: 10 }, (_, i) => {
                                        const year = moment().year() - 5 + i;
                                        return <option key={year} value={year}>{year}</option>;
                                    })}
                                </select>
                            </IonCol>
                        </IonRow>
                        <IonRow className='d-flex justify-content-center mt-2'>
                            <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100' onClick={() => { handleSearchMonth() }}>{t("xem")}</button>
                        </IonRow>
                    </div>
                    <div className="d-flex justify-content-between align-items-center gap-3 mt-3 px-3 flex-wrap">
                        <div className="d-flex align-items-center gap-1">
                            <span className="badge bg-primary bg-opacity-75 mb-1" style={{ fontSize: "10px" }}> </span>
                            <span className='fs-13'><span className='fw-bold'>1</span> {t("co-khach")}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <span className={`badge bg-warning bg-opacity-75 mb-1`} style={{ fontSize: "10px" }}> </span>
                            <span className='fs-13'><span className='fw-bold'>1</span> Đã đặt</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <span className={`badge bg-white mb-1`} style={{ fontSize: "10px" }}> </span>
                            <span className='fs-13'><span className='fw-bold'>1</span> {t("trong")}</span>
                        </div>
                    </div>
                    <IonRow className='p-3'>
                        <img src='../image/not-booking.svg' className='w-100'></img>
                    </IonRow>
                    <IonRow className=' fs-13 fw-bold d-flex justify-content-center'>
                        <div>
                            Không tìm thấy dữ liệu
                        </div>
                    </IonRow>
                    <IonAccordionGroup multiple value={['1', '2']}>
                        <IonAccordion value='1' className='rounded-4 bg-transparent mt-3' >
                            <IonItem lines="none" className='fs-15 rounded-4 bg-white shadow-sm' slot="header">
                                <IonLabel className='fw-bold py-2'>
                                    Tầng 1
                                </IonLabel>
                            </IonItem>
                            <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                <IonRow className='d-flex align-items-center'>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { handleClick("booking-table") }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 1</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-danger bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 2</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-white ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 3</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-warning bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 4</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 5</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 6</div>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </div>
                        </IonAccordion>
                        <IonAccordion value='2' className='rounded-4 bg-transparent mt-3'>
                            <IonItem lines="none" className='fs-15 rounded-4 bg-white shadow-sm' slot="header">
                                <IonLabel className='fw-bold py-2'>
                                    Tầng 2
                                </IonLabel>
                            </IonItem>
                            <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                <IonRow className='d-flex align-items-center'>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 1</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-danger bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 2</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-white ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 3</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-warning bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 4</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 5</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 6</div>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </div>
                        </IonAccordion>
                    </IonAccordionGroup>


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
                    </IonRow>
                    <IonRow className=' fs-13 fw-bold d-flex justify-content-center'>
                        <div>
                            Không tìm thấy dữ liệu
                        </div>
                    </IonRow>
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
                        <IonCard className='rounded-4 m-0 border border-1 shadow-none fs-13  mt-3'>
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
                        <IonCard className='rounded-4 m-0 border border-1 shadow-none fs-13  mt-3'>
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
                        <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13  '>
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
                        <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13  '>
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
                                <button className='bg-warning  fw-bold fs-13 p-3 rounded-pill w-100'>
                                    <IonIcon icon={cloudDoneOutline} className='me-2'></IonIcon> {t("tai-hoa-don")}
                                </button>
                            </IonCol>
                            <IonCol size='6'>
                                <button className='bg-light  fw-bold fs-13 p-3 rounded-pill w-100'>
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

        </IonPage>
    );
};

export default RoomDiagram;
