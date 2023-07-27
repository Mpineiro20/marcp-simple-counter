import React from "react"
import PropTypes from "prop-types"
const SimpleCounter = (props) => {

    return (

        <>

            <div className="counter-display" >

                <div className="clock-img"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg></div>
                <div className="hundredThousands">{props.hundthousandsDigit}</div>
                <div className="tenThousands">{props.tenthousandsDigit}</div>
                <div className="thousands">{props.thousandsDigit}</div>
                <div className="hundreds">{props.hundredsDigit}</div>
                <div className="tens">{props.onesDigit}</div>
                <div className="ones">{props.onesDigit}</div>

            </div>



        </>

    )

}
SimpleCounter.propTypes = {
    hundredThousandsDigit: PropTypes.number
    ,tenThousandsDigit: PropTypes.number
    ,thousandsDigit: PropTypes.number
    ,hundredsDigit: PropTypes.number
    ,tensDigit: PropTypes.number
    ,oneDigit: PropTypes.number
}
export default SimpleCounter