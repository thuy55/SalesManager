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
const Menu: React.FC = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
    const [isModalOpenAddProduct, setIsModalOpenAddProduct] = useState(false);
    const [isModalOpenUpdateProduct, setIsModalOpenUpdateProduct] = useState(false);
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    const menu = [
        {
            id: 1,
            name: "Cơm chiên",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 2,
            name: "Cơm chiên hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 3,
            name: "Lẩu hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 4,
            name: "Trái cây tươi mát",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 5,
            name: "Cơm chiên hải sản ssfsdfg",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 6,
            name: "Lẩu hải sản fdhgbfd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 7,
            name: "Trái cây tươi mát fgsd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        }
    ]
    // Search
    const [search, setSearch] = useState("");
    const filteredMenu = menu.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    //Add product
    const [imageAdd, setImageAdd] = useState<File | null>(null);
    const [uploadImage, setuploadImage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };
    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageAdd(file);
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target?.result) {
                    setuploadImage(e.target.result as string); // base64 string
                }
            };
            reader.readAsDataURL(file);
        }
    };
    const handleDeleteImageAdd = () => {
        setImageAdd(null);
        setuploadImage("");
    };
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
                            <div className=' fw-bold ' style={{ fontSize: "17px" }}>Sản phẩm</div>
                        </div>
                        <button className='p-2 bg-danger rounded-pill text-white fs-13 d-flex align-items-center' onClick={() => { setIsModalOpenAddProduct(true) }}>
                            <IonIcon icon={addOutline} className='me-1' style={{ fontSize: "20px" }}></IonIcon>
                            Thêm sản phẩm
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
                        {filteredMenu && filteredMenu.map((food, key) => {
                            return (
                                <IonCol size='6'>
                                    <IonCard className='rounded-3 p-2 m-0 shadow-sm' onClick={() => { setIsModalOpenDetail(true) }}>
                                        <img className='w-100 rounded-3' src='https://cdn.24h.com.vn/upload/2-2024/images/2024-05-12/1715482343-mon-an-ngon1-17153150160711742594575-width640height480.jpg'></img>
                                        <div className='fs-13 limited-lines3 mt-2'>{food.name}</div>
                                        <div className=' my-1 limited-lines3 fs-12 text-muted' style={{ fontSize: "12px" }}>Mô tả: {food.content}</div>
                                        <div className='fs-13'>Giá:120.000vnd / Món</div>
                                    </IonCard>
                                </IonCol>
                            )
                        })}
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 pb-3' >
                    <div className='text-end me-3 mt-3 fixed-header' ><IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></div>
                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "80vh"
                    }}>
                        <IonCard className='m-0 pt-0 p-3 rounded-4 fs-13 shadow-sm '>
                            <div className='fw-bold'>Thông tin sản phẩm</div>
                            <IonRow className=' fs-13 fw-bold mt-3'>{t("ten")} <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder={t("ten")}></input>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Mô tả <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <textarea rows={10} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Mô tả"></textarea>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Đơn vị tính <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Đơn vị tính"></input>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Giá <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Giá"></input>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>VAT <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <IonCol size='6'>
                                    <input type='number' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="VAT"></input>
                                </IonCol>
                                <IonCol size='6'>
                                    <select className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100'>
                                        <option value={1}>Giá bán sau thuế</option>
                                        <option value={2}>Giá bán trước thuế</option>
                                    </select>
                                </IonCol>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Hình ảnh <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonCard className='m-0 mt-3 p-3 rounded-4 bg-secondary bg-opacity-25 shadow-sm border border-1'>
                                <div style={{ cursor: "pointer" }}>
                                    {uploadImage ? (
                                        <div className="position-relative">
                                            <button
                                                className="btn bg-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                                onClick={handleDeleteImageAdd}
                                                style={{ width: "40px", height: "40px", zIndex: 2 }}
                                            >
                                                <IonIcon icon={trashOutline} style={{ fontSize: '20px', color: 'white' }} />
                                            </button>
                                            <img
                                                src={uploadImage}
                                                className="w-100 rounded-4 object-fit-cover"
                                                alt="avatar preview"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className=""
                                            style={{ height: "160px", borderRadius: "10px" }}
                                            onClick={triggerFileInput}
                                        >
                                            <div className="d-flex justify-content-center">
                                                <IonIcon icon={cloudUploadOutline} style={{ fontSize: "60px" }} />
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">Nhấn vào để tải hình ảnh của bạn lên</div>
                                        </div>
                                    )}
                                    {/* Input file ẩn */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        style={{ display: "none" }}
                                        onChange={handleImage}
                                    />
                                </div>
                            </IonCard>
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
            {/* Add product */}
            <IonModal isOpen={isModalOpenAddProduct} onDidDismiss={() => { setIsModalOpenAddProduct(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 ' >
                    <div className='d-flex justify-content-between mx-3 py-3 fixed-header' >
                        <div className='fs-15 fw-bold'>Thêm sản phẩm</div>
                        <IonIcon onClick={() => setIsModalOpenAddProduct(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                    </div>
                    <IonGrid className='p-3 px-4 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "80vh"
                    }}>
                            <div className='fw-bold'>Thông tin sản phẩm</div>
                            <IonRow className=' fs-13 fw-bold mt-3'>{t("ten")} <span className='text-danger ms-1'>(*)</span></IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder={t("ten")}></input>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Mô tả </IonRow>
                            <IonRow className='mt-2'>
                                <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Mô tả"></textarea>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Đơn vị tính </IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Đơn vị tính"></input>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Giá</IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Giá"></input>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>VAT</IonRow>
                            <IonRow className='mt-2'>
                                <IonCol size='6'>
                                    <input type='number' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="VAT"></input>
                                </IonCol>
                                <IonCol size='6'>
                                    <select className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100'>
                                        <option value={1}>Giá bán sau thuế</option>
                                        <option value={2}>Giá bán trước thuế</option>
                                    </select>
                                </IonCol>
                            </IonRow>
                            <IonRow className=' fs-13 fw-bold mt-3'>Hình ảnh </IonRow>
                            <IonCard className='m-0 mt-3 p-3 rounded-4 bg-secondary bg-opacity-25 shadow-sm border border-1'>
                                <div style={{ cursor: "pointer" }}>
                                    {uploadImage ? (
                                        <div className="position-relative">
                                            <button
                                                className="btn bg-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                                onClick={handleDeleteImageAdd}
                                                style={{ width: "40px", height: "40px", zIndex: 2 }}
                                            >
                                                <IonIcon icon={trashOutline} style={{ fontSize: '20px', color: 'white' }} />
                                            </button>
                                            <img
                                                src={uploadImage}
                                                className="w-100 rounded-4 object-fit-cover"
                                                alt="avatar preview"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className=""
                                            style={{ height: "160px", borderRadius: "10px" }}
                                            onClick={triggerFileInput}
                                        >
                                            <div className="d-flex justify-content-center">
                                                <IonIcon icon={cloudUploadOutline} style={{ fontSize: "60px" }} />
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">Nhấn vào để tải hình ảnh của bạn lên</div>
                                        </div>
                                    )}
                                    {/* Input file ẩn */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        style={{ display: "none" }}
                                        onChange={handleImage}
                                    />
                                </div>
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

        </IonPage >
    );
};

export default Menu;
