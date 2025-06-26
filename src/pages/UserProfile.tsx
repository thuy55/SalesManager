import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonAlert, useIonLoading, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, closeOutline, cloudUploadOutline, constructOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, personOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
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
import axios from 'axios';
const UserProfile: React.FC = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [presentAlert] = useIonAlert();

    const [isModalOpenChangePass, setIsModalOpenChangePass] = useState(false);
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [isModalOpenConfiguration, setIsModalOpenConfiguration] = useState(false);

    const [avatar, setAvatar] = useState<File | null>(null);
    const [updateAvatar, setUpdateAvatar] = useState<string>("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const triggerFileInputAvatar = () => {
        fileInputRef.current?.click();
    };

    const handleImageAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAvatar(file);
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target?.result) {
                    setUpdateAvatar(e.target.result as string); // base64 string
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImageAddAvatar = () => {
        setAvatar(null);
        setUpdateAvatar("");
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

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [account, setAccount] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [dateRegister, SetDateRegister] = useState("");

    const [passwordOld, setPasswordOld] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    function changePassword() {
        const token = localStorage.getItem("happy-corp-staff-token");
        const data = {
            "token": token,
            "password-old": passwordOld,
            "password": password,
            "password-confirm": passwordConfirm
        }
        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/change-password", data, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.data.status === "error") {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: res.data.content,
                    buttons: ["OK"],
                });

            } else if (res.data.status === "success") {
                console.log(res.data.data);
                setIsModalOpenChangePass(false)
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "SUCCESS",
                    message: res.data.content,
                    buttons: ["OK"],
                });
            }
        })
            .catch((error) => {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: "Unable to connect to server",
                    buttons: ["OK"],
                });

            });
    }

    function changeInfo() {
        const token = localStorage.getItem("happy-corp-staff-token");
        const data = {
            "token": token,
            "name": name,
            "images": avatar,
            "email": email,
            "birthday": birthday,
            "gender": gender
        }
        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/change-infomation", data, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.data.status === "error") {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: res.data.content,
                    buttons: ["OK"],
                });

            } else if (res.data.status === "success") {
                console.log(res.data.data);
                setIsModalOpenUpdate(false);
                // Profile();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "SUCCESS",
                    message: res.data.content,
                    buttons: ["OK"],
                });
            }
        })
            .catch((error) => {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: "Unable to connect to server",
                    buttons: ["OK"],
                });

            });
    }
    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex justify-content-center'>
                        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" className=' rounded-circle' style={{ width: "40%" }}></img>
                    </IonRow>
                    <div className='fw-bold fs-4 text-center mt-3'>{account}</div>
                    <div className='text-center fs-15 mt-2'>{email}</div>

                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13  mt-3'>
                        <IonRow><span className='fw-bold'>{t("ma-cua-ban")} :</span>#{id}</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Họ và tên :</span>Công ty TNHH ECLO</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Tài khoản :</span>demo</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>{t("email")} :</span>thuy@eclo.vn</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>{t("dien-thoai")} :</span>0123456789</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>{t("ngay-sinh")} :</span>12/05/1995</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>{t("gioi-tinh")} :</span>Nam</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>{t("ngay-dang-ky")} :</span>05/06/2025</IonRow>
                    </IonCard>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13  mt-3'>
                        <IonRow className='d-flex align-items-center' onClick={() => setIsModalOpenConfiguration(true)}>
                            <IonIcon icon={constructOutline} className='me-2'></IonIcon> Cấu hình
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center' onClick={() => setIsModalOpenChangePass(true)}>
                            <IonIcon icon={keyOutline} className='me-2'></IonIcon> {t("doi-mat-khau")}
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center' onClick={() => setIsModalOpenUpdate(true)}>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon> {t("cap-nhat-thong-tin")}
                        </IonRow>
                    </IonCard>
                    <IonRow className='fs-13 fw-bold mt-3'>{t("tai-khoan")}</IonRow>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13  mt-3'>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon> {t("thong-tin")}
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={notificationsOutline} className='me-2'></IonIcon> {t("thong-bao")}
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={listOutline} className='me-2'></IonIcon> {t("nhat-ky")}
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={settingsOutline} className='me-2'></IonIcon> {t("cai-dat")}
                        </IonRow>
                    </IonCard>
                </IonGrid>
            </IonContent>

            <IonModal isOpen={isModalOpenChangePass} onDidDismiss={() => { setIsModalOpenChangePass(false) }} >
                <div className=' p-0 pb-3' >
                    <IonRow className='d-flex justify-content-between  fixed-header p-1'>
                        <div className='fs-13 fw-bold  p-3 pb-0'>{t("doi-mat-khau")}</div>
                        <button className='bg-pink rounded-circle  text-white' style={{ width: "35px", height: "35px" }} ><IonIcon onClick={() => setIsModalOpenChangePass(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></button>
                    </IonRow>
                    <IonGrid className='p-4 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <IonRow className=' fs-13 mt-3'>{t("mat-khau-cu")} <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='password' value={passwordOld} onChange={(e) => { setPasswordOld(e.target.value) }} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Mật khẩu cũ'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>{t("mat-khau-moi")}  <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Mật khẩu mới '></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>{t("xac-nhan-mat-khau")} <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='password' value={passwordConfirm} onChange={(e) => { setPasswordConfirm(e.target.value) }} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Xác nhận mật khẩu'></input>
                        </IonRow>
                        <IonRow className='mt-4'>
                            <button className='rounded-pill w-100 p-3 bg-pink text-white' onClick={() => { changePassword }}>{t("thay-doi")}</button>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonModal>
            <IonModal isOpen={isModalOpenUpdate} onDidDismiss={() => { setIsModalOpenUpdate(false) }} >
                <div className=' p-0 pb-3' >
                    <IonRow className='d-flex justify-content-between  fixed-header p-1'>
                        <div className='fs-13 fw-bold  p-3 pb-0'>{t("thay-doi-thong-tin")}</div>
                        <button className='bg-pink rounded-circle  text-white' style={{ width: "35px", height: "35px" }} ><IonIcon onClick={() => setIsModalOpenUpdate(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></button>
                    </IonRow>

                    <IonGrid className='p-4 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <IonRow className=' fs-13 mt-3'>{t("ho-va-ten")} <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value='Demo'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>{t("email")}  <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='email' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value='0123456789'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>{t("ngay-sinh")}</IonRow>
                        <IonRow className='mt-2'>
                            <input type='date' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value='2025/01/01'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>{t("gioi-tinh")}</IonRow>
                        <IonRow className='mt-2'>
                            <select className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value={2} >
                                <option value={1}>{t("nam")}</option>
                                <option value={2}>{t("nu")}</option>
                            </select>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>{t("hinh-anh")}</IonRow>

                        <IonCard className='m-0 mt-3 p-3 rounded-4 border-border-secondary shadow-sm border border-1'>


                            <div style={{ cursor: "pointer" }}>
                                {updateAvatar ? (
                                    <div className="position-relative">
                                        <button
                                            className="btn bg-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                            onClick={handleDeleteImageAddAvatar}
                                            style={{ width: "40px", height: "40px", zIndex: 2 }}
                                        >
                                            <IonIcon icon={trashOutline} style={{ fontSize: '20px', color: 'white' }} />
                                        </button>
                                        <img
                                            src={updateAvatar}
                                            className="w-100 rounded-4 object-fit-cover"
                                            alt="avatar preview"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className=""
                                        style={{ height: "160px", borderRadius: "10px" }}
                                        onClick={triggerFileInputAvatar}
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
                                    onChange={handleImageAvatar}
                                />
                            </div>

                        </IonCard>
                        <IonRow className='mt-4'>
                            <button className='rounded-pill w-100 p-3 bg-pink text-white'>Thay đổi</button>
                        </IonRow>
                    </IonGrid>


                </div>
            </IonModal>
            <IonModal isOpen={isModalOpenConfiguration} onDidDismiss={() => { setIsModalOpenConfiguration(false) }} >
                <div className=' p-0 pb-3' >
                    <IonRow className='d-flex justify-content-between  fixed-header p-1'>
                        <div className='fs-13 fw-bold  p-3 pb-0'>Cấu hình</div>
                        <button className='bg-pink rounded-circle  text-white' style={{ width: "35px", height: "35px" }} ><IonIcon onClick={() => setIsModalOpenConfiguration(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></button>
                    </IonRow>
                    <IonGrid className='p-4 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <IonRow className=' fs-13 mt-3'>Tên <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' value='Demo'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Điện thoại  <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' value='0123456789'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Địa chỉ</IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' value='33/40 Đường số 4'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Tỉnh thành</IonRow>
                        <IonRow className='mt-2'>
                            <select className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' value={2} >
                                <option value={1}>TP. Hồ Chí Minh</option>
                                <option value={2}>Bình Định</option>
                            </select>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Quận / Huyện</IonRow>
                        <IonRow className='mt-2'>
                            <select className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' value={1} >
                                <option value={1}>Hoài Nhơn</option>
                                <option value={2}>Quy Nhơn</option>
                            </select>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Xã / Phường</IonRow>
                        <IonRow className='mt-2'>
                            <select className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' value={2} >
                                <option value={1}>Tam Quan</option>
                                <option value={2}>Hoài Châu Bắc</option>
                            </select>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Hóa đơn điện tử </IonRow>
                        <IonRow className='mt-2'>
                            <select className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' value={2} >
                                <option value={1}>Vietel</option>
                                <option value={2}>Easyinvoices</option>
                            </select>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Mã số thuế</IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' placeholder='Mã số thuế' value='58485454-544'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Kí hiệu hóa đơn</IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' placeholder='Kí hiệu hóa đơn' value='58485454-544'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Mã số seri</IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-10  w-100' placeholder='Mã số seri' value='58485454-544'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Logo</IonRow>

                        <IonCard className='m-0 mt-3 p-3 rounded-4 border-border-secondary shadow-sm border border-1'>
                            <div style={{ cursor: "pointer" }}>
                                {updateAvatar ? (
                                    <div className="position-relative">
                                        <button
                                            className="btn bg-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                            onClick={handleDeleteImageAddAvatar}
                                            style={{ width: "40px", height: "40px", zIndex: 2 }}
                                        >
                                            <IonIcon icon={trashOutline} style={{ fontSize: '20px', color: 'white' }} />
                                        </button>
                                        <img
                                            src={updateAvatar}
                                            className="w-100 rounded-4 object-fit-cover"
                                            alt="avatar preview"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className=""
                                        style={{ height: "160px", borderRadius: "10px" }}
                                        onClick={triggerFileInputAvatar}
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
                                    onChange={handleImageAvatar}
                                />
                            </div>

                        </IonCard>
                        <IonRow className='mt-4'>
                            <IonCol size='6'> <button className='rounded-pill w-100 p-3 bg-secondary bg-opacity-25 text-dark fw-bold'>Hủy</button></IonCol>
                            <IonCol size='6'> <button className='rounded-pill w-100 p-3 bg-danger text-white'>Thay đổi</button></IonCol>
                           
                        </IonRow>
                    </IonGrid>


                </div>
            </IonModal>

        </IonPage>
    );
};

export default UserProfile;
