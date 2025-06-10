import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, checkmarkDoneOutline, chevronBackOutline, closeOutline, imageOutline, key, linkOutline, locateOutline, locationSharp, navigateOutline, notificationsOutline, remove, searchOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
const ChatDetail: React.FC = () => {
    const history = useHistory();

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    const listMessage = [
        {
            id: 1,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 2,
            type: 2,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 3,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 4,
            type: 2,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 5,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 1,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 2,
            type: 2,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 3,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 4,
            type: 2,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 5,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 1,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 2,
            type: 2,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 3,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 4,
            type: 2,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 5,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 1,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 2,
            type: 2,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 3,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 4,
            type: 2,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        },
        {
            id: 5,
            type: 1,
            content: "Xin chào tôi có thể giúp gì cho bạn",
            date: "14:00 12/05/2025",
        }
    ]

    const [content, setContent] = useState("");
    return (
        <IonPage>
            <IonHeader style={{ backdropFilter: "blur(50px)" }}>
                <IonToolbar className='shadow-none border border-0'>
                    <IonRow className='d-flex align-items-center p-1 py-2'>
                        <button className='text-center rounded-circle me-3' style={{ width: "35px", height: "35px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "15px" }}>Mia</div>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4 fs-13'>
                    <ul className='p-2' style={{ listStyleType: "none", paddingBottom: "130px" }}>
                        {!listMessage && (
                            <div className='mt-5'>
                                <div className='d-flex justify-content-center'>
                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='w-25'></img>
                                </div>
                                <div className='d-flex justify-content-center mt-3 fs-14'>Xin chào tôi có thể giúp gì cho bạn?</div>
                            </div>
                        )
                        }
                        {listMessage && listMessage.map((message) => {
                            if (message.type == 1) {
                                return (
                                    <>
                                        <li className='mt-3'>
                                            <div className='d-flex justify-content-start  my-2 position-relative'>
                                                <div>
                                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='me-2 rounded-circle' style={{ width: "30px", height: "30px" }}></img>
                                                </div>
                                                <div style={{ width: " auto", maxWidth: "85%" }} className=' position-relative  rounded-2 '>
                                                    <div className='fs-14 ' style={{ fontWeight: "300" }} >{message.content}</div>
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <li className='mt-3'>
                                            <div className='d-flex justify-content-end align-items-center my-2 position-relative'>
                                                <div>
                                                    <IonIcon icon={checkmarkDoneOutline} size="12px" color='green' className='me-2'></IonIcon>
                                                </div>
                                                <div style={{ width: " auto", maxWidth: "85%" }} className='bg-switch-box  position-relative p-2 rounded-2 '>
                                                    <div className='fs-14 ' style={{ fontWeight: "300" }} >{message.content}</div>
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                )
                            }

                        })}

                        {/* {sendLoading &&
                            <li className='mt-3'>
                                <div className='d-flex justify-content-start align-items-center  my-2 position-relative'>
                                    <div >
                                        <div className='loader'>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div style={{ width: " auto", maxWidth: "85%" }} className='text-white position-relative  rounded-2 ms-2'>
                                        <div className='fs-14 ' style={{ fontWeight: "300" }} >Đang trả lời</div>
                                    </div>
                                </div>
                            </li>
                        } */}
                    </ul>

                </IonGrid>

            </IonContent>
            <IonFooter>
                <IonCard className='m-0 p-2 rounded-0' style={{ backdropFilter: "blur(50px)" }}>
                    <div className='d-flex  align-items-center mx-2 mb-1'>
                        <IonIcon icon={imageOutline} style={{ fontSize: "25px" }}></IonIcon>
                        <IonIcon icon={linkOutline} style={{ fontSize: "25px" }} className='ms-3'></IonIcon>

                    </div>
                    <div className="d-flex align-items-center px-2 bg-input-chat  rounded-pill shadow-sm w-100 my-2">
                       
                        <input
                            type="text"
                            className="form-control rounded-5 p-2 border-0 shadow-none bg-input-chat "
                            placeholder="Viết nội dung"
                            style={{
                                flex: 1,
                                borderRadius: '50px',
                            }}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button
                            className=" d-flex justify-content-center align-items-center ms-2"
                            style={{
                                backgroundColor: '#f07',
                                borderRadius: '50%',
                                width: '35px',
                                height: '35px',
                            }}
                        >
                            <IonIcon icon={navigateOutline} color="light" style={{ fontSize: "20px" }} />
                        </button>
                    </div>
                    
                </IonCard>
            </IonFooter>



        </IonPage>
    );
};

export default ChatDetail;
