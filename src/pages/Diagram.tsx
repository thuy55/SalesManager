import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, addOutline, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, closeOutline, cloudUploadOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, optionsOutline, personOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
import BranchModal from '../components/ModalBrand';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Diagram: React.FC = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
    const [isModalOpenAddProduct, setIsModalOpenAddProduct] = useState(false);
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    const table = [
        {
            id: 1,
            name: "Bàn 1",
            content: "",
        },
        {
            id: 2,
            name: "Bàn 2",
            content: "",
        },
        {
            id: 3,
            name: "Bàn 3",
            content: "",
        },
        {
            id: 4,
            name: "Bàn 4",
            content: "",
        },
        {
            id: 5,
            name: "Bàn 5",
            content: "",
        },

    ]
    // Search
    const [search, setSearch] = useState("");
    const filtered = table.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-3'>
                    <IonRow className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                                <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                            </button>
                            <div className=' fw-bold ' style={{ fontSize: "17px" }}>Sơ đồ</div>
                        </div>
                        <button className='p-2 bg-danger rounded-pill text-white fs-13 d-flex align-items-center' onClick={() => { setIsModalOpenAddProduct(true) }}>
                            <IonIcon icon={addOutline} className='me-1' style={{ fontSize: "20px" }}></IonIcon>
                            Thêm
                        </button>
                    </IonRow>
                    <div className="d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm w-100 mt-3" style={{ height: '50px' }}>
                        <IonIcon icon={searchOutline} className="ms-3 me-2 " style={{ fontSize: '20px' }} />
                        <input
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                            type="text"
                            className="form-control border-0 shadow-none bg-switch-box"
                            placeholder={t("tim-kiem")}
                            style={{
                                flex: 1,
                                borderRadius: '50px',
                            }}
                        />
                        <button
                            className=" d-flex bg-danger justify-content-center align-items-center me-2"
                            style={{
                                borderRadius: '50%',
                                width: '35px',
                                height: '35px',
                            }}
                        >
                            <IonIcon icon={optionsOutline} color="light" style={{ fontSize: "20px" }} />
                        </button>
                    </div>
                    <IonRow className='mt-3'>
                        {filtered && filtered.map((table, key) => {
                            return (
                                <IonCol size='4'>
                                    <IonCard className='rounded-3 p-3 m-0 shadow-sm bg-white' style={{ height: "80px" }} onClick={() => { setIsModalOpenDetail(true) }}>
                                        <div className='fs-13 limited-lines3'>{table.name}</div>
                                        <div className=' my-1 limited-lines3 fs-12 text-muted' style={{ fontSize: "12px" }}>{table.content}</div>
                                    </IonCard>
                                </IonCol>
                            )
                        })}
                    </IonRow>
                </IonGrid>
            </IonContent>
            {/* Add product */}
            <IonModal isOpen={isModalOpenAddProduct} onDidDismiss={() => { setIsModalOpenAddProduct(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 ' >
                    <div className='d-flex justify-content-between mx-3 py-3 fixed-header' >
                        <div className='fs-15 fw-bold'>Thêm bàn</div>
                        <IonIcon onClick={() => setIsModalOpenAddProduct(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                    </div>
                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "80vh"
                    }}>
                        <IonCard className='m-0 pt-0 p-3 rounded-4 fs-13 shadow-sm '>
                            <div className='fw-bold'>Thông tin bàn</div>
                            <IonRow className=' fs-13 fw-bold mt-3'>{t("ten")} <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder={t("ten")}></input>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Mô tả <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Mô tả"></textarea>
                            </IonRow>

                        </IonCard>

                    </IonGrid>
                    <IonRow className='d-flex align-items-center mb-2 mt-3 '>
                        <IonCol size='6'>
                            <button className='bg-secondary bg-opacity-25 p-3 rounded-pill text-dark w-100'>Hủy</button>
                        </IonCol>
                        <IonCol size='6'>
                            <button className='bg-danger p-3 rounded-pill text-white w-100'>Hoàn tất</button>
                        </IonCol>
                    </IonRow>
                </div>
            </IonModal>

            {/* //Detail, xóa, sửa */}
            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 ' >
                    <div className='d-flex justify-content-between mx-3 py-3 fixed-header' >
                        <div className='fs-15 fw-bold'>Sửa thông tin</div>
                        <IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                    </div>
                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "80vh"
                    }}>
                        <IonCard className='m-0  p-3 pt-0 rounded-4 fs-13 shadow-sm '>
                            <div className='fw-bold'>Thông tin bàn</div>
                            <IonRow className=' fs-13 fw-bold mt-3'>{t("ten")} <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value="Bàn 1" placeholder={t("ten")}></input>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Mô tả <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value="" placeholder="Mô tả"></textarea>
                            </IonRow>

                        </IonCard>

                    </IonGrid>
                    <IonRow className='d-flex align-items-center mb-2 mt-3 '>
                        <IonCol size='6'>
                            <button className='bg-secondary bg-opacity-25 p-3 rounded-pill text-dark w-100 fw-bold'>Xóa</button>
                        </IonCol>
                        <IonCol size='6'>
                            <button className='bg-danger p-3 rounded-pill text-white w-100'>Hoàn tất</button>
                        </IonCol>
                    </IonRow>
                </div>
            </IonModal>

        </IonPage >
    );
};

export default Diagram;
