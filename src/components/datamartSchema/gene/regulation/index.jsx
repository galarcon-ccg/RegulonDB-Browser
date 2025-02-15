//import PropTypes from 'prop-types';
import Operon from './operon';
import Regulators from './regulators';
import { DataVerifier } from "../../../ui-components";
//import { ParagraphCitations, NoteCitations } from "../../citations";


export function Regulation({
    operon,
    regulators,
    statistics,
}) {

    return (
        <div style={{ display: 'flex', justifyContent: "space-around" }} >
            <div>
                <Operon {...operon} />
            </div>
            <div>
                <p style={{ fontSize: "18px" }} ><b>{`Regulators`}</b></p>
                <div style={{ marginLeft: "1%" }}>
                    {DataVerifier.isValidArray(regulators) && (
                        <Regulators regulators={regulators} />
                    )}
                </div>
            </div>
            <div>
                <p style={{ fontSize: "18px" }} ><b>{`Statistics`}</b></p>
                <div style={{ marginLeft: "1%" }}>
                    {DataVerifier.isValidObject(statistics) && (
                        <Statistics statistics={statistics} />
                    )}
                </div>
            </div>


        </div>
    )
}

function Statistics({ statistics }) {
    return (
        <table className="tableAccent" >
            <tbody>
                {Object.keys(statistics).map((key, index) => {
                    let statistic = statistics[key]
                    if (!statistic || key === "__typename") {
                        return null
                    }
                    return <tr key={"statisticsRow_" + index + "_" + key}>
                        <td>{key}</td>
                        <td>{statistic}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}