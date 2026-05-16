import axios, { isAxiosError, mergeConfig } from "axios";
import api from "./interceptor";

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T | null;
  code?: string;
};

function formattedSuccess<T>(queryResult: any) {
  return {
    success: true,
    message: queryResult.message,
    data: queryResult.data as T,
  };
}

function formattedFail(errorResult: any) {
  return {
    success: false,
    message: errorResult.message,
    data: null,
    code: errorResult.code,
  };
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getData<T>(
  endpoint: string,
  authorization: boolean,
): Promise<ApiResponse<T>> {
  let method = authorization ? api : axios;

  try {
    const res = await method.get(`${apiUrl}${endpoint}`);

    console.log("GET QUERY DEBUG: ", res.data);

    return formattedSuccess<T>(res.data);
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("AXIOS ERROR: ", error);
      return formattedFail(error.response?.data);
    }

    return {
      success: false,
      message: "Connection Error",
      data: null,
      code: "CONN_ERR",
    };
  }
}

export async function postData<T>(
  endpoint: string,
  body: {},
  authorization: boolean,
): Promise<ApiResponse<T>> {
  try {
    let method = authorization ? api : axios;

    const res = await method.post(`${apiUrl}${endpoint}`, body);

    console.log("POST QUERY DEBUG: ", res.data);

    return formattedSuccess<T>(res.data);
  } catch (error) {
    if (isAxiosError(error)) {
      return formattedFail(error.response?.data);
    }

    return {
      success: false,
      message: "Connection Error",
      data: null,
      code: "CONN_ERR",
    };
  }
}

export async function patchData<T>(
  endpoint: string,
  body: {},
  authorization: boolean,
): Promise<ApiResponse<T>> {
  try {
    let method = authorization ? api : axios;

    const res = await method.patch(`${apiUrl}${endpoint}`, body);

    console.log("PACTH QUERY DEBUG: ", res.data);

    return formattedSuccess<T>(res.data);
  } catch (error) {
    if (isAxiosError(error)) {
      return formattedFail(error.response?.data);
    }

    return {
      success: false,
      message: "Connection Error",
      data: null,
      code: "CONN_ERR",
    };
  }
}

export async function deleteData<T>(
  endpoint: string,
  body: {},
  authorization: boolean,
): Promise<ApiResponse<T>> {
  try {
    let method = authorization ? api : axios;

    const res = await method.delete(`${apiUrl}${endpoint}`, body);

    console.log("DELETE QUERY DEBUG: ", res.data);

    return formattedSuccess<T>(res.data);
  } catch (error) {
    if (isAxiosError(error)) {
      return formattedFail(error.response?.data);
    }

    return {
      success: false,
      message: "Connection Error",
      data: null,
      code: "CONN_ERR",
    };
  }
}
