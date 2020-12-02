import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd/dist/antd.css';
import Danhgia from '../danhgia/Danhgia';
import Chitiettour from '../chitiettour/Chitiettour';
import Dichvudikem from '../dichvudikem/Dichvudikem';
import Luuy from '../luuy/Luuy';
import Maps from './../map/Maps'
export class Detail extends Component {
    render() {

        const { TabPane } = Tabs;

        const renderTabBar = (props, DefaultTabBar) => (
            <Sticky bottomOffset={80}>
                {({ style }) => (
                    <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
                )}
            </Sticky>
        );
        return (
            <div className="mb-5 ">
                <StickyContainer>
                    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                        <TabPane tab="Chi tiết tour" key="1" >
                            <Chitiettour />
                        </TabPane>
                        <TabPane tab="Giá" key="2">
                            <Dichvudikem />
                        </TabPane>
                        <TabPane tab="Dịch vụ đi kèm" key="3">
                            <Dichvudikem />
                        </TabPane>
                        <TabPane tab="Lưu ý" key="4">
                            <Luuy />
                        </TabPane>
                        <TabPane tab="Bản đồ" key="5">
                            <div className="container"><Maps /></div>
                        </TabPane>
                        <TabPane tab="Đánh giá khách hàng" key="6">
                            <Danhgia />
                        </TabPane>
                    </Tabs>
                </StickyContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
