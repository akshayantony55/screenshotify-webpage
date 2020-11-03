import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UrlSchema from './submitUrlSchems';
import './homePageComponent.css';
import cn from 'classnames';

const initialValues = {
    url: ""
};
const HomePageComponent = () => {

    const handleSubmit = async (values) => {
        const response = await fetch(`/api/screenshot?url=${encodeURIComponent(values.url)}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await response.text();
        var a = document.createElement("a");
        a.href = "data:image/png;base64," + data;
        a.download = "Image.png";
        a.click();
    }

    return (
        <div className="container-contact2">
            <Formik
                initialValues={initialValues}
                validationSchema={UrlSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => {
                    const { errors, touched, isValid, dirty } = formik;
                    return (
                        <div className="wrap-contact2">
                            <div className="contact2-form-title">ScreenShotify Webpage</div>
                            <div className="contact2-form validate-form">
                                <Form>
                                    <div className="form-row wrap-input2 validate-input alert-validate">
                                        <label htmlFor="url" className="focus-input2">Url</label>
                                        <Field
                                            type="url"
                                            name="url"
                                            id="url"
                                            className={cn('input2', {
                                                'input-error':
                                                    errors.url && touched.url
                                            })
                                            }
                                        />
                                        <ErrorMessage name="url" component="span" className="error" />
                                    </div>
                                    <div className="container-contact2-form-btn">
                                        <div className="wrap-contact2-form-btn">
                                            <button
                                                type="submit"
                                                className={cn('contact2-form-btn', { "disabled-btn": !(dirty && isValid) })}
                                                disabled={!(dirty && isValid)}
                                            >
                                                Submit
                                </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
};

export default HomePageComponent;
