import axios, { isAxiosError } from "axios";

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

export async function getData<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const res = await axios.get(`${apiUrl}${endpoint}`);

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
