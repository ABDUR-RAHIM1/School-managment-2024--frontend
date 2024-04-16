"use client"
import { handleDeleteMany } from "@/fetchApi/DeleteMethod/handleDeleteMany";
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod";
import { handleUpdate } from "@/fetchApi/UpdateMethod/handleAllUpdateMethod";
import { handlePostMethod } from "@/fetchApi/handlePostMethod/handlePostMethod";
import React, { useState, createContext } from "react";
import { toast } from "react-toastify";

export const GlobalState = createContext();

export const MyState = ({ children }) => {
  const [isLoading, setIsLoding] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [reload, setReload] = useState(false);
  const [imgLoading, setImgLoading] = useState(false)
  const [editValue, setEditValue] = useState({})
  const [checkIds, setCheckIds] = useState([])
  const [imgUrl, setImgUrl] = useState("")

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
      const routines = await handleAllGetMethod(route);
      setData(routines)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoding(false)
    }
  }

  //  handle all Update data (put method (reusable) )
  const editDataFunc = async (route, info) => {
    setIsLoding(true)
    try {
      const result = await handleUpdate(route, info);
      result.ok ? toast.success(result.message) : toast.warning(result.message)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoding(false)
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


  const value = {
    reload, setReload,
    editValue, setEditValue,
    postAllDataFunc,
    getAllDataFunc, isLoading, data,
    search, setSearch,
    HandleCheckIds, checkIds,
    editDataFunc,
    multipleDeleteFunc,
    UploadFIle, imgUrl,
    imgLoading, setImgLoading,
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};