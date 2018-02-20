import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AuthActions from '../actions/auth';
import * as RoomActions from '../actions/rooms';
import { selectUserName, selectUserRoom, selectFilteredRoom } from '../reducers';
import logo from '../logo.png';
import '../App.css';
import RoomComponent from '../components/RoomComponent';
import SlideShow from '../components/SlideShow';
import AboutHotel from '../components/AboutHotel';
import RoomInfoComponent from '../components/RoomInfoComponent';
import SelectedRoomComponent from '../components/SelectedRoomComponent';
import FilterComponent from '../components/FilterComponent';


class HomeContainer extends Component {

    componentDidMount() {
        const { login, fetchRooms } = this.props;
        this.props.authActions.login();
        this.props.roomActions.fetchRooms();
    }

    handleOnRoomSelect = (roomId) => {
        this.props.roomActions.RoomSelection(roomId);
    }

    handleOnFilter = (filter) => {
        this.props.roomActions.setFilter(filter);
    }

    render() {
        const { isFetching, userName, accomodation, rooms, selectedRoomId, selectedfilter } = this.props;
        if (isFetching || isFetching === undefined) return <div className="loader" />;

        var selectedRoomInfo = rooms.find(data => data.id == selectedRoomId);

        console.log("Render HomeContainer >>>");
        return (
            <div className="App">
                <div className="container-full">
                    <div className="container w-100">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="redux-inn-logo" className="row">
                                    <div className="col-sm-8 text-right">
                                        <img className="" src={logo} width={250} alt="Redux Hotel" />
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <span className="text-right">Name: {userName}</span>
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <RoomInfoComponent />
                                </div>

                                <div id="filter">
                                    <span> Filter  <FilterComponent onChange = {this.handleOnFilter} selectedFilter={selectedfilter}/> </span> 
                                </div>
                                <hr className="white" />
                                <div id="list-rooms" className="row ">
                                    {
                                        (!isFetching && rooms.length > 0) && rooms.map((data, index) => {
                                            return (
                                                <div className="col-md-4" key={index}>
                                                    <RoomComponent key={index} id={data.imageId} roomInfo={data} onClick={this.handleOnRoomSelect} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <hr className="white" />
                                <div className="row ">
                                </div>
                            </div>
                            <div className="col-md-6">
                                {!!(selectedRoomInfo) ? (
                                    <SelectedRoomComponent roomInfo={selectedRoomInfo} />
                                ) : (
                                        <div>
                                            <SlideShow ImageId={1} />
                                            <SlideShow ImageId={2} />
                                        </div>

                                    )}

                            </div>
                        </div>
                        {/**Second Row **/}
                        <div className="row">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

const mapStateToProps = (state) => {
    const { auth, rooms } = state;
    const isFetching = auth.isFetching || rooms.isFetching;
    const filter = state.filter;

    return {
        isFetching,
        selectedRoomId: rooms.selectedRoomId,
        rooms: selectFilteredRoom(state),
        userName: selectUserName(state),
        accomodation: selectUserRoom(state),
        selectedfilter: filter,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        roomActions: bindActionCreators(RoomActions, dispatch),
        authActions: bindActionCreators(AuthActions, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

// const mapDispatchToProps = { login, fetchRooms, RoomSelection };
