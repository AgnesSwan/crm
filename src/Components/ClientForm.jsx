import React from "react"
import '../index.css'
import { useForm, Controller } from "react-hook-form"
import Select from "react-select"
import { Gdansk, Gdynia, Sopot } from "./District"
import client from '../assets/client.jpg'
import { useHistory } from "react-router-dom";

const ClientForm = () => {
    const history = useHistory()
    const { register, control, handleSubmit } = useForm()
    const onSubmit = async (data) => {
          fetch('http://localhost:5000/clients', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)}).then(()=>history.push('/'))
    }
    const theme = (theme) => ({
        ...theme,
        width: '100%',
        borderRadius: '5px',
        colors: {
            ...theme.colors,
            primary25: 'rgba(219, 234, 254)',
            primary: 'rgba(219, 234, 254)',
            neutral10: 'rgba(219, 234, 254)',
            dangerLight: 'rgba(219, 234, 254)',
            danger: 'black'

        },
    })

    const pokoje =
        [
            { id: 1, label: "1" },
            { id: 2, label: "2" },
            { id: 3, label: "3" },
            { id: 4, label: "4" },
            { id: 5, label: "5 i więcej" },
        ]
    return (
        <div className="flex flex-row w-full">
            <div className="flex flex-col w-6/12 items-center justify-center h-screen">
                <h1 className="text-3xl mb-4">Dane klienta</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
                    <input className="my-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-100" type="text" placeholder="Imię i nazwisko" {...register("name")} />
                    <input className="my-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-100" type="phone" placeholder="Telefon" {...register("phone")} />
                    <div className="flex flex-col w-full text-left">
                        <span className="flex flex-row w-full items-center">
                            <input type="checkbox" id="Gda" value="Gdańsk" {...register("city")} className="checked:bg-blue-600 checked:rounded border ..." />
                            <label className="p-4 w-24" htmlFor="Gda">Gdańsk</label>
                            <Controller
                                control={control}
                                name="District - Gdansk"
                                render={({ field: { onChange, value } }) => (
                                    <div className="w-11/12">
                                        <Select
                                            theme={theme}
                                            onChange={onChange}
                                            isMulti
                                            options={Gdansk}
                                            selected={value}
                                        />
                                    </div>
                                )}
                            />
                        </span>
                        <span className="flex flex-row w-full items-center">
                            <input type="checkbox" id="Sopot" value="Sopot" {...register("city")} />
                            <label className="p-4 w-24" htmlFor="Sopot">Sopot</label>
                            <Controller
                                control={control}
                                name="District - Sopot"
                                render={({ field: { onChange, value } }) => (
                                    <div className="w-11/12">
                                        <Select
                                            theme={theme}
                                            onChange={onChange}
                                            isMulti
                                            options={Sopot}
                                            selected={value}
                                        />
                                    </div>
                                )}
                            />
                        </span>
                        <span className="flex flex-row w-full items-center">
                            <input type="checkbox" id="Ga" value="Gdynia" {...register("city")} />
                            <label className="p-4 w-24" htmlFor="Ga">Gdynia</label>
                            <Controller
                                control={control}
                                name="District - Gdynia"
                                render={({ field: { onChange, value } }) => (
                                    <div className="w-11/12">
                                        <Select
                                            theme={theme}
                                            onChange={onChange}
                                            isMulti
                                            options={Gdynia}
                                            selected={value}
                                        />
                                    </div>
                                )}
                            />
                        </span>
                    </div>
                    <span className="w-full flex flex-row items-center">
                        <input type="checkbox" id="mieszkanie" value="Mieszkanie" {...register("homeType")} />
                        <label className="mx-4" htmlFor="mieszkanie">Mieszkanie</label>
                        <input type="checkbox" id="dom" value="Dom" {...register("homeType")} />
                        <label className="mx-4" htmlFor="dom">Dom</label>
                        <Controller
                            control={control}
                            name="Ilość pokoi"
                            render={({ field: { onChange, value } }) => (
                                <div className="w-10/12">
                                    <Select
                                        onChange={onChange}
                                        isMulti
                                        options={pokoje}
                                        selected={value}
                                    />
                                </div>
                            )}
                        />
                    </span>
                    <input type="text" className="my-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Piętro" {...register("floor")} />
                    <input type="text" className="my-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Metraż" {...register("metric")} />
                    <input type="text" className="my-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Górna granica cenowa" {...register("price")} />
                    <textarea name="comment" className="my-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Uwagi" {...register("comment")}></textarea>
                    <input className="bg-blue-100 p-2 border rounded cursor-pointer hover:bg-white hover:text-blue-200" type="submit" />
                </form>
            </div>
            <img src={client} className="w-6/12 h-screen opacity-80" alt="client" />
        </div>
    )
}

export default ClientForm