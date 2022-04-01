import axios from "axios";
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../constants/productConstants";

export const getProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ2ZWIzZGI3MzFjZTQ1NjhkYzEyOCIsInVzZXJuYW1lIjoidGVzdG1hbiIsImlhdCI6MTY0ODcyODA4NCwiZXhwIjoxNjUxMzIwMDg0fQ.Xff3QAHItU45dWT70xsWAvzj1X951F9C8FQ98RRuow0`,
        //   Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/product`,
      config
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ2ZWIzZGI3MzFjZTQ1NjhkYzEyOCIsInVzZXJuYW1lIjoidGVzdG1hbiIsImlhdCI6MTY0ODcyODA4NCwiZXhwIjoxNjUxMzIwMDg0fQ.Xff3QAHItU45dWT70xsWAvzj1X951F9C8FQ98RRuow0`,
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/product/delete`,
      id,
      config
    );
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ2ZWIzZGI3MzFjZTQ1NjhkYzEyOCIsInVzZXJuYW1lIjoidGVzdG1hbiIsImlhdCI6MTY0ODcyODA4NCwiZXhwIjoxNjUxMzIwMDg0fQ.Xff3QAHItU45dWT70xsWAvzj1X951F9C8FQ98RRuow0`,
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/product/create`,
      product,
      config
    );

    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editProduct = (slug) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_EDIT_REQUEST });
    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ2ZWIzZGI3MzFjZTQ1NjhkYzEyOCIsInVzZXJuYW1lIjoidGVzdG1hbiIsImlhdCI6MTY0ODcyODA4NCwiZXhwIjoxNjUxMzIwMDg0fQ.Xff3QAHItU45dWT70xsWAvzj1X951F9C8FQ98RRuow0`,
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/product/${slug}`,
      config
    );

    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (slug, product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ2ZWIzZGI3MzFjZTQ1NjhkYzEyOCIsInVzZXJuYW1lIjoidGVzdG1hbiIsImlhdCI6MTY0ODcyODA4NCwiZXhwIjoxNjUxMzIwMDg0fQ.Xff3QAHItU45dWT70xsWAvzj1X951F9C8FQ98RRuow0`,
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/product/${slug}`,
      product,
      config
    );

    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
