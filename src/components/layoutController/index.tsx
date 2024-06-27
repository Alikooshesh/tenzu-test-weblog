'use client'

import { usePathname } from "next/navigation"
import { ReactElement, useState } from "react"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@/redux/siteSetting/slice";
import { IRootState } from "@/redux/store";

interface Iprops {
    children?: ReactElement
}

const LayoutController = ({ children }: Iprops) => {

    const pathname = usePathname()
    const dispatch = useDispatch()

    const darkMode: any = useSelector((state:IRootState) => state.siteSettings.rootSettings.darkMode)

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="root">
                <div className={`container ${darkMode ? 'dark' : ''}`}>
                <header className="w-full mb-14 flex flex-wrap items-center justify-between gap-[32px]">
                    <a href="/">
                        <span className={`text-[1.5rem] font-black ${pathname === "/" ? 'text-black dark:text-white' : 'bg-gradient-to-r from-blog-pink-light to-blog-purple-light inline-block text-transparent bg-clip-text'}`}>
                            overreacted
                        </span>
                    </a>

                    <div className="flex items-center gap-[32px]">
                        <div className="flex items-center gap-[8px]">
                            <span className="text-black dark:text-white italic">
                                by
                            </span>
                            <Image
                                src="/profile.jpeg"
                                alt="image of owner"
                                className="rounded-full"
                                width={32}
                                height={32}
                                priority
                            />
                        </div>

                        <div 
                            onClick={()=>dispatch(changeTheme({}))} 
                            className="w-[32px] h-[32px] rounded-full border border-black dark:border-white flex items-center justify-center cursor-pointer"
                        >
                            {!darkMode ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                                </svg>

                            }
                        </div>
                    </div>
                </header>
                {children}
            </div>
            </div>
        </div>
    )
}

export default LayoutController