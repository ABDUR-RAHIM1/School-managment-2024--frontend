"use client"
import "../../globals.css"
import Image from "next/image"
import thumb from "@/public/images/adminlogin.jpg"
import { useContext, useEffect, useState } from "react"
import { validateEmail } from "@/Helpers/validateAuth";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { GlobalState } from "@/ContextApi/ContextApi"
import Spinner from "@/components/Utils/Spinner"
import { handlePostMethod } from "@/fetchApi/handlePostMethod/handlePostMethod"



//  student and techer authentication
export default function AuthPage() {
    const { UploadFIle, imgLoading, imgUrl, postAllDataFunc } = useContext(GlobalState)

    const [formData, setFormData] = useState({ username: "", email: "", password: "", });

    const router = useRouter()
    const authAuthor = useSearchParams().toString()


    const [openRegister, setOpenRegister] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "photo") {
            const file = e.target.files[0];
            UploadFIle(file)
        }
        setFormData(prevState => ({ ...prevState, [name]: value }));

    };

    const handleShowRegister = () => {
        setOpenRegister(!openRegister)
    }

    useEffect(() => {
        setFormData((pre) => ({
            ...pre,
            photo: imgUrl
        }))
    }, [imgUrl])




    const handleSubmitAuth = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const { email, password } = formData;

        // Validate email
        if (!validateEmail(email)) {
            toast.error("Invalid email");
            return;
        }

        // Validate password
        if (password.length < 6) {
            toast.warning("Password should be at least 6 characters long");
            return;
        }

        try {
            let regRoute;
            let logRoute;
            if (authAuthor === "author=teacher") {
                regRoute = "/teachers/auth/register"
                logRoute = "/teachers/auth/login"
            } else {
                regRoute = "/student/auth/register"
                logRoute = "/student/auth/login"
            }

            let results;

            openRegister ?
                results = await handlePostMethod(regRoute, formData)
                :
                results = await handlePostMethod(logRoute, formData);

            if (results.ok) {
                toast.success(results.message)

                if (authAuthor === "author=teacher") {
                    const teacherToken = results.token
                    localStorage.setItem("TEAHCER_IS_LOGGED_IN", JSON.stringify(teacherToken))

                    router.push("/teacher-profile");
                } else {
                    const studentToken = results.token
                    localStorage.setItem("STUDENT_IS_LOGGED_IN", JSON.stringify(studentToken))

                    router.push("/student-profile");
                }

            } else {
                toast.error(results.message)
            }

        } catch (error) {
            toast.error("somthing went wrong")
            console.log(error)
        } finally {
            setIsLoading(false)
        }


    };





    return (
        <div className="loginPage">
            <div className="loginArea">
                <div>
                    <Image
                        src={thumb}
                        width={1000}
                        height={1000}
                        alt="authentication images" />
                </div>
                <div>
                    <form onSubmit={handleSubmitAuth} >
                        {
                            openRegister &&
                            <input
                                className="input"
                                type="text"
                                name="username"
                                value={formData.username}
                                placeholder="Enter Your username"
                                onChange={handleChange}
                                required />}
                        {/*  user name field end */}
                        <input
                            className="input"
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter Your Email"
                            onChange={handleChange}
                            required />
                        <input
                            className="input"
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Enter Password"
                            onChange={handleChange}
                            required />
                        {
                            openRegister &&
                            <input
                                className={`input ${imgLoading ? "border border-red-500" : ""}`}
                                type="file"
                                name="photo"
                                placeholder="Add Your Photo"
                                onChange={handleChange}
                            />}

                        {
                            !openRegister &&
                            <p className="text-blue-700 text-end block italic cursor-pointer underline">Forgat password</p>
                        }

                        <button disabled={imgLoading} className="formBtn bg-blue-500 text-white hover:bg-blue-700 duration-200">
                            {isLoading ? <Spinner /> : 'Login'}
                        </button>

                        <section className="my-2 italic">
                            {

                                openRegister ?
                                    (<p>Already have an account ?
                                        <span
                                            onClick={handleShowRegister}
                                            className="text-blue-700 font-medium cursor-pointer"> Login</span>
                                    </p>)
                                    :
                                    (<p>Don't have an account ?
                                        <span
                                            onClick={handleShowRegister}
                                            className="text-blue-700 font-medium cursor-pointer"> Create an account</span>
                                    </p>)


                            }



                        </section>

                    </form>
                </div>
            </div>
        </div>
    )
}
