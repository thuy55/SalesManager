import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonPopover, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, addOutline, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, chevronDownOutline, closeOutline, cloudUploadOutline, fastFoodOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, optionsOutline, personOutline, pricetagOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
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
type MenuItem = {
    id: number;
    name: string;
    content: string;
    image: string;
    quantity: number;
    price: number;
    vat: number;
    typeVAT: number;
};

const Menu: React.FC = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
    const [isModalOpenMenu, setIsModalOpenMenu] = useState(false);

    const [isModalOpenAddDetail, setIsModalOpenAddDetail] = useState(false);
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
            price: 120000,
            vat: 10,
            typeVAT: 1

        },
        {
            id: 2,
            name: "Cơm chiên hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: 120000,
            vat: 10,
            typeVAT: 2
        },
        {
            id: 3,
            name: "Lẩu hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: 120000,
            vat: 10,
            typeVAT: 2
        },
        {
            id: 4,
            name: "Trái cây tươi mát",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: 120000,
            vat: 10,
            typeVAT: 1
        },
        {
            id: 5,
            name: "Cơm chiên hải sản ssfsdfg",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: 120000,
            vat: 10,
            typeVAT: 1
        },
        {
            id: 6,
            name: "Lẩu hải sản fdhgbfd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: 120000,
            vat: 10,
            typeVAT: 1
        },
        {
            id: 7,
            name: "Trái cây tươi mát fgsd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",
            price: 120000,
            vat: 10,
            typeVAT: 1
        }
    ]
    const [menuWithQty, setMenuWithQty] = useState<MenuItem[]>([]);

    useEffect(() => {
        if (menu && menu.length > 0) {
            const isSame = menu.every((item, index) =>
                menuWithQty[index] && item.id === menuWithQty[index].id
            );
            if (!isSame) {
                const initData = menu.map(item => ({
                    ...item,
                    quantity: 0
                }));
                setMenuWithQty(initData);
            }
        }
    }, [menu]);
    // Lưu vào localStorage mỗi khi menuWithQty thay đổi
    const [selectFood, setSelectFood] = useState<MenuItem[]>([]);
    useEffect(() => {
        const selectedItems = menuWithQty.filter(item => item.quantity > 0);
        localStorage.setItem('cartItems', JSON.stringify(selectedItems));
        setSelectFood(selectedItems);
    }, [menuWithQty]);

    const increaseQty = (id: number) => {
        setMenuWithQty(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const decreaseQty = (id: number) => {
        setMenuWithQty(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                    : item
            )
        );
    };
    const removeFood = (id: number) => {
        setSelectFood(prev => {
            const updated = prev.filter(selectFood => selectFood.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(updated));
            return updated;
        });
        setMenuWithQty(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: 0 }
                    : item
            )
        );

    }

    // Search
    const [search, setSearch] = useState("");
    const filteredMenu = menuWithQty.filter(item =>
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

    const [selectTableName, setSelectTableName] = useState("");
    const [selectTable, setSelectTable] = useState<number>();

    const [total, setTotal] = useState<number>(0);
    const [discount, setdiscount] = useState<number>(0);
    const [serviceFee, setserviceFee] = useState<number>(0);

    const [provisional, setprovisional] = useState<number>(0);
    const [vat, setVat] = useState<number>(0);
    const [payment, setPayment] = useState<number>(0);

    const [mucthue, setMucthue] = useState<number>(0);

    useEffect(() => {
        tinhtien();
        if (selectFood.length === 0) {
            setPhidichvu(0);
            setgiamgia(0);
            setgiamgiatien(0);
        }

    }, [selectFood])

    // typeVAT = 1 sau thuế, typeVAT = 2 trước thuế
    const [phidichvu, setPhidichvu] = useState<number>(0);
    const [giamgia, setgiamgia] = useState<number>(0);
    const [giamgiatien, setgiamgiatien] = useState<number>(0);
    const [note, setNote] = useState("");
    const tinhtien = () => {
        const totalAmount = selectFood?.reduce((acc, food) => {
            let total = 0;
            if (food.typeVAT === 1) {
                // total = food.price * food.quantity;
                total = food.price / (1 + food.vat / 100);
            } else if (food.typeVAT === 2) {
                total = food.price * food.quantity;
            }
            return acc + total;
        }, 0);

        const tinhthue = selectFood?.reduce((acc, food) => {
            let thue = 0;
            if (food.typeVAT === 1) {
                thue = (food.price / (1 + food.vat / 100) / 100 * food.vat) * food.quantity;
                console.log("thuế sau ", thue);
            } else if (food.typeVAT === 2) {
                thue = (food.price / 100 * food.vat) * food.quantity;
            }
            return acc + thue;
        }, 0);

        const discount1 = totalAmount / 100 * giamgia;
        const serviceFee1 = totalAmount / 100 * phidichvu;
        const tamtinh = totalAmount - discount1 - serviceFee1 - giamgiatien;
        // const thue = tamtinh / 100 * mucthue;
        const thanhtoan = tamtinh + tinhthue;
        setTotal(totalAmount ?? 0);
        setdiscount(discount1);
        setserviceFee(serviceFee1);
        setprovisional(tamtinh);
        setVat(tinhthue);
        setPayment(thanhtoan);
    }


    function chitietthem() {
        tinhtien();
        setIsModalOpenAddDetail(false)
    }

    function Payment(){
        window.location.href="/booking-completed";
    }


    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-3'>
                    <IonRow className='d-flex align-items-center justify-content-between mt-3'>
                        <div className='d-flex align-items-center'>
                            <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                                <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                            </button>
                            <div className=' fw-bold ' style={{ fontSize: "17px" }}>Sản phẩm</div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button className='p-2 bg-primary rounded-circle text-white fs-13 d-flex align-items-center justify-content-center me-3' id="auto-trigger">
                                <IonIcon icon={pricetagOutline} style={{ fontSize: "25px" }}></IonIcon>
                            </button>
                            <button className='p-2 bg-success rounded-circle text-white fs-13 d-flex align-items-center justify-content-center' onClick={() => { setIsModalOpenMenu(true) }}>
                                <IonIcon icon={fastFoodOutline} style={{ fontSize: "25px" }}></IonIcon>
                            </button>
                        </div>
                    </IonRow>

                    <IonPopover trigger="auto-trigger" side="bottom" size="auto" style={{ '--offset-x': '0%', '--offset-y': '10%' } as React.CSSProperties}>
                        <IonContent style={{ maxHeight: "300px", overflowY: "auto" }}>
                            <IonRow className='m-3 mx-2'>
                                {table && table.map((table, index) => (
                                    <IonCol key={index} size='3'>
                                        <IonCard onClick={() => { setSelectTable(table.id), setSelectTableName(table.name) }} className={`rounded-3 p-3 m-0 shadow-sm d-flex align-items-center justify-content-center ${selectTable === table.id ? 'bg-danger text-white' : 'bg-white text-dark'
                                            }`} style={{ height: "70px" }}>
                                            <div className='fs-13 limited-lines3'>{table.name}</div>
                                        </IonCard>
                                    </IonCol>
                                ))}
                            </IonRow>
                        </IonContent>
                    </IonPopover>


                    <IonRow className='d-flex justify-content-center mt-3 fw-bold text-danger'>{selectTableName}</IonRow>
                    {selectFood && selectFood.length > 0 ? selectFood.map((food, key) => {
                        return (
                            <>
                                <IonRow className='border-bottom mt-2' key={key}>
                                    <IonCol size='2'>
                                        <img src={`${food.image}`} className='rounded-3'></img>
                                    </IonCol>
                                    <IonCol size='10'>
                                        <div className='text-pink fs-13'>{food.name}</div>
                                        <div className='text-secondary ' style={{ fontSize: "12px" }}>{food.content}</div>
                                        <IonRow className='d-flex justify-content-between align-items-center'>
                                            <div className='text-dark fs-13'>{food.price} x {food.quantity} {food.typeVAT == 2 && <span className='ms-2 text-muted'> chưa VAT {food.vat} %</span>}</div>
                                            <button onClick={() => removeFood(food.id)} className='bg-danger fs-11 p-1 text-white rounded-3 d-flex align-items-center'><IonIcon icon={trashOutline} className='me-1'></IonIcon> Xóa</button>
                                        </IonRow>

                                    </IonCol>
                                </IonRow>
                            </>
                        )
                    }) :
                        <>
                            <IonRow className='d-flex justify-content-center mt-4'>
                                <img src='../image/no-data.svg' className='w-75'></img>
                            </IonRow>
                            <IonRow className='border-bottom pb-3 mt-3 fs-13 d-flex justify-content-center'>
                                Chưa chọn món ăn hoặc sản phẩm
                            </IonRow>
                        </>
                    }
                </IonGrid>
            </IonContent>
            <IonFooter>
                <IonCard className='m-0 p-3 py-2 fs-13  rounded-0' style={{ backdropFilter: "blur(50px)" }}>
                    <IonRow className=' fs-13 fw-bold d-flex justify-content-between align-items-center'>
                        <div>Tổng tiền </div>
                        <div className='fs-15'>{total.toLocaleString()}</div>
                    </IonRow>
                    <IonRow className='fst-italic d-flex justify-content-between align-items-center ms-4 mt-1'>
                        <div>Giảm giá {giamgia}% </div>
                        <div>{discount.toLocaleString()}</div>
                    </IonRow>
                    <IonRow className='fst-italic d-flex justify-content-between align-items-center ms-4 mt-1'>
                        <div>Giảm tiền</div>
                        <div>{giamgiatien.toLocaleString()}</div>
                    </IonRow>
                    <IonRow className='fst-italic d-flex justify-content-between align-items-center ms-4 mt-1'>
                        <div>Phí dịch vụ {phidichvu}%</div>
                        <div>{serviceFee.toLocaleString()}</div>
                    </IonRow>
                    <IonRow className='fw-bold d-flex justify-content-between align-items-center text-primary mt-2'>
                        <div>Tạm tính</div>
                        <div className='fs-15'>{provisional.toLocaleString()}</div>
                    </IonRow>
                    <IonRow className='fst-italic d-flex justify-content-between align-items-center ms-4 mt-1'>
                        <div>Thuế</div>
                        <div>{vat.toLocaleString()}</div>
                    </IonRow>
                    <IonRow className='fw-bold d-flex justify-content-between align-items-center text-success mt-2'>
                        <div>Thanh toán</div>
                        <div className='fs-15'>{payment.toLocaleString()}</div>
                    </IonRow>

                    <IonRow className='d-flex align-items-center mt-2'>
                        <IonCol size='6'>
                            <button onClick={() => { setIsModalOpenAddDetail(true) }} className='p-3 rounded-pill bg-secondary d-flex justify-content-between align-items-center text-white fs-13 w-100'>Thêm chi tiết <IonIcon className='' style={{ fontSize: "18px" }} icon={chevronDownOutline}></IonIcon></button>
                        </IonCol>
                        <IonCol size='6'>
                            <button className='p-3 fs-13 fw-bold bg-danger text-white rounded-pill w-100' onClick={()=>{Payment()}}>Thanh toán</button>
                        </IonCol>
                    </IonRow>
                </IonCard>
            </IonFooter>
            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 pb-3' >

                    <div className='text-end me-3 mt-3 fixed-header' ><IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></div>

                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                        <IonRow className='d-flex justify-content-between align-items-center mt-3'>
                            <div>
                                <div className='fs-15'>Combo 1</div>
                                <div>4.500.000đ</div>
                            </div>
                            <div>
                                <button className='p-3 bg-pink rounded-pill text-white'>Đặt món</button>
                                <button className='p-3 bg-pink rounded-pill text-white ms-2'>Chia sẻ</button>
                            </div>
                        </IonRow>
                        <IonRow className='d-flex align-items-center mt-3'>
                            <div className='bg-pink rounded-circle' style={{ width: "20px", height: "20px" }}></div>
                            <div className='fs-13 fw-bold ms-2'>Mô tả</div>
                        </IonRow>
                        <div className="mt-3">
                            <p className="fw-bold">Combo 1 - Trải Nghiệm Thượng Lưu Đỉnh Cao</p>

                            <p>Thưởng thức Combo 1 – sự kết hợp hoàn hảo giữa ẩm thực cao cấp, rượu thượng hạng và không gian giải trí đẳng cấp, dành riêng cho những ai yêu thích phong cách sống sang trọng và tinh tế.</p>

                            <p className="fw-bold">Thực đơn đặc biệt gồm:</p>
                            <p>Tôm hùm Alaska nướng bơ tỏi – thịt tôm ngọt, thơm lừng hòa quyện cùng sốt bơ đậm đà.</p>

                            <p>Bò Wagyu A5 áp chảo sốt rượu vang đỏ – mềm mại, tan ngay trong miệng.</p>

                            <p>Gan ngỗng Pháp (Foie Gras) sốt táo caramen – món ăn đẳng cấp chỉ dành cho những thực khách sành ăn.</p>

                            <p>Súp nấm Truffle trắng – tinh tế và đầy quyến rũ trong từng muỗng đầu tiên.</p>

                            <p>Bánh mousse chocolate đen Bỉ – ngọt ngào kết thúc một bữa ăn trọn vẹn.</p>

                            <p className="fw-bold">Đồ uống đi kèm:</p>
                            <p>Champagne Dom Pérignon Vintage – biểu tượng của sự tinh tế và đẳng cấp.</p>

                            <p>Rượu vang đỏ Chateau Margaux – dòng vang cổ điển dành riêng cho thịt đỏ.</p>

                            <p className="fw-bold">Dịch vụ đặc biệt đi kèm:</p>
                            <p>DJ biểu diễn trực tiếp với dàn âm thanh ánh sáng hiện đại, mang đến không khí bùng nổ và sôi động suốt đêm.</p>

                            <p>Vũ công chuyên nghiệp (dancer) trình diễn theo chủ đề – quyến rũ, nghệ thuật, tạo nên một bữa tiệc thị giác không thể rời mắt.</p>

                            <p>Combo 1 không chỉ là bữa ăn, mà là một đêm tiệc đúng nghĩa – nơi ẩm thực, âm nhạc và nghệ thuật hòa quyện để mang lại trải nghiệm không thể nào quên.</p>
                        </div>

                    </IonGrid>


                </div>
            </IonModal>
            {/* Menu */}
            <IonModal isOpen={isModalOpenMenu} onDidDismiss={() => { setIsModalOpenMenu(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 ' >
                    <div className='d-flex justify-content-between mx-3 py-3 fixed-header' >
                        <div className='fs-15 fw-bold'>Thêm sản phẩm</div>
                        <IonIcon onClick={() => setIsModalOpenMenu(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                    </div>
                    <IonRow className='px-3'>
                        <div className="d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm w-100 mb-2" style={{ height: '50px' }}>
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
                    </IonRow>
                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "70vh"
                    }}>
                        <IonRow>
                            {filteredMenu && filteredMenu.map((food, key) => {
                                return (
                                    <IonCol size='6'>
                                        <IonCard className='rounded-3 p-2 m-0 shadow-sm'>
                                            <img className='w-100 rounded-3' src='https://cdn.24h.com.vn/upload/2-2024/images/2024-05-12/1715482343-mon-an-ngon1-17153150160711742594575-width640height480.jpg'></img>
                                            <div className='fs-13 limited-lines3 mt-2'>{food.name}</div>
                                            <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                                                <IonButton
                                                    size="small"
                                                    fill="outline"
                                                    color="medium"
                                                    onClick={() => decreaseQty(food.id)}
                                                >
                                                    <IonIcon icon={remove} />
                                                </IonButton>

                                                <span style={{ minWidth: "24px", textAlign: "center" }}>{food.quantity}</span>

                                                <IonButton
                                                    size="small"
                                                    fill="outline"
                                                    color="primary"
                                                    onClick={() => increaseQty(food.id)}
                                                >
                                                    <IonIcon icon={add} />
                                                </IonButton>
                                            </div>
                                        </IonCard>
                                    </IonCol>
                                )
                            })}
                        </IonRow>

                    </IonGrid>
                    <IonRow className='d-flex align-items-center mt-3 '>
                        <IonCol size='6'>
                            <button className='bg-secondary bg-opacity-25 p-3 rounded-pill text-dark w-100'>Hủy</button>
                        </IonCol>
                        <IonCol size='6'>
                            <button className='bg-danger p-3 rounded-pill text-white w-100'>Hoàn tất</button>
                        </IonCol>

                    </IonRow>

                </div>
            </IonModal>
            {/* Add detail */}
            <IonModal isOpen={isModalOpenAddDetail} onDidDismiss={() => { setIsModalOpenAddDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 ' >
                    <div className='d-flex justify-content-between mx-3 py-3 fixed-header' >
                        <div className='fs-15 fw-bold'>Chi tiết thêm</div>
                        <IonIcon onClick={() => { setIsModalOpenAddDetail(false); }} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon>
                    </div>
                    <IonGrid className='p-3 pt-0 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "70vh"
                    }}>
                        <IonRow className=' fs-13 mt-3'>Phí dịch vụ (%)</IonRow>
                        <IonRow className='mt-2'>
                            <input type='number' min="0" max="100" value={phidichvu}
                                onChange={(e) => {
                                    let value = Number(e.target.value);
                                    if (value < 0) value = 0;
                                    if (value > 100) value = 100;
                                    setPhidichvu(value);
                                    console.log("Phí dịch vụ", value);
                                }} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Phí dịch vụ"></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Giảm giá (%)</IonRow>
                        <IonRow className='mt-2'>
                            <input type='number' min="0" max="100" value={giamgia} onChange={(e) => {
                                let value = Number(e.target.value);
                                if (value < 0) value = 0;
                                if (value > 100) value = 100;
                                setgiamgia(value);
                                console.log("Phí dịch vụ", value);
                            }} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Giảm giá"></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Giảm giá tiền</IonRow>
                        <IonRow className='mt-2'>
                            <input type='number' value={giamgiatien} onChange={(e) => {
                                let value = Number(e.target.value);
                                setgiamgiatien(value);
                            }} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Giảm giá tiền"></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Ghi chú</IonRow>
                        <IonRow className='mt-2'>
                            <textarea rows={5} value={note} onChange={(e) => { setNote(e.target.value) }} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Ghi chú"></textarea>
                        </IonRow>
                        <IonRow className=' mt-3'>
                            <button className='rounded-pill p-3 bg-primary fs-13 fw-bold text-white w-100' onClick={() => { chitietthem() }}>Hoàn thành </button>
                        </IonRow>

                    </IonGrid>
                </div>
            </IonModal>

        </IonPage >
    );
};

export default Menu;
