import {
    IonPopover,
    IonIcon,
    IonRow,
    IonCol
} from '@ionic/react';
import { businessOutline, closeOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';

interface Props {
    onDismiss: () => void;
}

const ModalBrand: React.FC<Props> = ({ onDismiss }) => {
    const [select, setSelect] = useState("1");

    useEffect(() => {
        const brand = localStorage.getItem("happy-corp-staff-brand");
        if (brand) {
            setSelect(brand);
        }
    }, []);

    const handle = (e: string) => {
        localStorage.setItem("happy-corp-staff-brand", e);
        setSelect(e);
        onDismiss(); // đóng popover sau khi chọn
    };

    return (
        //   <IonPopover
        //     isOpen={isOpen}
        //     event={event}
        //     onDidDismiss={onDismiss}
        //     showBackdrop={false}
        //   >
        <div className="p-3">
            <IonRow className="d-flex justify-content-between align-items-center">
                <div className="fs-15 fw-bold">Nhà hàng</div>
                <IonIcon onClick={onDismiss} icon={closeOutline} style={{ fontSize: "25px" }} />
            </IonRow>
            <IonRow className="d-flex align-items-center mt-3" onClick={() => handle("1")}>
                <IonCol size="2">
                    <IonIcon icon={businessOutline} style={{ fontSize: "30px", color: select === "1" ? "#f07" : "inherit" }} />
                </IonCol>
                <IonCol size="10" className="fs-13 ps-0">
                    <div className="fw-bold">90s House</div>
                    <div>90-92 Lê Thị Riêng, Quận 1, thành phố Hồ Chí Minh</div>
                </IonCol>
            </IonRow>
            <IonRow className="d-flex align-items-center mt-3" onClick={() => handle("2")}>
                <IonCol size="2">
                    <IonIcon icon={businessOutline} style={{ fontSize: "30px", color: select === "2" ? "#f07" : "inherit" }} />
                </IonCol>
                <IonCol size="10" className="fs-13 ps-0">
                    <div className="fw-bold">90s House</div>
                    <div>90-92 Lê Thị Riêng, Quận 1, thành phố Hồ Chí Minh</div>
                </IonCol>
            </IonRow>
        </div>
        //   </IonPopover>
    );
};

export default ModalBrand;
