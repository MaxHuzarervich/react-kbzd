import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/uncontrolledOnOff";


function App() {
    console.log('App rendering')

    let [ratingValue, setRaringValue] = useState<RatingValueType>(0);

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={'App'}>

            <Rating
                value={ratingValue}
                onClick={setRaringValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={'blabla'}/>

            {/*<OnOff on={switchOn} onChange = { setSwitchOn }/>*/}



            {/*<UncontrolledOnOff on={false} />*/}
            {/*<UncontrolledOnOff on={false} />*/}
            {/*<UncontrolledOnOff  />*/}

            {/*<UncontrolledAccordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'} collapsed={false}/>*/}

            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}


            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    // console.log('PageTitle rendering')
    return <h1> {props.title} </h1>
}

export default App;
