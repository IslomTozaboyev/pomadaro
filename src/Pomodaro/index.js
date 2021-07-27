import { faRedoAlt, faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

const Pomodaro = (props) => {
    const workTime = props.workTime;
    const restTime = props.restTime;

    const [minute, setminute] = useState(workTime);
    const [second, setsecond] = useState(0);
    const [isWorkking, setisworking] = useState(true);
    const [status, setstatus] = useState(false);

    useEffect(() => {
        status && setTimeout(() => {
            if (second > 0) setsecond(second - 1);
            else {
                if (minute != 0) setsecond(59)
                if (minute > 0) setminute(minute - 1);
                else {
                    if (isWorkking) {
                        alert("Dam oling !")
                        setminute(restTime)
                    }
                    else {
                        alert("Ishni boshlang !")
                        setminute(workTime)
                    }
                    setisworking(!isWorkking)
                }
            }
        }, 1000)
    }, [second, isWorkking, status])

    const setZero = (n) => (n < 10 ? "0" : "") + n;

    return <div>
        <div className="pomadaro" style={{borderRadius: `50%`}}>
       <div>
            <div>
            <p className="text-white mb-0 fw-bold">{status ? "Work" : "" }</p>
                      <h1> {setZero(minute)}:{setZero(second)}</h1>
            </div>
        </div>
        
        </div>
             <div>
                <button className="btn fw-bold mt-5 me-4" onClick={() => setstatus(true)}>Start</button>
                <button className="btn fw-bold mt-5 me-4" onClick={() => setstatus(false)}>Stop</button>
            <button className="btn fw-bold mt-5">
                <FontAwesomeIcon icon={faRedoAlt}/>
                </button>
            </div>
    </div>


}

export default Pomodaro;