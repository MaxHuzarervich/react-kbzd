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

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems(); //чтобы скрывалось меню при выборе
    }

    return (
        <>
            <div className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                { //если класс active то рисуем эту дивку
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i =>
                            <div key={i.value}
                                 className={styles.item + '' + (selectedItem === i ? styles.selected : '')}
                                //если selectedItem
                                // равен тому item-у по которому пробегаемся то меняем класс
                                 onClick={() => {
                                     onItemClick(i.value) //это value придет в onItemClick
                                 }}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}