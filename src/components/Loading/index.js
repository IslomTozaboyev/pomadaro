import { useEffect, useState } from "react";
import "./style.css";


const Loading = () => {
    const [step, setStep] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("red");

    useEffect(() => {
        console.log("1 useEffect ishladi");
        // step < 100 && setStep(step + 1)

        if (step >= 30 && step < 70) setBackgroundColor("yellow");
        else if(step >= 70) setBackgroundColor("green");

        setTimeout(() => {
            if(step < 100) setStep(step + 1)
        }, 100)
    }, [step])

    return <div className="loadingPanel my-5">
        <div className="loading" style={{ width: `${step}% `, backgroundColor: backgroundColor }}>{step}</div>
    </div>
}

export default Loading;