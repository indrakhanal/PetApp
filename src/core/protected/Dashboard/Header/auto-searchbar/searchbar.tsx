// import './App.css'
import React from 'react'
import Axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  CancelTokenSource,
  CancelTokenStatic,
  Method,
  AxiosBasicCredentials,
} from "axios";

import { apiDetailType } from '../../../../../store/ActionNames';

interface RequestParam {
  [key: string]: any
}

  // note: the id field is mandatory

  export default function AutoCompleteSearch(apiDetails: apiDetailType, requestData: any, requestMethod: Method, params?: RequestParam, cancelSource?: CancelTokenSource) {
    // API URL
    const url = process.env.REACT_APP_API_ENDPOINT as string

    let axiosReqParams: AxiosRequestConfig = {
        url: apiDetails.controllerName,
        method: requestMethod,
        baseURL: url,
        responseType: 'json',
        timeout: 60 * 3 * 1000,
    };

    if (params) {
        axiosReqParams = {
            ...axiosReqParams,
            params: params,
        }
    }

    return Axios.request(axiosReqParams)
        .then((response: AxiosResponse) => response)
        .catch((error: AxiosError) => {
            // const errorResponse = manageErrorResponse(error);
            const errorResponse = error
            console.log(errorResponse);
            throw errorResponse;
        });
};


  export const items:any = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  export const handleOnSearch = (string:string, results:any) => {

    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    const data = {
      key:string,
      list:results
    }
    return data
  }




  export const handleOnHover = (result:string) => {
    // the item hovered
    console.log(result, '----')
  }

  export const handleOnSelect = (item:string) => {
    // the item selected
    console.log(item, '///////')
  }

  export const handleOnFocus = () => {
    console.log('Focused')
  }

  export const formatResult = (item:any) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  
