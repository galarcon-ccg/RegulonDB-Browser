import { useMemo } from "react";
import { AnchorNav, DataVerifier } from "../../components/ui-components"
import { AllCitations } from "../../components/datamartSchema"
import NavigationTabs, { idNavTabs } from "./_oldDetails/NavigationTabs";
import Regulates from "./_oldDetails/regulates";
import Summary from "./_oldDetails/summary";
import DiagramRegulatoryNetwork from "./_oldDetails/regulatoryNetwork";
import RegulatoryInteractions from "./_oldDetails/regulatoryInteractions";
import Regulator from "./_oldDetails/regulator";
import Citations from "./_oldDetails/Citations";
import Terms from "./_oldDetails/terms";



const cardOptions = {
    showTitle: true
}

export default function Document({ regulonData, section }) {

    

    const sections = useMemo(() => {

        const {
            _id,
            allCitations,
            regulates,
            regulator,
            regulatoryInteractions,
            //summary,
            terms,
        } = regulonData

        let _sections = []
        if(DataVerifier.isValidObject(regulator)){
            _sections.push({
                id: "RegulonTab_Regulator",
                label: "Regulator",
                title: "Regulator "+regulator.name,
                component: <div style={{ overflow: "auto" }} >
                    <Regulator regulator={regulator} allCitations={allCitations} />
                </div>,
            })
        }
        if(DataVerifier.isValidObject(regulates)){
            _sections.push({
                id: "RegulonTab_Regulon",
                label: "Regulon",
                title: "Regulon",
                component: <div style={{ overflow: "auto" }} >
                    <DiagramRegulatoryNetwork regulonId={_id} />
                    <Regulates regulates={regulates} allCitations={allCitations} />
                </div>,
            })
        }
        if(DataVerifier.isValidArray(regulatoryInteractions)){
            _sections.push({
                id: "RegulonTab_RegulatoryInteractions",
                label: "Regulatory Interactions",
                title: "Regulatory Interactions",
                component: <div style={{ overflow: "auto" }} >
                    <RegulatoryInteractions regulatoryInteractions={regulatoryInteractions} allCitations={allCitations} />
                </div>,
            })
        }
        if(DataVerifier.isValidObject(terms)){
            _sections.push({
                id: "RegulonTab_Terms",
                label: "Terms of regulated genes",
                title: "Terms of regulated genes ",
                component: <div style={{ overflow: "auto" }} >
                    <Terms geneOntology={terms.geneOntology} multifun={terms.multifun} allCitations={allCitations} />
                </div>,
            })
        }
        if(DataVerifier.isValidArray(allCitations)){
            _sections.push({
                id: "RegulonTab_Citations",
                label: "Citations",
                title: "Citations ",
                component: <div style={{ overflow: "auto" }} >
                    <Citations allCitations={allCitations} />
                </div>,
            })
        }
        return _sections
    }, [regulonData])

    return (
        <div>
            <AnchorNav sections={sections} cardOptions={cardOptions}
                title={`Regulon ${regulonData.regulator.name}`} />
        </div>
    )
}