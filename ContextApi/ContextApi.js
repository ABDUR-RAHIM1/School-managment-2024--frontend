"use client"
import { handleAllDeleteMethod } from "@/fetchApi/DeleteMethod/handleAllDeleteMethod";
import { handleDeleteMany } from "@/fetchApi/DeleteMethod/handleDeleteMany";
import { handleAllGetMethod } from "@/fetchApi/GetMethod/handleAllGetMethod";
import { handleUpdate } from "@/fetchApi/UpdateMethod/handleAllUpdateMethod";
import { handlePostMethod } from "@/fetchApi/handlePostMethod/handlePostMethod";
import React, { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";

export const GlobalState = createContext();

export const MyState = ({ children }) => {
  const [isLoading, setIsLoding] = useState(false)
  const [editLoading, setEditLoding] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [reload, setReload] = useState(false);
  const [imgLoading, setImgLoading] = useState(false)
  const [editValue, setEditValue] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [checkIds, setCheckIds] = useState([])
  const [imgUrl, setImgUrl] = useState("")


  //  student and teacher profile start
  const studentToken = JSON.parse(localStorage.getItem("STUDENT_IS_LOGGED_IN"));
  const teacherToken = JSON.parse(localStorage.getItem("TEACHER_IS_LOGGED_IN"));

  const [loginStudent, setLoginStudent] = useState([])




  //  student and teacher profile end


  // const teacherToken = localStorage.getItem("TEAHCER_IS_LOGGED_IN")

  // console.log(studentToken, teacherToken)


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
    setEditLoding(true)
    try {
      const result = await handleUpdate(route, info);
      result.ok ? toast.success(result.message) : toast.warning(result.message)
    } catch (error) {
      console.log(error)
    } finally {
      setEditLoding(false)
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


  const getLoginStudentAllData = async () => {
    try {

      const response = await fetch("http://localhost:9000/api/student/auth/user", {
        headers: {
          "Authorization": `Bearer ${studentToken}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
       console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  getLoginStudentAllData();

  // student and teacher profile end



  const value = {
    reload, setReload,
    editValue, setEditValue,
    editLoading, setEditLoding,
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
    // getLoginStudentAllData
    //  student and teacher end

  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};