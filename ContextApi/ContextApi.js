"use client"
import { API } from "@/fetchApi/API";
import { handleAllDeleteMethod } from "@/fetchApi/DeleteMethod/handleAllDeleteMethod";
import { handleDeleteMany } from "@/fetchApi/DeleteMethod/handleDeleteMany";
import { getProfileDataWithToken } from "@/fetchApi/GetMethod/getDataWithToken";
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod";
import { handleUpdate } from "@/fetchApi/UpdateMethod/handleAllUpdateMethod";
import { handlePostMethod } from "@/fetchApi/handlePostMethod/handlePostMethod";
import { postWithToken } from "@/fetchApi/handlePostMethod/postWithToken";
import React, { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";

export const GlobalState = createContext();

export const MyState = ({ children }) => {
  const [isLoading, setIsLoding] = useState(false)
  const [editLoading, setEditLoading] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [reload, setReload] = useState(false);
  const [imgLoading, setImgLoading] = useState(false)
  const [editValue, setEditValue] = useState({})
  const [detailsData, setDetailsData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [checkIds, setCheckIds] = useState([])
  const [imgUrl, setImgUrl] = useState("")


  //  student and teacher profile start
  const [authInfo, setAuthInfo] = useState({})

  //  student and teacher profile end


  // select multple or single items for delete (ID)
  const HandleCheckIds = async (isCheck, ids) => {
    try {
      if (isCheck) {
        setCheckIds([...checkIds, ids])
      } else {
        const removeIds = checkIds.filter(i => i !== ids);
        setCheckIds(removeIds)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // handle all submit form (post method (reusable))
  const postAllDataFunc = async (route, data) => {
    setIsLoding(true)
    try {
      const result = await handlePostMethod(route, data);
      console.log(result)
      result.ok ? toast.success(result.message) : toast.warning(result.message)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoding(false)
    }
  }

  // handle all useeffect function (reusable)
  const getAllDataFunc = async (route) => {
    !search && !reload && setIsLoding(true)
    try {
      const results = await handleAllGetMethod(route);

      if (results.length > 0) {
        const reverseData = results.slice().reverse()
        setData(reverseData)
      }

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoding(false)
    }
  }

  //  handle all Update data (put method (reusable) )
  const editDataFunc = async (route, info) => {
    setEditLoading(true)
    try {
      const result = await handleUpdate(route, info);
      result.ok ? toast.success(result.message) : toast.warning(result.message)
    } catch (error) {
      console.log(error)
    } finally {
      setEditLoading(false)
    }
  }

  //  single Delete function
  const singleDeleteFunc = async (route) => {
    try {
      const result = await handleAllDeleteMethod(route);
      result.ok ? toast.success(result.message) : toast.warning(result.message)
    } catch (error) {
      console.log(error)
    }
  }

  //  handle   Delete many function (delete method (reusable))
  const multipleDeleteFunc = async (route) => {
    try {
      const result = await handleDeleteMany(route, checkIds)
      if (result.ok) {
        toast.success(result.message)
        setReload(!reload)
        setCheckIds([])
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.log(error)
    }
  }


  //  upload images handler
  const UploadFIle = async (file) => {
    const form = new FormData();
    form.append("image", file);
    setImgLoading(true)
    try {
      const response = await fetch("https://api.imgbb.com/1/upload?key=862850e874b9b92bba3bbba84383b4dd", {
        method: "POST",
        body: form, // Use 'body' instead of 'data'
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      const imgUrl = data.data.display_url;
      setImgUrl(imgUrl)

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setImgLoading(false)
    }
  };


  // student and teacher profile start

  useEffect(() => {

    let value;
    if (typeof window !== "undefined") {
      const getValue = localStorage.getItem("auth_Info") || "";
      if (getValue) {
        value = JSON.parse(getValue)
      }
    }

    setAuthInfo(value)

  }, [])

  const getStudentAllDataWithToken = async (token) => {
    try {
      const route = "/student/auth/user"

      const data = await getProfileDataWithToken(route, token)
      setStundentProfileData(data)

      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }



  const postDataWithToken = async (route, token, formData) => {
    setIsLoding(true)
    let parseToken = "";
    try {
      if (token) {
        parseToken = JSON.parse(token)
      }
      const result = await postWithToken(route, parseToken, formData);
      console.log("data", result)
      result.ok ? toast.success(result.message) : toast.error(result.message)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoding(false)
    }
  }

  const updateMethodWithToken = async (route, token, formData) => {
    let parsedToken = "";
    setEditLoading(true);

    try {
      // Token Parsing
      if (token) {
        try {
          parsedToken = JSON.parse(token);
        } catch (parseError) {
          throw new Error("Failed to parse token.");
        }
      }

      // Fetch Request
      const response = await fetch(`${API}${route}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Ensure the content type is specified
          "Authorization": `Bearer ${parsedToken}`
        },
        body: JSON.stringify(formData)
      });

      // Response Handling
      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setReload(prev => !prev); // Ensures state toggling is based on the previous state
      } else {
        toast.error(result.message || "Failed to update.");
      }
    } catch (error) {
      console.error("Error in updateMethodWithToken:", error);
      toast.error("An error occurred while updating.");
    } finally {
      setEditLoading(false); // Ensure loading state is reset
    }
  };


  const deleteMethodWithToken = async (route, token) => {
    let parseToken = "";
    try {
      if (token) {
        parseToken = JSON.parse(token)
      }
      const res = await fetch(API + route, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${parseToken}`
        }
      })
      const result = await res.json();

      if (result.ok) {
        toast.success(result.message)
        setReload(!reload)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // student and teacher profile end


  const value = {
    reload, setReload,
    editValue, setEditValue,
    detailsData, setDetailsData,
    editLoading, setEditLoading,
    postAllDataFunc,
    getAllDataFunc, isLoading, data,
    search, setSearch,
    HandleCheckIds, checkIds,
    editDataFunc,
    showModal, setShowModal,
    singleDeleteFunc,
    multipleDeleteFunc,
    UploadFIle, imgUrl,
    imgLoading, setImgLoading,


    //  student and teacher start

    authInfo,  // login data > name , email , photo
    postDataWithToken, updateMethodWithToken,
    deleteMethodWithToken,
    getStudentAllDataWithToken,
    //  student and teacher end

  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};