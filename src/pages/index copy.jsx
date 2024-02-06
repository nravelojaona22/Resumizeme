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
                
                <div className='full-with-flex flex-display default-gap vertical-align-center justify-content-around premium-container'>
                    <Image 
                        src={'/assets/img/premium-image.png'} 
                        width={80} 
                        height={80} 
                        className='rounded-circle' 
                        alt='premium image'
                    />
                    <div>
                        <h1>Premium Account</h1>
                        <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                    </div>
                </div>
                <div className='full-with-flex'>
                    <div className="custom-row personal-information">
                        <div className="full-with-flex no-padding-lr form-title-container">
                            <span>Personal Information</span>
                        </div>
                        <div className="col-lg-3 order-lg-3 no-padding-lr">
                            <Image 
                                src={'/assets/img/profile-img.png'} 
                                layout="responsive" 
                                width={800}
                                height={600} 
                                className='rounded-circle'
                                alt='profile image'
                            />
                        </div>
                        <div className="col-lg-9 order-lg-2">
                            <form onSubmit={handleSubmit}>
                                <div className='custom-row'> 
                                    <Input classCol={'col-lg-6'} htmlFor={'firstname'} LabelTxt={'First Name'} type="text" id='firstname' name='firstname' placeholder='First Name'/>
                                    <Input classCol={'col-lg-6'} htmlFor={'lastname'} LabelTxt={'Last Name'} type="text" id='lastname' name='lastname' placeholder='Last Name' />
                                    <Input classCol={'col-lg-6'} htmlFor={'city'} LabelTxt={'City'} type="text" id='city' name='city' placeholder='City' />
                                    <Input classCol={'col-lg-6'} htmlFor={'postalcode'} LabelTxt={'Postal Code'} type="text" id='postalcode' name='postalcode' placeholder='Postal Code' />
                                    <Input classCol={'col-lg-12'} htmlFor={'address'} LabelTxt={'Address'} type="text" id='address' name='address' placeholder='Address' />
                                    <Input classCol={'col-lg-6'} htmlFor={'email'} LabelTxt={'Email'} type="email" id='email' name='email' placeholder='Email' />
                                    <Input classCol={'col-lg-6'} htmlFor={'phone'} LabelTxt={'Phone'} type="text" id='phone' name='phone' placeholder='Phone' />
                                    <Input classCol={'col-lg-6'} htmlFor={'password'} LabelTxt={'Password'} type="password" id='password' name='password' placeholder='Password' />
                                    <div className="full-with-flex no-ppaging mt-2 resumedone-info mb-lg-3 mb-md-2">
                                        <span>Une this email to log in to your <Link href={'http://resumedone.io'} target='_blank'>resumedone.io</Link> account and receive notifications</span>
                                    </div>
                                    <div className="full-with-flex no-ppaging btn-container mb-4">
                                        <button type='submit' className="blue-button submit-btn">Save</button>
                                    </div>

                                    <div className="full-with-flex no-ppaging">
                                        <p><input type='checkbox' name='shop-profile-to-serious-em'/>Show  my profile to serious employers on <Link href={'http://hirethesebest.io'} target='_blank'>hirethesebest.io</Link> for free</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='full-with-flex delete-account-container'>
                    <span ><b>Delete Account</b></span>
                    <p>If you delete your account you'll be permanently removing it from our system - you can't undo it.</p>
                    <Link href={'#'} className='btn-delete-link'>Yes, Delete my account</Link>
                </div>
                <div className='full-with-flex get-support-txt no-padding-lr'>
                    <p><Link href={'#'}>Get in touch with our support team</Link> if you have any question or want to leave some feedback.<br/>We'll be happy to hear from you.</p>
                </div>
                
            </Layout>
        </>
    );
}

export default home;