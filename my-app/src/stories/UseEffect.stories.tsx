import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}


// export const SimpleExample = () => {
//
// const [fake, setFake] = useState(1);
// const [counter, setCounter] = useState(1);
//
// console.log('SimpleExample')
//
//     useEffect(() => {
//         console.log('useEffect first render and every change counter')
//         document.title = counter.toString()
//     },[counter]) //counter наша зависимость если не поменяется то и useEffect не будет перерисовываться
//
//     useEffect(() => {
//         console.log('useEffect only first render')
//         document.title = counter.toString()
//     },[])
//
//     useEffect(() => {
//         console.log('useEffect every render')
//         document.title = counter.toString()
//     })
//
//     return <>
//         Hello, {counter} {fake}
//         <button onClick={() => { setFake( fake + 1 ) }}> fake </button>
//         <button onClick={() => { setCounter( counter + 1 ) }}>counter +</button>
//     </>
// }

export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SetIntervalExample')

    useEffect(() => {

        const intervalId = setInterval(() => {

                console.log('tick :' + counter)

                setCounter((state) => state + 1)
            }
            , 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => { setFake( fake + 1 ) }}> fake </button>*/}
        {/*<button onClick={() => { setCounter( counter + 1 ) }}>counter +</button>*/}
    </>
}


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log('Component rendered' + counter)

    useEffect(() => {

        console.log('Effect occurred' + counter)

        return () => {
            console.log('RESET EFFECT' + counter)
        }

    }, [])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
};

export const KeysTrackerExample = () => {

    const [text, setText] = useState('');

    console.log('Component rendered' + text)

    const handler = (e: KeyboardEvent) => {
        console.log(e.key)
        setText(text + e.key)
    }

    useEffect(() => {

        window.document.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])


    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState('');

    console.log('Component rendered' + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {

            console.log('TIMEOUT EXPIRED')

            setText('3 seconds passed')
        }, 3000)

        return () => {
            console.log('Тайм аут зачистился')
            clearTimeout(timeoutId)
        }

    }, [text])


    return <>
        text: {text}
    </>
}

export const SimpleExample = () => {

    const [text, setText] = useState('Render')

    useEffect(() => {


        const timeoutID = setTimeout(() => {
            setText(text + '!!!')
        }, 5000)

        return () => {
            console.log('TimeOut the end!')
            clearTimeout(timeoutID)
        }

    }, [text])


    return <>
        text: {text}
    </>
}
