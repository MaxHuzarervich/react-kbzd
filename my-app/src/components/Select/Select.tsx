import React, {useState} from "react";
import styles from './Select.module.css';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void
    items: ItemType []  // массив строк!
};

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)

    //находим тот items value которого равно тому value которое нам передали в пропсах
    const selectedItem = props.items.find(i => i.value === props.value)

    const toggleItems = () => setActive(!active) //противоположное значение active

    return (
        <>
            <select>
                <option value={''}>Minsk</option>
                <option value={''}>Moscow</option>
                <option value={''}>Kiev</option>
            </select>

            <div className={styles.select}>
                <h3 onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
                { //если класс active то рисуем эту дивку
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}