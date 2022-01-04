import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Tabs } from 'antd';
import 'antd/dist/antd.css';
import './Modal.css'

const { TabPane } = Tabs;

function callback(key) {
}

const ModalBox = forwardRef((prop, ref) => {
    const [visible, setVisible] = useState(false);
    const [showGallery, setShowGallery] = useState(false)
    const interior = prop.galleryInt;
    const exterior = prop.galleryExt;
    if(!prop.data === "") {
        console.log(2, interior, exterior);
    }
    
    
    
    useImperativeHandle(
        ref,
        () => ({
            showAlert() {
                setShowGallery(true)
                setVisible(!visible)
            }
        }),
    )

    return (
        <div className="modal">
            
            <Modal
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={900}
            >
                <div className="modal-hero">
                    <div className="modal-hero-image" style={{backgroundImage: "url(" + prop.data.bannerImage+ ")"}} >
                        <div className="modal-hero-details">
                            <h2>{prop.data.name}</h2>
                            <p className="modal-hero-category">{prop.data.type}</p>
                            <p className="modal-hero-description">{prop.data.description}</p>
                            <button className="modal-hero-button">Book Now</button>
                        </div>
                    </div>
                    { showGallery ? 
                    <div className="modal-hero-tabs">
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            
                            <TabPane tab="Interior" key="1">
                                <div className="modal-hero-tabs-gallery">
                                    {
                                        interior.map((image, index) => {
                                            return <div className="modal-hero-tabs-gallery-image" key={index}>
                                                    <img src={image.image} alt="Gallery One" title="Gallery One"/>
                                                </div>
                                        })
                                    }
                                </div>
                            </TabPane>
                            <TabPane tab="Exterior" key="2">
                                <div className="modal-hero-tabs-gallery">
                                    {
                                        exterior.map((image, index) => {
                                            return <div className="modal-hero-tabs-gallery-image" key={index}>
                                                    <img src={image.image} alt="Gallery One" title="Gallery One"/>
                                                </div>
                                        })
                                    }
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                    : null }
                </div>
            </Modal>
        </div>
    )
});

export default ModalBox