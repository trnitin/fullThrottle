import React, { useState, useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const Modals = (props) => {

    const [dates, setDates] = useState("");

    // resetting options on close of modal
    useEffect(() => {
        setDates("")
    }, [props])

    // Formatting the selected Date
    const selectedDate = (evt) => {
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        let today = new Date(evt.target.value)
        let d = today.toLocaleDateString("en-US", options);
        setDates(d.replace(',', '').toString())
    }

    let allActiveTimes;
    let filtered;
    let displayFilteredData;

    // Displaying all user times
    if (props.data && props.data.activity_periods && dates == "") {
        allActiveTimes = props.data.activity_periods.map((ele, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ele.start_time}</td>
                    <td>{ele.end_time}</td>
                </tr>
            )
        })
    }

    // Filtering out userSelected time from list of times
    if (dates !== "" && props.data.activity_periods) {
        filtered = props.data.activity_periods.filter((ele, index) => {
            return ele.start_time.includes(dates) == true
        })
    }

    // mapping and displaying results of the above filter

    if (filtered) {
        displayFilteredData = filtered.map((ele, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ele.start_time}</td>
                    <td>{ele.end_time}</td>
                </tr>
            )
        })
    }


    return (
        <Modal
            show={props.show}
            onHide={props.clicked}
            backdrop="static"
            keyboard={false}
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title style={{ marginLeft: '1%' }}>{props.data ? props.data.real_name : null}</Modal.Title>
            </Modal.Header>


            <Modal.Body style={{ fontSize: '14px' }}>

                {props.data ?
                    <div style={{ display: 'block', width: '100%', marginBottom: '20px' }}>
                        <img src="https://img.icons8.com/office/50/000000/id-verified.png" style={{ marginLeft: '1%' }} /> &nbsp; Id: <span>{props.data.id}</span><br />
                        <img src="https://img.icons8.com/clouds/50/000000/user-location.png" style={{ marginLeft: '1%' }} /> &nbsp; Location: <span>{props.data.tz}</span>
                    </div> : null}


                <Table bordered hover size="sm" responsive="sm"
                    style={{
                        width: '100%',
                        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                        fontSize: '13px'
                    }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>start Time</th>
                            <th>End Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* displaying results/error message based on selections */}
                        {dates == "" ? allActiveTimes : displayFilteredData.length > 0 ? displayFilteredData : <tr><td colSpan={3}><center>No Data to display</center></td></tr>}
                    </tbody>
                </Table>
                <br />

                <label>Please select a date:   </label>
                <input type="date" onChange={(evt) => selectedDate(evt)} style={{ padding: '5px', marginLeft: '10px', border: '1px solid #1976d2', borderRadius: '5px' }} />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.clicked}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modals