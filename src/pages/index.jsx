import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import Input from '../components/UI/Form/Input';
import Link from 'next/link';

const home = ({children, pageTitle}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('here');
    }

    return (
        <>
            <Layout title={"home page"}>
                <div className="premium-container default-radius">
                    <div className='flex-display flex-direction-column'>
                        <Image 
                            src={'/assets/img/premium-image.png'} 
                            width={90} 
                            height={90} 
                            className='rounded-circle flex-display' 
                            alt='premium image'
                        />
                    </div>
                    <div className='flex-display flex-direction-column'>
                        <h1>Premium Account</h1>
                        <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                    </div>
                </div>
                <div className="personal-information">
                    <span className="personal-info-title">Personal Information</span>
                    <div className="personal-info-content">
                        <form onSubmit={handleSubmit}>
                            <Input classCol={''} htmlFor={'firstname'} LabelTxt={'First Name'} type="text" id='firstname' name='firstname' placeholder='First Name'/>
                            <Input classCol={''} htmlFor={'lastname'} LabelTxt={'Last Name'} type="text" id='lastname' name='lastname' placeholder='Last Name' />
                            <Input classCol={''} htmlFor={'city'} LabelTxt={'City'} type="text" id='city' name='city' placeholder='City' />
                            <Input classCol={''} htmlFor={'postalcode'} LabelTxt={'Postal Code'} type="text" id='postalcode' name='postalcode' placeholder='Postal Code' />
                            <Input classCol={'full-col'} htmlFor={'address'} LabelTxt={'Address'} type="text" id='address' name='address' placeholder='Address' />
                            <Input isValid={true} classCol={''} htmlFor={'email'} LabelTxt={'Email'} type="email" id='email' name='email' placeholder='Email' />
                            <Input classCol={''} htmlFor={'phone'} LabelTxt={'Phone'} type="text" id='phone' name='phone' placeholder='Phone' />
                            <Input classCol={''} htmlFor={'password'} LabelTxt={'Password'} type="password" id='password' name='password' placeholder='Password' />

                            <div className="resumedone-info default-font">
                                <span>Une this email to log in to your <Link className='blue-text' href={'http://resumedone.io'} target='_blank'>resumedone.io</Link> account and receive notifications</span>
                            </div>
                            <div className="btn-container">
                                <button type='submit' className="blue-button submit-btn">Save</button>
                            </div>

                            <div className="check-hire-the-best-content default-font">
                                <p><input type='checkbox' name='shop-profile-to-serious-em'/>Show  my profile to serious employers on <Link className='blue-text' href={'http://hirethesebest.io'} target='_blank'>hirethesebest.io</Link> for free</p>
                            </div>
                        </form>
                        <Image 
                            src={'/assets/img/profile-img.png'}
                            layout="responsive" 
                            width={800}
                            height={600} 
                            className='rounded-circle'
                            alt='profile image'
                        />
                    </div>
                </div>
                <div className="delete-account-container default-radius flex-display flex-direction-column">
                    <span ><b>Delete Account</b></span>
                    <p>{"If you delete your account you'll be permanently removing it from our system - you can't undo it."}</p>
                    <Link href={'#'} className='btn-delete-link'>Yes, Delete my account</Link>
                </div>
                <div className='get-support-txt'>
                    <p><Link href={'#'} className='blue-text'>Get in touch with our support team</Link> if you have any question or want to leave some feedback.<br/>We&quot;ll be happy to hear from you.</p>
                </div>
            </Layout>
        </>
    );
}

export default home;