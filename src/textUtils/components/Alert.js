import React from 'react'

export default function Alert(props){
    //!Here is this function we chanage the first letter of props.alert.type to capital and rest small.
    //!e.g success = Success
    const titleCase = (word) => {
        //!Here if props.alert.type is danger changed into falied,
       if(word === 'danger') word = 'falied'
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);

    }
    
    //!!Here we used short circuit metod &&
    //!It means : Here props.alert we set intial value is null in textUtilsMain.js Use state.
    //!           if props.alert = null means its false, then it will not shown right side of && JSX[html] return null
    //!           if props.alert = object means its true, then it will shown right side of && JSX[html] return alert JSX[html]
    return <>
        {/* Here we set height to alert so it will not jump when alert is shows */}
        <div style={{height: '50px'}}>
        {
        props.alert && <div className={`alert alert-${props.alert.type}`}role="alert">
            <strong>{titleCase(props.alert.type)} : </strong> {props.alert.msg}
        </div>}
        </div>
        </>
        
}



