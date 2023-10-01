import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading'; 
import { Helmet } from 'react-helmet-async';
import { HiMiniXMark, } from 'react-icons/hi2';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure'; 
import useClientMessage from '../../Hooks/useClientMessage';

const ManageClients = () => {
    const [messages, refetch] = useClientMessage();
    const [axiosSecure] = useAxiosSecure()

    const handleDeleteMessage = (message) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You can not revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it'
        }).then((result) => {
            if (result.isConfirmed)
                axiosSecure.delete(`/clients-message/${message._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                        }
                    })
        })

    }


    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }




    return (
        <section>
            <Helmet>
                <title>Manage Clients | Ena Ema Technologies</title>
            </Helmet>
            <SectionTitle
                subTitle="Manage Clients"
            ></SectionTitle>

            <div className='lg:mx-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {
                                    messages.map(message => <tr key={message._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className=" text-sm">{message?.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-sm'>
                                            {message?.email}
                                        </td>

                                        <td className={`text-sm ${message?.status ? "text-green-700" : "text-primary"}`}>
                                            {message?.status ? message.status : "New"}
                                        </td>
                                        <th className='inline-flex gap-3 items-center text-sm'>
                                            <label htmlFor={message._id} className="myBtn">View Details</label>

                                        </th>

                                        <td><h2 onClick={() => handleDeleteMessage(message)} className="btn btn-ghost " ><FaTrashAlt className="text-red-500"></FaTrashAlt></h2></td>

                                        <input type="checkbox" id={message._id} className="modal-toggle" />
                                        <div className="modal bg-primary">
                                            <div className="modal-box bg-slate-100 ">

                                                <div className='flex'>
                                                    <h3 className="pl-4 mb-3">Client Name: <span className='text-orange-400'> {message.name}</span></h3>
                                                    <h3 className="pl-4 mb-3">Phone Number: <span className='text-orange-400'> {message.number}</span></h3>
                                                </div>

                                                <div className='border rounded-md border-slate-300'>


                                                    <h3 className="mt-2 pl-4">Query Type: <span className='text-orange-400'> {message.service}</span></h3>
                                                    <div className="divider"></div>
                                                    <p className="py-4 text-start px-4  mt-2"><span className='text-orange-400'> {message.projectDetails}</span></p>
                                                    <div className="modal-action">
                                                        <label htmlFor={message._id} className="text-neutral hover:text-primary transition-all duration-500 absolute top-6 right-6 cursor-pointer"><HiMiniXMark className='h-7 w-7' /></label>
                                                    </div>
                                                </div>

                                                <div className='flex justify-end mt-4'>
                                                    <Link to={`/dashboard/confirmProject/${message._id}`}>
                                                        <button disabled={message.status ? true : false} className={`${message.status ? ` px-3 py-3 text-white rounded-lg font-semibold disabled:opacity-40 disabled:cursor-not-allowed` : "btn btn-outline   "}`}>Confirmed</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </tr>)

                                }

                            </>
                        </tbody>


                    </table>

                </div>
            </div>
        </section>
    );
};

export default ManageClients;