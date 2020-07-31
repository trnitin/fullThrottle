import React, { useEffect, useState } from 'react';
import Card from '../../components/card/card';
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Modals from '../../components/modal/modal';


const Main = (props) => {

    const [show, setShow] = useState(false);
    const [selectedMemberData, setSelectedMemberData] = useState([])

    const handleClose = () => setShow(false);


    // On component mount fetch api if variable in store is empty
    useEffect(() => {
        if (props.members.length == 0) {
            props.fetchUserDetails();
        }
    })

    // on Click of member card  pass down data to be sent as props
    const trial = (ele) => {
        setShow(true);
        setSelectedMemberData(ele)
    }

    let x;
    // mapping all the members data recieved through api and stored in redux store
    if (props.members.length > 0) {
        x = props.members.map(ele => {
            return (
                <Col sm={6} key={ele.id} style={{ marginTop: '10px' }}>
                    <Card data={ele} clicked={() => trial(ele)} />
                </Col>
            )
        })
    }
    return (
        <Container style={props.style}>
            <Row>
                {x}
            </Row>
            <Modals
                show={show}
                clicked={handleClose}
                data={selectedMemberData}
            />
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        members: state.members
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserDetails: () => {
            dispatch({ type: 'GET_USER_DETAILS' })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)