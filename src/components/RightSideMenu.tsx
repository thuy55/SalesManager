// src/components/RightSideMenu.tsx
import {
    IonContent,
    IonHeader,
    IonMenu,
    IonToolbar,
    IonIcon,
    IonRow,
    IonGrid,
    IonFooter,
    IonMenuToggle,
    IonToggle,
    IonSelect,
    IonSelectOption
} from '@ionic/react';
import { notificationsOutline, personOutline, settingsOutline, listOutline, sunnyOutline, moonOutline, phonePortraitOutline } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import { menuController } from '@ionic/core';
import { useEffect, useState } from 'react';
import { toggleDarkMode } from '../theme/theme';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const RightSideMenu: React.FC = () => {
    const history = useHistory();
    const { theme, setTheme } = useTheme();
    const logout = () => {
        history.push('/login');
        console.log(123);
    };

    useEffect(() => {
        const mode = localStorage.getItem("dark-mode");

        if (mode !== null) {
            if (mode === "true") {
                setTheme('dark');
            } else if (mode === "false") {
                setTheme('light');
            } else {
                setTheme('system');
            }
        }

    }, []);

    const handleToggleCustom = (type: string) => {

        localStorage.setItem("dark-mode", String(type)); // lưu dưới dạng chuỗi "true"/"false"

        if (type == "true") {
            setTheme('dark');
        } else if (type === "false") {
            setTheme('light');
        } else {
            setTheme('system');
        }
    };

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng : string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language_happy_corp_staff", lng); // Lưu ngôn ngữ vào localStorage
    };
    return (
        <IonMenu side="end" contentId="main-content" menuId="end" type="overlay" style={{ backdropFilter: "blur(5px)" }}>
            <IonHeader >
                <IonToolbar className='shadow-none border border-0'>
                    <IonRow className='d-flex align-items-center p-2 py-3'>
                        <img src='https://static-cse.canva.com/blob/1992462/1600w-vkBvE1d_xYA.jpg' style={{ width: "40px", height: "40px" }} className='rounded-circle me-2'></img>
                        <div>
                            <div className='fs-15'>Demo</div>
                            <div className='fs-13'>demo.eclo.vn</div>
                        </div>

                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent className='page-background'>
                <IonGrid className='fs-13 p-3'>
                    <IonRow className='fs-11'>
                        Quản lý
                    </IonRow>
                    <IonMenuToggle autoHide={true}>
                        <Link to="/user-profile" className='d-flex align-items-center mt-4'>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon>
                            Tài khoản
                        </Link>
                    </IonMenuToggle>

                    <IonMenuToggle autoHide={true}>
                        <Link to="/user-notification" className='d-flex align-items-center mt-4'>
                            <IonIcon icon={notificationsOutline} className='me-2'></IonIcon>
                            Thông báo
                        </Link>
                    </IonMenuToggle>

                    <IonMenuToggle autoHide={true}>
                        <Link to="/user-logs" className='d-flex align-items-center mt-4'>
                            <IonIcon icon={listOutline} className='me-2'></IonIcon>
                            Nhật ký
                        </Link>
                    </IonMenuToggle>

                    <IonMenuToggle autoHide={true}>
                        <Link to="/user-setting" className='d-flex align-items-center mt-4'>
                            <IonIcon icon={settingsOutline} className='me-2'></IonIcon>
                            Cài đặt
                        </Link>
                    </IonMenuToggle>


                    <IonRow className='fs-11 mt-4'>
                        Giao diện
                    </IonRow>
                    <IonRow className='d-flex align-items-center mt-4' onClick={() => handleToggleCustom("false")}>
                        <IonIcon icon={sunnyOutline} className='me-2'></IonIcon>
                        Sáng
                    </IonRow>
                    <IonRow className='d-flex align-items-center mt-4' onClick={() => handleToggleCustom("true")}>
                        <IonIcon icon={moonOutline} className='me-2'></IonIcon>
                        Tối
                    </IonRow>

                    <IonRow className='d-flex align-items-center mt-4' onClick={() => handleToggleCustom("system")}>
                        <IonIcon icon={phonePortraitOutline} className='me-2'></IonIcon>
                        Hệ thống
                    </IonRow>

                    <IonRow className='fs-11 mt-4'>
                        Ngôn ngữ {t("home")}
                    </IonRow>
                    <IonRow className='d-flex align-items-center mt-4' onClick={() => changeLanguage("en")}>
                        <IonIcon icon={personOutline} className='me-2'></IonIcon>
                        Tiếng Anh
                    </IonRow>
                    <IonRow className='d-flex align-items-center mt-4' onClick={() => changeLanguage("vi")}>
                        <IonIcon icon={notificationsOutline} className='me-2'></IonIcon>
                        Tiếng Việt
                    </IonRow>

                    <IonRow className='border border-bottom-light my-3'></IonRow>
                    <IonMenuToggle autoHide={true}>
                        <button onClick={() => { logout() }} className='rounded-pill p-3 text-white w-100' style={{ backgroundColor: "#f07" }}>Đăng xuất</button>
                    </IonMenuToggle>
                </IonGrid>
            </IonContent>
            <IonFooter>
                <IonToolbar className='p-3 border border-0' style={{ backgroundColor: "#f77eb247" }}>
                    <IonRow className='text-danger fs-3 fw-bold'>ECLO</IonRow>
                    <IonRow className='fs-13 mt-1 mb-3'>Giải pháp phần mềm ERP quản lý dành cho doanh nghiệp</IonRow>
                    <IonRow>
                        <button className='rounded-pill w-100 p-3 bg-danger text-white fw-bold fs-13'>Xem thêm</button>
                    </IonRow>
                </IonToolbar>
            </IonFooter>
        </IonMenu>
    );
}

export default RightSideMenu;
