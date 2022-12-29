import * as React from 'react'
import {useSearchParams} from 'react-router-dom';


export default function withSearchParams(Component){

    return function ComponentWithSearchParams (props){
        const [searchParams] = useSearchParams();
        // console.log(useSearchParams())
        return <Component {...props} router={{ searchParams }} />
    }


}